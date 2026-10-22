// Automated correctness tests for the problem generators.
// Run with:  node --test
// The generators are pure (no DOM), so they import and run directly in Node.
import test from 'node:test';
import assert from 'node:assert/strict';
import { G } from '../src/generators.js';
import { CURRICULUM } from '../src/curriculum.js';

/* ---- helpers for parsing the HTML the generators emit ---- */
const plain = h => String(h)
  .replace(/&minus;/g, '-').replace(/&times;/g, '×').replace(/−/g, '-')
  .replace(/<sup>(-?\d+)<\/sup>/g, '^$1').replace(/<[^>]+>/g, '');
const fact = n => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
const nums = html => [...String(html).matchAll(/<span>(&minus;)?(\d+)<\/span>/g)]
  .map(x => (x[1] ? -1 : 1) * +x[2]);               // signed numbers out of a <span> matrix
const val = html => +plain(html).replace(/[^0-9.-]/g, '');

// evaluate a polynomial-in-x HTML fragment at x
function pev(html, x) {
  let s = plain(html).replace(/\s/g, '');
  if (s[0] !== '-' && s[0] !== '+') s = '+' + s;
  let total = 0;
  for (const t of s.match(/[+-][^+-]+/g) || []) {
    const sign = t[0] === '-' ? -1 : 1, body = t.slice(1);
    let coef, pow;
    if (body.includes('x')) {
      const p = body.split('x');
      coef = p[0] === '' ? 1 : parseFloat(p[0]);
      pow = p[1] && p[1][0] === '^' ? parseInt(p[1].slice(1)) : 1;
    } else { coef = parseFloat(body); pow = 0; }
    total += sign * coef * Math.pow(x, pow);
  }
  return total;
}
function parseComplex(s) {
  const m = plain(s).match(/(-?\d+)\s*([+-])\s*(\d*)i/);
  return { re: +m[1], im: (m[2] === '-' ? -1 : 1) * (m[3] === '' ? 1 : +m[3]) };
}

const DIFFS = [1, 2, 3];
const times = (n, fn) => { for (let i = 0; i < n; i++) fn(); };

/* ================= every generator is well-formed ================= */
test('every generator returns {q,a} strings across all difficulties', () => {
  const topics = [...new Set(CURRICULUM.flatMap(m => m.courses.flatMap(c => c.topics)))];
  assert.ok(topics.length >= 70, 'expected the full topic set');
  for (const name of topics) {
    assert.equal(typeof G[name], 'function', `missing generator: ${name}`);
    for (const d of DIFFS) times(60, () => {
      const o = G[name](d);
      assert.equal(typeof o.q, 'string'); assert.ok(o.q.length, `${name}: empty q`);
      assert.equal(typeof o.a, 'string'); assert.ok(o.a.length, `${name}: empty a`);
    });
  }
});

/* ================= Mathematics track invariants ================= */
test('MATH 242 — determinant (2×2) = ad − bc', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.determinant2(d), v = nums(o.q);
    assert.equal(val(o.a), v[0] * v[3] - v[1] * v[2]);
  });
});

test('MATH 242 — matrix addition is componentwise', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.matrixAdd(d), q = nums(o.q), a = nums(o.a);
    for (let k = 0; k < 4; k++) assert.equal(a[k], q[k] + q[k + 4]);
  });
});

test('MATH 242 — matrix multiplication (2×2) is correct', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.matrixMultiply(d), q = nums(o.q), a = nums(o.a);
    const A = q.slice(0, 4), B = q.slice(4, 8);
    const P = [A[0]*B[0]+A[1]*B[2], A[0]*B[1]+A[1]*B[3], A[2]*B[0]+A[3]*B[2], A[2]*B[1]+A[3]*B[3]];
    assert.deepEqual(a, P);
  });
});

test('MATH 485 — complex addition', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.complexAdd(d);
    const [, A, B] = plain(o.q).match(/\(([^)]+)\)\s*\+\s*\(([^)]+)\)/);
    const x = parseComplex(A), y = parseComplex(B), r = parseComplex(o.a);
    assert.equal(r.re, x.re + y.re); assert.equal(r.im, x.im + y.im);
  });
});

test('MATH 485 — complex multiplication (ac−bd)+(ad+bc)i', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.complexMultiply(d);
    const [, A, B] = plain(o.q).match(/\(([^)]+)\)\(([^)]+)\)/);
    const x = parseComplex(A), y = parseComplex(B), r = parseComplex(o.a);
    assert.equal(r.re, x.re * y.re - x.im * y.im);
    assert.equal(r.im, x.re * y.im + x.im * y.re);
  });
});

test('MATH 485 — modulus of a complex number is a non-negative integer (Pythagorean)', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.complexModulus(d), c = parseComplex(o.q.match(/\|\s*(.+?)\s*\|/)[1]);
    assert.equal(val(o.a), Math.round(Math.hypot(c.re, c.im)));
  });
});

test('MATH 367 — modular arithmetic a mod m', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.modArithmetic(d), m = plain(o.q).match(/(\d+) mod (\d+)/);
    assert.equal(val(o.a), +m[1] % +m[2]);
  });
});

test('MATH 367 — prime test is correct', () => {
  const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
  for (const d of DIFFS) times(200, () => {
    const o = G.isPrime(d), n = +o.q.match(/Is (\d+)/)[1];
    assert.equal(plain(o.a), isPrime(n) ? 'Yes' : 'No');
  });
});

test('STAT 211 — combinations C(n,r) = n!/(r!(n−r)!)', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.combinations(d), m = o.q.match(/C\((\d+), (\d+)\)/);
    assert.equal(val(o.a), fact(+m[1]) / (fact(+m[2]) * fact(+m[1] - +m[2])));
  });
});

test('STAT 211 — permutations P(n,r) = n!/(n−r)!', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.permutations(d), m = o.q.match(/P\((\d+), (\d+)\)/);
    assert.equal(val(o.a), fact(+m[1]) / fact(+m[1] - +m[2]));
  });
});

/* ================= Calculus (shared) ================= */
test('MATH 140 — polynomial limit equals substitution', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.limitPoly(d), a = +plain(o.q).match(/x→(-?\d+)/)[1], poly = o.q.match(/\((.+)\)/)[1];
    assert.equal(val(o.a), pev(poly, a));
  });
});

test('MATH 231 — tangent-line slope equals numeric derivative', () => {
  const h = 1e-4;
  for (const d of DIFFS) times(200, () => {
    const o = G.tangentSlope(d);
    const poly = o.q.match(/f\(x\) = (.+?) at x =/)[1];
    const a = +o.q.match(/at x = (-?\d+)/)[1];
    const approx = (pev(poly, a + h) - pev(poly, a - h)) / (2 * h);
    assert.equal(val(o.a), Math.round(approx));
  });
});

/* ================= Financial Mathematics ================= */
test('FM 321 — simple interest = P·r·t/100', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.simpleInterest(d), m = plain(o.q).match(/on \$(\d+) at (\d+)% per year for (\d+)/);
    assert.equal(val(o.a), +m[1] * +m[2] * +m[3] / 100);
  });
});
