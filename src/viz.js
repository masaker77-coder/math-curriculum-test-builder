/* ============================ VIZ: bilingual text, worked steps, SVG graphs, stat tables ============================ */
/* Pure string builders (no DOM), so generators stay testable in Node. */

/* ---- bilingual text ----
   L(en, ar) emits both languages; CSS shows one or both depending on the chosen interface language.
   M(math) isolates a math fragment inside Arabic text so it keeps left-to-right order. */
export const L = (en, ar) => `<span class="i18n"><span lang="en" dir="ltr">${en}</span><span lang="ar" dir="rtl">${ar}</span></span>`;
export const M = s => `<bdi dir="ltr">${s}</bdi>`;
/* inline variant for short labels inside an answer: in English + عربي mode it reads “exact / التام” on one line */
export const Li = (en, ar) => `<span class="i18n in"><span lang="en" dir="ltr">${en}</span><span lang="ar" dir="rtl">${ar}</span></span>`;

/* stacked, aligned math: rows are [left, relation, right] (aligned on the relation) or a plain string.
   brace=true draws a left brace, as for a system of equations. A hidden "; " between rows keeps copied text readable. */
export function align(rows, brace=false){
  const cells = rows.map((r,i)=>{
    const sep = i<rows.length-1 ? '<span class="sep">; </span>' : '';
    return Array.isArray(r) ? `<span class="l">${r[0]}</span><span class="r"> ${r[1]} </span><span class="v">${r[2]}${sep}</span>`
                            : `<span class="w">${r}${sep}</span>`;
  }).join('');
  return `<span class="eqs${brace?' brace':''}" dir="ltr" style="--rows:${rows.length}">${cells}</span>`;
}

/* numbered list of worked-solution steps; each step is HTML (usually built with L) */
export const steps = (...items) => `<ol class="steps">${items.filter(Boolean).map(s=>`<li>${s}</li>`).join('')}</ol>`;

/* round for display: up to `dp` decimals, no trailing zeros, real minus sign */
export function num(v, dp=4){
  const r = +(+v).toFixed(dp) + 0;
  return r<0 ? '&minus;'+Math.abs(r) : ''+r;
}

/* ---- SVG plotting ---- */
const esc = s => String(s).replace(/&(?![a-z#0-9]+;)/gi,'&amp;');
/* plot({x:[x0,x1], y:[y0,y1], curves:[{f,cls}], fills:[{f,a,b,cls}], points:[{x,y,label,cls}], vlines:[{x,label,cls}], segs:[{x1,y1,x2,y2,cls}]}) */
export function plot({x, y, w=320, h=200, curves=[], fills=[], polys=[], points=[], vlines=[], segs=[], ticks=true}){
  const [x0,x1]=x, [y0,y1]=y, pad=22;
  // left margin wide enough for the longest y tick label (e.g. 25000)
  const yw=Math.max(...[y0,y1].map(v=>String(Math.round(Math.abs(v))).length+(v<0?1:0))), padL=Math.max(pad, 6*yw+12);
  const X=v=>padL+(v-x0)/(x1-x0)*(w-padL-pad), Y=v=>h-pad-(v-y0)/(y1-y0)*(h-2*pad);
  const out=[];
  for(const F of fills){                                                // shaded area under f on [a, b]
    const n=60, pts=[]; for(let i=0;i<=n;i++){ const t=F.a+(F.b-F.a)*i/n; pts.push(`${X(t).toFixed(1)},${Y(Math.min(y1,Math.max(y0,F.f(t)))).toFixed(1)}`); }
    out.push(`<polygon class="${F.cls||'shade'}" points="${X(F.a).toFixed(1)},${Y(Math.max(y0,0)).toFixed(1)} ${pts.join(' ')} ${X(F.b).toFixed(1)},${Y(Math.max(y0,0)).toFixed(1)}"/>`);
  }
  for(const P of polys)                                                  // shaded polygon in data coordinates (e.g. a feasible region)
    out.push(`<polygon class="${P.cls||'shade'}" points="${P.pts.map(([u,v])=>`${X(Math.min(x1,Math.max(x0,u))).toFixed(1)},${Y(Math.min(y1,Math.max(y0,v))).toFixed(1)}`).join(' ')}"/>`);
  // axes
  if(y0<=0&&y1>=0) out.push(`<line class="ax" x1="${padL}" x2="${w-pad}" y1="${Y(0)}" y2="${Y(0)}"/>`);
  if(x0<=0&&x1>=0) out.push(`<line class="ax" y1="${pad}" y2="${h-pad}" x1="${X(0)}" x2="${X(0)}"/>`);
  if(ticks){
    const step=v=>{ const r=v/8, p=10**Math.floor(Math.log10(r)), m=r/p; return (m<1.5?1:m<3.5?2:m<7.5?5:10)*p; };
    const sx=step(x1-x0), sy=step(y1-y0), yAx=(y0<=0&&y1>=0)?Y(0):h-pad, xAx=(x0<=0&&x1>=0)?X(0):padL;
    for(let t=Math.ceil(x0/sx)*sx;t<=x1+1e-9;t+=sx) if(Math.abs(t)>1e-9)
      out.push(`<line class="tk" x1="${X(t)}" x2="${X(t)}" y1="${yAx-3}" y2="${yAx+3}"/><text class="tl" x="${X(t)}" y="${yAx+13}" text-anchor="middle">${+t.toFixed(6)}</text>`);
    for(let t=Math.ceil(y0/sy)*sy;t<=y1+1e-9;t+=sy) if(Math.abs(t)>1e-9)
      out.push(`<line class="tk" y1="${Y(t)}" y2="${Y(t)}" x1="${xAx-3}" x2="${xAx+3}"/><text class="tl" x="${xAx-5}" y="${Y(t)+3}" text-anchor="end">${+t.toFixed(6)}</text>`);
  }
  for(const C of curves){                                               // function graphs, broken where they leave the box
    const n=160; let d='', pen=false;
    for(let i=0;i<=n;i++){ const t=x0+(x1-x0)*i/n, v=C.f(t);
      if(!isFinite(v)||v<y0-(y1-y0)||v>y1+(y1-y0)){ pen=false; continue; }
      d+=`${pen?'L':'M'}${X(t).toFixed(1)},${Y(v).toFixed(1)}`; pen=true; }
    out.push(`<path class="${C.cls||'c1'}" d="${d}"/>`);
  }
  for(const S of segs) out.push(`<line class="${S.cls||'c2'}" x1="${X(S.x1)}" y1="${Y(S.y1)}" x2="${X(S.x2)}" y2="${Y(S.y2)}"/>`);
  for(const V of vlines) out.push(`<line class="${V.cls||'vl'}" x1="${X(V.x)}" x2="${X(V.x)}" y1="${pad}" y2="${h-pad}"/>`+
    (V.label?`<text class="lb" x="${X(V.x)}" y="${pad-6}" text-anchor="middle">${esc(V.label)}</text>`:''));
  for(const P of points) out.push(`<circle class="${P.cls||'pt'}" cx="${X(P.x)}" cy="${Y(P.y)}" r="3.5"/>`+
    (P.label?`<text class="lb" x="${X(P.x)+6}" y="${Y(P.y)-6}">${esc(P.label)}</text>`:''));
  return `<svg class="plot" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">${out.join('')}</svg>`;
}

/* number line for an inequality solution: x (op) k, op in '<','>','<=','>=' */
export function numberLine(k, op){
  const w=320, h=56, lo=k-6, hi=k+6, X=v=>20+(v-lo)/(hi-lo)*(w-40), y=26, out=[];
  out.push(`<line class="ax" x1="12" x2="${w-12}" y1="${y}" y2="${y}"/>`);
  for(let t=lo;t<=hi;t++) out.push(`<line class="tk" x1="${X(t)}" x2="${X(t)}" y1="${y-4}" y2="${y+4}"/><text class="tl" x="${X(t)}" y="${y+18}" text-anchor="middle">${t}</text>`);
  const right=op[0]==='>', end=right?w-12:12;
  out.push(`<line class="ray" x1="${X(k)}" x2="${end}" y1="${y}" y2="${y}"/>`);
  out.push(`<polygon class="rayhead" points="${end},${y} ${end+(right?-9:9)},${y-5} ${end+(right?-9:9)},${y+5}"/>`);
  out.push(`<circle class="${op.length>1?'dot-closed':'dot-open'}" cx="${X(k)}" cy="${y}" r="5"/>`);
  return `<svg class="plot nl" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">${out.join('')}</svg>`;
}

/* number line for |x − h| < c (segment lo..hi) or |x − h| > c (two outward rays); closed = endpoints included */
export function intervalLine(lo, hi, closed, outside){
  const w=320, h=56, a=Math.floor(lo)-3, b=Math.ceil(hi)+3, X=v=>20+(v-a)/(b-a)*(w-40), y=26, out=[];
  out.push(`<line class="ax" x1="12" x2="${w-12}" y1="${y}" y2="${y}"/>`);
  for(let t=a;t<=b;t++) out.push(`<line class="tk" x1="${X(t)}" x2="${X(t)}" y1="${y-4}" y2="${y+4}"/><text class="tl" x="${X(t)}" y="${y+18}" text-anchor="middle">${t}</text>`);
  if(!outside) out.push(`<line class="ray" x1="${X(lo)}" x2="${X(hi)}" y1="${y}" y2="${y}"/>`);
  else out.push(`<line class="ray" x1="${X(lo)}" x2="12" y1="${y}" y2="${y}"/><polygon class="rayhead" points="12,${y} 21,${y-5} 21,${y+5}"/>`,
                `<line class="ray" x1="${X(hi)}" x2="${w-12}" y1="${y}" y2="${y}"/><polygon class="rayhead" points="${w-12},${y} ${w-21},${y-5} ${w-21},${y+5}"/>`);
  for(const v of [lo,hi]) out.push(`<circle class="${closed?'dot-closed':'dot-open'}" cx="${X(v)}" cy="${y}" r="5"/>`);
  return `<svg class="plot nl" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">${out.join('')}</svg>`;
}

/* augmented matrix [A | b]: rows of HTML cells, the last column set off by a bar */
export function aug(rows){
  const n=rows[0].length;
  return `<span class="mat aug" style="grid-template-columns:repeat(${n},auto)">${rows.map(r=>r.map((c,j)=>`<span${j===n-1?' class="ab"':''}>${c}</span>`).join('')).join('')}</span>`;
}

/* small table: head = header cells, rows = arrays of cells; a cell is HTML or {v, hl:true} to highlight it */
export function tbl(head, rows, cls='ortbl'){
  const td=c=> c && typeof c==='object' ? `<td${c.hl?' class="hl"':''}>${c.v}</td>` : `<td>${c}</td>`;
  return `<table class="stbl ${cls}"><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr>${rows.map(r=>`<tr>${r.map((c,i)=>i===0?`<th>${c}</th>`:td(c)).join('')}</tr>`).join('')}</table>`;
}

/* ---- statistics: densities and printed critical-value tables ---- */
export const normPdf = z => Math.exp(-z*z/2)/Math.sqrt(2*Math.PI);
function lnGamma(z){                                                    // Lanczos approximation
  const g=7, c=[0.99999999999980993,676.5203681218851,-1259.1392167224028,771.32342877765313,-176.61502916214059,
    12.507343278686905,-0.13857109526572012,9.9843695780195716e-6,1.5056327351493116e-7];
  if(z<0.5) return Math.log(Math.PI/Math.sin(Math.PI*z))-lnGamma(1-z);
  z-=1; let x=c[0]; for(let i=1;i<g+2;i++) x+=c[i]/(z+i); const t=z+g+0.5;
  return 0.5*Math.log(2*Math.PI)+(z+0.5)*Math.log(t)-t+Math.log(x);
}
export const tPdf = (t,v) => Math.exp(lnGamma((v+1)/2)-lnGamma(v/2))/Math.sqrt(v*Math.PI)*(1+t*t/v)**(-(v+1)/2);
export const fPdf = (x,a,b) => x<=0?0:Math.exp(lnGamma((a+b)/2)-lnGamma(a/2)-lnGamma(b/2)+(a/2)*Math.log(a/b)+(a/2-1)*Math.log(x)-((a+b)/2)*Math.log(1+a*x/b));

/* standard normal CDF Φ(z) (W. J. Cody-quality erf via a continued Taylor series, |error| < 1e-12 for |z| ≤ 6) */
export function Phi(z){
  const x=Math.abs(z)/Math.SQRT2; let erf;
  if(x<3){ let sum=x, term=x; for(let n=1;n<200;n++){ term*=-x*x/n; const add=term/(2*n+1); sum+=add; if(Math.abs(add)<1e-17) break; } erf=2/Math.sqrt(Math.PI)*sum; }
  else { let f=0; for(let n=60;n>=1;n--) f=n/2/(x+f); erf=1-Math.exp(-x*x)/Math.sqrt(Math.PI)/(x+f); }
  return z>=0 ? 0.5+erf/2 : 0.5-erf/2;
}
/* regularized incomplete beta I_x(a, b) (Numerical Recipes continued fraction) */
function betacf(a,b,x){
  let qab=a+b, qap=a+1, qam=a-1, c=1, d=1-qab*x/qap; if(Math.abs(d)<1e-300) d=1e-300; d=1/d; let h=d;
  for(let m=1;m<=300;m++){ const m2=2*m;
    let aa=m*(b-m)*x/((qam+m2)*(a+m2)); d=1+aa*d; if(Math.abs(d)<1e-300) d=1e-300; c=1+aa/c; if(Math.abs(c)<1e-300) c=1e-300; d=1/d; h*=d*c;
    aa=-(a+m)*(qab+m)*x/((a+m2)*(qap+m2)); d=1+aa*d; if(Math.abs(d)<1e-300) d=1e-300; c=1+aa/c; if(Math.abs(c)<1e-300) c=1e-300; d=1/d; const del=d*c; h*=del;
    if(Math.abs(del-1)<1e-15) break; }
  return h;
}
export function betaI(x,a,b){
  if(x<=0) return 0; if(x>=1) return 1;
  const bt=Math.exp(lnGamma(a+b)-lnGamma(a)-lnGamma(b)+a*Math.log(x)+b*Math.log(1-x));
  return x<(a+1)/(a+b+2) ? bt*betacf(a,b,x)/a : 1-bt*betacf(b,a,1-x)/b;
}
/* upper 5% point of F(d1, d2) */
export function fQuantile05(d1,d2){
  const upper=x=>1-betaI(d1*x/(d1*x+d2), d1/2, d2/2); let lo=0, hi=1000;
  for(let i=0;i<100;i++){ const m=(lo+hi)/2; if(upper(m)>0.05) lo=m; else hi=m; }
  return (lo+hi)/2;
}

/* t table: upper-tail areas (columns) × degrees of freedom 1..30 (the z row is df = ∞) */
export const T_ALPHAS = [0.10, 0.05, 0.025, 0.01, 0.005];
export const T_TABLE = {
  1:[3.078,6.314,12.706,31.821,63.657], 2:[1.886,2.920,4.303,6.965,9.925], 3:[1.638,2.353,3.182,4.541,5.841],
  4:[1.533,2.132,2.776,3.747,4.604], 5:[1.476,2.015,2.571,3.365,4.032], 6:[1.440,1.943,2.447,3.143,3.707],
  7:[1.415,1.895,2.365,2.998,3.499], 8:[1.397,1.860,2.306,2.896,3.355], 9:[1.383,1.833,2.262,2.821,3.250],
  10:[1.372,1.812,2.228,2.764,3.169], 11:[1.363,1.796,2.201,2.718,3.106], 12:[1.356,1.782,2.179,2.681,3.055],
  13:[1.350,1.771,2.160,2.650,3.012], 14:[1.345,1.761,2.145,2.624,2.977], 15:[1.341,1.753,2.131,2.602,2.947],
  16:[1.337,1.746,2.120,2.583,2.921], 17:[1.333,1.740,2.110,2.567,2.898], 18:[1.330,1.734,2.101,2.552,2.878],
  19:[1.328,1.729,2.093,2.539,2.861], 20:[1.325,1.725,2.086,2.528,2.845], 21:[1.323,1.721,2.080,2.518,2.831],
  22:[1.321,1.717,2.074,2.508,2.819], 23:[1.319,1.714,2.069,2.500,2.807], 24:[1.318,1.711,2.064,2.492,2.797],
  25:[1.316,1.708,2.060,2.485,2.787], 26:[1.315,1.706,2.056,2.479,2.779], 27:[1.314,1.703,2.052,2.473,2.771],
  28:[1.313,1.701,2.048,2.467,2.763], 29:[1.311,1.699,2.045,2.462,2.756], 30:[1.310,1.697,2.042,2.457,2.750],
  40:[1.303,1.684,2.021,2.423,2.704], 60:[1.296,1.671,2.000,2.390,2.660], 120:[1.289,1.658,1.980,2.358,2.617],
};
export const Z_ROW = [1.282, 1.645, 1.960, 2.326, 2.576];
export const zCrit = alpha => Z_ROW[T_ALPHAS.indexOf(alpha)];
export const tCrit = (alpha, df) => T_TABLE[df][T_ALPHAS.indexOf(alpha)];

/* F table, α = 0.05: rows df2 = 2..20, columns df1 = 1..6 */
export const F_TABLE_05 = {
  2:[18.51,19.00,19.16,19.25,19.30,19.33], 3:[10.13,9.55,9.28,9.12,9.01,8.94], 4:[7.71,6.94,6.59,6.39,6.26,6.16],
  5:[6.61,5.79,5.41,5.19,5.05,4.95], 6:[5.99,5.14,4.76,4.53,4.39,4.28], 7:[5.59,4.74,4.35,4.12,3.97,3.87],
  8:[5.32,4.46,4.07,3.84,3.69,3.58], 9:[5.12,4.26,3.86,3.63,3.48,3.37], 10:[4.96,4.10,3.71,3.48,3.33,3.22],
  11:[4.84,3.98,3.59,3.36,3.20,3.09], 12:[4.75,3.89,3.49,3.26,3.11,3.00], 13:[4.67,3.81,3.41,3.18,3.03,2.92],
  14:[4.60,3.74,3.34,3.11,2.96,2.85], 15:[4.54,3.68,3.29,3.06,2.90,2.79], 16:[4.49,3.63,3.24,3.01,2.85,2.74],
  17:[4.45,3.59,3.20,2.96,2.81,2.70], 18:[4.41,3.55,3.16,2.93,2.77,2.66], 19:[4.38,3.52,3.13,2.90,2.74,2.63],
  20:[4.35,3.49,3.10,2.87,2.71,2.60],
};
export const fCrit = (df1, df2) => F_TABLE_05[df2][df1-1];

const fmt3 = v => v.toFixed(3);
/* excerpt of the z table (the t table's ∞ row) with the used cell highlighted */
export function zTableHTML(alpha){
  const head=T_ALPHAS.map(a=>`<th>${a}</th>`).join('');
  const row=Z_ROW.map((v,i)=>`<td${T_ALPHAS[i]===alpha?' class="hl"':''}>${fmt3(v)}</td>`).join('');
  return `<table class="stbl"><caption>${L('z table — upper-tail area α','جدول z — المساحة في الذيل الأيمن α')}</caption><tr><th>α</th>${head}</tr><tr><th>z<sub>α</sub></th>${row}</tr></table>`;
}
export function tTableHTML(alpha, df){
  const head=T_ALPHAS.map(a=>`<th>${a}</th>`).join(''), rows=[];
  for(let r=Math.max(1,df-2);r<=Math.min(30,df+2);r++) if(T_TABLE[r])
    rows.push(`<tr><th>${r}</th>${T_TABLE[r].map((v,i)=>`<td${r===df&&T_ALPHAS[i]===alpha?' class="hl"':''}>${fmt3(v)}</td>`).join('')}</tr>`);
  return `<table class="stbl"><caption>${L('t table — upper-tail area α, df = n − 1','جدول t — المساحة في الذيل الأيمن α، درجات الحرية n − 1')}</caption><tr><th>df \\ α</th>${head}</tr>${rows.join('')}</table>`;
}
export function fTableHTML(df1, df2){
  const head=[1,2,3,4,5,6].map(c=>`<th>${c}</th>`).join(''), rows=[];
  for(let r=Math.max(2,df2-2);r<=Math.min(20,df2+2);r++)
    rows.push(`<tr><th>${r}</th>${F_TABLE_05[r].map((v,i)=>`<td${r===df2&&i+1===df1?' class="hl"':''}>${v.toFixed(2)}</td>`).join('')}</tr>`);
  return `<table class="stbl"><caption>${L('F table, α = 0.05 — columns df₁ (between), rows df₂ (within)','جدول F عند α = 0.05 — الأعمدة df₁ (بين المجموعات) والصفوف df₂ (داخل المجموعات)')}</caption><tr><th>df₂ \\ df₁</th>${head}</tr>${rows.join('')}</table>`;
}

/* ---- full tables for the printable "Statistical tables" page ---- */
export function zFullHTML(){
  const cols=[...Array(10).keys()], rows=[];
  for(let r=0;r<=34;r++){ const z0=r/10;
    rows.push(`<tr><th>${z0.toFixed(1)}</th>${cols.map(c=>`<td>${Phi(z0+c/100).toFixed(4)}</td>`).join('')}</tr>`); }
  return `<table class="stbl full"><caption>${L('Standard normal table: Φ(z) = P(Z ≤ z), z ≥ 0 (use Φ(−z) = 1 − Φ(z))','جدول التوزيع الطبيعي المعياري: Φ(z) = P(Z ≤ z) لقيم z ≥ 0 (استخدم Φ(−z) = 1 − Φ(z))')}</caption>
    <tr><th>z</th>${cols.map(c=>`<th>.0${c}</th>`).join('')}</tr>${rows.join('')}</table>
    <table class="stbl"><caption>${L('Critical values z<sub>α</sub> (upper-tail area α)','القيم الحرجة z<sub>α</sub> (المساحة في الذيل الأيمن α)')}</caption>
    <tr><th>α</th>${T_ALPHAS.map(a=>`<th>${a}</th>`).join('')}</tr><tr><th>z<sub>α</sub></th>${Z_ROW.map(v=>`<td>${v.toFixed(3)}</td>`).join('')}</tr></table>`;
}
export function tFullHTML(){
  const rows=Object.keys(T_TABLE).map(Number).map(r=>`<tr><th>${r}</th>${T_TABLE[r].map(v=>`<td>${v.toFixed(3)}</td>`).join('')}</tr>`);
  rows.push(`<tr><th>∞</th>${Z_ROW.map(v=>`<td>${v.toFixed(3)}</td>`).join('')}</tr>`);
  return `<table class="stbl full"><caption>${L('t distribution: critical values t<sub>α, df</sub> (upper-tail area α)','توزيع t: القيم الحرجة t<sub>α, df</sub> (المساحة في الذيل الأيمن α)')}</caption>
    <tr><th>df \\ α</th>${T_ALPHAS.map(a=>`<th>${a}</th>`).join('')}</tr>${rows.join('')}</table>`;
}
export const F_FULL_DF2 = [...Array(30).keys()].map(i=>i+1).concat([40,60,120]);
export function fFullHTML(){
  const d1s=[...Array(10).keys()].map(i=>i+1);
  const rows=F_FULL_DF2.map(d2=>`<tr><th>${d2}</th>${d1s.map(d1=>{ const v=fQuantile05(d1,d2); return `<td>${v>=100?v.toFixed(1):v.toFixed(2)}</td>`; }).join('')}</tr>`);
  return `<table class="stbl full"><caption>${L('F distribution, α = 0.05: columns df₁ (numerator), rows df₂ (denominator)','توزيع F عند α = 0.05: الأعمدة df₁ (البسط) والصفوف df₂ (المقام)')}</caption>
    <tr><th>df₂ \\ df₁</th>${d1s.map(c=>`<th>${c}</th>`).join('')}</tr>${rows.join('')}</table>`;
}

/* bell curve (normal or t) with shaded regions: kind 'ci' shades the middle, 'two'/'right'/'left' shade rejection tails */
export function distPlot({crit, kind, stat, df}){
  const f = df ? (t=>tPdf(t,df)) : normPdf, lim=Math.max(4, Math.abs(stat||0)+0.6), fills=[], vlines=[];
  if(kind==='ci') fills.push({f, a:-crit, b:crit, cls:'shade'});
  if(kind==='two'||kind==='right') fills.push({f, a:crit, b:lim, cls:'rej'});
  if(kind==='two') fills.push({f, a:-lim, b:-crit, cls:'rej'});
  if(kind==='left') fills.push({f, a:-lim, b:-crit, cls:'rej'});
  const cv=num(crit,3);
  if(kind==='ci'||kind==='two') vlines.push({x:-crit, label:'−'+cv, cls:'vl'}, {x:crit, label:cv, cls:'vl'});
  else vlines.push({x:kind==='left'?-crit:crit, label:(kind==='left'?'−':'')+cv, cls:'vl'});
  const points = stat===undefined ? [] : [{x:stat, y:0, label:(df?'t':'z')+' = '+(+stat.toFixed(3)), cls:'stat'}];
  return plot({x:[-lim,lim], y:[0,0.45], curves:[{f}], fills, vlines, points, ticks:true});
}
