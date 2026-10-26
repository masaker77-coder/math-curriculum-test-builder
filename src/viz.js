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
/* regularized lower incomplete gamma P(a, x) (series / continued fraction), for the F table's ∞ row */
function gammaP(a,x){
  if(x<=0) return 0;
  const g=Math.exp(-x+a*Math.log(x)-lnGamma(a));
  if(x<a+1){ let sum=1/a, term=1/a; for(let n=1;n<500;n++){ term*=x/(a+n); sum+=term; if(term<sum*1e-16) break; } return sum*g; }
  let b=x+1-a, c=1e300, d=1/b, h=d;
  for(let i=1;i<500;i++){ const an=-i*(i-a); b+=2; d=an*d+b; if(Math.abs(d)<1e-300) d=1e-300; c=b+an/c; if(Math.abs(c)<1e-300) c=1e-300; d=1/d; const del=d*c; h*=del; if(Math.abs(del-1)<1e-16) break; }
  return 1-g*h;
}
/* upper-α point of F(d1, d2); d2 = Infinity gives the χ²(d1)/d1 point */
export function fQuantile(alpha, d1, d2){
  const upper = d2===Infinity ? x=>1-gammaP(d1/2, d1*x/2) : x=>1-betaI(d1*x/(d1*x+d2), d1/2, d2/2);
  let lo=0, hi=5000;
  for(let i=0;i<120;i++){ const m=(lo+hi)/2; if(upper(m)>alpha) lo=m; else hi=m; }
  return (lo+hi)/2;
}
export const fQuantile05 = (d1,d2) => fQuantile(0.05, d1, d2);

/* The course's t table, exactly as printed (Shaqra University, STAT 302): columns by cumulative probability /
   one-tail area / two-tail area / confidence level; rows df = 1…30, 40, 60, 80, 100, 1000 and Z. Values are kept as
   printed (12.71, 31.82 …) so the solutions use the same numbers the students read. */
export const T_CUM  = ['.50','.75','.80','.85','.90','.95','.975','.99','.995','.999','.9995'];
export const T_ONE  = [0.50, 0.25, 0.20, 0.15, 0.10, 0.05, 0.025, 0.01, 0.005, 0.001, 0.0005];
export const T_TWO  = ['1.00','0.50','0.40','0.30','0.20','0.10','0.05','0.02','0.01','0.002','0.001'];
const T_ONE_S = ['0.50','0.25','0.20','0.15','0.10','0.05','0.025','0.01','0.005','0.001','0.0005'];   // as printed
export const T_CONF = ['0%','50%','60%','70%','80%','90%','95%','98%','99%','99.8%','99.9%'];
const T_ROWS = `1 0.000 1.000 1.376 1.963 3.078 6.314 12.71 31.82 63.66 318.31 636.62
2 0.000 0.816 1.061 1.386 1.886 2.920 4.303 6.965 9.925 22.327 31.599
3 0.000 0.765 0.978 1.250 1.638 2.353 3.182 4.541 5.841 10.215 12.924
4 0.000 0.741 0.941 1.190 1.533 2.132 2.776 3.747 4.604 7.173 8.610
5 0.000 0.727 0.920 1.156 1.476 2.015 2.571 3.365 4.032 5.893 6.869
6 0.000 0.718 0.906 1.134 1.440 1.943 2.447 3.143 3.707 5.208 5.959
7 0.000 0.711 0.896 1.119 1.415 1.895 2.365 2.998 3.499 4.785 5.408
8 0.000 0.706 0.889 1.108 1.397 1.860 2.306 2.896 3.355 4.501 5.041
9 0.000 0.703 0.883 1.100 1.383 1.833 2.262 2.821 3.250 4.297 4.781
10 0.000 0.700 0.879 1.093 1.372 1.812 2.228 2.764 3.169 4.144 4.587
11 0.000 0.697 0.876 1.088 1.363 1.796 2.201 2.718 3.106 4.025 4.437
12 0.000 0.695 0.873 1.083 1.356 1.782 2.179 2.681 3.055 3.930 4.318
13 0.000 0.694 0.870 1.079 1.350 1.771 2.160 2.650 3.012 3.852 4.221
14 0.000 0.692 0.868 1.076 1.345 1.761 2.145 2.624 2.977 3.787 4.140
15 0.000 0.691 0.866 1.074 1.341 1.753 2.131 2.602 2.947 3.733 4.073
16 0.000 0.690 0.865 1.071 1.337 1.746 2.120 2.583 2.921 3.686 4.015
17 0.000 0.689 0.863 1.069 1.333 1.740 2.110 2.567 2.898 3.646 3.965
18 0.000 0.688 0.862 1.067 1.330 1.734 2.101 2.552 2.878 3.610 3.922
19 0.000 0.688 0.861 1.066 1.328 1.729 2.093 2.539 2.861 3.579 3.883
20 0.000 0.687 0.860 1.064 1.325 1.725 2.086 2.528 2.845 3.552 3.850
21 0.000 0.686 0.859 1.063 1.323 1.721 2.080 2.518 2.831 3.527 3.819
22 0.000 0.686 0.858 1.061 1.321 1.717 2.074 2.508 2.819 3.505 3.792
23 0.000 0.685 0.858 1.060 1.319 1.714 2.069 2.500 2.807 3.485 3.768
24 0.000 0.685 0.857 1.059 1.318 1.711 2.064 2.492 2.797 3.467 3.745
25 0.000 0.684 0.856 1.058 1.316 1.708 2.060 2.485 2.787 3.450 3.725
26 0.000 0.684 0.856 1.058 1.315 1.706 2.056 2.479 2.779 3.435 3.707
27 0.000 0.684 0.855 1.057 1.314 1.703 2.052 2.473 2.771 3.421 3.690
28 0.000 0.683 0.855 1.056 1.313 1.701 2.048 2.467 2.763 3.408 3.674
29 0.000 0.683 0.854 1.055 1.311 1.699 2.045 2.462 2.756 3.396 3.659
30 0.000 0.683 0.854 1.055 1.310 1.697 2.042 2.457 2.750 3.385 3.646
40 0.000 0.681 0.851 1.050 1.303 1.684 2.021 2.423 2.704 3.307 3.551
60 0.000 0.679 0.848 1.045 1.296 1.671 2.000 2.390 2.660 3.232 3.460
80 0.000 0.678 0.846 1.043 1.292 1.664 1.990 2.374 2.639 3.195 3.416
100 0.000 0.677 0.845 1.042 1.290 1.660 1.984 2.364 2.626 3.174 3.390
1000 0.000 0.675 0.842 1.037 1.282 1.646 1.962 2.330 2.581 3.098 3.300
Z 0.000 0.674 0.842 1.036 1.282 1.645 1.960 2.326 2.576 3.090 3.291`;
export const T_PRINTED = Object.fromEntries(T_ROWS.split('\n').map(l=>{ const [k,...v]=l.trim().split(/\s+/); return [k, v]; }));   // df (or 'Z') → printed strings
export const T_DFS = Object.keys(T_PRINTED).filter(k=>k!=='Z').map(Number);
/* the levels used in the course: α = 0.10, 0.05, 0.01 (tests) and 90%, 95%, 99% (intervals) need these one-tail areas */
export const T_ALPHAS = [0.10, 0.05, 0.025, 0.01, 0.005];
const col = a => T_ONE.indexOf(a);
export const T_TABLE = Object.fromEntries(T_DFS.map(df=>[df, T_ALPHAS.map(a=>+T_PRINTED[df][col(a)])]));
export const Z_ROW = T_ALPHAS.map(a=>+T_PRINTED.Z[col(a)]);
export const zCrit = alpha => +T_PRINTED.Z[col(alpha)];
export const tCrit = (alpha, df) => +T_PRINTED[df][col(alpha)];
const shown = (row, a) => T_PRINTED[row][col(a)];                       // a value exactly as printed

/* F tables for α = 0.10, 0.05, 0.01, laid out like the course's F table: columns df₁ = 1…10, 12, 15; rows df₂ = 1…30, 40, 60, 120, ∞ */
export const F_ALPHAS = [0.10, 0.05, 0.01];
export const F_DF1 = [1,2,3,4,5,6,7,8,9,10,12,15];
export const F_DF2 = [...Array(30).keys()].map(i=>i+1).concat([40,60,120,Infinity]);
const F_CACHE = {};
export const fCrit = (df1, df2, alpha=0.05) => F_CACHE[`${alpha},${df1},${df2}`] ??= +fQuantile(alpha, df1, df2).toFixed(5);
const dfName = v => v===Infinity ? '&infin;' : v;

/* excerpt of the course t table with the cell used highlighted: the five columns the course uses and the rows next to df
   (for z the Z row); the header rows give one-tail and two-tail areas and the bottom row the confidence level */
function tExcerpt(alpha, rows, hlRow){
  const cs=T_ALPHAS.map(col);
  const head=(lbl, arr)=>`<tr><th>${lbl}</th>${cs.map(i=>`<th${T_ONE[i]===alpha?' class="hl"':''}>${arr[i]}</th>`).join('')}</tr>`;
  return `<table class="stbl ttab"><caption>${L('t table (Z row at the bottom) — the value used is highlighted','جدول t (وفي آخره صف Z) — القيمة المستخدمة مظللة')}</caption>`+
    head('cum. prob', T_CUM.map(c=>`t<sub>${c}</sub>`))+head('one-tail', T_ONE_S)+head('two-tails', T_TWO)+
    rows.map(r=>`<tr${r==='Z'?' class="zrow"':/^(6|7|8|9|10|16|17|18|19|20|26|27|28|29|30)$/.test(r)?' class="band"':''}><th>${r==='Z'?'<i>Z</i>':r}</th>${cs.map(i=>`<td${r===hlRow&&T_ONE[i]===alpha?' class="hl"':''}>${T_PRINTED[r][i]}</td>`).join('')}</tr>`).join('')+
    `<tr class="conf"><th></th>${cs.map(i=>`<td>${T_CONF[i]}</td>`).join('')}</tr><tr class="conf"><th></th><td colspan="${cs.length}">${L('Confidence Level','مستوى الثقة')}</td></tr></table>`;
}
export const zTableHTML = alpha => tExcerpt(alpha, ['1000','Z'], 'Z');
export function tTableHTML(alpha, df){
  const i=T_DFS.indexOf(df), rows=T_DFS.slice(Math.max(0,i-2), i+3).map(String);
  return tExcerpt(alpha, rows, String(df));
}
export function fTableHTML(df1, df2, alpha=0.05){
  const ci=F_DF1.indexOf(df1), ri=F_DF2.indexOf(df2), cols=F_DF1.slice(Math.max(0,ci-2), ci+3), rows=F_DF2.slice(Math.max(0,ri-2), ri+3);
  return `<table class="stbl"><caption>${L(`F table for α = ${alpha} — columns df₁ (between / treatment), rows df₂ (within / error)`,`جدول F عند α = ${alpha} — الأعمدة df₁ (بين المجموعات / المعالجات) والصفوف df₂ (داخل المجموعات / الخطأ)`)}</caption>`+
    `<tr><th>df₂ \\ df₁</th>${cols.map(c=>`<th>${c}</th>`).join('')}</tr>`+
    rows.map(r=>`<tr><th>${dfName(r)}</th>${cols.map(c=>`<td${r===df2&&c===df1?' class="hl"':''}>${fCrit(c,r,alpha)}</td>`).join('')}</tr>`).join('')+`</table>`;
}

/* ---- full tables for the printable "Statistical tables" page ---- */
export function zFullHTML(){
  const cols=[...Array(10).keys()], rows=[];
  for(let r=0;r<=34;r++){ const z0=r/10;
    rows.push(`<tr><th>${z0.toFixed(1)}</th>${cols.map(c=>`<td>${Phi(z0+c/100).toFixed(4)}</td>`).join('')}</tr>`); }
  return `<table class="stbl full"><caption>${L('Standard normal table: Φ(z) = P(Z ≤ z), z ≥ 0 (use Φ(−z) = 1 − Φ(z))','جدول التوزيع الطبيعي المعياري: Φ(z) = P(Z ≤ z) لقيم z ≥ 0 (استخدم Φ(−z) = 1 − Φ(z))')}</caption>
    <tr><th>z</th>${cols.map(c=>`<th>.0${c}</th>`).join('')}</tr>${rows.join('')}</table>`;
}
/* the course t table in full, as printed (rows 6–10, 16–20, 26–30 and Z shaded) */
export function tFullHTML(){
  const head=(lbl, arr)=>`<tr><th>${lbl}</th>${arr.map(v=>`<th>${v}</th>`).join('')}</tr>`;
  const band=r=>/^(6|7|8|9|10|16|17|18|19|20|26|27|28|29|30|Z)$/.test(r);
  return `<table class="stbl full ttab"><caption>${L('t table (critical values; the Z row gives z)','جدول t (القيم الحرجة؛ وصف Z يعطي قيم z)')}</caption>`+
    head('cum. prob', T_CUM.map(c=>`t<sub>${c}</sub>`))+head('one-tail', T_ONE_S)+head('two-tails', T_TWO)+`<tr><th>df</th>${T_ONE.map(()=>'<th></th>').join('')}</tr>`+
    Object.keys(T_PRINTED).sort((a,b)=>(a==='Z')-(b==='Z')||a-b).map(r=>`<tr${band(r)?' class="band"':''}><th>${r==='Z'?'<i>Z</i>':r}</th>${T_PRINTED[r].map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')+
    `<tr class="conf"><th></th>${T_CONF.map(v=>`<td>${v}</td>`).join('')}</tr><tr class="conf"><th></th><td colspan="${T_CONF.length}">${L('Confidence Level','مستوى الثقة')}</td></tr></table>`;
}
export function fFullHTML(alphas=F_ALPHAS){
  return alphas.map(a=>`<table class="stbl full ftab"><caption>${L(`F table for α = ${a}: columns df₁ (numerator), rows df₂ (denominator)`,`جدول F عند α = ${a}: الأعمدة df₁ (البسط) والصفوف df₂ (المقام)`)}</caption>
    <tr><th>df₂ \\ df₁</th>${F_DF1.map(c=>`<th>${c}</th>`).join('')}</tr>${F_DF2.map(r=>`<tr><th>${dfName(r)}</th>${F_DF1.map(c=>`<td>${fCrit(c,r,a)}</td>`).join('')}</tr>`).join('')}</table>`).join('');
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
