// Automated correctness tests for the problem generators.
// Run with:  node --test
// The generators are pure (no DOM), so they import and run directly in Node.
import test from 'node:test';
import assert from 'node:assert/strict';
import { G } from '../src/generators.js';
import { CURRICULUM } from '../src/curriculum.js';

/* ---- helpers for parsing the HTML the generators emit ---- */
const plain = h => String(h)
  .replace(/&minus;/g, '-').replace(/&times;/g, '×').replace(/&rarr;/g, '→').replace(/−/g, '-')
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
const cols = html => { const m = String(html).match(/repeat\((\d+),auto\)/); return m ? +m[1] : 2; };
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
test('MATH 244 — determinant (2×2) = ad − bc', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.determinant2(d), v = nums(o.q);
    assert.equal(val(o.a), v[0] * v[3] - v[1] * v[2]);
  });
});

test('MATH 244 — matrix addition is componentwise', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.matrixAdd(d), q = nums(o.q), a = nums(o.a);
    for (let k = 0; k < 4; k++) assert.equal(a[k], q[k] + q[k + 4]);
  });
});

test('MATH 244 — matrix multiplication (2×2) is correct', () => {
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

test('STAT 212 — combinations C(n,r) = n!/(r!(n−r)!)', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.combinations(d), m = o.q.match(/C\((\d+), (\d+)\)/);
    assert.equal(val(o.a), fact(+m[1]) / (fact(+m[2]) * fact(+m[1] - +m[2])));
  });
});

test('STAT 212 — permutations P(n,r) = n!/(n−r)!', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.permutations(d), m = o.q.match(/P\((\d+), (\d+)\)/);
    assert.equal(val(o.a), fact(+m[1]) / fact(+m[1] - +m[2]));
  });
});

test('MATH 244 — determinant (3×3) by cofactor expansion', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.determinant3(d), v = nums(o.q);
    assert.equal(v.length, 9);
    const det = v[0]*(v[4]*v[8]-v[5]*v[7]) - v[1]*(v[3]*v[8]-v[5]*v[6]) + v[2]*(v[3]*v[7]-v[4]*v[6]);
    assert.equal(val(o.a), det + 0);   // + 0 normalises -0
  });
});

test('MATH 244 — transpose swaps rows and columns', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.transpose(d), A = nums(o.q), T = nums(o.a);
    const c = cols(o.q), r = A.length / c;
    assert.equal(cols(o.a), r); assert.equal(T.length, A.length);
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) assert.equal(T[j * r + i], A[i * c + j]);
  });
});

test('MATH 244 — scalar multiplication is entrywise', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.scalarMultiply(d), k = +plain(o.q).match(/^\(?(-?\d+)/)[1];
    const A = nums(o.q), B = nums(o.a);
    assert.equal(B.length, A.length);
    A.forEach((x, i) => assert.equal(B[i], k * x + 0));
  });
});

test('MATH 244 — trace is the sum of the diagonal', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.trace(d), A = nums(o.q), n = cols(o.q);
    assert.equal(A.length, n * n);
    let t = 0; for (let i = 0; i < n; i++) t += A[i * n + i];
    assert.equal(val(o.a), t);
  });
});

test('MATH 367 — Euler totient counts integers coprime to n', () => {
  const g = (a, b) => b ? g(b, a % b) : a;
  for (const d of DIFFS) times(200, () => {
    const o = G.eulerPhi(d), n = +plain(o.q).match(/\((\d+)\)/)[1];
    let c = 0; for (let k = 1; k <= n; k++) if (g(k, n) === 1) c++;
    assert.equal(val(o.a), c);
  });
});

test('MATH 367 — modular exponentiation a^b mod m', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.modPow(d), m = plain(o.q).match(/(\d+)\^(\d+) mod (\d+)/);
    const r = BigInt(m[1]) ** BigInt(m[2]) % BigInt(m[3]);
    assert.equal(val(o.a), Number(r));
  });
});

test('MATH 353 — Newton step x1 = x0 − f(x0)/f′(x0) for f(x) = x² − N', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.newtonSqrt(d), t = plain(o.q);
    const N = +t.match(/x\^2 - (\d+)/)[1], x0 = +t.match(/x0 = (\d+)/)[1];
    assert.ok(N > 0);
    assert.equal(val(o.a), x0 - (x0 * x0 - N) / (2 * x0));
  });
});

test('MATH 353 — linear interpolation lies on the line through both points', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.linearInterp(d), m = plain(o.q).match(/\((-?\d+), (-?\d+)\) and \((-?\d+), (-?\d+)\).*x = (-?\d+)/);
    const [x0, y0, x1, y1, x] = m.slice(1).map(Number);
    assert.ok(x0 < x && x < x1, 'x must lie strictly between the nodes');
    assert.equal(val(o.a), y0 + (y1 - y0) * (x - x0) / (x1 - x0));
  });
});

test('MATH 485 — complex conjugate flips the imaginary part', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.complexConjugate(d), z = parseComplex(plain(o.q).match(/z = (.+?), then/)[1]), r = parseComplex(o.a);
    assert.equal(r.re, z.re); assert.equal(r.im, -z.im);
  });
});

test('MATH 468 — K_n has n(n−1)/2 edges', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.completeGraphEdges(d), n = +plain(o.q).match(/K(\d+)/)[1];
    let e = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) e++;
    assert.equal(val(o.a), e);
  });
});

test('MATH 468 — handshake lemma: degree sum = 2·edges', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.degreeSum(d), deg = plain(o.q).match(/degrees ([\d, ]+)\./)[1].split(', ').map(Number);
    const sum = deg.reduce((a, b) => a + b, 0), m = plain(o.a).match(/sum = (\d+), edges = (\d+)/);
    assert.equal(+m[1], sum); assert.equal(+m[2], sum / 2);
    assert.ok(Math.max(...deg) < deg.length, 'simple graph: degree < n');
  });
});

test('MATH 344 — order of a in (ℤ_n, +) is the least k with k·a ≡ 0', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.elementOrder(d), m = plain(o.q).match(/Order of (\d+) in \(&#8484;(\d+)/);
    const a = +m[1], n = +m[2];
    let k = 1; while ((k * a) % n !== 0) k++;
    assert.equal(val(o.a), k);
  });
});

test('MATH 444 — units modulo n and their inverses', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.isUnit(d), m = plain(o.q).match(/Is (\d+) a unit in &#8484;(\d+)/);
    const a = +m[1], n = +m[2];
    let inv = 0; for (let x = 1; x < n; x++) if ((a * x) % n === 1) { inv = x; break; }
    const ans = plain(o.a);
    if (inv) assert.equal(ans, `Yes (inverse ${inv})`);
    else assert.match(ans, /^No \(gcd = (\d+)\)$/), assert.equal(n % +ans.match(/\d+/)[0], 0);
  });
});

test('MATH 417 — Γ(n) = (n−1)!', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.gammaFunction(d), n = +plain(o.q).match(/\((\d+)\)/)[1];
    assert.equal(val(o.a), fact(n - 1));
  });
});

test('MATH 234 — inclusion–exclusion |A∪B| = |A| + |B| − |A∩B|', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.setUnion(d), m = plain(o.q).match(/\|A\| = (\d+), \|B\| = (\d+) and \|A &cap; B\| = (\d+)/);
    const [a, b, c] = m.slice(1).map(Number);
    assert.ok(c <= Math.min(a, b));
    assert.equal(val(o.a), a + b - c);
  });
});

test('MATH 234 — a set with n elements has 2^n subsets', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.powerSetSize(d), n = plain(o.q).match(/\{(.*)\}/)[1].split(', ').length;
    let subsets = 0; for (let mask = 0; mask < (1 << n); mask++) subsets++;
    assert.equal(val(o.a), subsets);
  });
});

/* ================= Calculus (shared) ================= */
test('MATH 140 — polynomial limit equals substitution', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.limitPoly(d), a = +plain(o.q).match(/x→(-?\d+)/)[1], poly = o.q.match(/\((.+)\)/)[1];
    assert.equal(val(o.a), pev(poly, a));
  });
});

test('MATH 232 — tangent-line slope equals numeric derivative', () => {
  const h = 1e-4;
  for (const d of DIFFS) times(200, () => {
    const o = G.tangentSlope(d);
    const poly = o.q.match(/f\(x\) = (.+?) at x =/)[1];
    const a = +o.q.match(/at x = (-?\d+)/)[1];
    const approx = (pev(poly, a + h) - pev(poly, a - h)) / (2 * h);
    assert.equal(val(o.a), Math.round(approx) + 0);   // + 0 normalises -0
  });
});

/* ================= Financial Mathematics ================= */
test('MATH 321 — simple interest = P·r·t/100', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.simpleInterest(d), m = plain(o.q).match(/on \$(\d+) at (\d+)% per year for (\d+)/);
    assert.equal(val(o.a), +m[1] * +m[2] * +m[3] / 100);
  });
});

/* ================= Mathematics track — pack 2 ================= */
// value of an answer that may be an integer, a decimal or a (signed) fracStr fraction
const fval = html => {
  const m = String(html).match(/(&minus;|-)?<span class="frac"><span class="n">(\d+)<\/span><span class="d">(\d+)<\/span><\/span>/);
  return m ? (m[1] ? -1 : 1) * +m[2] / +m[3] : val(html);
};
const close = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} ≉ ${b}`);
const vecs = html => [...plain(html).matchAll(/&lang;([^&]*)&rang;/g)].map(m => m[1].split(',').map(Number));
const ints = s => (String(s).match(/-?\d+/g) || []).map(Number);
const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const g = (a, b) => b ? g(b, a % b) : Math.abs(a);
const phi = n => { let c = 0; for (let k = 1; k <= n; k++) if (g(k, n) === 1) c++; return c; };
// coefficient of a monomial in a compact (spaces stripped) polynomial: '3x^2', '-x^2', 'x^2' -> 3, -1, 1
const coefOf = (s, mono) => {
  const m = s.match(new RegExp('(^|[+-])(\\d*)' + mono.replace(/[\^]/g, '\\^') + '(?![a-z^])'));
  if (!m) return 0;
  return (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]);
};
const simpson = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return s * h / 3; };

test('MATH 212 — Riemann sums', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.riemannSum(d), t = plain(o.q).replace(/\s/g, '');
    const side = t.match(/the(left|right)/)[1], kk = +(t.match(/x\^2\+(\d+)on/) || [0, 0])[1];
    const [, b, n] = t.match(/\[0,(\d+)\]withn=(\d+)/).map(Number), h = b / n;
    let s = 0; for (let i = 0; i < n; i++) { const x = (side === 'left' ? i : i + 1) * h; s += h * (x * x + kk); }
    assert.equal(val(o.a), s);
  });
});

test('MATH 212 — average value = (1/b)∫₀ᵇ f', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.avgValue(d), m = plain(o.q).match(/= (\d+)x(?:\^(\d+))? on \[0, (\d+)\]/);
    const c = +m[1], p = m[2] ? +m[2] : 1, b = +m[3];
    close(val(o.a), simpson(x => c * x ** p, 0, b) / b, 1e-6);
  });
});

test('MATH 212 — ∫₀^{ln k} m·eˣ dx = m(k − 1)', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.defIntegralExp(d), m = plain(o.q).match(/ln (\d+)\s*(\d*)e/);
    const k = +m[1], c = m[2] ? +m[2] : 1;
    close(val(o.a), simpson(x => c * Math.exp(x), 0, Math.log(k)), 1e-6);
  });
});

test('MATH 232 — chain / product rule values match a numeric derivative', () => {
  const h = 1e-5;
  for (const d of DIFFS) times(200, () => {
    let o = G.derivChainAt(d), t = plain(o.q).replace(/\s/g, '');
    let m = t.match(/\((-?\d*)x([+-]\d+)\)\^(\d+)\.Findf&prime;\((-?\d+)\)/);
    const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1], b = +m[2], n = +m[3], x0 = +m[4];
    let f = x => (a * x + b) ** n;
    close(val(o.a), (f(x0 + h) - f(x0 - h)) / (2 * h), 1e-3);

    o = G.derivProductAt(d); t = plain(o.q).replace(/\s/g, '');
    m = t.match(/=x(?:\^(\d+))?\(x([+-]\d+)\)\.Findf&prime;\((-?\d+)\)/);
    const p = m[1] ? +m[1] : 1, c = +m[2], x1 = +m[3];
    f = x => x ** p * (x + c);
    close(val(o.a), (f(x1 + h) - f(x1 - h)) / (2 * h), 1e-3);
  });
});

test('MATH 232 — critical points satisfy f′(x) = 0', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.criticalPoints(d), t = plain(o.q).replace(/\s/g, '');
    const b = coefOf(t.match(/=(.*)\.$/)[1], 'x');
    const xs = ints(plain(o.a));
    assert.equal(xs.length, 2);
    for (const x of xs) assert.equal(3 * x * x + b, 0);
  });
});

test('MATH 234 — set operations', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.setOps(d), q = plain(o.q);
    const [, A, B] = q.match(/A = \{([^}]*)\}, B = \{([^}]*)\}/).map(s => s.split(', ').map(Number));
    const op = o.q.match(/Find A (&cup;|&cap;|&minus;) B/)[1];
    const want = op === '&cup;' ? [...new Set([...A, ...B])].sort((x, y) => x - y)
      : op === '&cap;' ? A.filter(x => B.includes(x)) : A.filter(x => !B.includes(x));
    const a = plain(o.a);
    assert.deepEqual(a === '&empty;' ? [] : a.slice(1, -1).split(', ').map(Number), want);
  });
});

test('MATH 234 — |A×B| and counting functions (brute force)', () => {
  for (const d of DIFFS) times(100, () => {
    let o = G.cartesianSize(d);
    assert.equal(val(o.a), ints(plain(o.q).replace(/\. Find.*/, '')).reduce((p, x) => p * x, 1));
    o = G.functionCount(d);
    const [m, n] = ints(plain(o.q)), inj = /one-to-one/.test(o.q);
    let c = 0;
    for (let code = 0; code < n ** m; code++) {
      const img = []; let k = code; for (let i = 0; i < m; i++) { img.push(k % n); k = Math.floor(k / n); }
      if (!inj || new Set(img).size === m) c++;
    }
    assert.equal(val(o.a), c);
  });
});

test('MATH 234 — logical statements', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.logicEval(d), m = o.q.match(/p = ([TF]), q = ([TF]), r = ([TF]), evaluate (.*)\.$/);
    const js = m[4].replace(/&and;/g, '&&').replace(/&or;/g, '||').replace(/&not;/g, '!');
    const v = new Function('p', 'q', 'r', `return ${js};`)(m[1] === 'T', m[2] === 'T', m[3] === 'T');
    assert.equal(plain(o.a), v ? 'T' : 'F');
  });
});

test('MATH 244 — A · A⁻¹ = I', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.inverse2(d), A = nums(o.q), B = nums(o.a);
    const P = [A[0]*B[0]+A[1]*B[2], A[0]*B[1]+A[1]*B[3], A[2]*B[0]+A[3]*B[2], A[2]*B[1]+A[3]*B[3]];
    assert.deepEqual(P.map(x => x + 0), [1, 0, 0, 1]);
  });
});

test('MATH 244 — matrix–vector product', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.matVec(d), q = nums(o.q), n = q.length === 6 ? 2 : 3, A = q.slice(0, n * n), v = q.slice(n * n), P = nums(o.a);
    assert.equal(v.length, n);
    for (let i = 0; i < n; i++) assert.equal(P[i], A.slice(i * n, i * n + n).reduce((s, x, j) => s + x * v[j], 0) + 0);
  });
});

test('MATH 244/335 — dot product', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.dotProduct(d), [u, v] = vecs(o.q);
    assert.equal(val(o.a), u.reduce((s, x, i) => s + x * v[i], 0));
  });
});

test('MATH 244 — eigenvalues match trace and determinant', () => {
  for (const d of DIFFS) times(300, () => {
    const o = G.eigenvalues2(d), [a, b, c, e] = nums(o.q), a2 = plain(o.a);
    const ls = ints(a2.split('=')[1]), [l1, l2] = /double/.test(a2) ? [ls[0], ls[0]] : ls;
    assert.equal(l1 + l2, a + e); assert.equal(l1 * l2 + 0, a * e - b * c + 0);
  });
});

test('MATH 353 — bisection step', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.bisectionStep(d), [N, a, b] = ints(plain(o.q).replace(/x\^2/, '')).map(Math.abs);
    const m = (a + b) / 2, f = x => x * x - N, [mm, lo, hi] = ints(plain(o.a));
    assert.equal(mm, m);
    assert.ok(f(lo) * f(hi) < 0 && hi - lo === (b - a) / 2);
  });
});

test('MATH 353 — trapezoidal rule', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.trapezoidRule(d), t = plain(o.q).replace(/\s/g, '');
    const m = t.match(/n=(\d+)subintervals.*\^(\d+)\(x\^(\d+)(?:\+(\d+))?\)dx/);
    const n = +m[1], b = +m[2], p = +m[3], c = m[4] ? +m[4] : 0, h = b / n, f = x => x ** p + c;
    let s = 0; for (let i = 0; i < n; i++) s += h * (f(i * h) + f((i + 1) * h)) / 2;
    close(val(o.a), s);
  });
});

test("MATH 353/333 — Euler's method", () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.eulerStep(d), t = plain(o.q).replace(/\s/g, '');
    const m = t.match(/h=([\d.]+)\((\d)step.*y&prime;=(.*),y\((\d+)\)=(-?\d+)\.Findy\(([\d.]+)\)/);
    const h = +m[1], steps = +m[2], rhs = m[3];
    let x = +m[4], y = +m[5]; const a = coefOf(rhs, 'x'), b = coefOf(rhs, 'y');
    for (let i = 0; i < steps; i++) { y = y + h * (a * x + b * y); x += h; }
    assert.equal(x, +m[6]); close(val(o.a), y);
  });
});

test('MATH 353 — absolute and relative error', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.absoluteError(d), [p, ap] = ints(plain(o.q)), m = plain(o.a).match(/abs = (\d+), rel = ([\d.]+)/);
    assert.equal(+m[1], Math.abs(p - ap)); close(+m[2], Math.abs(p - ap) / p, 1e-6);
  });
});

test('MATH 333 — characteristic roots solve r² + br + c = 0', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.charRoots(d), t = plain(o.q).replace(/\s/g, '').match(/ofy&Prime;(.*)=0/)[1];
    const b = coefOf(t.replace(/y&prime;/g, 'Y'), 'Y'), c = coefOf(t.replace(/y&prime;/g, 'Y'), 'y');
    const a = plain(o.a), r = ints(a), [r1, r2] = /double/.test(a) ? [r[0], r[0]] : r;
    assert.equal(r1 + r2 + 0, -b + 0); assert.equal(r1 * r2 + 0, c + 0);
  });
});

test('MATH 333 — exponential growth and polynomial IVPs', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.expGrowth(d); const [y0, T, t] = ints(plain(o.q).replace(/y\(0\)/, ''));
    close(val(o.a), y0 * Math.exp(Math.log(2) / T * t), 1e-6);
    o = G.ivpPolynomial(d);
    const m = plain(o.q).replace(/\s/g, '').match(/y&prime;=(-?\d*)(x(?:\^(\d+))?)?,y\(0\)=(-?\d+)\.Findy\((-?\d+)\)/);
    const k = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1], p = m[2] ? (m[3] ? +m[3] : 1) : 0, x1 = +m[5];
    close(val(o.a), +m[4] + simpson(x => k * x ** p, 0, x1), 1e-6);
  });
});

test('MATH 315 — PDE classification by B² − 4AC', () => {
  for (const d of DIFFS) times(300, () => {
    const o = G.pdeClassify(d), t = plain(o.q).replace(/\s/g, '').match(/PDE(.*)=0/)[1];
    const A = coefOf(t, 'uxx'), B = coefOf(t, 'uxy'), C = coefOf(t, 'uyy'), D = B * B - 4 * A * C;
    assert.equal(plain(o.a), D > 0 ? 'Hyperbolic' : D === 0 ? 'Parabolic' : 'Elliptic');
  });
});

test('MATH 315 — wave speed, Laplacian, heat-equation decay rate', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.waveSpeed(d); assert.equal(val(o.a) ** 2, ints(plain(o.q))[0]);
    o = G.laplacianPoly(d);
    const t = plain(o.q).replace(/\s/g, '').match(/=(.*)\.Find/)[1];
    assert.equal(val(o.a), 2 * coefOf(t, 'x^2') + 2 * coefOf(t, 'y^2'));
    o = G.heatSeparation(d);
    const m = plain(o.q).replace(/\s/g, '').match(/sin\((\d*)x\)solvesut=(\d*)uxx/);
    const n = m[1] ? +m[1] : 1, al = m[2] ? +m[2] : 1, k = val(o.a);
    // u = e^{-kt} sin(nx): u_t = -k u, u_xx = -n² u  ⇒  k = α n²
    assert.equal(-k, al * -(n * n));
  });
});

test('MATH 335 — cross product is orthogonal with |u×v|² = |u|²|v|² − (u·v)²', () => {
  const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  for (const d of DIFFS) times(200, () => {
    const o = G.crossProduct(d), [u, v] = vecs(o.q), [w] = vecs(o.a);
    assert.equal(dot(w, u), 0); assert.equal(dot(w, v), 0);
    assert.equal(dot(w, w), dot(u, u) * dot(v, v) - dot(u, v) ** 2);
  });
});

test('MATH 335 — magnitude, divergence, gradient', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.vectorMagnitude(d); const [v] = vecs(o.q);
    close(val(o.a), Math.hypot(...v));
    o = G.divergence(d);
    const t = plain(o.q).replace(/\s/g, ''), F = t.match(/&lang;(.*)&rang;/)[1];
    const [x, y, z] = ints(t.match(/at\((.*)\)/)[1]);
    const [P, Q, Rr] = F.split(',');
    assert.equal(val(o.a), coefOf(P, 'xy') * y + coefOf(Q, 'yz') * z + coefOf(Rr, 'zx') * x + 0);
    o = G.gradientAt(d);
    const s = plain(o.q).replace(/\s/g, ''), f = s.match(/f=(.*)\.Find/)[1], [px, py, pz] = ints(s.match(/at\((.*)\)/)[1]);
    assert.deepEqual(vecs(o.a)[0], [2 * coefOf(f, 'x^2') * px, 2 * coefOf(f, 'y^2') * py, 2 * coefOf(f, 'z^2') * pz].map(v => v + 0));
  });
});

test('MATH 383 — sequence limits and geometric series', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.seqLimit(d);
    const [, num, den] = o.q.match(/<span class="n">(.*?)<\/span><span class="d">(.*?)<\/span>/).map(s => plain(s).replace(/\s/g, ''));
    close(fval(o.a), coefOf(num, 'n') / coefOf(den, 'n'));
    o = G.geometricSeries(d);
    const a = ints(plain(o.q))[0], r = fval(o.q.split('ratio ')[1]);
    let s = 0, term = a; for (let i = 0; i < 4000; i++) { s += term; term *= r; }
    close(fval(o.a), s, 1e-6);
  });
});

test('MATH 383 — telescoping sums and ε–N', () => {
  for (const d of DIFFS) times(100, () => {
    let o = G.telescopingSum(d);
    const N = +o.q.match(/<sup>(\d+)<\/sup>/)[1], k = +o.q.match(/n \+ (\d+)/)[1];
    let s = 0; for (let n = 1; n <= N; n++) s += 1 / (n * (n + k));
    close(fval(o.a), s);
    o = G.epsilonN(d);
    const c = +o.q.match(/<span class="n">(\d+)<\/span><span class="d">n<\/span>/)[1];
    const eps = 1 / +o.q.match(/<span class="n">1<\/span><span class="d">(\d+)<\/span>/)[1];
    let N2 = 1; while (!(c / N2 < eps)) N2++;
    assert.equal(val(o.a), N2);
  });
});

test('MATH 473 — V − E + F = 2, χ = 2 − 2g, open-set counts', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.eulerCharacteristic(d); const q = plain(o.q) + ' ' + plain(o.a);
    const get = L => +q.match(new RegExp(L + ' = (\\d+)'))[1];
    assert.equal(get('V') - get('E') + get('F'), 2);
    o = G.surfaceGenus(d); const n = ints(plain(o.q)).pop(), a = val(o.a);
    if (/genus \d/.test(o.q)) assert.equal(a, 2 - 2 * n); else assert.equal(2 - 2 * a, n);
    o = G.topologyOpenSets(d); const pts = ints(plain(o.q))[0];
    assert.equal(val(o.a), /indiscrete/.test(o.q) ? 2 : 2 ** pts);
  });
});

test('MATH 475 — curvature and arc length', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.circleCurvature(d); close(fval(o.a), 1 / ints(plain(o.q))[0]);
    o = G.parabolaCurvature(d);
    const t = plain(o.q).replace(/\s/g, '').match(/y=(.*)atits/)[1], a = coefOf(t, 'x^2'), b = coefOf(t, 'x');
    const x0 = -b / (2 * a), y1 = 2 * a * x0 + b;   // y' at the vertex
    close(fval(o.a), Math.abs(2 * a) / (1 + y1 * y1) ** 1.5);
    o = G.helixArcLength(d);
    const [r, , c] = ints(plain(o.q)), T = +o.q.match(/&le; (\d+)&pi;/)[1];
    close(+o.a.match(/(\d+)&pi;/)[1] * Math.PI, simpson(() => Math.hypot(r, c), 0, T * Math.PI), 1e-6);
    o = G.helixCurvature(d); const [r2, , c2] = ints(plain(o.q));
    close(fval(o.a), r2 / (r2 * r2 + c2 * c2));
  });
});

test('MATH 344 — generators, permutation order, group orders, index', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.groupGenerators(d), n = +o.q.match(/<sub>(\d+)<\/sub>/)[1];
    assert.equal(val(o.a), phi(n));
    o = G.permutationOrder(d);
    const cyc = [...o.q.matchAll(/\(([\d ]+)\)/g)].map(m => m[1].split(' ').map(Number));
    const deg = +o.q.match(/S<sub>(\d+)/)[1], perm = Array.from({ length: deg + 1 }, (_, i) => i);
    assert.equal(new Set(cyc.flat()).size, cyc.flat().length, 'cycles must be disjoint');
    for (const c of cyc) c.forEach((x, i) => { perm[x] = c[(i + 1) % c.length]; });
    let k = 1, cur = perm.slice(); while (cur.some((x, i) => x !== i)) { cur = cur.map(x => perm[x]); k++; }
    assert.equal(val(o.a), k);
    o = G.groupOrder(d); n = +o.q.match(/<sub>(\d+)<\/sub>/)[1];
    const want = /^Find the order of S/.test(o.q) ? fact(n) : /^Find the order of A/.test(o.q) ? fact(n) / 2 : 2 * n;
    assert.equal(val(o.a), want);
    o = G.lagrangeIndex(d); const [GG, H] = ints(plain(o.q));
    assert.equal(val(o.a) * H, GG);
  });
});

test('MATH 444 — inverses, zero divisors, ℤ_p polynomials, fields', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.modInverse(d), [a, , m] = ints(plain(o.q));
    assert.equal((a * val(o.a)) % m, 1);
    o = G.zeroDivisors(d); const n = +o.q.match(/<sub>(\d+)/)[1];
    let zd = 0; for (let x = 1; x < n; x++) for (let y = 1; y < n; y++) if ((x * y) % n === 0) { zd++; break; }
    assert.equal(val(o.a), zd);
    o = G.polyEvalModP(d); const p = +o.q.match(/<sub>(\d+)/)[1], t = plain(o.q).replace(/\s/g, '');
    const c = +t.match(/f\((\d+)\)/)[1], poly = t.match(/=(.*)\.$/)[1];
    const c0 = +(poly.match(/([+-]\d+)$/) || [0, 0])[1];
    assert.equal(val(o.a), ((c * c + coefOf(poly, 'x') * c + c0) % p + p) % p);
    o = G.fieldCheck(d); const fn = +o.q.match(/<sub>(\d+)/)[1];
    assert.equal(plain(o.a), isPrime(fn) ? 'Yes' : 'No');
  });
});

test('MATH 485 — complex division, squares, principal argument', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.complexDivide(d);
    const [, Z, W] = plain(o.q).match(/\(([^)]+)\) &divide; \(([^)]+)\)/), z = parseComplex(Z), w = parseComplex(W), r = parseComplex(o.a);
    assert.equal(r.re * w.re - r.im * w.im, z.re); assert.equal(r.re * w.im + r.im * w.re, z.im);
    o = G.complexSquare(d);
    const x = parseComplex(plain(o.q).match(/\(([^)]+)\)/)[1]), s = parseComplex(o.a);
    assert.equal(s.re, x.re * x.re - x.im * x.im); assert.equal(s.im, 2 * x.re * x.im);
    o = G.complexArgument(d);
    const zs = plain(o.q).match(/z = (.*)\.$/)[1].replace(/\s/g, '');
    let re = 0, im = 0;
    if (!zs.includes('i')) re = +zs;
    else if (/^-?\d*i$/.test(zs)) im = zs === 'i' ? 1 : zs === '-i' ? -1 : +zs.slice(0, -1);
    else { const c = parseComplex(zs.replace(/(\d)([+-])/, '$1 $2 ')); re = c.re; im = c.im; }
    const arg = plain(o.a).split('= ')[1].replace(/&pi;/, 'π');
    const v = arg === '0' ? 0 : (() => { const m = arg.match(/^(-?)(\d*)π(?:\/(\d+))?$/);
      return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * Math.PI / (m[3] ? +m[3] : 1); })();
    close(v, Math.atan2(im, re));
  });
});

test('MATH 367 — τ, σ, congruences, CRT, factorization', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.divisorCount(d), n = ints(plain(o.q))[0], ds = [];
    for (let k = 1; k <= n; k++) if (n % k === 0) ds.push(k);
    assert.equal(val(o.a), ds.length);
    o = G.divisorSum(d); n = ints(plain(o.q))[0]; let s = 0;
    for (let k = 1; k <= n; k++) if (n % k === 0) s += k;
    assert.equal(val(o.a), s);
    o = G.linearCongruence(d); const [a, b, m] = ints(plain(o.q)), x = ints(plain(o.a))[0];
    assert.equal((a * x) % m, b); assert.ok(x >= 0 && x < m);
    o = G.crt(d); const [r1, m1, r2, m2] = ints(plain(o.q).split('with')[1]);
    let y = 0; while (!(y % m1 === r1 && y % m2 === r2)) y++;
    assert.equal(val(o.a), y);
    o = G.primeFactorization(d); n = ints(plain(o.q))[0];
    const fs = plain(o.a).split('&middot;').map(f => f.trim().split('^').map(Number));
    assert.equal(fs.reduce((p, [q, e = 1]) => p * q ** e, 1), n);
    fs.forEach(([q]) => assert.ok(isPrime(q)));
  });
});

test('MATH 468 — trees, K_{m,n}, Euler circuits, chromatic numbers', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.treeEdges(d); const v = ints(plain(o.q));
    assert.equal(val(o.a), v.length === 2 ? v[0] - v[1] : v[0] - 1);
    o = G.bipartiteEdges(d); const [m, n] = ints(plain(o.q));
    assert.equal(val(o.a), m * n);
    o = G.eulerCircuit(d); const deg = plain(o.q).match(/degrees ([\d, ]+)\./)[1].split(', ').map(Number);
    const odd = deg.filter(x => x % 2).length;
    assert.equal(deg.reduce((a, b) => a + b, 0) % 2, 0, 'handshake: even degree sum');
    assert.equal(plain(o.a), odd ? `No (${odd} odd-degree vertices)` : 'Yes');
    o = G.chromaticNumber(d); const k = ints(plain(o.q).replace(/plus a hub/, ''));
    const want = /wheel/.test(o.q) ? (k[0] % 2 ? 4 : 3) : /cycle C/.test(o.q) ? (k[0] % 2 ? 3 : 2) : /complete graph/.test(o.q) ? k[0] : 2;
    assert.equal(val(o.a), want);
  });
});

test('MATH 417 — Γ(n + ½), Beta, Legendre, Chebyshev', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.gammaHalf(d); const n = (+o.q.match(/<span class="n">(\d+)/)[1] - 1) / 2;
    let gh = 1; for (let k = 0; k < n; k++) gh *= (k + 0.5);   // Γ(n+½)/√π = ½·(3/2)···(n−½)
    close(o.a.includes('frac') ? fval(o.a.replace(/&radic;&pi;/, '')) : 1, gh);

    o = G.betaFunction(d); const [p, q] = ints(plain(o.q));
    close(fval(o.a), simpson(t => t ** (p - 1) * (1 - t) ** (q - 1), 0, 1), 1e-6);

    o = G.legendreP(d); let [deg, x] = ints(plain(o.q));
    let P0 = 1, P1 = x; for (let k = 1; k < deg; k++) [P0, P1] = [P1, ((2 * k + 1) * x * P1 - k * P0) / (k + 1)];
    close(fval(o.a), P1);

    o = G.chebyshevT(d); [deg, x] = ints(plain(o.q));
    const T = { 2: 2*x*x - 1, 3: 4*x**3 - 3*x, 4: 8*x**4 - 8*x*x + 1, 5: 16*x**5 - 20*x**3 + 5*x }[deg];
    assert.equal(val(o.a), T);
  });
});

test('MATH 432 — vector norms, diagonal operator norm, L² inner product', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.vectorNorms(d); const v = ints(plain(o.q).match(/v = \(([^)]*)\)/)[1]);
    const t = o.q.match(/<sub>(.*?)<\/sub>/)[1];
    const want = t === '1' ? v.reduce((s, x) => s + Math.abs(x), 0) : t === '2' ? Math.hypot(...v) : Math.max(...v.map(Math.abs));
    close(val(o.a), want);
    o = G.operatorNormDiag(d); const n = cols(o.q), D = nums(o.q);
    D.forEach((x, i) => { if (i % (n + 1)) assert.equal(x, 0); });
    assert.equal(val(o.a), Math.max(...D.map(Math.abs)));
    o = G.l2InnerProduct(d);
    const [f1, f2] = plain(o.q).replace(/\s/g, '').match(/&lang;(.*)&rang;/)[1].split(',');
    const mono = s => { const m = s.match(/^(-?\d*)(x(?:\^(\d+))?)?$/);
      const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; return x => c * x ** (m[2] ? (m[3] ? +m[3] : 1) : 0); };
    close(fval(o.a), simpson(x => mono(f1)(x) * mono(f2)(x), 0, 1), 1e-6);
  });
});

/* ================= Study-plan pack ================= */
const fracs = html => [...String(html).matchAll(/<span class="frac"><span class="n">(\d+)<\/span><span class="d">(\d+)<\/span><\/span>/g)].map(m => +m[1] / +m[2]);

test('STAT 212/312 — binomial probabilities', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.binomialProb(d), [n] = ints(plain(o.q)), k = +plain(o.q).match(/X = (\d+)/)[1], p = fracs(o.q)[0];
    assert.ok(k >= 0 && k <= n);
    close(fval(o.a), fact(n) / (fact(k) * fact(n - k)) * p ** k * (1 - p) ** (n - k));
  });
});

test('STAT 312 — expected value and variance of a discrete distribution', () => {
  for (const d of DIFFS) times(200, () => {
    for (const name of ['expectedValue', 'varianceDiscrete']) {
      const o = G[name](d), xs = plain(o.q).match(/values (.*?) with/)[1].split(', ').map(Number), ps = fracs(o.q);
      assert.equal(xs.length, ps.length); close(ps.reduce((a, b) => a + b, 0), 1);
      const E = xs.reduce((s, x, i) => s + x * ps[i], 0), V = xs.reduce((s, x, i) => s + (x - E) ** 2 * ps[i], 0);
      close(fval(o.a), name === 'expectedValue' ? E : V);
    }
  });
});

test('STAT 361 — LP optimum equals the best feasible integer point', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.lpCornerPoint(d), [a, b, c, p, q] = ints(plain(o.q));
    let best = -Infinity;
    for (let x = 0; x <= p; x++) for (let y = 0; y <= q; y++) if (x + y <= c) best = Math.max(best, a * x + b * y);
    assert.equal(val(o.a), best);
  });
});

test('MATH 371 — effective rate and annuity future value', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.effectiveRate(d); const r = ints(plain(o.q))[0];
    const m = { 'semi-annually': 2, quarterly: 4, monthly: 12 }[o.q.match(/compounded (\w+(?:-\w+)?)/)[1]];
    close(val(o.a), (Math.exp(m * Math.log1p(r / 100 / m)) - 1) * 100, 1e-4);
    o = G.annuityFV(d); const [P, n, ri] = ints(plain(o.q));
    let fv = 0; for (let k = 1; k <= n; k++) fv = fv * (1 + ri / 100) + P;   // year-by-year accumulation
    close(val(o.a), fv, 0.006);
  });
});

test('MATH 342 — improved Euler (Heun) step', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.improvedEuler(d), t = plain(o.q).replace(/\s/g, '');
    const m = t.match(/h=([\d.]+)ony&prime;=(.*),y\((\d+)\)=(-?\d+)\.Findy\(([\d.]+)\)/);
    const h = +m[1], a = coefOf(m[2], 'x'), b = coefOf(m[2], 'y'), x0 = +m[3], y0 = +m[4], f = (x, y) => a * x + b * y;
    const pred = y0 + h * f(x0, y0);
    assert.equal(x0 + h, +m[5]);
    close(val(o.a), y0 + h * (f(x0, y0) + f(x0 + h, pred)) / 2);
  });
});

test('MATH 416 — separable Fredholm equation: u(x) = kx satisfies the equation', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.fredholmSeparable(d), m = plain(o.q).match(/u\(x\) = (\d*)x ([+-]) (\d*)&int;/);
    const c = m[1] ? +m[1] : 1, l = (m[2] === '-' ? -1 : 1) * (m[3] ? +m[3] : 1);
    const ans = o.a.replace(/u\(x\) = /, '').replace(/x<\/b>$/, '</b>');
    const k = /frac/.test(ans) ? fval(ans) : /&minus;<\/b>$/.test(ans) ? -1 : /<b><\/b>/.test(ans) ? 1 : val(ans);
    for (const x of [0.3, 1, 2]) close(k * x, c * x + l * x * simpson(t => t * k * t, 0, 1), 1e-6);
  });
});

test('MATH 442 — FTCS heat step and five-point Laplace average', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.ftcsHeatStep(d); const r = +plain(o.q).match(/r = ([\d.]+)/)[1];
    const [a, b, c] = [...plain(o.q).split(':')[1].matchAll(/= (\d+)/g)].map(m => +m[1]);
    close(val(o.a), (1 - 2 * r) * b + r * (a + c));
    o = G.laplaceFivePoint(d); const v = ints(plain(o.q).split('are')[1]);
    close(val(o.a), v.reduce((s, x) => s + x, 0) / 4);
  });
});

test('curriculum — plan levels in order, every listed topic has a generator and a label', async () => {
  const { TOPIC_LABELS } = await import('../src/curriculum.js');
  assert.deepEqual(CURRICULUM.map(l => l.level),
    ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8', 'Electives']);
  for (const l of CURRICULUM) for (const c of l.courses) for (const t of c.topics) {
    assert.equal(typeof G[t], 'function', `${c.code}: missing generator ${t}`);
    assert.ok(TOPIC_LABELS[t], `${c.code}: missing label ${t}`);
  }
});
