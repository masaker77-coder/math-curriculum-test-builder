/* ======================= MASTER'S PROGRAMME: the shared core =======================
   Nine courses (501–509), each a road map of 100 lessons in 10 units, from zero to mastery.
   A lesson is a topic like any other: an overview (the explanation) and a bank of worked examples and exercises.
   The definitions, theorems and laws follow the notation of the code-enhancement project
   (Mapped Legendre Spectral Guide / Code Guide and the Orthogonal Polynomials Lab):
   D^{-μ} (Riemann–Liouville integral, Definition 2.1), ^C D^{ζ} (Caputo), Lemma 2.1, L_i^γ, L_n^λ, E_{n,r},
   Theorem 3.1 (D^(2)), Theorem 3.2 (χ_{-μ}^λ), the integrated form and the collocation system.

   Authoring markup (kept tiny so lessons stay readable):
     math:  x^2  a_k  ^{...}  _{...}  #f{num}{den} (fraction)  #r{x} (square root)  #m{a, b ;; c, d} (matrix)
     text:  [English, Arabic] where `...` is math and ``...`` is code
     a line that starts with $ is a block of code. */
import { L, Li, M, steps } from './viz.js';

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const fr = (a,b) => `<span class="frac"><span class="n">${a}</span><span class="d">${b}</span></span>`;
const rt = x => `&radic;<span style="border-top:1.2px solid currentColor;padding:0 2px">${x}</span>`;
/* #m{a, b ;; c, d}: a matrix; entries are separated by commas and rows by ;; */
const mt = body => { const rows = body.split(';;').map(r => r.split(',').map(c => c.trim())), n = rows[0].length;
  return `<span class="mat"${n === 2 ? '' : ` style="grid-template-columns:repeat(${n},auto)"`}>${rows.map(r => r.map(c => `<span>${c}</span>`).join('')).join('')}</span>`; };
export function tx(s){
  s = esc(s).replace(/-/g,'−');
  s = s.replace(/([\^_])(−?\d+(?:\.\d+)?|[A-Za-zα-ωΑ-Ω∞′*])/g, (m,c,t) => c==='^' ? `<sup>${t}</sup>` : `<sub>${t}</sub>`);
  let p;
  do{ p = s;
    s = s.replace(/#f\{([^{}]*)\}\{([^{}]*)\}/g, (m,a,b) => fr(a,b)).replace(/#r\{([^{}]*)\}/g, (m,a) => rt(a)).replace(/#m\{([^{}]*)\}/g, (m,a) => mt(a))
         .replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>').replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>');
  }while(s !== p);
  return s;
}
const codeBlock = s => `<code class="ms-code" dir="ltr">${esc(s.replace(/^\$ ?/,''))}</code>`;
/* inline math inside a sentence: a short formula is kept on one line, so that `M = 1` is never split between two lines */
const Mi = h => h.indexOf('class="mat"') < 0 && h.replace(/<[^>]*>/g,'').replace(/&[#\w]+;/g,'x').length <= 24 ? `<bdi dir="ltr" style="white-space:nowrap">${h}</bdi>` : M(h);
const txt = s => String(s).replace(/``([^`]+)``/g, (_,c) => `<code class="ms-ic" dir="ltr">${esc(c)}</code>`).replace(/`([^`]+)`/g, (_,m) => Mi(tx(m)));
const isCode = x => typeof x === 'string' && x[0] === '$';
const mathLine = x => isCode(x) ? codeBlock(x) : `<span class="ms-f">${M(tx(x))}</span>`;
const stepHTML = x => typeof x === 'string' ? (isCode(x) ? codeBlock(x) : M(tx(x))) : L(txt(x[0]), txt(x[1]));
const ansHTML = a => typeof a === 'string' ? (isCode(a) ? `<code class="ms-ic" dir="ltr">${esc(a.replace(/^\$ ?/,''))}</code>` : M(tx(a))) : Li(txt(a[0]), txt(a[1]));

export const MS_COURSES = [];      // { num, code, title, ar, units:[[en,ar]×10], lessons:[[en,ar]×100] }
export const MS_LESSONS = {};      // key → { x:[overview lines], q:[items] }
export const msKey = (num, n) => `ms${num}_${String(n).padStart(3,'0')}`;
export const isLesson = t => /^ms\d{3}_\d{3}$/.test(String(t));

export function course(num, code, title, ar, map){
  const units = [], lessons = [];
  map.trim().split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
    const unit = l[0] === '#', [en, a] = l.replace(/^#\s*/,'').split(/\s\|\s/).map(s => s.trim());   // ' | ' separates the two languages; |x| stays
    (unit ? units : lessons).push([en, a || en]);
  });
  MS_COURSES.push({ num, code, title, ar, units, lessons });
}
/* one question of a lesson: text (English, Arabic), answer, solution steps, wrong answers for multiple choice, code shown with the question */
export const Q = (en, ar, a, s, w, c) => ({ en, ar, a, s: s || [], w, c });
export const lesson = (num, n, x, q) => { MS_LESSONS[msKey(num, n)] = { x, q }; };

/* the overview of a lesson as [English HTML, Arabic HTML] */
export function msIntro(key){
  const le = MS_LESSONS[key];
  const side = k => le.x.map(e => typeof e === 'string' ? mathLine(e) : `<span class="ms-p">${txt(e[k])}</span>`).join('');
  return [side(0), side(1)];
}
/* one item of a lesson's bank, as the generators return it: { q, a, s, w, o } */
export function msItem(key, i){
  const it = MS_LESSONS[key].q[i];
  return { q: L(txt(it.en), txt(it.ar)) + (it.c ? codeBlock(it.c) : ''), a: `<b>${ansHTML(it.a)}</b>`,
           s: steps(...it.s.map(stepHTML)), w: it.w ? it.w.map(ansHTML) : null, o: i };   // o: the item's place in the lesson
}
export const msCount = key => MS_LESSONS[key].q.length;
