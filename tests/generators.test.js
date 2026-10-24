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
// drop the Arabic half of bilingual text (handles nested spans)
function enOnly(html) {
  html = String(html); let out = '', i = 0;
  while (i < html.length) {
    const j = html.indexOf('<span lang="ar"', i);
    if (j < 0) { out += html.slice(i); break; }
    out += html.slice(i, j);
    let depth = 0, k = j;
    do {
      const o = html.indexOf('<span', k), c = html.indexOf('</span>', k);
      if (o >= 0 && o < c) { depth++; k = o + 5; } else { depth--; k = c + 7; }
    } while (depth > 0);
    i = k;
  }
  return out;
}
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
    const [, A, B] = q.match(/A = \{([^}]*)\}; B = \{([^}]*)\}/).map(s => s.split(', ').map(Number));
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
    const o = G.eulerStep(d), t = plain(enOnly(o.q)).replace(/\s/g, '');
    const m = t.match(/h=([\d.]+)\((\d)steps?\)tofindy\(([\d.]+)\):y&prime;=(.*);y\((\d+)\)=(-?\d+)/);
    const h = +m[1], steps = +m[2], rhs = m[4];
    let x = +m[5], y = +m[6]; const a = coefOf(rhs, 'x'), b = coefOf(rhs, 'y');
    for (let i = 0; i < steps; i++) { y = y + h * (a * x + b * y); x += h; }
    assert.equal(x, +m[3]); close(val(o.a), y);
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
    const [, X1, K, X, P, Y0] = plain(enOnly(o.q)).replace(/\s/g, '').match(/findy\((-?\d+)\):y&prime;=(-?\d*)(x(?:\^(\d+))?)?;y\(0\)=(-?\d+)/);
    const k = K === '' ? 1 : K === '-' ? -1 : +K, p = X ? (P ? +P : 1) : 0, x1 = +X1;
    close(val(o.a), +Y0 + simpson(x => k * x ** p, 0, x1), 1e-6);
  });
});

test('MATH 442 — PDE classification: order, degree, linearity, homogeneity, coefficients, type', () => {
  const seen = new Set();
  for (const d of DIFFS) times(400, () => {
    const o = G.pdeClassify(d), eq = o.q.slice(o.q.lastIndexOf('<bdi dir="ltr">') + 15, o.q.lastIndexOf('</bdi>'));
    const [lhs, rhs] = eq.split(" = "), ans = enOnly(o.a).replace(/<\/?span[^>]*>/g, "");
    const subs = [...lhs.matchAll(/u<sub>([xy]+)<\/sub>/g)].map(m => m[1]), order = Math.max(...subs.map(x => x.length));
    const powTop = [...lhs.matchAll(/\(u<sub>([xy]+)<\/sub>\)<sup>(\d)<\/sup>/g)].filter(m => m[1].length === order).map(m => +m[2]);
    const degree = powTop.length ? Math.max(...powTop) : 1;
    const linear = !/<sup>|u&thinsp;u/.test(lhs), homog = rhs === '0', variable = /[xy]&thinsp;/.test(lhs);
    assert.match(ans, new RegExp(`^<b>Order ${order} · degree ${degree} · ${linear ? 'linear' : 'nonlinear'} · ${homog ? 'homogeneous' : 'non-homogeneous'} · ${variable ? 'variable' : 'constant'} coefficients`));
    if (order !== 2) { assert.ok(!/bolic|elliptic|type/.test(ans)); return; }
    const prinNonlin = /\(u<sub>(xx|xy|yy)<\/sub>\)<sup>|u&thinsp;u<sub>(xx|xy|yy)</.test(lhs);
    if (prinNonlin) { assert.match(ans, /type not defined/); seen.add('none'); return; }
    const t = plain(lhs).replace(/\s/g, '');
    const vm = t.match(/^(-?\d*)([xy])&thinsp;uxx/);
    if (vm) {                                                             // B² − 4AC = −4·k·C·v
      const k = vm[1] === '' ? 1 : vm[1] === '-' ? -1 : +vm[1], C = coefOf(t, 'uyy'), m = -4 * k * C;
      assert.match(ans, new RegExp(`${m > 0 ? 'hyperbolic' : 'elliptic'} for ${vm[2]} > 0, parabolic on ${vm[2]} = 0, ${m > 0 ? 'elliptic' : 'hyperbolic'} for ${vm[2]} < 0`));
      seen.add('regions'); return;
    }
    const A = coefOf(t, 'uxx'), B = coefOf(t, 'uxy'), C = coefOf(t, 'uyy'), D = B * B - 4 * A * C;
    const type = D > 0 ? 'hyperbolic' : D === 0 ? 'parabolic' : 'elliptic';
    assert.match(ans, new RegExp(`· ${type}</b>$`)); seen.add(type);
  });
  for (const k of ['hyperbolic', 'parabolic', 'elliptic', 'regions', 'none']) assert.ok(seen.has(k), k);
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
    o = G.crt(d); const [r1, m1, r2, m2] = ints(E(o.q).split(':')[1]);
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
    const o = G.lpCornerPoint(d), [a, b, c, p, q] = ints(E(o.q));
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
    const o = G.improvedEuler(d), t = plain(enOnly(o.q)).replace(/\s/g, '');
    const m = t.match(/h=([\d.]+)tofindy\(([\d.]+)\):y&prime;=(.*);y\((\d+)\)=(-?\d+)/);
    const h = +m[1], a = coefOf(m[3], 'x'), b = coefOf(m[3], 'y'), x0 = +m[4], y0 = +m[5], f = (x, y) => a * x + b * y;
    const pred = y0 + h * f(x0, y0);
    assert.equal(x0 + h, +m[2]);
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


test('curriculum — plan levels in order, every listed topic has a generator and a label', async () => {
  const { TOPIC_LABELS } = await import('../src/curriculum.js');
  assert.deepEqual(CURRICULUM.map(l => l.level),
    ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8', 'Electives', 'Business Administration Dept.']);
  for (const l of CURRICULUM) for (const c of l.courses) for (const t of c.topics) {
    assert.equal(typeof G[t], 'function', `${c.code}: missing generator ${t}`);
    assert.ok(TOPIC_LABELS[t], `${c.code}: missing label ${t}`);
  }
});

/* ================= Worked solutions: MATH 130, STAT 302, MATH 442 ================= */
import { T_TABLE, T_ALPHAS, Z_ROW, F_TABLE_05, normPdf, tPdf, fPdf } from '../src/viz.js';
const E = html => plain(enOnly(String(html).replace(/<br>/g, ' '))).replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();          // English text only
const lin = (s, v) => coefOf(s.replace(/\s/g, ''), v);
const constOf = s => +(s.replace(/\s/g, '').match(/([+-]\d+)$/) || [0, 0])[1];
// tail areas from the densities, used to check the printed tables once; the other tests then use the tables
const upperT = (c, v) => 0.5 - simpson(u => tPdf(u, v), 0, c, 4000);
const upperF = (c, d1, d2) => 1 - simpson(u => fPdf(u * u, d1, d2) * 2 * u, 1e-9, Math.sqrt(c), 20000);   // x = u² removes the F(1,·) singularity
const zQ = a => Z_ROW[T_ALPHAS.indexOf(+a.toFixed(4))];
const tQ = (a, v) => T_TABLE[v][T_ALPHAS.indexOf(+a.toFixed(4))];
const fQ = (d1, d2) => F_TABLE_05[d2][d1 - 1];
const NEW = ['linearEquation', 'inequalityGraph', 'linearSystem2', 'quadraticEquation', 'logExp', 'determinant2', 'matrixAdd', 'matrixMultiply',
  'derivative', 'integral', 'ciMeanZ', 'ciMeanS', 'ciMeanT', 'ciProportion', 'sampleSizeMean', 'sampleSizeProp', 'testMeanZ', 'testMeanS',
  'testMeanT', 'testProportion', 'anovaTable', 'pdeClassify', 'fdSchemeClassify', 'fdFirstX', 'fdFirstT', 'fdSecondX', 'fdSecondT',
  'fdmOdeUx', 'fdmOdeUt', 'fdmOdeUxx', 'fdmOdeUtt', 'fdmAdvection', 'fdmFamous'];

test('printed z, t and F tables match the distributions', () => {
  // a printed value c is right when its tail area is α up to the table's rounding (half a unit in the last digit × density)
  T_ALPHAS.forEach((a, i) => { const c = Z_ROW[i]; assert.ok(Math.abs(0.5 - simpson(normPdf, 0, c, 2000) - a) <= normPdf(c) * 0.0006, `z ${a}`); });
  for (const v of Object.keys(T_TABLE).map(Number)) T_ALPHAS.forEach((a, i) => {
    const c = T_TABLE[v][i]; assert.ok(Math.abs(upperT(c, v) - a) <= tPdf(c, v) * 0.0006, `t ${a}, df ${v}: ${c} has tail ${upperT(c, v)}`); });
  for (const d2 of Object.keys(F_TABLE_05).map(Number)) F_TABLE_05[d2].forEach((c, i) => {
    const tol = (c >= 10 ? 0.006 : 0.0051) * fPdf(c, i + 1, d2);
    assert.ok(Math.abs(upperF(c, i + 1, d2) - 0.05) <= tol, `F(${i + 1}, ${d2}) = ${c} has tail ${upperF(c, i + 1, d2)}`); });
});

test('worked solutions: steps present, graphs and tables well-formed, both languages', () => {
  for (const t of NEW) for (const d of DIFFS) times(30, () => {
    const o = G[t](d);
    assert.ok(typeof o.s === 'string' && o.s.includes('<ol class="steps">'), `${t}: missing steps`);
    assert.equal((o.s.match(/<svg/g) || []).length, (o.s.match(/<\/svg>/g) || []).length, `${t}: svg`);
    assert.equal((o.s.match(/<table/g) || []).length, (o.s.match(/<\/table>/g) || []).length, `${t}: table`);
    assert.ok(!/NaN|undefined|Infinity/.test(o.q + o.a + o.s), `${t}: bad number`);
    assert.ok(o.s.includes('lang="ar"') && o.s.includes('lang="en"'), `${t}: steps must be bilingual`);
  });
});

test('MATH 130 — linear equations, inequalities, 2×2 systems', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.linearEquation(d), [l, r] = E(o.q).replace('Solve ', '').split(' = ');
    const x = val(o.a); assert.equal(lin(l, 'x') * x + constOf(l), +r);
    o = G.inequalityGraph(d);
    const q = o.q.match(/Solve and graph: (.*?)<\/span>/)[1];
    const op = q.match(/&lt;|&gt;|&le;|&ge;/)[0], [lhs, rhs] = plain(q).split(/&lt;|&gt;|&le;|&ge;/);
    const a = lin(lhs, 'x'), b = constOf(lhs), c = +rhs.replace(/\s/g, '');
    const ans = o.a.match(/x (&lt;|&gt;|&le;|&ge;) (.*)<\/b>/), k = val(ans[2]);
    const cmp = (u, w, s) => s === '&lt;' ? u < w : s === '&gt;' ? u > w : s === '&le;' ? u <= w : u >= w;
    for (let t = k - 3; t <= k + 3; t += 0.5) assert.equal(cmp(a * t + b, c, op), cmp(t, k, ans[1]), `${q} at ${t}`);
    o = G.linearSystem2(d);
    const eqs = E(o.q).replace('Solve the system: ', '').split('; ').map(s => s.trim().split(' = '));
    const [X, Y] = ints(plain(o.a).split('=')[1]);
    for (const [L2, R2] of eqs) assert.equal(lin(L2, 'x') * X + lin(L2, 'y') * Y, +R2.replace(/\s/g, ''));
  });
});

test('MATH 130 — quadratic equations and logarithms/exponents', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.quadraticEquation(d); const p = E(o.q).replace('Solve ', '').replace(' = 0', '').replace(/\s/g, '');
    const a = coefOf(p, 'x^2'), b = coefOf(p, 'x'), c = constOf(p.replace(/x\^2/, 'X'));
    for (const r of ints(plain(o.a).split('=')[1])) assert.equal(a * r * r + b * r + c, 0);
    o = G.logExp(d); const q = plain(enOnly(o.q)).replace(/\s+/g, ' '), v = val(o.a);
    let m;
    if ((m = q.match(/^Evaluate log(\d+) (\d+)$/))) assert.equal((+m[1]) ** v, +m[2]);
    else if ((m = q.match(/^Evaluate log(\d+) (\d+) \+ log\d+ (\d+)$/))) assert.equal((+m[1]) ** v, m[2] * m[3]);
    else if ((m = q.match(/^Evaluate log(\d+) (\d+) - log\d+ (\d+)$/))) assert.equal((+m[1]) ** v, m[2] / m[3]);
    else if ((m = q.match(/^Solve (\d+)\^?x ?([+-]) ?(\d+) = (\d+)$/) || q.match(/^Solve (\d+)x ?([+-]) ?(\d+) = (\d+)$/))) assert.equal((+m[1]) ** (v + (m[2] === '-' ? -1 : 1) * m[3]), +m[4]);
    else if ((m = q.match(/^Solve (\d+)x = (\d+)$/))) assert.equal((+m[1]) ** v, +m[2]);
    else if ((m = q.match(/^Solve log(\d+) \(x ?([+-]) ?(\d+)\) = (\d+)$/))) assert.equal(v + (m[2] === '-' ? -1 : 1) * m[3], (+m[1]) ** +m[4]);
    else if ((m = q.match(/^Solve log(\d+) \(x\) = (\d+)$/))) assert.equal(v, (+m[1]) ** +m[2]);
    else assert.fail('unparsed: ' + q);
  });
});

const parseSample = q => ({ n: +q.match(/n = (\d+)/)[1], xb: +q.match(/x̄ = (\d+(?:\.\d+)?)/)[1],
  sd: +(q.match(/σ = (\d+(?:\.\d+)?)/) || q.match(/s = (\d+(?:\.\d+)?)/))[1] });
test('STAT 302 — confidence intervals for a mean (z, z with s, t) and a proportion', () => {
  for (const d of DIFFS) times(60, () => {
    for (const t of ['ciMeanZ', 'ciMeanS', 'ciMeanT']) {
      const o = G[t](d), q = E(o.q), { n, xb, sd } = parseSample(q), conf = +q.match(/(\d+)% confidence/)[1];
      if (t === 'ciMeanT') assert.ok(n < 30); else assert.ok(n >= 30);
      const crit = t === 'ciMeanT' ? tQ((1 - conf / 100) / 2, n - 1) : zQ((1 - conf / 100) / 2);
      const [lo, hi] = plain(o.a).match(/\(([-\d.]+), ([-\d.]+)\)/).slice(1).map(Number);
      close((lo + hi) / 2, xb, 0.002); close((hi - lo) / 2, crit * sd / Math.sqrt(n), 0.01);
    }
    const o = G.ciProportion(d), q = E(o.q), n = +q.match(/n = (\d+)/)[1], x = +q.match(/, (\d+) have/)[1], conf = +q.match(/(\d+)% confidence/)[1];
    const p = x / n, [lo, hi] = plain(o.a).match(/\(([-\d.]+), ([-\d.]+)\)/).slice(1).map(Number);
    close((lo + hi) / 2, p, 0.0002); close((hi - lo) / 2, zQ((1 - conf / 100) / 2) * Math.sqrt(p * (1 - p) / n), 0.0005);
  });
});

test('STAT 302 — sample size for a mean and a proportion (rounded up)', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.sampleSizeMean(d), q = E(o.q), conf = +q.match(/(\d+)% confidence/)[1];
    const Em = +q.match(/E = (\d+(?:\.\d+)?)/)[1], sg = +q.match(/σ = (\d+)/)[1], n = val(o.a), need = (zQ((1 - conf / 100) / 2) * sg / Em) ** 2;
    assert.ok(n >= need - 0.05 * need / 100 - 0.05 && n - 1 < need + 0.05, `mean: n = ${n}, need ${need}`);
    o = G.sampleSizeProp(d); q = E(o.q); conf = +q.match(/(\d+)% confidence/)[1];
    const Ep = +q.match(/E = (\d+(?:\.\d+)?)/)[1], pp = /p = (\d+(?:\.\d+)?)/.test(q) ? +q.match(/p = (\d+(?:\.\d+)?)/)[1] : 0.5, np = val(o.a);
    const needp = zQ((1 - conf / 100) / 2) ** 2 * pp * (1 - pp) / Ep ** 2;
    assert.ok(np >= needp - 0.5 && np - 1 < needp + 0.5, `prop: n = ${np}, need ${needp}`);
  });
});

test('STAT 302 — hypothesis tests for a mean (z, z with s, t) and a proportion', () => {
  const dec = (stat, crit, tail) => tail === '≠' ? Math.abs(stat) > crit : tail === '>' ? stat > crit : stat < -crit;
  for (const d of DIFFS) times(60, () => {
    for (const t of ['testMeanZ', 'testMeanS', 'testMeanT']) {
      const o = G[t](d), q = E(o.q), { n, xb, sd } = parseSample(q);
      const mu0 = +q.match(/H₀: μ = (\d+(?:\.\d+)?)/)[1], alpha = +q.match(/α = (\d+(?:\.\d+)?)/)[1];
      const tail = q.includes('&ne;') ? '≠' : q.match(/H₁: μ (&gt;|&lt;)/)[1] === '&gt;' ? '>' : '<';
      const stat = (xb - mu0) / (sd / Math.sqrt(n)), a = tail === '≠' ? alpha / 2 : alpha;
      const crit = t === 'testMeanT' ? tQ(a, n - 1) : zQ(a);
      close(+plain(o.a).match(/[zt] = ([-\d.]+)/)[1], stat, 0.002);
      assert.equal(/Do not reject/.test(E(o.a)), !dec(stat, crit, tail));
    }
    const o = G.testProportion(d), q = E(o.q);
    const p0 = +q.match(/H₀: p = (\d+(?:\.\d+)?)/)[1], alpha = +q.match(/α = (\d+(?:\.\d+)?)/)[1], x = +q.match(/there are (\d+) successes/)[1], n = +q.match(/n = (\d+) trials/)[1];
    const tail = q.includes('&ne;') ? '≠' : q.match(/H₁: p (&gt;|&lt;)/)[1] === '&gt;' ? '>' : '<';
    const stat = (x / n - p0) / Math.sqrt(p0 * (1 - p0) / n);
    close(+plain(o.a).match(/z = ([-\d.]+)/)[1], stat, 0.002);
    assert.equal(/Do not reject/.test(E(o.a)), !dec(stat, zQ(tail === '≠' ? alpha / 2 : alpha), tail));
  });
});

test('STAT 302 — ANOVA table completion and F test', () => {
  for (const d of DIFFS) times(100, () => {
    const o = G.anovaTable(d), q = E(o.q), k = +q.match(/k = (\d+)/)[1], N = +q.match(/N = (\d+)/)[1];
    const cells = [...o.q.matchAll(/<tr><th>.*?<\/th>(.*?)<\/tr>/g)].slice(1).map(m => [...m[1].matchAll(/<td>(.*?)<\/td>/g)].map(c => c[1]));
    const ssb = +cells[0][0], sse = cells[1][0] === '?' ? +cells[2][0] - ssb : +cells[1][0];
    const F = (ssb / (k - 1)) / (sse / (N - k));
    close(+plain(o.a).match(/F = (\d+(?:\.\d+)?)/)[1], F, 0.001);
    assert.equal(/Do not reject/.test(E(o.a)), !(F > fQ(k - 1, N - k)));
    const done = [...o.a.matchAll(/<td>(.*?)<\/td>/g)].map(c => c[1]);
    assert.deepEqual(done.slice(0, 3).map(Number), [ssb, k - 1, ssb / (k - 1)]);
  });
});

const fdmAns = o => { const m = E(o.a).match(/exact = ([-\d.]+); approx\. ≈ ([-\d.]+); error = (\d+(?:\.\d+)?)/); return m.slice(1).map(Number); };
const checkFdm = (o, exact, approx) => { const [ex, ap, er] = fdmAns(o); close(ex, exact, 6e-5); close(ap, approx, 6e-5); close(er, Math.abs(exact - approx), 1.2e-4); };
test('MATH 442 — finite-difference derivatives uₓ, uₜ, uₓₓ, uₜₜ', () => {
  for (const d of DIFFS) times(200, () => {
    for (const t of ['fdFirstX', 'fdFirstT']) {
      const o = G[t](d), q = E(o.q), type = q.match(/the (\w+) difference/)[1], h = +q.match(/[hk] = (\d+(?:\.\d+)?)/)[1];
      const v0 = +q.match(/\((\d+)\) for/)[1], m = q.match(/= (\d*)[xt]\^(\d+)\./), c = m[1] ? +m[1] : 1, p = +m[2], u = s => c * s ** p;
      const approx = type === 'forward' ? (u(v0 + h) - u(v0)) / h : type === 'backward' ? (u(v0) - u(v0 - h)) / h : (u(v0 + h) - u(v0 - h)) / (2 * h);
      checkFdm(o, (u(v0 + 1e-6) - u(v0 - 1e-6)) / 2e-6, approx);
    }
    for (const t of ['fdSecondX', 'fdSecondT']) {
      const o = G[t](d), q = E(o.q), h = +q.match(/[hk] = (\d+(?:\.\d+)?)/)[1], v0 = +q.match(/\((\d+)\) for/)[1];
      const c = +(q.match(/= (\d*)[xt]\^4/)[1] || 1), u = s => c * s ** 4 + s * s;
      checkFdm(o, 12 * c * v0 * v0 + 2, (u(v0 + h) - 2 * u(v0) + u(v0 - h)) / (h * h));
    }
  });
});

test('MATH 442 — FDM for ODEs in uₓ, uₜ, uₓₓ, uₜₜ', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.fdmOdeUx(d), q = E(o.q), m = q.match(/h = (\d+(?:\.\d+)?);.*ux = (\d+)x(?:\^(\d+))?; u\(0\) = (\d+)/); m = [m[0], m[2], m[3], m[4], m[1]];
    let c = +m[1], p = m[2] ? +m[2] : 1, u0 = +m[3], h = +m[4], u = u0;
    for (let x = 0; x < 1 - 1e-9; x += h) u += h * c * x ** p;
    checkFdm(o, u0 + simpson(x => c * x ** p, 0, 1), u);

    o = G.fdmOdeUt(d); q = E(o.q); m = q.match(/Δt = (\d+(?:\.\d+)?), and find u\((\d+(?:\.\d+)?)\).*ut = -(\d*)u; u\(0\) = (\d+)/); m = [m[0], m[3], m[4], m[1], m[2]];
    const k = m[1] ? +m[1] : 1, a0 = +m[2], dt = +m[3], T = +m[4]; u = a0;
    for (let t = 0; t < T - 1e-9; t += dt) u -= dt * k * u;
    checkFdm(o, a0 * Math.exp(-k * T), u);

    o = G.fdmOdeUxx(d); q = E(o.q); m = q.match(/h = (\d+(?:\.\d+)?) and find u\((\d+(?:\.\d+)?)\).*u\((\d)\) = (-?\d+)$/); m = [m[0], m[3], m[4], m[1], m[2]];
    const L = +m[1], uL = +m[2], hh = +m[3], x1 = +m[4], A = (uL - L ** 4) / L;   // exact u = x⁴ + A x
    checkFdm(o, x1 ** 4 + A * x1, (uL - hh * hh * 12 * x1 * x1) / 2);

    o = G.fdmOdeUtt(d); q = E(o.q); m = q.match(/Δt = (\d+(?:\.\d+)?), and find u\((\d+(?:\.\d+)?)\).*u\(0\) = (\d+); ut\(0\) = (\d+)/); m = [m[0], m[3], m[4], m[1], m[2]];
    const a = +m[1], b = +m[2], kk = +m[3], T2 = +m[4], f = t => 6 * t;
    const u1 = a + kk * b + kk * kk / 2 * f(0), u2 = 2 * u1 - a + kk * kk * f(kk);
    checkFdm(o, T2 ** 3 + b * T2 + a, u2);
  });
});

test('MATH 442 — FDM for uₜ + c uₓ = 0 and the heat / wave equations', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.fdmAdvection(d), q = E(o.q), m = q.match(/h = (\d+(?:\.\d+)?), k = (\d+(?:\.\d+)?) to find u\((\d+(?:\.\d+)?),.*ut \+ (\d*)ux = 0/); m = [m[0], m[4], m[1], m[2], m[3]];
    const c = m[1] ? +m[1] : 1, h = +m[2], k = +m[3], x = +m[4], r = c * k / h;
    assert.ok(r <= 1, 'CFL');
    checkFdm(o, (x - c * k) ** 2, x * x - r * (x * x - (x - h) ** 2));
    o = G.fdmFamous(d); q = E(o.q); m = q.match(/h = (\d+(?:\.\d+)?), k = (\d+(?:\.\d+)?) take one time step and find u\((\d+(?:\.\d+)?),/);
    const hh = +m[1], kk = +m[2], xi = +m[3], s0 = t => Math.sin(Math.PI * t), d2 = s0(xi + hh) - 2 * s0(xi) + s0(xi - hh);
    if (/heat/.test(q)) checkFdm(o, Math.exp(-(Math.PI ** 2) * kk) * s0(xi), s0(xi) + kk / hh ** 2 * d2);
    else checkFdm(o, Math.cos(Math.PI * kk) * s0(xi), s0(xi) + (kk / hh) ** 2 / 2 * d2);
  });
});

test('MATH 442 — scheme classification and stability', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.fdSchemeClassify(d), q = o.q, r = +E(q).match(/= (\d+(?:\.\d+)?)\)/)[1], a = E(o.a);
    const implicitTerms = (enOnly(q).match(/<sup>n\+1<\/sup>/g) || []).length;
    if (implicitTerms === 1) { assert.match(a, /^Explicit \(FTCS\)/); assert.equal(/unstable/.test(a), r > 0.5); }
    else { assert.match(a, /^Implicit/); assert.match(a, /unconditionally stable/); }
  });
});

test('exam layout — items are split into N questions with parts, in order, none lost', async () => {
  const { groupItems } = await import('../src/helpers.js');
  for (let T = 1; T <= 25; T++) for (let n = 1; n <= 8; n++) {
    const items = [...Array(T).keys()], g = groupItems(items, n);
    assert.equal(g.length, Math.min(n, T));
    assert.deepEqual(g.flat(), items);
    const sizes = g.map(x => x.length);
    assert.ok(Math.max(...sizes) - Math.min(...sizes) <= 1);
  }
});

test('full statistical tables: computed F points match the printed F table; Φ is accurate', async () => {
  const { fQuantile05, Phi, F_TABLE_05 } = await import('../src/viz.js');
  for (const d2 of Object.keys(F_TABLE_05).map(Number)) F_TABLE_05[d2].forEach((c, i) =>
    assert.ok(Math.abs(fQuantile05(i + 1, d2) - c) < 0.0051, `F(${i + 1}, ${d2})`));
  for (const z of [0, 0.5, 1, 1.645, 1.96, 2.576, 3.4]) close(Phi(z), 0.5 + simpson(normPdf, 0, z, 4000), 1e-9);
  close(Phi(-1.96), 1 - Phi(1.96), 1e-12);
});

/* ================= QM 102 — Principles of Quantitative Methods (2) ================= */
// membership test for interval notation like "[-3, 5)", "(-∞, 2]", "(-∞, -3] ∪ [1, ∞)"
function inIntervals(txt, x) {
  return txt.split('∪').some(part => {
    const m = part.trim().match(/^([[(])\s*(-?∞|-?\d+(?:\.\d+)?),\s*(-?∞|-?\d+(?:\.\d+)?)\s*([\])])$/);
    const lo = m[2].includes('∞') ? -Infinity : +m[2], hi = m[3].includes('∞') ? Infinity : +m[3];
    return (m[1] === '[' ? x >= lo : x > lo) && (m[4] === ']' ? x <= hi : x < hi);
  });
}
const ivText = html => plain(html).replace(/&infin;/g, '∞').replace(/&cup;/g, '∪').trim();
const QM = ['numberSets', 'intervalNotation', 'breakEven', 'absEquation', 'absInequality', 'functionDomain', 'funcOps', 'evenOdd',
  'inverseFunction', 'gaussJordan', 'matrixSubtract', 'inverseSolve', 'complexAdd', 'complexMultiply', 'inverse2'];

test('QM 102 — every topic has bilingual worked steps', () => {
  for (const t of QM) for (const d of DIFFS) times(40, () => {
    const o = G[t](d);
    assert.ok(o.s && o.s.includes('<ol class="steps">'), t);
    assert.ok(!/NaN|undefined|Infinity/.test(o.q + o.a + o.s), t);
  });
});

test('QM 102 — number sets follow ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, ℚ and ℚ′ disjoint', () => {
  for (const d of DIFFS) times(200, () => {
    const sets = plain(G.numberSets(d).a).split(', ');
    assert.ok(sets.includes('ℝ'));
    if (sets.includes('ℕ')) assert.ok(sets.includes('ℤ'));
    if (sets.includes('ℤ')) assert.ok(sets.includes('ℚ'));
    assert.notEqual(sets.includes('ℚ'), sets.includes('ℚ′'));
  });
});

test('QM 102 — interval notation describes the same set as the inequality', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.intervalNotation(d), q = E(o.q).replace('Write in interval notation: ', '');
    const ops = { '&lt;': (u, v) => u < v, '&le;': (u, v) => u <= v, '&gt;': (u, v) => u > v, '&ge;': (u, v) => u >= v };
    let pred, m;
    if ((m = q.match(/^(-?\d+) (&lt;|&le;) x (&lt;|&le;) (-?\d+)$/))) pred = x => ops[m[2]](+m[1], x) && ops[m[3]](x, +m[4]);
    else { m = q.match(/^x (&lt;|&le;|&gt;|&ge;) (-?\d+)$/); pred = x => ops[m[1]](x, +m[2]); }
    for (let x = -12; x <= 16; x += 0.5) assert.equal(inIntervals(ivText(o.a), x), pred(x), `${q} at ${x}`);
  });
});

test('QM 102 — break-even: revenue equals cost', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.breakEven(d), [F, v, p] = ints(E(o.q)), x = val(o.a);
    assert.equal(p * x, F + v * x);
  });
});

test('QM 102 — absolute-value equations and inequalities', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.absEquation(d), m = E(o.q).match(/\|(.*)\| = (\d+)/);
    const a = lin(m[1], 'x'), b = constOf(m[1].replace(/\s/g, '')), c = +m[2];
    for (const x of ints(plain(o.a).split('=')[1])) assert.equal(Math.abs(a * x + b), c);
    o = G.absInequality(d); m = E(o.q).match(/\|(.*)\| (&lt;|&le;|&gt;|&ge;) (\d+)/);
    const a2 = lin(m[1], 'x'), b2 = constOf(m[1].replace(/\s/g, '')), c2 = +m[3];
    const f = { '&lt;': (u) => u < c2, '&le;': (u) => u <= c2, '&gt;': (u) => u > c2, '&ge;': (u) => u >= c2 }[m[2]];
    for (let x = -15; x <= 15; x += 0.25) assert.equal(inIntervals(ivText(o.a), x), f(Math.abs(a2 * x + b2)), `${m[0]} at ${x}`);
  });
});

test('QM 102 — domain of a function', () => {
  for (const d of DIFFS) times(200, () => {
    const o = G.functionDomain(d), raw = enOnly(o.q), dom = ivText(o.a);
    let ok;
    let m;
    if ((m = raw.match(/&radic;\(x([^)]*)\)/))) { const s = constOf(plain(m[1]).replace(/\s/g, '') || '+0'); ok = x => x + s >= 0; }
    else if ((m = raw.match(/&radic;\((-?[^ ]+) &minus; x\)/))) { const a = +plain(m[1]); ok = x => a - x >= 0; }
    else if ((m = raw.match(/class="d">x<sup>2<\/sup> &minus; (\d+)</))) { const k2 = +m[1]; ok = x => x * x !== k2; }
    else if ((m = raw.match(/class="d">x([^<]*)</))) { const s = constOf(plain(m[1]).replace(/\s/g, '')); ok = x => x + s !== 0; }
    else ok = () => true;                                                         // polynomial
    for (let x = -10; x <= 10; x += 0.5) assert.equal(inIntervals(dom, x), ok(x), `${plain(raw)} at ${x}`);
  });
});

test('QM 102 — operations on functions, even/odd, inverse', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.funcOps(d), q = E(o.q);
    const fs = q.match(/f\(x\) = (.*?);/)[1], gs = q.match(/g\(x\) = (.*?) Find/)[1].trim();
    const f = x => lin(fs, 'x') * x + constOf(fs.replace(/\s/g, '')), g = x => x * x + constOf(gs.replace(/\s/g, '').replace('x^2', ''));
    const k = +q.match(/\((-?\d+)\)\.$/)[1], raw = enOnly(o.q);
    const want = raw.includes('(f + g)') ? f(k) + g(k) : raw.includes('&middot;') ? f(k) * g(k) : raw.includes('(f &#8728; g)') ? f(g(k)) : g(f(k));
    assert.equal(val(o.a), want + 0);

    o = G.evenOdd(d); const poly = E(o.q).match(/f\(x\) = (.*) even/)[1].replace(/\s/g, '');
    const P = x => [0, 1, 2, 3, 4, 5].reduce((s, p) => s + (p === 0 ? constOf(poly.replace(/x(\^\d)?/g, 'X')) : coefOf(poly, p === 1 ? 'x' : 'x^' + p)) * x ** p, 0);
    const even = [1, 2, 3].every(x => P(-x) === P(x)), odd = [1, 2, 3].every(x => P(-x) === -P(x));
    assert.equal(plain(enOnly(o.a)), even ? 'Even' : odd ? 'Odd' : 'Neither');

    o = G.inverseFunction(d); q = E(o.q).replace('Find the inverse of f(x) = ', '').replace(/\s/g, '');
    const a = lin(q, 'x'), b = constOf(q);
    const fr = o.a.match(/<span class="n">(.*?)<\/span><span class="d">(.*?)<\/span>/);
    const num2 = plain(fr[1]).replace(/\s/g, ''), den = +plain(fr[2]).replace(/\s/g, '');
    const inv = y => (y + constOf(num2)) / den;
    for (const x of [-3, 0, 2, 7]) close(inv(a * x + b), x);
  });
});

test('QM 102 — Gauss–Jordan and inverse-matrix solutions satisfy the system', () => {
  for (const d of DIFFS) times(200, () => {
    for (const t of ['gaussJordan', 'inverseSolve']) {
      const o = G[t](d), rows = E(o.q).split(':').slice(1).join(':').trim().split('; ');
      const sol = ints(plain(o.a).split('=')[1]), vars = ['x', 'y', 'z'].slice(0, sol.length);
      assert.equal(rows.length, sol.length);
      for (const r of rows) { const [lhs, rhs] = r.split(' = ');
        assert.equal(vars.reduce((s, v, i) => s + lin(lhs, v) * sol[i], 0), +rhs, `${t}: ${r}`); }
    }
    const o = G.matrixSubtract(d), q = nums(o.q), a = nums(o.a);
    for (let k = 0; k < 4; k++) assert.equal(a[k], q[k] - q[k + 4]);
  });
});

/* ================= STAT 312 — Probability Theory (2) ================= */
// read a joint pmf table back out of a question: { xs, ys, p[j][i] }
function readJoint(html) {
  const t = String(html).match(/<table class="stbl joint">(.*?)<\/table>/)[1];
  const rows = [...t.matchAll(/<tr>(.*?)<\/tr>/g)].map(r => r[1]);
  const xs = [...rows[0].matchAll(/<th>(-?\d+)<\/th>/g)].map(m => +m[1]);
  const ys = [], p = [];
  for (const r of rows.slice(1)) { ys.push(+r.match(/^<th>(-?\d+)<\/th>/)[1]); p.push([...r.matchAll(/<td>(.*?)<\/td>/g)].map(c => fval(c[1]))); }
  return { xs, ys, p };
}
const STAT312 = ['jointConstant', 'jointProb', 'marginalDist', 'conditionalProb', 'jointMoments', 'correlationCoef', 'independenceCheck', 'sumOfRV', 'bivariateNormal', 'multinomialProb'];

test('STAT 312 — bilingual steps and a valid joint pmf in every table question', () => {
  for (const t of STAT312) for (const d of DIFFS) times(40, () => {
    const o = G[t](d);
    assert.ok(o.s && o.s.includes('<ol class="steps">') && !/NaN|undefined|Infinity/.test(o.q + o.a + o.s), t);
    if (o.q.includes('stbl joint')) { const J = readJoint(o.q); close(J.p.flat().reduce((a, b) => a + b, 0), 1); }
  });
});

test('STAT 312 — normalising constant, joint and conditional probabilities, marginals', () => {
  for (const d of DIFFS) times(150, () => {
    let o = G.jointConstant(d), q = E(o.q), c = fval(o.a.replace(/c = /, ''));
    let m;
    if ((m = q.match(/c&middot;xy for 0 &lt; x &lt; (\d+), 0 &lt; y &lt; (\d+)/))) close(c * simpson(x => simpson(y => x * y, 0, +m[2], 200), 0, +m[1], 200), 1, 1e-6);
    else { m = q.match(/c\((\d*)x \+ (\d*)y\) for x = ([\d, ]+) and y = ([\d, ]+) is/);
      const a = m[1] ? +m[1] : 1, b = m[2] ? +m[2] : 1, xs = m[3].split(', ').map(Number), ys = m[4].split(', ').map(Number);
      close(c * xs.reduce((s, x) => s + ys.reduce((t2, y) => t2 + a * x + b * y, 0), 0), 1); }

    o = G.jointProb(d); let J = readJoint(o.q); q = E(o.q); let want = 0;
    if ((m = q.match(/Find P\(X = (\d), Y = (\d)\)/))) want = J.p[J.ys.indexOf(+m[2])][J.xs.indexOf(+m[1])];
    else if ((m = q.match(/Find P\(X \+ Y &le; (\d)\)/))) J.ys.forEach((y, j) => J.xs.forEach((x, i) => { if (x + y <= +m[1]) want += J.p[j][i]; }));
    else { m = q.match(/Find P\(X &le; (\d), Y = (\d)\)/); J.xs.forEach((x, i) => { if (x <= +m[1]) want += J.p[J.ys.indexOf(+m[2])][i]; }); }
    close(fval(o.a), want);

    o = G.conditionalProb(d); J = readJoint(o.q); m = E(o.q).match(/P\(X = (\d) \| Y = (\d)\)/);
    const j = J.ys.indexOf(+m[2]), i = J.xs.indexOf(+m[1]);
    close(fval(o.a), J.p[j][i] / J.p[j].reduce((a, b) => a + b, 0));

    o = G.marginalDist(d); J = readJoint(o.q); const ofX = /distribution of X/.test(E(o.q));
    const parts = [...o.a.matchAll(/\((\d)\) = (.*?)(?=, &nbsp;|<\/b>)/g)];
    for (const [, v, html] of parts) {
      const marg = ofX ? J.ys.reduce((s, _, jj) => s + J.p[jj][J.xs.indexOf(+v)], 0) : J.p[J.ys.indexOf(+v)].reduce((a, b) => a + b, 0);
      close(fval(html), marg);
    }
    assert.equal(parts.length, ofX ? J.xs.length : J.ys.length);
  });
});

test('STAT 312 — covariance, correlation and independence', () => {
  const mom = J => { let EX = 0, EY = 0, EXY = 0, EX2 = 0, EY2 = 0;
    J.ys.forEach((y, j) => J.xs.forEach((x, i) => { const p = J.p[j][i]; EX += x * p; EY += y * p; EXY += x * y * p; EX2 += x * x * p; EY2 += y * y * p; }));
    return { cov: EXY - EX * EY, vx: EX2 - EX * EX, vy: EY2 - EY * EY }; };
  for (const d of DIFFS) times(150, () => {
    let o = G.jointMoments(d); close(fval(o.a.replace(/Cov\(X, Y\) = /, '')), mom(readJoint(o.q)).cov);
    o = G.correlationCoef(d); const r = mom(readJoint(o.q));
    close(+plain(o.a).match(/(-?\d+(?:\.\d+)?)\s*<?\/?b?>?$/)?.[1] ?? val(o.a), r.cov / Math.sqrt(r.vx * r.vy), 6e-5);
    o = G.independenceCheck(d); const J = readJoint(o.q);
    const mx = J.xs.map((_, i) => J.ys.reduce((s, _, j) => s + J.p[j][i], 0)), my = J.p.map(row => row.reduce((a, b) => a + b, 0));
    const indep = J.ys.every((_, j) => J.xs.every((_, i) => Math.abs(J.p[j][i] - mx[i] * my[j]) < 1e-12));
    assert.equal(plain(enOnly(o.a)), indep ? 'Independent' : 'Not independent');
  });
});

test('STAT 312 — aX + bY, bivariate normal, multinomial', () => {
  for (const d of DIFFS) times(150, () => {
    let o = G.sumOfRV(d), q = E(o.q);
    const [ex, ey, vx, vy, cov] = ['E\\(X\\)', 'E\\(Y\\)', 'Var\\(X\\)', 'Var\\(Y\\)', 'Cov\\(X, Y\\)'].map(k => +q.match(new RegExp(k + ' = (-?\\d+)'))[1]);
    const W = q.match(/W = (.*)\.$/)[1].replace(/\s/g, ''), a = coefOf(W, 'X'), b = coefOf(W, 'Y');
    const [mE, mV] = ints(plain(o.a).replace(/\(W\)/g, ''));
    assert.equal(mE, a * ex + b * ey + 0); assert.equal(mV, a * a * vx + b * b * vy + 2 * a * b * cov + 0);

    o = G.bivariateNormal(d); q = E(o.q);
    const g = k => +q.match(new RegExp(k + ' = (-?\\d+(?:\\.\\d+)?)'))[1];
    const [mx, my, sx, sy, rho] = ['μX', 'μY', 'σX', 'σY', 'ρ'].map(g), x = +q.match(/X = (-?\d+)\)/)[1];
    const cm = my + rho * sy / sx * (x - mx), cv = sy * sy * (1 - rho * rho), A = plain(o.a);
    if (/Var/.test(A)) { const [, m1, v1] = A.match(/= (-?[\d.]+), Var\(Y \| X = -?\d+\) = ([\d.]+)/); close(+m1, cm, 6e-5); close(+v1, cv, 6e-5); }
    else { const y = +q.match(/P\(Y &le; (-?\d+)/)[1], z = +A.match(/z = (-?[\d.]+)/)[1];
      close(z, (y - cm) / Math.sqrt(cv), 0.0051); close(+A.match(/P &asymp; ([\d.]+)/)[1], 0.5 + Math.sign(z) * simpson(normPdf, 0, Math.abs(z), 2000), 6e-5); }

    o = G.multinomialProb(d); q = o.q;
    const ps = fracs(enOnly(q)), [n] = ints(E(o.q).match(/In (\d+) independent/)[0]), xs = ints(E(o.q).match(/P\((.*)\)\.$/)[1].replace(/X\d/g, ''));
    const coef = fact(n) / xs.reduce((s, k) => s * fact(k), 1);
    close(fval(o.a), coef * xs.reduce((s, k, i) => s * ps[i] ** k, 1), 1e-12);
  });
});

/* ---- STAT 361 Operations Research ---- */
// every "stbl ortbl" table as rows of English cell text
const readTbls = html => [...String(html).matchAll(/<table class="stbl ortbl">(.*?)<\/table>/g)].map(t =>
  [...t[1].matchAll(/<tr>(.*?)<\/tr>/g)].map(r => [...r[1].matchAll(/<t[hd][^>]*>(.*?)<\/t[hd]>/g)].map(c => E(c[1]))));
const num0 = s => +String(s).replace(/−|&minus;/g, '-');
// LP in the question: objective + constraints, coefficient 1 may be omitted
function readLP(html) {
  const s = E(html).replace(/&le;/g, '≤').replace(/&ge;/g, '≥').replace(/x\s*([12])/g, 'x$1'), co = t => t === '' ? 1 : +t;
  const [, kind, c1, c2] = s.match(/(Max|Min) Z = (\d*)x1 \+ (\d*)x2/);
  const rows = [...s.matchAll(/(\d*)x1 \+ (\d*)x2 (≤|≥) (\d+)/g)].map(m => [co(m[1]), co(m[2]), +m[4]]);
  return { min: kind === 'Min', c: [co(c1), co(c2)], rows };
}
// optimum by enumerating all intersections of the constraint lines and the axes
function lpBrute({ min, c, rows }) {
  const lines = [...rows, [1, 0, 0], [0, 1, 0]], ok = (x, y) => x > -1e-9 && y > -1e-9 && rows.every(([a, b, r]) => min ? a * x + b * y >= r - 1e-9 : a * x + b * y <= r + 1e-9);
  let best = null;
  for (let i = 0; i < lines.length; i++) for (let j = i + 1; j < lines.length; j++) {
    const [a1, b1, r1] = lines[i], [a2, b2, r2] = lines[j], D = a1 * b2 - a2 * b1;
    if (!D) continue;
    const x = (r1 * b2 - r2 * b1) / D, y = (a1 * r2 - a2 * r1) / D, z = c[0] * x + c[1] * y;
    if (ok(x, y) && (best === null || (min ? z < best : z > best))) best = z;
  }
  return best;
}
const xsOf = a => { const s = String(a); return [1, 2].map(k => { const m = s.slice(s.indexOf(`x<sub>${k}</sub> = `) + 15); return fval(m.slice(0, m.indexOf(','))); }); };

test('STAT 361 — LP formulation, graphical and simplex reach the true optimum', () => {
  for (const d of DIFFS) times(150, () => {
    let o = G.lpFormulate(d); const t = E(o.q);
    const [a1, a2] = t.match(/needs (\d+) hours on machine 1 and (\d+) hours/).slice(1).map(Number), [b1, b2] = t.match(/B needs (\d+) and (\d+)/).slice(1).map(Number);
    const [p1, p2] = t.match(/profit is (\d+) SAR per unit of A and (\d+)/).slice(1).map(Number);
    const lp = readLP(o.a);
    assert.deepEqual(lp.c, [p1, p2]); assert.deepEqual(lp.rows.map(r => r.slice(0, 2)), [[a1, b1], [a2, b2]]);
    o = G.lpGraphical(d); let P = readLP(o.q); assert.equal(P.rows.length, 2);
    close(+E(o.a).match(/Z = (-?[\d.]+)/)[1], lpBrute(P), 1e-3);
    o = G.simplexMethod(d); P = readLP(o.q); assert.equal(P.rows.length, 2);
    const Z = fval(o.a.slice(o.a.indexOf('Z = ') + 4)), [x1, x2] = xsOf(o.a);
    close(Z, lpBrute(P), 1e-9); close(P.c[0] * x1 + P.c[1] * x2, Z, 1e-9);
    assert.ok(P.rows.every(([a, b, r]) => a * x1 + b * x2 <= r + 1e-9));
  });
});

test('STAT 361 — decision criteria and decision tree', () => {
  for (const d of DIFFS) times(200, () => {
    let o = G.decisionCriteria(d); const q = E(o.q), [T] = readTbls(o.q), P = T.slice(1).map(r => r.slice(1).map(num0));
    const probs = T[0].slice(1).map(h => +(h.match(/\(([\d.]+)\)/) || [0, 0])[1]), al = +(q.match(/α = ([\d.]+)/) || [0, 0])[1];
    const crit = /Maximax/.test(q) ? 'maximax' : /Maximin/.test(q) ? 'maximin' : /Laplace/.test(q) ? 'laplace' : /Hurwicz/.test(q) ? 'hurwicz' : /regret/.test(q) ? 'regret' : 'ev';
    const colMax = P[0].map((_, j) => Math.max(...P.map(r => r[j])));
    const sc = P.map(r => ({ maximax: Math.max(...r), maximin: Math.min(...r), laplace: r.reduce((s, v) => s + v, 0) / r.length,
      hurwicz: al * Math.max(...r) + (1 - al) * Math.min(...r), regret: Math.max(...r.map((v, j) => colMax[j] - v)), ev: r.reduce((s, v, j) => s + v * probs[j], 0) })[crit]);
    const best = crit === 'regret' ? Math.min(...sc) : Math.max(...sc), k = sc.findIndex(v => Math.abs(v - best) < 1e-9);
    assert.equal(sc.filter(v => Math.abs(v - best) < 1e-9).length, 1);
    assert.match(o.a, new RegExp(`A<sub>${k + 1}</sub> \\(`)); close(num0(E(o.a).match(/\((.*)\)/)[1]), best, 1e-3);

    o = G.decisionTree(d); const R2 = readTbls(o.q)[0].slice(1).map(r => r.slice(1).map(num0));
    const emv = R2.map(([p, hi, lo]) => p * hi + (1 - p) * lo), j = emv.indexOf(Math.max(...emv));
    assert.match(o.a, new RegExp(`A<sub>${j + 1}</sub> \\(EMV`)); close(num0(E(o.a).match(/EMV = (.*)\)/)[1]), emv[j], 1e-6);
  });
});

// cost table, supply and demand from the question; allocations from a solution table
const readTransport = html => { const T = readTbls(html)[0], body = T.slice(1, -1);
  return { C: body.map(r => r.slice(1, -1).map(Number)), s: body.map(r => +r.at(-1)), dm: T.at(-1).slice(1, -1).map(Number) }; };
const readAlloc = rows => rows.slice(1, -1).map(r => r.slice(1, -1).map(c => /^\d+ \(/.test(c) ? +c.split(' ')[0] : 0));
function checkAlloc({ C, s, dm }, x, cost) {
  x.forEach((r, i) => assert.equal(r.reduce((a, b) => a + b, 0), s[i]));
  dm.forEach((v, j) => assert.equal(x.reduce((a, r) => a + r[j], 0), v));
  assert.equal(x.reduce((t, r, i) => t + r.reduce((u, q, j) => u + q * C[i][j], 0), 0), cost);
  assert.ok(x.flat().filter(v => v > 0).length <= s.length + dm.length - 1);
}
test('STAT 361 — transportation: northwest corner, least cost, Vogel, comparison', () => {
  const costOf = a => +E(a).match(/= (\d+)/)[1];
  for (const d of DIFFS) times(150, () => {
    for (const k of ['transportNW', 'transportLeastCost', 'transportVogel']) {
      const o = G[k](d), T = readTransport(o.q), tabs = readTbls(o.s);
      assert.equal(T.s.reduce((a, b) => a + b, 0), T.dm.reduce((a, b) => a + b, 0));
      const x = readAlloc(tabs.at(-1)), cost = costOf(o.a);
      checkAlloc(T, x, cost);
      if (k === 'transportNW') {                                   // independent northwest-corner run
        const S = [...T.s], D = [...T.dm]; let i = 0, j = 0, c = 0;
        while (i < S.length && j < D.length) { const q = Math.min(S[i], D[j]); c += q * T.C[i][j]; S[i] -= q; D[j] -= q; const a = !S[i], b = !D[j]; if (a) i++; if (b) j++; }
        assert.equal(cost, c);
      }
      if (k === 'transportLeastCost') {                            // the cheapest cell always gets the most it can
        const [i0, j0] = T.C.flatMap((r, i) => r.map((v, j) => [i, j])).sort((a, b) => T.C[a[0]][a[1]] - T.C[b[0]][b[1]])[0];
        if (T.C.flat().filter(v => v === T.C[i0][j0]).length === 1) assert.equal(x[i0][j0], Math.min(T.s[i0], T.dm[j0]));
      }
    }
    const o = G.transportCompare(d), T = readTransport(o.q), tabs = readTbls(o.s);
    const costs = E(o.a).match(/NW = (\d+); Least cost = (\d+); Vogel = (\d+)/).slice(1).map(Number);
    tabs.forEach((t, i) => checkAlloc(T, readAlloc(t), costs[i]));
  });
});

test('STAT 361 — Hungarian method gives the cheapest assignment', () => {
  const perms = n => n === 1 ? [[0]] : perms(n - 1).flatMap(p => [...Array(n).keys()].map(k => [...p.slice(0, k), n - 1, ...p.slice(k)]));
  for (const d of DIFFS) times(150, () => {
    const o = G.assignmentHungarian(d), C = readTbls(o.q)[0].slice(1).map(r => r.slice(1).map(Number));
    const best = Math.min(...perms(C.length).map(p => p.reduce((s, j, i) => s + C[i][j], 0)));
    const pairs = [...o.a.matchAll(/W<sub>(\d)<\/sub>&rarr;J<sub>(\d)<\/sub>/g)].map(m => [+m[1] - 1, +m[2] - 1]);
    assert.equal(pairs.length, C.length);
    assert.equal(new Set(pairs.map(p => p[1])).size, C.length);
    assert.equal(pairs.reduce((s, [i, j]) => s + C[i][j], 0), best);
    assert.equal(+E(o.a).match(/= (\d+)/)[1], best);
  });
});

test('every topic has worked steps (used by worked examples and the booklet)', () => {
  const topics = [...new Set(CURRICULUM.flatMap(m => m.courses.flatMap(c => c.topics)))];
  for (const name of topics) for (const d of DIFFS) times(30, () => {
    const o = G[name](d);
    assert.ok(o.s && o.s.includes('<ol class="steps">'), `${name} has no steps`);
    assert.ok(!/NaN|\[object|undefined(?![^<]*<\/b>)/.test(o.s) || /undefined/.test(o.a), `${name} steps: ${o.s.slice(0, 200)}`);
  });
});

test('booklet: every topic has an overview and the cover art is valid SVG', async () => {
  const { INTRO } = await import('../src/intros.js');
  const { coverArt, familyOf } = await import('../src/cover.js');
  const topics = [...new Set(CURRICULUM.flatMap(m => m.courses.flatMap(c => c.topics)))];
  for (const t of topics) { assert.ok(INTRO[t] && INTRO[t][0] && INTRO[t][1], `${t} has no overview`); assert.ok(familyOf(t)); }
  for (const c of CURRICULUM.flatMap(m => m.courses).filter(c => c.topics.length)) {
    const svg = coverArt(c.topics);
    assert.ok(svg.startsWith('<svg') && svg.trim().endsWith('</svg>') && !/NaN|undefined/.test(svg), c.code);
  }
});
