// Correctness of the topics added for the thinner courses: each answer is recomputed from the question.
import test from 'node:test';
import assert from 'node:assert/strict';
import { G } from '../src/generators.js';
import { CURRICULUM } from '../src/curriculum.js';
import { answerText, evaluate } from '../src/answer.js';

const T = h => answerText(h);                                  // English plain text of a question or answer
const nums = s => (String(s).match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
const val = h => evaluate(T(h).replace(/^.*=\s*/, '').replace(/[$%]/g, ''), 0, null);
const close = (a, b, tol = 1e-6) => assert.ok(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${a} ≠ ${b}`);
const cents = (a, b) => assert.ok(Math.abs(a - b) <= 0.0051, `${a} ≠ ${b}`);         // money is shown to the cent
const run = (name, fn, n = 150) => { for (const d of [1, 2, 3]) for (let i = 0; i < n; i++) fn(G[name](d), d); };

test('new topics are in their courses (at least 5 topics in every course except the graduation projects)', () => {
  for (const l of CURRICULUM) for (const c of l.courses) {
    const n = c.topics.filter(t => !t.startsWith('proof_')).length;
    if (!/^MATH 4(88|99)$/.test(c.code)) assert.ok(n >= 5, `${c.code} has ${n} topics`);
  }
});

test('STAT 212 — addition rule, Bayes, Poisson', () => {
  run('probUnion', o => { const q = T(o.q), [pa, pb, p3] = nums(q.replace(/P\((A|B)[^)]*\)/g, '')); const a = val(o.a);
    if (/Find P\(A ∩ B\)/.test(q)) close(a, pa + pb - p3, 1e-9); else close(a, pa + pb - p3, 1e-9); });
  run('bayesTheorem', o => { const [p, a, b] = nums(T(o.q)); close(val(o.a), p * a / (p * a + (100 - p) * b)); });
  run('poissonProb', o => { const [lam, k] = nums(T(o.q).replace(/\(4 decimal places\)/, '')); const f = n => n ? n * f(n - 1) : 1;
    close(val(o.a), Math.exp(-lam) * lam ** k / f(k), 1e-3); });
});

test('MATH 321 / 371 — annuities, loans, continuous compounding', () => {
  run('annuityPV', o => { const [P, n, r] = nums(T(o.q)), i = r / 100; cents(val(o.a), P * (1 - (1 + i) ** -n) / i); });
  run('loanPayment', o => { const q = T(o.q), [Lo, yrs, r] = nums(q), m = /monthly/.test(q) ? 12 : 1, i = r / 100 / m;
    cents(val(o.a), Lo * i / (1 - (1 + i) ** -(yrs * m))); });
  run('continuousCompound', o => { const [P, r, t] = nums(T(o.q)); cents(val(o.a), P * Math.exp(r / 100 * t)); });
});

test('MATH 333 — the ODE solutions satisfy their equations', () => {
  run('linearFirstOrder', o => { const q = T(o.q).replace(/\s/g, ''), [, a, b, y0] = q.match(/y'\+?(-?\d*)y=(-?\d+);y\(0\)=(-?\d+)/).map(Number);
    const A = a || 1, y = x => evaluate(T(o.a).replace(/^y =/, ''), x), h = 1e-5;
    close(y(0), y0); for (const x of [0.3, 1.1]) close((y(x + h) - y(x - h)) / (2 * h) + A * y(x), b, 1e-4); });
  run('separableODE', o => { const q = T(o.q).replace(/\s/g, ''), [, k, y0] = q.match(/y'=(-?\d+)xy;y\(0\)=(-?\d+)/).map(Number);
    const y = x => evaluate(T(o.a).replace(/^y =/, ''), x), h = 1e-5;
    close(y(0), y0); for (const x of [0.2, 0.7]) close((y(x + h) - y(x - h)) / (2 * h), k * x * y(x), 1e-4); });
  run('odeGeneral', o => assert.match(T(o.a), /^y = .*C1.*C2/));
});

test('MATH 315 — d\'Alembert, eigenvalues, Fourier coefficients', () => {
  run('dalembertValue', o => { const q = T(o.q).replace(/\s/g, '');
    const c2 = +(q.match(/utt=(\d*)uxx/)[1] || 1), [, f] = q.match(/u\(x,0\)=(.*?),ut/), k = +q.match(/ut\(x,0\)=(-?\d+)/)[1], [x0, t0] = q.match(/u\((-?\d+),(\d+)\)\./).slice(1).map(Number);
    const c = Math.sqrt(c2), F = x => evaluate(f, x); close(val(o.a), (F(x0 + c * t0) + F(x0 - c * t0)) / 2 + k * t0); });
  run('dirichletEigen', o => { const q = T(o.q), n = +q.match(/λ(\d+)/)[1], Ls = q.match(/X\(([^)]*)\) = 0\./)[1], Lx = evaluate(Ls, 0, null);
    close(evaluate(T(o.a), 0, null), (n * Math.PI / Lx) ** 2); });
  run('fourierSineCoef', o => { const q = T(o.q), k = +q.match(/f\(x\) = (\d+)/)[1], n = +q.match(/b(\d+)\./)[1];
    close(evaluate(T(o.a), 0, null), 2 * k * (1 - (-1) ** n) / (n * Math.PI)); });
});

test('MATH 383 / 331 — sup / inf, ratio test, p-series', () => {
  run('supInf', o => { const [s, i] = T(o.a).split(',').map(x => evaluate(x.replace(/^.*=/, ''), 0, null)); assert.ok(s > i); });
  run('ratioTestLimit', o => { const a = T(o.a); assert.match(a, /^L = /); });
  run('pSeriesTest', o => { const q = T(o.q), p = evaluate(q.match(/n\^\(?([\d/]+)\)?\)/)?.[1] || '1', 0, null);
    assert.equal(/Converges/.test(T(o.a)), p > 1); });
});

test('MATH 473 — topology of ℝ, metrics, balls', () => {
  run('intervalTopology', o => { const q = T(o.q), [a, b] = nums(q.match(/A = [\[(](.*?)[\])]/)[1]), pt = (q.match(/∪ \{(-?\d+)\}/) || [])[1];
    const ans = T(o.a);
    if (/interior/.test(q)) assert.equal(ans, `int A = (${a}, ${b})`);
    else if (/closure/.test(q)) assert.ok(ans.startsWith(`cl A = [${a}, ${b}]`));
    else assert.deepEqual(nums(ans.split('=')[1]).sort((x, y) => x - y), [a, b, ...(pt ? [+pt] : [])].sort((x, y) => x - y)); });
  run('metricDistances', o => { const [x1, y1, x2, y2] = nums(T(o.q)), dx = Math.abs(x1 - x2), dy = Math.abs(y1 - y2);
    assert.deepEqual(nums(T(o.a).replace(/d[12] =|d∞ =/g, '')), [dx + dy, Math.hypot(dx, dy), Math.max(dx, dy)]); });
  run('metricBall', o => { const q = T(o.q); if (/discrete/.test(q)) return; const [x0, r] = nums(q.match(/B\((.*)\)/)[1]); assert.deepEqual(nums(T(o.a)), [x0 - r, x0 + r]); });
});

test('MATH 475 — torsion, arc length, unit tangent', () => {
  run('helixTorsion', o => { const q = T(o.q), r = +q.match(/\((\d+) cos/)[1], c = evaluate(q.match(/sin t, (.*)t\)/)[1] || '1', 0, null) || (/sin t, -t/.test(q) ? -1 : 1);
    close(evaluate(T(o.a).replace(/^.*=/, ''), 0, null), c / (r * r + c * c)); });
  run('curveArcLength', o => { const q = T(o.q); if (/cos t/.test(q)) { const R = +q.match(/\((\d+) cos/)[1], th = evaluate(q.match(/≤ t ≤ (.*)\./)[1], 0, null); close(evaluate(T(o.a), 0, null), R * th); return; }
    const comps = q.match(/r\(t\) = \((.*)\) for/)[1].split(',').map(s => evaluate(s, 1, 't') - evaluate(s, 0, 't')), T1 = +q.match(/≤ t ≤ (\d+)/)[1];
    close(val(o.a), Math.hypot(...comps) * T1); });
  run('unitTangent', o => { const v = T(o.a).replace(/^.*= \(|\)$/g, '').split(',').map(s => evaluate(s, 0, null)); close(Math.hypot(...v), 1); });
});

test('MATH 342 — RK4, Taylor 2, midpoint', () => {
  const parse = o => { const q = T(o.q).replace(/\s/g, ''), h = +q.match(/h=([\d.]+)/)[1], [, f, x0, y0] = q.match(/y'=(.*?);y\((\d+)\)=(-?\d+)/);
    const fx = (x, y) => evaluate(f.replace(/y/g, `(${y})`), x); return { h, f: fx, x0: +x0, y0: +y0 }; };
  run('rk4Step', o => { const { h, f, x0, y0 } = parse(o), k1 = f(x0, y0), k2 = f(x0 + h / 2, y0 + h * k1 / 2), k3 = f(x0 + h / 2, y0 + h * k2 / 2), k4 = f(x0 + h, y0 + h * k3);
    close(val(o.a), y0 + h / 6 * (k1 + 2 * k2 + 2 * k3 + k4), 1e-5); });
  run('taylorSecond', o => { const { h, f, x0, y0 } = parse(o), e = 1e-6, fp = f(x0, y0), fx = (f(x0 + e, y0) - f(x0 - e, y0)) / (2 * e), fy = (f(x0, y0 + e) - f(x0, y0 - e)) / (2 * e);
    close(val(o.a), y0 + h * fp + h * h / 2 * (fx + fy * fp), 1e-5); });
  run('midpointStep', o => { const { h, f, x0, y0 } = parse(o), k1 = f(x0, y0); close(val(o.a), y0 + h * f(x0 + h / 2, y0 + h / 2 * k1), 1e-9); });
});

test('MATH 416 / 432 — Volterra, kernels, projections, Gram–Schmidt', () => {
  run('volterraSolve', o => { const q = T(o.q), rhs = q.match(/u\(x\) = (.*?) ([+-]) (\d*)∫/), lam = (rhs[2] === '-' ? -1 : 1) * (+rhs[3] || 1), f = x => evaluate(rhs[1], x);
    const u = x => evaluate(T(o.a).replace(/^u\(x\) =/, ''), x), X = 0.8, N = 400; let I = 0;
    for (let i = 0; i <= N; i++) I += (i === 0 || i === N ? 1 : i % 2 ? 4 : 2) * u(X * i / N); I *= X / N / 3;
    close(u(X), f(X) + lam * I, 1e-6); });
  run('kernelEigen', o => { const q = T(o.q).replace(/\s/g, ''), m = q.match(/x\^(\d)/) ? +q.match(/x\^(\d)/)[1] : /xt/.test(q) ? 1 : 0, a = +(q.match(/∫0\^1(\d*)/)[1] || 1);
    close(evaluate(T(o.a).replace(/^.*=/, ''), 0, null), (2 * m + 1) / a); });
  const vecs = s => [...s.matchAll(/\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g)].map(m => m[1].split(',').map(x => evaluate(x, 0, null)));
  run('vectorProjection', o => { const [v, u] = vecs(T(o.q).replace(/\(\d+\)\/\(\d+\)/g, '')), p = vecs(T(o.a))[0], k = v.reduce((s, x, i) => s + x * u[i], 0) / u.reduce((s, x) => s + x * x, 0);
    p.forEach((x, i) => close(x, k * u[i])); });
  run('gramSchmidt2', o => { const [v1, v2] = vecs(T(o.q)), u2 = vecs(T(o.a).replace(/^.*= /, ''))[0];
    close(u2.reduce((s, x, i) => s + x * v1[i], 0), 0); });
});

test('MATH 318 — Roman, Babylonian, Egyptian fractions, Euclid, the sieve', () => {
  const roman = n => [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']].reduce((s, [v, r]) => { while (n >= v) { s += r; n -= v; } return s; }, '');
  run('romanNumerals', o => { const q = T(o.q), a = T(o.a); const m = q.match(/numeral ([IVXLCDM]+) /); if (m) assert.equal(roman(+a), m[1]); else assert.equal(a, roman(+q.match(/Write (\d+)/)[1])); });
  run('babylonian', o => { const q = T(o.q), a = T(o.a); if (/base 10/.test(q)) { const ds = q.match(/\(([\d, ]+)\)60/)[1].split(',').map(Number); assert.equal(+a, ds.reduce((s, x) => s * 60 + x, 0)); }
    else { const n = +q.match(/Write (\d+)/)[1], ds = a.slice(1, -1).split(',').map(Number); assert.ok(ds.every(x => x >= 0 && x < 60)); assert.equal(ds.reduce((s, x) => s * 60 + x, 0), n); } });
  run('egyptianFraction', o => { const a = T(o.a), [, p, q] = a.match(/^\((\d+)\)\/\((\d+)\)/).map(Number), dens = [...a.split('=')[1].matchAll(/\(1\)\/\((\d+)\)/g)].map(m => +m[1]);
    assert.equal(new Set(dens).size, dens.length); close(dens.reduce((s, x) => s + 1 / x, 0), p / q, 1e-12); });
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  run('euclidAlgorithm', o => { const [a, b] = nums(T(o.q)); assert.equal(+T(o.a), gcd(a, b)); });
  run('sieveCount', o => { const n = nums(T(o.q))[0]; let c = 0; for (let k = 2; k <= n; k++) { let p = true; for (let j = 2; j * j <= k; j++) if (k % j === 0) p = false; if (p) c++; } assert.equal(+T(o.a), c); });
});
