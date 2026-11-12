// The master's programme (501–509): nine courses of 100 lessons each; every written lesson has an overview and a
// bank of questions with an answer, steps and (for multiple choice) wrong answers, in English and Arabic.
import test from 'node:test';
import assert from 'node:assert/strict';
import { MS_COURSES, MS_LESSONS, msKey, msCount } from '../src/masters.js';
import { CURRICULUM, TOPIC_LABELS, TOPIC_LABELS_AR } from '../src/curriculum.js';
import { G } from '../src/generators.js';
import { INTRO } from '../src/intros.js';

const AR = /[؀-ۿ]/;
const ticks = s => (String(s).match(/`/g) || []).length % 2 === 0;
const pairs = x => Array.isArray(x) && x.length === 2 && typeof x[0] === 'string' && typeof x[1] === 'string';
// lessons written so far in each course: the count may only grow
const WRITTEN = { 501: 100, 502: 5, 503: 5, 504: 5, 505: 5, 506: 5, 507: 100, 508: 5, 509: 5 };

test('nine courses, each a road map of 10 units and 100 lessons, listed in the curriculum', () => {
  assert.deepEqual(MS_COURSES.map(c => c.code),
    ['MATH 501', 'MATH 502', 'MATH 503', 'COMP 504', 'COMP 505', 'COMP 506', 'MATH 507', 'MATH 508', 'MATH 509']);
  const level = CURRICULUM.find(l => l.level === "Master's Programme");
  assert.ok(level && level.courses.length === 9);
  for (const c of MS_COURSES) {
    assert.equal(c.units.length, 10, c.code); assert.equal(c.lessons.length, 100, c.code);
    assert.ok(c.title && AR.test(c.ar), c.code);
    for (const [en, ar] of [...c.units, ...c.lessons]) assert.ok(en && ar && !AR.test(en) && AR.test(ar), `${c.code}: ${en}`);
    const cc = level.courses.find(x => x.code === c.code);
    assert.equal(cc.topics.length, 100, c.code);
    cc.topics.forEach((t, i) => { assert.equal(t, msKey(c.num, i + 1)); assert.ok(TOPIC_LABELS[t] && TOPIC_LABELS_AR[t], t); });
  }
});

test('every written lesson belongs to a course, and has a generator and an overview; the others are marked as coming', () => {
  const nums = new Set(MS_COURSES.map(c => c.num));
  for (const key of Object.keys(MS_LESSONS)) {
    const m = /^ms(\d{3})_(\d{3})$/.exec(key);
    assert.ok(m && nums.has(m[1]) && +m[2] >= 1 && +m[2] <= 100, key);
  }
  for (const c of MS_COURSES) {
    let n = 0;
    for (let i = 1; i <= 100; i++) {
      const k = msKey(c.num, i);
      if (MS_LESSONS[k]) { n++; assert.equal(typeof G[k], 'function', k); assert.ok(INTRO[k] && INTRO[k][0] && INTRO[k][1], k); }
      else assert.equal(G[k], undefined, k);
    }
    assert.ok(n >= WRITTEN[c.num], `${c.code}: ${n} lessons written, expected at least ${WRITTEN[c.num]}`);
  }
});

test('lesson content: bilingual text, balanced math marks, answers, steps and distinct wrong answers', () => {
  for (const [key, le] of Object.entries(MS_LESSONS)) {
    assert.ok(Array.isArray(le.x) && le.x.length >= 2, `${key}: overview`);
    for (const e of le.x) {
      if (typeof e === 'string') { assert.ok(e.trim(), key); continue; }
      assert.ok(pairs(e) && !AR.test(e[0].replace(/`[^`]*`/g, '')) && AR.test(e[1]), `${key}: overview line ${e[0].slice(0, 60)}`);
      assert.ok(ticks(e[0]) && ticks(e[1]), `${key}: unbalanced math marks in the overview: ${e[0].slice(0, 60)}`);
    }
    assert.ok(le.q.length >= 4, `${key}: only ${le.q.length} questions`);
    assert.equal(new Set(le.q.map(q => q.en + (q.c || ''))).size, le.q.length, `${key}: repeated question`);   // the same words with different code are different questions
    for (const q of le.q) {
      const where = `${key}: ${q.en.slice(0, 70)}`;
      assert.ok(q.en && AR.test(q.ar) && !AR.test(q.en.replace(/`[^`]*`/g, '')), where);
      assert.ok(ticks(q.en) && ticks(q.ar), `${where}: unbalanced math marks`);
      assert.ok(typeof q.a === 'string' ? q.a.trim() : pairs(q.a), `${where}: answer`);
      if (pairs(q.a)) assert.ok(ticks(q.a[0]) && ticks(q.a[1]) && AR.test(q.a[1]), `${where}: answer`);
      assert.ok(Array.isArray(q.s), where);
      for (const st of q.s) assert.ok(typeof st === 'string' ? st.trim() : pairs(st) && ticks(st[0]) && ticks(st[1]) && (AR.test(st[1]) || st[0] === st[1]), `${where}: step ${JSON.stringify(st).slice(0, 80)}`);
      if (q.w) {
        const key2 = x => JSON.stringify(x);
        assert.ok(q.w.length >= 1 && new Set(q.w.map(key2)).size === q.w.length, `${where}: wrong answers`);
        assert.ok(!q.w.some(x => key2(x) === key2(q.a)), `${where}: a wrong answer equals the answer`);
      }
    }
  }
});

test('the course files hold lesson data only, not computed strings', async () => {
  const fs = await import('node:fs');
  for (const f of fs.readdirSync(new URL('../src/', import.meta.url)).filter(f => /^ms\d{3}\.js$/.test(f))) {
    const src = fs.readFileSync(new URL(`../src/${f}`, import.meta.url), 'utf8');
    const m = src.match(/'\s*\.(replace|map|length|concat|slice)\b/);
    assert.ok(!m, `${f}: a lesson string is computed (${m && m[0]}): write the text out`);
  }
});

// a plain math string is shown as it is in both languages, so it must not carry English words
const MATHWORD = /^(sinh|cosh|tanh|sign|sgn|gcd|lcm|log|max|min|exp|erf|erfc|arg|det|diag|span|dim|deg|mod|sup|inf|lim|cond|rank|trace|const|Var|Cov)$/;
test('plain math strings carry no English words (they are shown unchanged in Arabic)', () => {
  for (const [key, le] of Object.entries(MS_LESSONS)) {
    const strs = [...le.x.filter(e => typeof e === 'string')];
    for (const q of le.q) strs.push(...[q.a, ...q.s, ...(q.w || [])].filter(e => typeof e === 'string'));
    for (const s of strs) {
      if (s[0] === '$') continue;                                                     // a block of code
      const bad = (s.replace(/#[frm]\{/g, '{').match(/[A-Za-z]{4,}/g) || []).filter(x => !MATHWORD.test(x));
      assert.equal(bad.length, 0, `${key}: "${bad.join(', ')}" in ${s.slice(0, 80)}`);
    }
  }
});

test('every question renders: no leftover markup, undefined or NaN; a sheet goes through the whole bank before repeating', () => {
  for (const key of Object.keys(MS_LESSONS)) {
    const n = msCount(key), seen = new Set();
    for (let i = 0; i < n; i++) {
      const o = G[key](2);
      for (const part of [o.q, o.a, o.s, ...(o.w || [])]) {
        assert.ok(typeof part === 'string' && !/undefined|NaN|\[object/.test(part), `${key}: ${String(part).slice(0, 120)}`);
        assert.ok(!/#[frm]\{|[\^_]\{/.test(part.replace(/<code[\s\S]*?<\/code>/g, '')), `${key}: leftover markup in ${part.slice(0, 160)}`);
      }
      assert.ok(o.s.includes('<ol class="steps">'), key);
      seen.add(o.q);
    }
    assert.equal(seen.size, n, `${key}: the bank repeats before it is used up`);
  }
});
