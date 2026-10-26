// Typed-answer checking used by the practice app (src/answer.js).
import test from 'node:test';
import assert from 'node:assert/strict';
import { G } from '../src/generators.js';
import { CURRICULUM } from '../src/curriculum.js';
import { answerSpec, answerText, checkAnswer, evaluate } from '../src/answer.js';
import { frac, sup, mat } from '../src/helpers.js';
import { Li } from '../src/viz.js';

const ok = (input, html) => checkAnswer(input, answerSpec(`<b>${html}</b>`));

test('evaluator: numbers, π, √, powers, implicit products, functions', () => {
  assert.equal(evaluate('2+3*4'), 14);
  assert.equal(evaluate('2^-1'), 0.5);
  assert.equal(evaluate('-x^2', 3), -9);
  assert.equal(evaluate('3√4'), 6);
  assert.ok(Math.abs(evaluate('2π') - 2 * Math.PI) < 1e-12);
  assert.equal(evaluate('2(x+1)', 2), 6);
  assert.ok(Math.abs(evaluate('sec^2 x', 0.3) - 1 / Math.cos(0.3) ** 2) < 1e-12);
  assert.ok(Number.isNaN(evaluate('2y', 1)));
  assert.ok(Number.isNaN(evaluate('alert(1)')));
});

test('numbers: fractions, decimals, rounding, Arabic digits', () => {
  const f = frac(8, 5);
  assert.ok(ok('8/5', f)); assert.ok(ok('1.6', f)); assert.ok(ok('١٫٦', f)); assert.ok(ok('16/10', f));
  assert.ok(!ok('2', f)); assert.ok(!ok('1.5', f));
  const t = frac(2, 3);
  assert.ok(ok('0.67', t)); assert.ok(ok('0.667', t)); assert.ok(!ok('0.7', t)); assert.ok(!ok('0.6', t));
  assert.ok(ok('63', '63')); assert.ok(ok('63.0', '63')); assert.ok(!ok('62.5', '63')); assert.ok(!ok('125/2', '63'));
  assert.ok(ok('26.82', '26.8242%')); assert.ok(!ok('27', '26.8242%'));
  assert.ok(ok('1049.76', '$1049.76')); assert.ok(!ok('1050', '$1049.76'));
  assert.ok(ok('x = 5', 'x = 5')); assert.ok(ok('5', 'x = 5'));
  assert.ok(ok('40π', '40&pi;')); assert.ok(ok('125.66', '40&pi;')); assert.ok(!ok('125.7', '40&pi;'));
  assert.ok(ok('√2/2', frac('&radic;2', 2))); assert.ok(ok('0.71', frac('&radic;2', 2)));
});

test('lists, points, sets, intervals, inequalities', () => {
  assert.ok(ok('2, -4', 'x = &minus;4, 2')); assert.ok(ok('x=2 و x=-4', 'x = &minus;4, 2')); assert.ok(!ok('2', 'x = &minus;4, 2'));
  assert.ok(ok('(4, -22)', '(4, &minus;22)')); assert.ok(ok('4, -22', '(4, &minus;22)')); assert.ok(!ok('(-22, 4)', '(4, &minus;22)'));
  assert.ok(ok('A = 96, P = 44', 'A = 96, P = 44')); assert.ok(ok('96, 44', 'A = 96, P = 44'));
  assert.ok(ok('{5, 4}', '{4, 5}')); assert.ok(ok('4,5', '{4, 5}')); assert.ok(!ok('{4}', '{4, 5}'));
  assert.ok(ok('(-5, inf)', '(&minus;5, &infin;)')); assert.ok(!ok('[-5, ∞)', '(&minus;5, &infin;)'));
  assert.ok(ok('(-inf,-2) U (-2,inf)', '(&minus;&infin;, &minus;2) &cup; (&minus;2, &infin;)'));
  assert.ok(ok('x >= -1', 'x &ge; &minus;1')); assert.ok(ok('-1 ≤ x', 'x &ge; &minus;1')); assert.ok(!ok('x > -1', 'x &ge; &minus;1'));
  assert.ok(ok('5:4', '5 : 4')); assert.ok(!ok('4:5', '5 : 4'));
});

test('expressions in x, constants of integration, factored forms', () => {
  assert.ok(ok('x^2+11x+28', `x${sup(2)} + 11x + 28`)); assert.ok(!ok('(x+4)(x+7)', `x${sup(2)} + 11x + 28`));
  assert.ok(ok('(x+1)(x-9)', '(x + 1)(x &minus; 9)')); assert.ok(ok('(x-9)(x+1)', '(x + 1)(x &minus; 9)')); assert.ok(!ok('x^2-8x-9', '(x + 1)(x &minus; 9)'));
  assert.ok(ok('2x^6 + 3 + C', `2x${sup(6)} + C`)); assert.ok(!ok('2x^6', `2x${sup(6)} + C`));
  assert.ok(ok('-sin x', '&minus;sin x')); assert.ok(ok('sec^2(x)', `sec${sup(2)} x`));
});

test('complex numbers, matrices, words', () => {
  assert.ok(ok('8+6i', '8 + 6i')); assert.ok(ok('6i+8', '8 + 6i')); assert.ok(!ok('8-6i', '8 + 6i')); assert.ok(ok('-i', '&minus;i'));
  const M = mat([-7, -2, 4, 1]);
  assert.ok(ok('-7 -2; 4 1', M)); assert.ok(ok('[[-7,-2],[4,1]]', M)); assert.ok(!ok('-7 4 -2 1', M));
  assert.ok(ok('نعم', Li('Yes', 'نعم'))); assert.ok(ok('yes', Li('Yes (inverse 14)', 'نعم (معكوسه 14)'))); assert.ok(!ok('no', Li('Yes', 'نعم')));
  assert.ok(ok('صح', 'T')); assert.ok(ok('F', 'F')); assert.ok(ok('زوجية', 'Even'));
  assert.ok(ok('9', `&lambda; = 9 (${Li('double', 'مكرر')})`)); assert.ok(ok('9, 9', `&lambda; = 9 (${Li('double', 'مكرر')})`));
  assert.ok(ok('2 · 5^2 · 11', `2 &middot; 5${sup(2)} &middot; 11`)); assert.ok(!ok('550', `2 &middot; 5${sup(2)} &middot; 11`));
});

test('every checkable generated answer accepts its own displayed form', () => {
  const topics = [...new Set(CURRICULUM.flatMap(l => l.courses.flatMap(c => c.topics)))].filter(t => !t.startsWith('proof_'));
  let checkable = 0;
  for (const t of topics) for (const d of [1, 2, 3]) for (let i = 0; i < 15; i++) {
    const o = G[t](d), sp = answerSpec(o.a); if (!sp) continue; checkable++;
    const typed = sp.matrix ? sp.vals.join(' ') : answerText(o.a).replace(/\(double\)/, '');
    assert.ok(checkAnswer(typed, sp), `${t}: "${typed}" should be accepted`);
  }
  assert.ok(checkable > topics.length * 40, 'most topics can be checked');
});
