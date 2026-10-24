import { R, pick, nz, gcd, sup, frac, sq, reduceFrac, fracStr, term, lead, factorial, sgn, cplx, mat, TRIG, shuffled,
         lcm, totient, powMod, isPrimeN, vec } from './helpers.js';
import { L, Li, M, align, steps, num, plot, numberLine, intervalLine, aug, Phi, distPlot, zCrit, tCrit, fCrit, fPdf, zTableHTML, tTableHTML, fTableHTML, tbl } from './viz.js';

/* a small discrete distribution: distinct values xs with probabilities cs[i]/D (all cs[i] ≥ 1) */
function discreteDist(d){
  const n=d===1?2:d===2?3:4, D=pick(d===1?[4,5]:[5,8,10]), xs=[];
  while(xs.length<n){ const x=R(-5,9); if(!xs.includes(x)) xs.push(x); }
  const cs=new Array(n).fill(1); for(let k=n;k<D;k++) cs[R(0,n-1)]++;
  return [xs.sort((a,b)=>a-b), cs, D];
}

/* ---- shared pieces for the worked-solution generators (STAT 302, MATH 442) ---- */
const CONF_A2 = {90:0.05, 95:0.025, 99:0.005};                          // confidence level -> α/2
const decision = reject => reject ? Li('Reject H₀','نرفض H₀') : Li('Do not reject H₀','لا نرفض H₀');
const tailName = t => ({two:{en:'two-tailed',ar:'اختبار ذو طرفين'}, right:{en:'right-tailed',ar:'اختبار من الطرف الأيمن'}, left:{en:'left-tailed',ar:'اختبار من الطرف الأيسر'}})[t];
function critStep(tail, alpha, cv, sym='z', df){
  const v = tail==='two' ? `&plusmn;${cv.toFixed(3)}` : tail==='right' ? cv.toFixed(3) : '&minus;'+cv.toFixed(3);
  const a = tail==='two' ? `α/2 = ${alpha/2}` : `α = ${alpha}`;
  const lbl = sym==='t' ? `t<sub>${tail==='two'?'α/2':'α'}, ${df}</sub>` : `z<sub>${tail==='two'?'α/2':'α'}</sub>`;
  return L(`Critical value (${a}${df?`, df = ${df}`:''}): ${M(`${lbl} = ${v}`)} (table)`, `القيمة الحرجة (${M(a)}${df?`، ${M('df = '+df)}`:''}): ${M(`${lbl} = ${v}`)} (من الجدول)`);
}
function decisionStep(reject, tail, stat, cv, sym='z'){
  const cmp = tail==='two' ? `|${sym}| = ${num(Math.abs(stat),3)} ${reject?'&gt;':'&lt;'} ${cv.toFixed(3)}`
            : tail==='right' ? `${sym} = ${num(stat,3)} ${reject?'&gt;':'&lt;'} ${cv.toFixed(3)}`
            : `${sym} = ${num(stat,3)} ${reject?'&lt;':'&gt;'} &minus;${cv.toFixed(3)}`;
  return L(`${M(cmp)} ⇒ the statistic ${reject?'falls in':'is outside'} the rejection region ⇒ <b>${reject?'Reject H₀':'Do not reject H₀'}</b>`,
           `${M(cmp)} ⇐ الإحصاءة ${reject?'تقع في':'لا تقع في'} منطقة الرفض ⇐ <b>${reject?'نرفض H₀':'لا نرفض H₀'}</b>`);
}
const CASE = {
  z:{en:'σ known — use z', ar:'σ معلومة — نستخدم z'},
  s:{en:'σ unknown, large sample n ≥ 30 — use z with s', ar:'σ مجهولة والعينة كبيرة n ≥ 30 — نستخدم z مع s'},
  t:{en:'σ unknown, small sample n < 30 from a normal population — use t with n − 1 df', ar:'σ مجهولة والعينة صغيرة n < 30 من مجتمع طبيعي — نستخدم t بدرجات حرية n − 1'},
};
function sampleText(kind, n, xb, sg){
  return kind==='z' ? [`A random sample of n = ${n} from a population with σ = ${sg} has mean x̄ = ${xb}.`, `عينة عشوائية حجمها ${M('n = '+n)} من مجتمع انحرافه المعياري ${M('σ = '+sg)} ومتوسطها ${M('x̄ = '+xb)}.`]
       : kind==='s' ? [`A random sample of n = ${n} has mean x̄ = ${xb} and standard deviation s = ${sg} (σ unknown).`, `عينة عشوائية حجمها ${M('n = '+n)} متوسطها ${M('x̄ = '+xb)} وانحرافها المعياري ${M('s = '+sg)} (${M('σ')} مجهولة).`]
       : [`A random sample of n = ${n} from a normal population has x̄ = ${xb} and s = ${sg} (σ unknown).`, `عينة عشوائية حجمها ${M('n = '+n)} من مجتمع طبيعي متوسطها ${M('x̄ = '+xb)} و ${M('s = '+sg)} (${M('σ')} مجهولة).`];
}
function ciMean(d, kind){
  const conf=pick(d===1?[95]:[90,95,99]), a2=CONF_A2[conf], n=kind==='t'?pick([9,16,25]):pick([36,49,64,81,100]), rn=Math.sqrt(n), df=n-1;
  const cv=kind==='t'?tCrit(a2,df):zCrit(a2), sg=R(2,d===3?30:15), xb=R(20,90)+(d>1?R(0,9)/10:0), sym=kind==='z'?'&sigma;':'s';
  const E=cv*sg/rn, lo=xb-E, hi=xb+E, cs=kind==='t'?`t<sub>&alpha;/2, ${df}</sub>`:'z<sub>&alpha;/2</sub>', [en,ar]=sampleText(kind,n,xb,sg);
  return {q:L(`${en} Find a ${conf}% confidence interval for μ.`, `${ar} أوجد فترة ثقة ${M(conf+'%')} للمتوسط ${M('μ')}.`),
    a:`<b>(${num(lo,3)}, ${num(hi,3)})</b>`,
    s:steps(
      L(`${CASE[kind].en}: ${M(`x&#772; &plusmn; ${cs} &middot; ${sym}/&radic;n`)}`, `${CASE[kind].ar}: ${M(`x&#772; &plusmn; ${cs} &middot; ${sym}/&radic;n`)}`),
      L(`α = ${num(1-conf/100,2)}, α/2 = ${a2}${kind==='t'?`, df = ${df}`:''} ⇒ ${M(`${kind==='t'?'t':'z'} = ${cv.toFixed(3)}`)} (table)`, `${M(`α = ${num(1-conf/100,2)}, α/2 = ${a2}`)}${kind==='t'?`، ${M('df = '+df)}`:''} ⇐ ${M(`${kind==='t'?'t':'z'} = ${cv.toFixed(3)}`)} (من الجدول)`)
        +(kind==='t'?tTableHTML(a2,df):zTableHTML(a2)),
      L(`Margin of error: ${M(`E = ${cv.toFixed(3)} &times; ${sg} / &radic;${n} = ${cv.toFixed(3)} &times; ${sg} / ${rn} = ${num(E,3)}`)}`, `هامش الخطأ: ${M(`E = ${cv.toFixed(3)} &times; ${sg} / &radic;${n} = ${num(E,3)}`)}`),
      L(`Interval: ${M(`${xb} &plusmn; ${num(E,3)} = (${num(lo,3)}, ${num(hi,3)})`)}`, `الفترة: ${M(`${xb} &plusmn; ${num(E,3)} = (${num(lo,3)}, ${num(hi,3)})`)}`)+distPlot({crit:cv, kind:'ci', df:kind==='t'?df:undefined}))};
}
function testMean(d, kind){
  const alpha=pick(d===1?[0.05]:[0.05,0.01,0.10]), tail=pick(d===1?['two']:['two','right','left']);
  const n=kind==='t'?pick([9,16,25]):pick([36,49,64,100]), rn=Math.sqrt(n), df=n-1, se=pick([0.5,1,2]), sg=se*rn, mu0=R(20,90);
  const a=tail==='two'?alpha/2:alpha, cv=kind==='t'?tCrit(a,df):zCrit(a), sym=kind==='t'?'t':'z';
  let k; do{ k=R(-7,7)/2; }while(Math.abs(Math.abs(k)-cv)<0.1);                         // statistic value; never on the boundary
  const xb=+(mu0+k*se).toFixed(2), reject=tail==='two'?Math.abs(k)>cv:tail==='right'?k>cv:k<-cv, H1={two:'&ne;',right:'&gt;',left:'&lt;'}[tail];
  const [en,ar]=sampleText(kind,n,xb,sg), sd=kind==='z'?'&sigma;':'s';
  return {q:L(`${en} Test at α = ${alpha}:`, `${ar} اختبر عند ${M(`α = ${alpha}`)}:`)+'<br>'+align([['H₀: μ','=',mu0],['H₁: μ',H1,mu0]]),
    a:`<b>${sym} = ${num(k,3)}; ${decision(reject)}</b>`,
    s:steps(
      L(`Hypotheses: ${M(`H₀: μ = ${mu0}`)}, ${M(`H₁: μ ${H1} ${mu0}`)} (${tailName(tail).en}); ${CASE[kind].en}`, `الفرضيات: ${M(`H₀: μ = ${mu0}`)}، ${M(`H₁: μ ${H1} ${mu0}`)} (${tailName(tail).ar})؛ ${CASE[kind].ar}`),
      L(`Test statistic: ${M(`${sym} = (x&#772; &minus; μ₀)/(${sd}/&radic;n) = (${xb} &minus; ${mu0})/(${sg}/${rn}) = ${num(k,3)}`)}`, `إحصاءة الاختبار: ${M(`${sym} = (x&#772; &minus; μ₀)/(${sd}/&radic;n) = (${xb} &minus; ${mu0})/(${sg}/${rn}) = ${num(k,3)}`)}`),
      critStep(tail, alpha, cv, sym, kind==='t'?df:undefined)+(kind==='t'?tTableHTML(a,df):zTableHTML(a)),
      decisionStep(reject, tail, k, cv, sym)+distPlot({crit:cv, kind:tail, stat:k, df:kind==='t'?df:undefined}))};
}
const fdmAnswer = (ex, apx, err) => `<b>${Li('exact','التام')} = ${num(ex)}; ${Li('approx.','التقريبي')} ≈ ${num(apx)}; ${Li('error','الخطأ')} = ${num(err)}</b>`;
const FD_NAME = {forward:['forward','الأمامي'], backward:['backward','الخلفي'], central:['central','المركزي']};
function fdFirst(d, v){
  const st=v==='x'?'h':'k', p=d===1?2:pick([2,3]), c=R(1,3), v0=pick([1,2]), h=pick(d===1?[0.1,0.5]:[0.1,0.2,0.5]);
  const type=pick(d===1?['forward','backward']:['forward','backward','central']), u=s=>c*s**p, du=s=>c*p*s**(p-1);
  const [A,B]=type==='forward'?[v0,v0+h]:type==='backward'?[v0-h,v0]:[v0-h,v0+h];
  const apx=(u(B)-u(A))/(B-A), ex=du(v0), err=Math.abs(ex-apx), ue=`${c===1?'':c}${v}${sup(p)}`;
  const F={forward:`(u(${v}+${st}) &minus; u(${v}))/${st}`, backward:`(u(${v}) &minus; u(${v}&minus;${st}))/${st}`, central:`(u(${v}+${st}) &minus; u(${v}&minus;${st}))/2${st}`}[type];
  const w=Math.max(3*h,0.8), lo=v0-w, hi=v0+w, ys=[u(lo),u(hi),u(v0)];
  const g=plot({x:[lo,hi], y:[Math.min(...ys)-0.5, Math.max(...ys)+0.5], curves:[{f:u},{f:s=>u(v0)+ex*(s-v0), cls:'c2'}],
    segs:[{x1:A,y1:u(A),x2:B,y2:u(B),cls:'sec'}], points:[{x:A,y:u(A),cls:'apx'},{x:B,y:u(B),cls:'apx'}]});
  return {q:L(`Use the ${type} difference with ${st} = ${h} to approximate u<sub>${v}</sub>(${v0}) for u(${v}) = ${ue}. Give the exact value, the approximation and the error.`,
              `استخدم الفرق ${FD_NAME[type][1]} بخطوة ${M(`${st} = ${h}`)} لتقريب ${M(`u<sub>${v}</sub>(${v0})`)} حيث ${M(`u(${v}) = ${ue}`)}. أوجد القيمة التامة والتقريبية والخطأ.`),
    a:fdmAnswer(ex,apx,err),
    s:steps(
      L(`<b>Exact:</b> ${M(`u<sub>${v}</sub> = ${c*p===1?'':c*p}${v}${p-1>1?sup(p-1):''}`)} ⇒ ${M(`u<sub>${v}</sub>(${v0}) = ${num(ex)}`)}`, `<b>الحل التام:</b> ${M(`u<sub>${v}</sub> = ${c*p===1?'':c*p}${v}${p-1>1?sup(p-1):''}`)} ⇐ ${M(`u<sub>${v}</sub>(${v0}) = ${num(ex)}`)}`),
      L(`<b>Formula</b> (${type}): ${M(`u<sub>${v}</sub> &asymp; ${F}`)}`, `<b>القانون</b> (الفرق ${FD_NAME[type][1]}): ${M(`u<sub>${v}</sub> &asymp; ${F}`)}`),
      L(`<b>Approximate:</b> ${M(`u(${num(A)}) = ${num(u(A))}, u(${num(B)}) = ${num(u(B))}`)} ⇒ ${M(`(${num(u(B))} &minus; ${num(u(A))})/${num(B-A)} = ${num(apx)}`)}`, `<b>الحل التقريبي:</b> ${M(`u(${num(A)}) = ${num(u(A))}, u(${num(B)}) = ${num(u(B))}`)} ⇐ ${M(`(${num(u(B))} &minus; ${num(u(A))})/${num(B-A)} = ${num(apx)}`)}`),
      L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)} — graph: tangent (exact slope) vs. secant (approximate slope)`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)} — الرسم: المماس (الميل التام) والقاطع (الميل التقريبي)`)+g)};
}
function fdSecond(d, v){
  const st=v==='x'?'h':'k', c=R(1,3), v0=pick([1,2]), h=pick(d===1?[0.5]:[0.1,0.2,0.5]), u=s=>c*s**4+s*s, ex=12*c*v0*v0+2;
  const apx=(u(v0+h)-2*u(v0)+u(v0-h))/(h*h), err=Math.abs(ex-apx), ue=`${c===1?'':c}${v}${sup(4)} + ${v}${sup(2)}`;
  const w=Math.max(3*h,0.8), ys=[u(v0-w),u(v0+w),u(v0)];
  const g=plot({x:[v0-w,v0+w], y:[Math.min(...ys)-0.5, Math.max(...ys)+0.5], curves:[{f:u}], points:[v0-h,v0,v0+h].map(s=>({x:s,y:u(s),cls:'apx'}))});
  return {q:L(`Use the central difference with ${st} = ${h} to approximate u<sub>${v}${v}</sub>(${v0}) for u(${v}) = ${ue}. Give the exact value, the approximation and the error.`,
              `استخدم الفرق المركزي بخطوة ${M(`${st} = ${h}`)} لتقريب ${M(`u<sub>${v}${v}</sub>(${v0})`)} حيث ${M(`u(${v}) = ${ue}`)}. أوجد القيمة التامة والتقريبية والخطأ.`),
    a:fdmAnswer(ex,apx,err),
    s:steps(
      L(`<b>Exact:</b> ${M(`u<sub>${v}${v}</sub> = ${12*c}${v}${sup(2)} + 2`)} ⇒ ${M(`u<sub>${v}${v}</sub>(${v0}) = ${num(ex)}`)}`, `<b>الحل التام:</b> ${M(`u<sub>${v}${v}</sub> = ${12*c}${v}${sup(2)} + 2`)} ⇐ ${M(`u<sub>${v}${v}</sub>(${v0}) = ${num(ex)}`)}`),
      L(`<b>Formula:</b> ${M(`u<sub>${v}${v}</sub> &asymp; (u(${v}+${st}) &minus; 2u(${v}) + u(${v}&minus;${st}))/${st}${sup(2)}`)}`, `<b>القانون:</b> ${M(`u<sub>${v}${v}</sub> &asymp; (u(${v}+${st}) &minus; 2u(${v}) + u(${v}&minus;${st}))/${st}${sup(2)}`)}`),
      L(`<b>Approximate:</b> ${M(`(${num(u(v0+h))} &minus; 2(${num(u(v0))}) + ${num(u(v0-h))})/${num(h*h)} = ${num(apx)}`)}`, `<b>الحل التقريبي:</b> ${M(`(${num(u(v0+h))} &minus; 2(${num(u(v0))}) + ${num(u(v0-h))})/${num(h*h)} = ${num(apx)}`)}`),
      L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)} (= 2·${c}·${st}${sup(2)}, it shrinks like ${st}${sup(2)})`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)} (يتناقص بمعدل ${M(st+sup(2))})`)+g)};
}

/* exact fractions [p, q] for Gauss–Jordan steps, and small linear-algebra helpers */
const rN=([p,q])=>{ if(q<0){ p=-p; q=-q; } const g=gcd(p,q); return [p/g+0, q/g]; };
const rMul=(a,b)=>rN([a[0]*b[0], a[1]*b[1]]), rDiv=(a,b)=>rN([a[0]*b[1], a[1]*b[0]]), rSub=(a,b)=>rN([a[0]*b[1]-b[0]*a[1], a[1]*b[1]]);
function detN(A){
  if(A.length===2) return A[0][0]*A[1][1]-A[0][1]*A[1][0];
  return A[0][0]*(A[1][1]*A[2][2]-A[1][2]*A[2][1]) - A[0][1]*(A[1][0]*A[2][2]-A[1][2]*A[2][0]) + A[0][2]*(A[1][0]*A[2][1]-A[1][1]*A[2][0]);
}
/* "3x − y + 2z" from coefficients, skipping zero terms */
function linN(cs, vars){
  const t=cs.map((c,j)=>[c,vars[j]]).filter(([c])=>c!==0);
  return t.length ? t.map(([c,v],i)=>i===0?lead(c,v):term(c,v)).join('') : '0';
}

/* joint pmf of (X, Y) as integer weights w[y][x] over N (shown as reduced fractions); indep=true makes w = product of marginals */
function jointTable(d, indep=false){
  const xs=d===1?[0,1]:[0,1,2], ys=d===3?[0,1,2]:[0,1];
  const sumRow=r=>r.reduce((s,v)=>s+v,0);
  let w, mx, my, N;
  const marg=()=>{ N=w.reduce((s,r)=>s+sumRow(r),0); mx=xs.map((_,i)=>w.reduce((s,r)=>s+r[i],0)); my=w.map(sumRow); };
  if(indep){ const ax=xs.map(()=>R(1,4)), ay=ys.map(()=>R(1,4)); w=ys.map((_,j)=>xs.map((_,i)=>ax[i]*ay[j])); marg(); }
  else do{ w=ys.map(()=>xs.map(()=>R(d===3?0:1,5))); marg(); }
       while(N===0 || w.every((r,j)=>r.every((v,i)=>v*N===mx[i]*my[j])));    // keep it genuinely dependent
  const html=`<table class="stbl joint"><tr><th>Y \\ X</th>${xs.map(x=>`<th>${x}</th>`).join('')}</tr>`+
    ys.map((y,j)=>`<tr><th>${y}</th>${xs.map((_,i)=>`<td>${fracStr(w[j][i],N)}</td>`).join('')}</tr>`).join('')+'</table>';
  return { xs, ys, w, N, mx, my, html };
}
/* E(X), E(Y), E(XY), Var(X), Var(Y) of a joint table, as exact fractions [p, q] */
function jointE(J){
  const sx=k=>J.xs.reduce((s,x,i)=>s+x**k*J.mx[i],0), sy=k=>J.ys.reduce((s,y,j)=>s+y**k*J.my[j],0);
  const EX=rN([sx(1),J.N]), EY=rN([sy(1),J.N]), EXY=rN([J.ys.reduce((s,y,j)=>s+J.xs.reduce((t,x,i)=>t+x*y*J.w[j][i],0),0), J.N]);
  return { EX, EY, EXY, VX:rSub(rN([sx(2),J.N]), rMul(EX,EX)), VY:rSub(rN([sy(2),J.N]), rMul(EY,EY)) };
}

/* ============================ GENERATORS ============================ */
/* each generator: (d) => {q:"<html>", a:"<html>"}  where d = 1..3 */

/* ---- STAT 361 helpers: LP data, transportation and assignment ---- */
/* two ≤ constraints through an integer point (x, y) whose intercepts cross, so the region has 4 corners */
function lpData(d){
  const k=d===1?3:6;
  for(;;){
    const x=R(1,d===1?5:8), y=R(1,d===1?5:8), a1=R(1,k), b1=R(1,k), a2=R(1,k), b2=R(1,k);
    if(a1*b2===a2*b1) continue;
    const c1=a1*x+b1*y, c2=a2*x+b2*y;
    if(!((c1*a2<c2*a1 && c1*b2>c2*b1) || (c1*a2>c2*a1 && c1*b2<c2*b1))) continue;
    return {c:[R(1,d===1?6:12)*(d===1?1:5), R(1,d===1?6:12)*(d===1?1:5)], rows:[[a1,b1,c1],[a2,b2,c2]]};
  }
}
const cx=a=>a===1?'':a;                                              // coefficient 1 is not written
function lpCross([[a1,b1,c1],[a2,b2,c2]]){ const D=a1*b2-a2*b1; return [rN([c1*b2-c2*b1,D]), rN([a1*c2-a2*c1,D])]; }
/* corner points (exact fractions): Max with ≤ → 4 corners incl. origin; Min with ≥ → 3 corners of the open region */
function lpVertices(rows, min){
  const v=f=>f[0]/f[1], xi=rows.map(([a,,c])=>rN([c,a])), yi=rows.map(([,b,c])=>rN([c,b])), Z=[0,1];
  const ext=(arr,big)=>arr.reduce((m,f)=>(big?v(f)>v(m):v(f)<v(m))?f:m);
  return min ? [[Z,ext(yi,true)], lpCross(rows), [ext(xi,true),Z]] : [[Z,Z],[ext(xi,false),Z],lpCross(rows),[Z,ext(yi,false)]];
}
function decisionTreeSVG(alts){
  const n=alts.length, w=380, rowH=86, h=n*rowH+6, yD=h/2, cx=150, out=[], neg=v=>v<0?'−'+Math.abs(v):''+v;
  out.push(`<rect class="dnode" x="8" y="${yD-9}" width="18" height="18"/>`);
  alts.forEach((a,i)=>{
    const y=3+rowH*i+rowH/2;
    out.push(`<line class="ax" x1="26" y1="${yD}" x2="${cx-9}" y2="${y}"/>`, `<text class="lb" x="${(26+cx)/2-8}" y="${(yD+y)/2-6}">A${i+1}</text>`,
             `<circle class="cnode" cx="${cx}" cy="${y}" r="9"/>`, `<text class="tl" x="${cx-24}" y="${y+24}">EMV ${neg(a.emv)}</text>`);
    [[y-26,`p = ${a.p}`,a.hi],[y+26,`p = ${num(1-a.p,2)}`,a.lo]].forEach(([y2,pl,val])=>
      out.push(`<line class="ax" x1="${cx+9}" y1="${y}" x2="290" y2="${y2}"/>`, `<text class="tl" x="205" y="${(y+y2)/2-4}">${pl}</text>`,
               `<text class="lb" x="296" y="${y2+4}">${neg(val)}</text>`));
  });
  return `<svg class="plot" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">${out.join('')}</svg>`;
}
/* balanced transportation problem: 3 sources, 3 (or 4) destinations, quantities in multiples of 5 */
function transportData(d){
  const m=3, n=d===3?4:3, C=Array.from({length:m},()=>Array.from({length:n},()=>R(2,d===1?12:20)));
  const s=Array.from({length:m},()=>R(4,d===1?8:12)*5), units=s.reduce((a,b)=>a+b,0)/5, dm=new Array(n).fill(1);
  for(let k=n;k<units;k++) dm[R(0,n-1)]++;
  return {C, s, dm:dm.map(v=>v*5)};
}
const SRC=i=>`S<sub>${i+1}</sub>`, DST=j=>`D<sub>${j+1}</sub>`;
/* initial basic solution; log holds one step per allocation (Vogel adds the penalties) */
function transportSolve({C,s,dm}, method){
  const m=s.length, n=dm.length, S=[...s], D=[...dm], x=C.map(r=>r.map(()=>0)), log=[];
  const rowOn=new Array(m).fill(true), colOn=new Array(n).fill(true);
  const give=(i,j,extra)=>{ const q=Math.min(S[i],D[j]); x[i][j]+=q; S[i]-=q; D[j]-=q; log.push({i,j,q,extra});
    if(S[i]===0) rowOn[i]=false; if(D[j]===0) colOn[j]=false; };
  if(method==='nw'){ let i=0,j=0; while(i<m&&j<n){ give(i,j); const a=S[i]===0, b=D[j]===0; if(a) i++; if(b) j++; } }
  else while(rowOn.some(Boolean)&&colOn.some(Boolean)){
    const cells=[]; for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(rowOn[i]&&colOn[j]) cells.push([i,j]);
    if(method==='lc'){
      cells.sort((a,b)=>C[a[0]][a[1]]-C[b[0]][b[1]] || Math.min(S[b[0]],D[b[1]])-Math.min(S[a[0]],D[a[1]]));
      give(...cells[0]);
    } else {
      const pen=v=>{ const t=[...v].sort((a,b)=>a-b); return t.length>1?t[1]-t[0]:t[0]; };
      const rp=C.map((r,i)=>rowOn[i]?pen(r.filter((_,j)=>colOn[j])):null), cp=dm.map((_,j)=>colOn[j]?pen(C.filter((_,i)=>rowOn[i]).map(r=>r[j])):null);
      const top=Math.max(...rp.filter(v=>v!==null), ...cp.filter(v=>v!==null));
      const cheapest=list=>list.reduce((b,c)=>C[c[0]][c[1]]<C[b[0]][b[1]]?c:b);
      const cand=[...rp.map((v,i)=>v===top?{c:cheapest(cells.filter(c=>c[0]===i)),line:SRC(i)}:null), ...cp.map((v,j)=>v===top?{c:cheapest(cells.filter(c=>c[1]===j)),line:DST(j)}:null)].filter(Boolean);
      const {c:[i,j],line}=cand.reduce((b,e)=>C[e.c[0]][e.c[1]]<C[b.c[0]][b.c[1]]?e:b);
      give(i,j,{rp,cp,top,line});
    }
  }
  const cost=x.reduce((t,r,i)=>t+r.reduce((u,q,j)=>u+q*C[i][j],0),0);
  return {x, log, cost};
}
function transportTableHTML({C,s,dm}, x){
  return tbl(['',...dm.map((_,j)=>DST(j)),Li('Supply','العرض')],
    [...C.map((r,i)=>[SRC(i), ...r.map((c,j)=>x&&x[i][j]>0?{v:`<b>${x[i][j]}</b> <small>(${c})</small>`,hl:true}:x?`<small>(${c})</small>`:c), s[i]]),
     [Li('Demand','الطلب'), ...dm, s.reduce((a,b)=>a+b,0)]]);
}
const T_NAMES={nw:['Northwest corner','الركن الشمالي الغربي'], lc:['Least cost','أقل تكلفة'], vogel:['Vogel approximation','فوجل التقريبية']};
function transport(d, method){
  const T=transportData(d), r=transportSolve(T, method), [en,ar]=T_NAMES[method], F=v=>v===null?'—':v;
  const rule={nw:['start at the top-left cell, allocate as much as possible, then move right (demand left) or down (supply left)','نبدأ من الخلية العليا اليسرى ونخصص أكبر كمية ممكنة ثم ننتقل يميناً (إن بقي طلب) أو لأسفل (إن بقي عرض)'],
    lc:['allocate as much as possible to the cheapest remaining cell, cross out the satisfied row/column, repeat','نخصص أكبر كمية ممكنة لأرخص خلية متبقية ثم نشطب الصف أو العمود المستوفى ونكرر'],
    vogel:['penalty = difference of the two smallest costs in each row/column; take the largest penalty and allocate to its cheapest cell','الجزاء = الفرق بين أصغر تكلفتين في كل صف وعمود؛ نختار أكبر جزاء ونخصص لأرخص خلية فيه']}[method];
  const lines=r.log.map(({i,j,q,extra})=>{
    const cell=M(`(${SRC(i)}, ${DST(j)})`), c=T.C[i][j];
    const pre = extra ? L(`Penalties — rows: ${extra.rp.map(F).join(', ')}; columns: ${extra.cp.map(F).join(', ')}. Largest ${extra.top} (${extra.line}).`,
                          `الجزاءات — الصفوف: ${M(extra.rp.map(F).join(', '))}، الأعمدة: ${M(extra.cp.map(F).join(', '))}. الأكبر ${M(extra.top)} (${M(extra.line)}).`)+' ' : '';
    return pre+L(`${cell} (cost ${c}): allocate ${q}.`, `${cell} (التكلفة ${M(c)}): نخصص ${M(q)}.`);
  });
  const terms=[]; T.C.forEach((row,i)=>row.forEach((c,j)=>{ if(r.x[i][j]>0) terms.push(`${r.x[i][j]}(${c})`); }));
  return {q:L(`Find an initial basic feasible solution by the ${en} method and its total cost:`, `أوجد الحل الأساسي المبدئي بطريقة ${ar} والتكلفة الكلية:`)+transportTableHTML(T),
    a:`<b>${Li('Total cost','التكلفة الكلية')} = ${r.cost}</b>`,
    s:steps(L(`Supply = demand = ${T.s.reduce((a,b)=>a+b,0)} (balanced). Rule: ${rule[0]}.`, `العرض = الطلب = ${M(T.s.reduce((a,b)=>a+b,0))} (متوازنة). القاعدة: ${rule[1]}.`),
            ...lines, L('Allocation table:', 'جدول التخصيص:')+transportTableHTML(T, r.x),
            M(`${Li('Cost','التكلفة')} = ${terms.join(' + ')} = ${r.cost}`))};
}
/* fewest lines (rows + columns) covering every zero — brute force over row sets (n ≤ 4) */
function minLineCover(A){
  const n=A.length; let best=null;
  for(let mask=0; mask<1<<n; mask++){
    const rows=[...Array(n)].map((_,i)=>!!(mask>>i&1)), cols=new Array(n).fill(false);
    for(let i=0;i<n;i++) if(!rows[i]) for(let j=0;j<n;j++) if(A[i][j]===0) cols[j]=true;
    const count=rows.filter(Boolean).length+cols.filter(Boolean).length;
    if(!best||count<best.count) best={count,rows,cols};
  }
  return best;
}
function permutations(n){ if(n===1) return [[0]]; return permutations(n-1).flatMap(p=>[...Array(n).keys()].map(k=>[...p.slice(0,k),n-1,...p.slice(k)])); }
const bestZeroAssignment=A=>permutations(A.length).find(p=>p.every((j,i)=>A[i][j]===0));

/* worked steps for a trig value at a special angle (degrees 0–180) */
function trigStepList(fn, ang, label){
  const key=fn==='sin'?'s':fn==='cos'?'c':'t', v=TRIG[ang][key];
  if(ang===90&&fn==='tan') return [L('tan = sin ÷ cos, and at 90° cos = 0: division by zero.', 'الظل = الجيب ÷ جيب التمام، وعند 90° جيب التمام = 0 فتكون قسمة على صفر.'), M(`tan 90&deg; = ${v}`)];
  if(ang<=90) return [L('Use the special-angle values (from the 30°-60°-90° and 45°-45°-90° triangles, or the unit circle):', 'نستخدم قيم الزوايا الخاصة (من المثلثين 30°-60°-90° و 45°-45°-90° أو دائرة الوحدة):'), M(`${fn} ${label} = ${v}`)];
  if(ang===180) return [L('On the unit circle 180° is the point (−1, 0): cos = −1, sin = 0, tan = sin/cos = 0.', 'على دائرة الوحدة الزاوية 180° تقابل النقطة (−1, 0): cos = −1 و sin = 0 و tan = 0.'), M(`${fn} 180&deg; = ${v}`)];
  const ref=180-ang, r=TRIG[ref][key];
  return [L(`${ang}° is in quadrant II; its reference angle is ${M(`180&deg; &minus; ${ang}&deg; = ${ref}&deg;`)}.`, `الزاوية ${M(ang+'°')} في الربع الثاني، وزاويتها المرجعية ${M(`180&deg; &minus; ${ang}&deg; = ${ref}&deg;`)}.`),
          L(`In quadrant II only sin is positive, so ${fn} is ${fn==='sin'?'positive':'negative'}:`, `في الربع الثاني الجيب فقط موجب، لذا ${M(fn)} ${fn==='sin'?'موجبة':'سالبة'}:`)+' '+M(`${fn} ${ang}&deg; = ${fn==='sin'?'':'&minus;'}${fn} ${ref}&deg; = ${v}`)];
}
const trigSteps=(fn, ang, label)=>steps(...trigStepList(fn, ang, label));

export const G = {
  /* ---- Pre-Algebra ---- */
  intAddSub(d){
    const hi = d===1?12:d===2?25:60;
    const a=nz(-hi,hi), b=nz(-hi,hi), op=pick(['+','&minus;']);
    const val = op==='+'? a+b : a-b, add=op==='+'?b:-b;
    const bb = b<0 ? `(${b<0?'&minus;':''}${Math.abs(b)})` : b;
    return {q:`${a<0?'&minus;'+Math.abs(a):a} ${op} ${bb} =`, a:`<b>${val<0?'&minus;'+Math.abs(val):val}</b>`,
      s:steps(...(op==='&minus;' ? [L('Subtracting a number = adding its opposite:', 'طرح عدد = جمع معكوسه:')+' '+M(`${sgn(a)} + (${sgn(-b)})`)] : []),
              (a<0)===(add<0) ? L(`Same signs: add the sizes and keep the sign: ${M(`${Math.abs(a)} + ${Math.abs(add)} = ${Math.abs(val)}`)}.`, `إشارتان متشابهتان: نجمع القيم المطلقة ونحتفظ بالإشارة: ${M(`${Math.abs(a)} + ${Math.abs(add)} = ${Math.abs(val)}`)}.`)
                               : L(`Different signs: subtract the smaller size from the larger and take the sign of the larger: ${M(`${Math.max(Math.abs(a),Math.abs(add))} &minus; ${Math.min(Math.abs(a),Math.abs(add))} = ${Math.abs(val)}`)}.`, `إشارتان مختلفتان: نطرح القيمة المطلقة الصغرى من الكبرى ونأخذ إشارة الأكبر: ${M(`${Math.max(Math.abs(a),Math.abs(add))} &minus; ${Math.min(Math.abs(a),Math.abs(add))} = ${Math.abs(val)}`)}.`),
              M(`= ${sgn(val)}`))};
  },
  intMulDiv(d){
    const hi=d===1?9:d===2?12:15;
    const rule=L('Sign rule: same signs → positive; different signs → negative.', 'قاعدة الإشارات: إشارتان متشابهتان ← موجب، مختلفتان ← سالب.');
    if(Math.random()<0.5){
      const a=nz(-hi,hi), b=nz(-hi,hi);
      return {q:`${a<0?'('+'&minus;'+Math.abs(a)+')':a} &times; ${b<0?'('+'&minus;'+Math.abs(b)+')':b} =`,
              a:`<b>${a*b<0?'&minus;'+Math.abs(a*b):a*b}</b>`,
        s:steps(L(`Multiply the sizes: ${M(`${Math.abs(a)} &times; ${Math.abs(b)} = ${Math.abs(a*b)}`)}.`, `نضرب القيم المطلقة: ${M(`${Math.abs(a)} &times; ${Math.abs(b)} = ${Math.abs(a*b)}`)}.`), rule, M(`= ${sgn(a*b)}`))};
    }else{
      const b=nz(-hi,hi), q=nz(-hi,hi), a=b*q;
      return {q:`${a<0?'&minus;'+Math.abs(a):a} &divide; ${b<0?'('+'&minus;'+Math.abs(b)+')':b} =`,
              a:`<b>${q<0?'&minus;'+Math.abs(q):q}</b>`,
        s:steps(L(`Divide the sizes: ${M(`${Math.abs(a)} &divide; ${Math.abs(b)} = ${Math.abs(q)}`)}.`, `نقسم القيم المطلقة: ${M(`${Math.abs(a)} &divide; ${Math.abs(b)} = ${Math.abs(q)}`)}.`), rule, M(`= ${sgn(q)}`))};
    }
  },
  orderOps(d){
    const a=R(2,9), b=R(2,9), c=R(2,9);
    const rule=L('Order of operations: brackets, then powers, then × and ÷, then + and −.', 'ترتيب العمليات: الأقواس ثم القوى ثم الضرب والقسمة ثم الجمع والطرح.');
    if(d===1){ return {q:`${a} + ${b} &times; ${c} =`, a:`<b>${a+b*c}</b>`, s:steps(rule, M(`${b} &times; ${c} = ${b*c}`), M(`${a} + ${b*c} = ${a+b*c}`))}; }
    if(d===2){ const e=R(2,9); return {q:`(${a} + ${b}) &times; ${c} &minus; ${e} =`, a:`<b>${(a+b)*c-e}</b>`, s:steps(rule, M(`(${a} + ${b}) = ${a+b}`), M(`${a+b} &times; ${c} = ${(a+b)*c}`), M(`${(a+b)*c} &minus; ${e} = ${(a+b)*c-e}`))}; }
    const e=R(2,6); return {q:`${a}${sup(2)} &minus; ${b} &times; ${c} + ${e} =`, a:`<b>${a*a-b*c+e}</b>`,
      s:steps(rule, M(`${a}${sup(2)} = ${a*a}`), M(`${b} &times; ${c} = ${b*c}`), M(`${a*a} &minus; ${b*c} + ${e} = ${sgn(a*a-b*c)} + ${e} = ${sgn(a*a-b*c+e)}`))};
  },
  fracAddSub(d){
    const dens = d===1?[2,3,4,5]:d===2?[2,3,4,5,6,8]:[3,4,6,8,9,12];
    const b=pick(dens); let c=pick(dens); if(d===1) c=b;
    const n1=R(1,b-1>0?b-1:1), n2=R(1,c-1>0?c-1:1), op=pick(['+','&minus;']);
    const den=b*c; let num = op==='+'? n1*c+n2*b : n1*c-n2*b;
    const s = b===c
      ? steps(L('Same denominator: add/subtract the numerators and keep the denominator.', 'المقامات متساوية: نجمع/نطرح البسطين ونبقي المقام.'), M(`${frac(`${n1} ${op} ${n2}`, b)} = ${frac(sgn(op==='+'?n1+n2:n1-n2), b)}`), M(`= ${fracStr(num,den)}`))
      : steps(L(`Common denominator ${b} × ${c} = ${den}:`, `نوحّد المقامات: ${M(`${b} &times; ${c} = ${den}`)}:`)+' '+M(`${frac(n1,b)} = ${frac(n1*c,den)}`)+', '+M(`${frac(n2,c)} = ${frac(n2*b,den)}`),
              M(`${frac(n1*c,den)} ${op} ${frac(n2*b,den)} = ${frac(sgn(num),den)}`),
              L('Simplify:', 'نبسّط:')+' '+M(fracStr(num,den)));
    return {q:`${frac(n1,b)} ${op} ${frac(n2,c)} =`, a:`<b>${fracStr(num,den)}</b>`, s};
  },
  fracMul(d){
    const hi=d===1?6:d===2?9:12;
    const n1=R(1,hi),b=R(2,hi),n2=R(1,hi),c=R(2,hi);
    return {q:`${frac(n1,b)} &times; ${frac(n2,c)} =`, a:`<b>${fracStr(n1*n2,b*c)}</b>`,
      s:steps(L('Multiply numerator × numerator and denominator × denominator:', 'نضرب البسط في البسط والمقام في المقام:')+' '+M(`${frac(`${n1} &times; ${n2}`, `${b} &times; ${c}`)} = ${frac(n1*n2,b*c)}`),
              L(`Simplify (divide by ${gcd(n1*n2,b*c)}):`, `نبسّط (نقسم على ${M(gcd(n1*n2,b*c))}):`)+' '+M(fracStr(n1*n2,b*c)))};
  },

  /* ---- Algebra 1 ---- */
  oneStep(d){
    const x=nz(-12,12);
    const type=pick(['add','mul','div']);
    if(type==='add'){ const b=nz(-15,15);
      return {q:`x ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${x+b}`, a:`<b>x = ${x}</b>`,
        s:steps(L(`To get x alone, undo the ${b<0?'subtraction':'addition'}: ${b<0?'add':'subtract'} ${Math.abs(b)} on both sides.`, `لعزل x نعكس ${b<0?'الطرح':'الجمع'}: ${b<0?'نضيف':'نطرح'} ${M(Math.abs(b))} للطرفين.`),
                M(`x = ${sgn(x+b)} ${b<0?'+':'&minus;'} ${Math.abs(b)} = ${sgn(x)}`),
                L(`Check: ${M(`${sgn(x)} ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${sgn(x+b)}`)} ✓`, `تحقق: ${M(`${sgn(x)} ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${sgn(x+b)}`)} ✓`))}; }
    if(type==='mul'){ const a=nz(2,9);
      return {q:`${a}x = ${a*x}`, a:`<b>x = ${x}</b>`,
        s:steps(L(`x is multiplied by ${a}; undo it by dividing both sides by ${a}.`, `المتغير x مضروب في ${M(a)}؛ نقسم الطرفين على ${M(a)}.`),
                M(`x = ${sgn(a*x)} &divide; ${sgn(a)} = ${sgn(x)}`),
                L(`Check: ${M(`${a}(${sgn(x)}) = ${sgn(a*x)}`)} ✓`, `تحقق: ${M(`${a}(${sgn(x)}) = ${sgn(a*x)}`)} ✓`))}; }
    const a=nz(2,9);
    return {q:`${frac('x',a)} = ${x}`, a:`<b>x = ${a*x}</b>`,
      s:steps(L(`x is divided by ${a}; undo it by multiplying both sides by ${a}.`, `المتغير x مقسوم على ${M(a)}؛ نضرب الطرفين في ${M(a)}.`),
              M(`x = ${sgn(x)} &times; ${sgn(a)} = ${sgn(a*x)}`))};
  },
  twoStep(d){
    const x=nz(-10,10), a=nz(2,d===3?12:9), b=nz(-15,15), c=a*x+b;
    return {q:`${a}x ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${c}`, a:`<b>x = ${x}</b>`,
      s:steps(L(`Step 1: move the constant — ${b<0?'add':'subtract'} ${Math.abs(b)} on both sides.`, `الخطوة 1: ننقل الحد الثابت — ${b<0?'نضيف':'نطرح'} ${M(Math.abs(b))} للطرفين.`),
              M(`${a}x = ${sgn(c)} ${b<0?'+':'&minus;'} ${Math.abs(b)} = ${sgn(a*x)}`),
              L(`Step 2: divide both sides by ${a}.`, `الخطوة 2: نقسم الطرفين على ${M(a)}.`),
              M(`x = ${sgn(a*x)} &divide; ${sgn(a)} = ${sgn(x)}`),
              L(`Check: ${M(`${a}(${sgn(x)}) ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${sgn(c)}`)} ✓`, `تحقق: ${M(`${a}(${sgn(x)}) ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${sgn(c)}`)} ✓`))};
  },
  multiStep(d){
    // ax + b = cx + e   with integer solution
    const x=nz(-8,8);
    let a=nz(2,8), c=nz(-8,8); while(a===c)c=nz(-8,8);
    const b=nz(-12,12);
    const e=(a-c)*x+b; // a x + b = c x + e
    return {q:`${lead(a,'x')} ${term(b,'')} = ${lead(c,'x')} ${term(e,'')}`.replace(/\s+/g,' '),
            a:`<b>x = ${x}</b>`,
      s:steps(L(`Collect the x terms on the left: ${c<0?'add':'subtract'} ${M(`${Math.abs(c)===1?'':Math.abs(c)}x`)} on both sides.`, `نجمع حدود x في الطرف الأيسر: ${c<0?'نضيف':'نطرح'} ${M(`${Math.abs(c)===1?'':Math.abs(c)}x`)} للطرفين.`),
              M(`${lead(a-c,'x')}${term(b,'')} = ${sgn(e)}`),
              L(`Move the constant to the right:`, `ننقل الثابت إلى الطرف الأيمن:`)+' '+M(`${lead(a-c,'x')} = ${sgn(e)} ${b<0?'+':'&minus;'} ${Math.abs(b)} = ${sgn(e-b)}`),
              L(`Divide by ${a-c}:`, `نقسم على ${M(a-c)}:`)+' '+M(`x = ${sgn(e-b)} &divide; ${sgn(a-c)} = ${sgn(x)}`))};
  },
  combineLike(d){
    const a=nz(-8,8),c=nz(-8,8),b=nz(-9,9),e=nz(-9,9);
    const q=`${lead(a,'x')}${term(b,'')}${term(c,'x')}${term(e,'')}`;
    const ans=`${lead(a+c,'x')}${term(b+e,'')}`;
    return {q, a:`<b>${ans}</b>`,
      s:steps(L('Like terms have the same variable part. Group the x terms together and the numbers together:', 'الحدود المتشابهة لها نفس الجزء المتغير. نجمع حدود x معاً والأعداد معاً:'),
              M(`(${lead(a,'x')}${term(c,'x')}) + (${sgn(b)}${term(e,'')})`),
              L(`Add the coefficients of x: ${M(`${sgn(a)} + (${sgn(c)}) = ${sgn(a+c)}`)}; add the numbers: ${M(`${sgn(b)} + (${sgn(e)}) = ${sgn(b+e)}`)}.`, `نجمع معاملات x: ${M(`${sgn(a)} + (${sgn(c)}) = ${sgn(a+c)}`)}، ونجمع الأعداد: ${M(`${sgn(b)} + (${sgn(e)}) = ${sgn(b+e)}`)}.`),
              M(`= ${ans}`))};
  },
  distribute(d){
    const a=nz(2,d===3?9:6), b=nz(-7,7), c=nz(-9,9);
    return {q:`${a}(${lead(b,'x')} ${term(c,'')})`, a:`<b>${lead(a*b,'x')}${term(a*c,'')}</b>`,
      s:steps(L(`Distributive property: multiply ${a} by each term inside the brackets.`, `خاصية التوزيع: نضرب ${M(a)} في كل حد داخل القوس.`),
              M(`${a} &times; ${lead(b,'x')} = ${lead(a*b,'x')}`), M(`${a} &times; (${sgn(c)}) = ${sgn(a*c)}`),
              M(`= ${lead(a*b,'x')}${term(a*c,'')}`))};
  },
  slope(d){
    let x1=nz(-8,8),y1=nz(-8,8),x2=nz(-8,8),y2=nz(-8,8);
    while(x2===x1)x2=nz(-8,8);
    const [n,dd]=reduceFrac(y2-y1,x2-x1);
    return {q:`Slope through (${x1}, ${y1}) and (${x2}, ${y2})`,
            a:`<b>m = ${fracStr(n,dd)}</b>`,
      s:steps(L('Slope = change in y ÷ change in x:', 'الميل = التغير في y ÷ التغير في x:')+' '+M(`m = ${frac('y<sub>2</sub> &minus; y<sub>1</sub>','x<sub>2</sub> &minus; x<sub>1</sub>')}`),
              M(`m = ${frac(`${sgn(y2)} &minus; (${sgn(y1)})`, `${sgn(x2)} &minus; (${sgn(x1)})`)} = ${frac(sgn(y2-y1), sgn(x2-x1))} = ${fracStr(n,dd)}`))};
  },

  /* ---- Algebra 2 ---- */
  factorQuad(d){
    const hi=d===1?6:d===2?9:12;
    const r1=nz(-hi,hi), r2=nz(-hi,hi);
    const b=-(r1+r2), c=r1*r2;
    const q=`x${sup(2)}${term(b,'x')}${term(c,'')}`;
    const f=(r)=> r===0?'x':`(x ${r<0?'+ '+Math.abs(r):'&minus; '+r})`;
    return {q, a:`<b>${f(r1)}${f(r2)}</b>`,
      s:steps(L(`Look for two numbers whose product is ${c} (the constant) and whose sum is ${b} (the coefficient of x).`, `نبحث عن عددين حاصل ضربهما ${M(c)} (الحد الثابت) ومجموعهما ${M(b)} (معامل x).`),
              L(`They are ${M(sgn(-r1))} and ${M(sgn(-r2))}: ${M(`(${sgn(-r1)})(${sgn(-r2)}) = ${sgn(c)}`)}, ${M(`(${sgn(-r1)}) + (${sgn(-r2)}) = ${sgn(b)}`)}.`, `العددان هما ${M(sgn(-r1))} و ${M(sgn(-r2))}: ${M(`(${sgn(-r1)})(${sgn(-r2)}) = ${sgn(c)}`)}، ${M(`(${sgn(-r1)}) + (${sgn(-r2)}) = ${sgn(b)}`)}.`),
              L('Write the factors:', 'نكتب العوامل:')+' '+M(`${q} = ${f(r1)}${f(r2)}`))};
  },
  solveQuad(d){
    const hi=d===1?6:9;
    const r1=nz(-hi,hi),r2=nz(-hi,hi);
    const b=-(r1+r2),c=r1*r2;
    const roots = r1===r2?`x = ${r1}`:`x = ${Math.min(r1,r2)}, ${Math.max(r1,r2)}`;
    const f=(r)=>`(x ${r<0?'+ '+Math.abs(r):'&minus; '+r})`;
    return {q:`x${sup(2)}${term(b,'x')}${term(c,'')} = 0`, a:`<b>${roots}</b>`,
      s:steps(L(`Factor: two numbers with product ${c} and sum ${b} are ${sgn(-r1)} and ${sgn(-r2)}.`, `نحلل: عددان حاصل ضربهما ${M(c)} ومجموعهما ${M(b)} هما ${M(sgn(-r1))} و ${M(sgn(-r2))}.`),
              M(`${f(r1)}${f(r2)} = 0`),
              L('A product is zero when one of its factors is zero:', 'حاصل الضرب يساوي صفراً عندما يكون أحد العوامل صفراً:')+' '+M(`x ${r1<0?'+ '+Math.abs(r1):'&minus; '+r1} = 0 &rArr; x = ${sgn(r1)}`)+(r1===r2?'':', '+M(`x ${r2<0?'+ '+Math.abs(r2):'&minus; '+r2} = 0 &rArr; x = ${sgn(r2)}`)))};
  },
  simplifyRadical(d){
    const inside=pick(d===1?[2,3,5,6,7]:[2,3,5,6,7,10,11,13,14,15]);
    const out=R(2,d===3?8:5);
    const n=out*out*inside;
    return {q:`${sq(n)} =`, a:`<b>${out}${sq(inside)}</b>`,
      s:steps(L(`Write ${n} as a perfect square times another number: ${M(`${n} = ${out*out} &times; ${inside}`)}.`, `نكتب ${M(n)} كمربع كامل مضروباً في عدد آخر: ${M(`${n} = ${out*out} &times; ${inside}`)}.`),
              M(`${sq(n)} = ${sq(out*out)} &times; ${sq(inside)}`),
              L(`${M(`${sq(out*out)} = ${out}`)}, so the answer is ${M(`${out}${sq(inside)}`)}.`, `${M(`${sq(out*out)} = ${out}`)}، إذن الناتج ${M(`${out}${sq(inside)}`)}.`))};
  },

  /* ---- Geometry ---- */
  rectangle(d){
    const w=R(3,d===3?40:20),h=R(3,d===3?40:20);
    return {q:`Rectangle ${w} by ${h}. Find area and perimeter.`,
            a:`<b>A = ${w*h}, P = ${2*(w+h)}</b>`,
      s:steps(L('Area of a rectangle = length × width:', 'مساحة المستطيل = الطول × العرض:')+' '+M(`A = ${w} &times; ${h} = ${w*h}`),
              L('Perimeter = 2 × (length + width):', 'المحيط = 2 × (الطول + العرض):')+' '+M(`P = 2(${w} + ${h}) = 2 &times; ${w+h} = ${2*(w+h)}`))};
  },
  triangleArea(d){
    const b=R(2,d===3?30:16)*2, h=R(2,d===3?30:16);
    return {q:`Triangle, base ${b}, height ${h}. Find area.`, a:`<b>A = ${b*h/2}</b>`,
      s:steps(L('Area of a triangle = ½ × base × height.', 'مساحة المثلث = ½ × القاعدة × الارتفاع.'),
              M(`A = ${frac(1,2)} &times; ${b} &times; ${h} = ${frac(b*h,2)} = ${b*h/2}`))};
  },
  circle(d){
    const r=R(2,d===3?20:12);
    return {q:`Circle, radius ${r}. Area and circumference (in terms of &pi;).`,
            a:`<b>A = ${r*r}&pi;, C = ${2*r}&pi;</b>`,
      s:steps(L('Area of a circle:', 'مساحة الدائرة:')+' '+M(`A = &pi;r${sup(2)} = &pi; &times; ${r}${sup(2)} = ${r*r}&pi;`),
              L('Circumference:', 'محيط الدائرة:')+' '+M(`C = 2&pi;r = 2 &times; &pi; &times; ${r} = ${2*r}&pi;`))};
  },
  pythagorean(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[20,21,29]]);
    const k=d===3?R(1,3):1; const [a,b,c]=t.map(v=>v*k);
    const rule=L('Pythagoras: in a right triangle', 'نظرية فيثاغورس: في المثلث القائم')+' '+M(`a${sup(2)} + b${sup(2)} = c${sup(2)}`)+' '+L('(c = hypotenuse).', '(c الوتر).');
    if(Math.random()<0.5) return {q:`Right triangle, legs ${a} and ${b}. Find the hypotenuse.`, a:`<b>c = ${c}</b>`,
      s:steps(rule, M(`c${sup(2)} = ${a}${sup(2)} + ${b}${sup(2)} = ${a*a} + ${b*b} = ${c*c}`), M(`c = ${sq(c*c)} = ${c}`))};
    return {q:`Right triangle, hypotenuse ${c}, one leg ${a}. Find the other leg.`, a:`<b>${b}</b>`,
      s:steps(rule, M(`b${sup(2)} = ${c}${sup(2)} &minus; ${a}${sup(2)} = ${c*c} &minus; ${a*a} = ${b*b}`), M(`b = ${sq(b*b)} = ${b}`))};
  },

  /* ---- Calculus ---- */
  derivative(d){
    const n = d===1?2:d===2?3:3;
    const terms=[]; const used=new Set();
    for(let i=0;i<n;i++){ let p=R(2,d===3?6:4); while(used.has(p))p=R(1,6); used.add(p); terms.push([nz(2,9),p]); }
    terms.sort((a,b)=>b[1]-a[1]);
    const qh=terms.map((t,i)=> (i===0?lead(t[0],'x'+sup(t[1])):term(t[0],'x'+sup(t[1])))).join('');
    const dv=terms.map(t=>[t[0]*t[1], t[1]-1]);
    const ah=dv.map((t,i)=>{
      const vp = t[1]===0?'':(t[1]===1?'x':'x'+sup(t[1]));
      return i===0?lead(t[0],vp):term(t[0],vp);
    }).join('');
    return {q:`f(x) = ${qh}&nbsp;&nbsp; f&prime;(x) =`, a:`<b>${ah}</b>`,
      s:steps(L(`Power rule: ${M(`d/dx (c x${sup('n')}) = c&middot;n x${sup('n&minus;1')}`)}, applied term by term.`, `قاعدة القوة: ${M(`d/dx (c x${sup('n')}) = c&middot;n x${sup('n&minus;1')}`)} لكل حد.`),
              ...terms.map(t=>M(`${t[0]}x${sup(t[1])} &rarr; ${t[0]}&middot;${t[1]}x${t[1]-1===1?'':sup(t[1]-1)} = ${t[0]*t[1]}x${t[1]-1===1?'':sup(t[1]-1)}`)),
              L(`Result: ${M(`f&prime;(x) = ${ah}`)}`, `الناتج: ${M(`f&prime;(x) = ${ah}`)}`))};
  },

  /* ---- Ratios & proportions (Pre-Algebra) ---- */
  simplifyRatio(d){
    const hi=d===1?12:d===2?30:80;
    const g=R(2,8), a=g*R(2,hi), b=g*R(2,hi);
    const [n,m]=reduceFrac(a,b), G=gcd(a,b);
    return {q:`Simplify the ratio ${a} : ${b}`, a:`<b>${n} : ${m}</b>`,
      s:steps(L(`Find the greatest common factor of ${a} and ${b}: ${G}.`, `نوجد العامل المشترك الأكبر للعددين ${M(a)} و ${M(b)}: ${M(G)}.`),
              L('Divide both parts by it:', 'نقسم الحدين عليه:')+' '+M(`${a} &divide; ${G} : ${b} &divide; ${G} = ${n} : ${m}`))};
  },
  proportions(d){
    const m=R(1,6), n=R(1,6), t1=R(2,d===3?9:6), t2=R(2,d===3?9:6);
    const a=m*t1, b=n*t1, c=m*t2, x=n*t2;
    return {q:`Solve the proportion: ${frac(a,b)} = ${frac(c,'x')}`, a:`<b>x = ${x}</b>`,
      s:steps(L('Cross-multiply:', 'نضرب طرفين في وسطين:')+' '+M(`${a} &times; x = ${b} &times; ${c}`),
              M(`${a}x = ${b*c}`), M(`x = ${frac(b*c,a)} = ${x}`))};
  },

  /* ---- Systems of equations (Algebra 1) ---- */
  systems(d){
    const x=nz(-6,6), y=nz(-6,6);
    let a1=nz(1,d===3?6:4), b1=nz(1,d===3?6:4), a2=nz(1,d===3?6:4), b2=nz(1,d===3?6:4);
    while(a1*b2-a2*b1===0){ a2=nz(1,5); b2=nz(1,5); }
    const c1=a1*x+b1*y, c2=a2*x+b2*y;
    const lhs=(a,b)=>`${lead(a,'x')}${term(b,'y')}`;
    const D=a1*b2-a2*b1;
    return {q:L('Solve the system:','حل النظام:')+'<br>'+align([[lhs(a1,b1),'=',c1],[lhs(a2,b2),'=',c2]], true),
            a:`<b>(${x}, ${y})</b>`,
      s:steps(L(`Elimination: multiply the first equation by ${b2} and the second by ${b1} so the y terms match:`, `طريقة الحذف: نضرب المعادلة الأولى في ${M(b2)} والثانية في ${M(b1)} لتتساوى معاملات y:`)+
                align([[lhs(a1*b2,b1*b2),'=',c1*b2],[lhs(a2*b1,b1*b2),'=',c2*b1]]),
              L('Subtract the second from the first (y disappears):', 'نطرح الثانية من الأولى (يختفي y):')+' '+M(`${lead(D,'x')} = ${sgn(c1*b2-c2*b1)} &rArr; x = ${sgn(x)}`),
              L(`Substitute x = ${x} in the first equation:`, `نعوّض ${M(`x = ${x}`)} في المعادلة الأولى:`)+' '+M(`${a1}(${sgn(x)})${term(b1,'y')} = ${c1} &rArr; ${lead(b1,'y')} = ${sgn(c1-a1*x)} &rArr; y = ${sgn(y)}`),
              L(`Check in the second equation: ${M(`${a2}(${sgn(x)}) + ${b2}(${sgn(y)}) = ${c2}`)} ✓`, `تحقق في المعادلة الثانية: ${M(`${a2}(${sgn(x)}) + ${b2}(${sgn(y)}) = ${c2}`)} ✓`))};
  },

  /* ---- Trigonometry ---- */
  trigValues(d){
    const easy=[0,30,45,60,90];
    const angles = d===1?easy:[0,30,45,60,90,120,135,150,180];
    const ang=pick(angles), fn=pick(['sin','cos','tan']);
    const key=fn==='sin'?'s':fn==='cos'?'c':'t';
    return {q:`${fn} ${ang}&deg; =`, a:`<b>${TRIG[ang][key]}</b>`, s:trigSteps(fn, ang, `${ang}&deg;`)};
  },
  trigRatios(d){
    const t=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29],[6,8,10],[9,12,15]]);
    const [opp,adj,hyp]=t, fn=pick(['sin','cos','tan']);
    const [top,bot,en,ar]={sin:[opp,hyp,'opposite ÷ hypotenuse','المقابل ÷ الوتر'], cos:[adj,hyp,'adjacent ÷ hypotenuse','المجاور ÷ الوتر'], tan:[opp,adj,'opposite ÷ adjacent','المقابل ÷ المجاور']}[fn];
    const val=fracStr(top,bot);
    return {q:`Right triangle with &ang;&theta;: opposite = ${opp}, adjacent = ${adj}, hypotenuse = ${hyp}. Find ${fn} &theta;.`,
            a:`<b>${val}</b>`,
      s:steps(L(`${fn} θ = ${en} (SOH-CAH-TOA).`, `${M(fn+' θ')} = ${ar}.`),
              M(`${fn} &theta; = ${frac(top,bot)}${gcd(top,bot)>1?` = ${val}`:''}`))};
  },
  degRad(d){
    const degs = d===1?[30,45,60,90,180]:[30,45,60,90,120,135,150,210,225,240,270,300,315,330,360];
    const deg=pick(degs); const [n,m]=reduceFrac(deg,180);
    const rad = m===1 ? `${n===1?'':n}&pi;` : frac(`${n===1?'':n}&pi;`, m);
    return {q:`Convert ${deg}&deg; to radians.`, a:`<b>${rad}</b>`,
      s:steps(L('180° = π radians, so multiply the degrees by π/180:', '180° = π راديان، لذا نضرب الدرجات في π/180:'),
              M(`${deg} &times; ${frac('&pi;',180)} = ${frac(deg+'&pi;',180)}`),
              L(`Simplify the fraction ${deg}/180 = ${n}/${m}:`, `نبسّط الكسر ${M(`${deg}/180 = ${n}/${m}`)}:`)+' '+M(rad))};
  },

  /* ---- Integration (Calculus) ---- */
  integral(d){
    const n=d===1?2:3; const used=new Set(); const terms=[];
    for(let i=0;i<n;i++){ let p=R(1,d===3?5:3); while(used.has(p))p=R(1,6); used.add(p);
      const k=nz(1,5); terms.push({c:k*(p+1), p, k}); }
    terms.sort((a,b)=>b.p-a.p);
    const qh=terms.map((t,i)=> (i===0?lead(t.c,'x'+sup(t.p)):term(t.c,'x'+sup(t.p)))).join('');
    const ah=terms.map((t,i)=>{ const vp='x'+sup(t.p+1);
      return i===0?lead(t.k,vp):term(t.k,vp); }).join('');
    return {q:`&int; (${qh}) dx =`, a:`<b>${ah} + C</b>`,
      s:steps(L(`Power rule: ${M(`&int; c x${sup('n')} dx = c x${sup('n+1')}/(n + 1) + C`)}`, `قاعدة القوة: ${M(`&int; c x${sup('n')} dx = c x${sup('n+1')}/(n + 1) + C`)}`),
              ...terms.map(t=>M(`${sgn(t.c)}x${t.p===1?'':sup(t.p)} &rarr; ${sgn(t.c)}x${sup(t.p+1)}/${t.p+1} = ${sgn(t.k)}x${sup(t.p+1)}`)),
              L(`Add the constant: ${M(`${ah} + C`)}`, `نضيف الثابت: ${M(`${ah} + C`)}`))};
  },
  defIntegral(d){
    const p=R(1,d===3?3:2), k=nz(1,4), c=k*(p+1);
    let a=R(0,2), b=R(a+1,4);
    const F=v=>k*Math.pow(v,p+1), xp='x'+(p===1?'':sup(p));
    return {q:`&int;<sub>${a}</sub><sup>${b}</sup> ${lead(c,xp)} dx =`,
            a:`<b>${F(b)-F(a)}</b>`,
      s:steps(L('Power rule for integrals: raise the power by 1 and divide by the new power.', 'قاعدة القوة في التكامل: نزيد الأس بواحد ونقسم على الأس الجديد.')+' '+M(`&int; x${sup('n')} dx = ${frac('x'+sup('n+1'),'n+1')}`),
              L('Antiderivative:', 'الدالة الأصلية:')+' '+M(`F(x) = ${frac(c,p+1)}x${sup(p+1)} = ${lead(k,'x'+sup(p+1))}`),
              L('Evaluate F(b) − F(a):', 'نحسب F(b) − F(a):')+' '+M(`F(${b}) &minus; F(${a}) = ${sgn(F(b))} &minus; ${F(a)<0?`(${sgn(F(a))})`:F(a)} = ${sgn(F(b)-F(a))}`))};
  },

  /* ================= EXPANSION PACKS ================= */

  /* ---- Pre-Algebra pack ---- */
  rounding(d){
    const place=pick(d===1?[10,100]:[10,100,1000]);
    const n=R(place,place*90)+R(0,place-1);
    const r=Math.round(n/place)*place;
    const name=place===10?'ten':place===100?'hundred':'thousand', nameAr=place===10?'العشرات':place===100?'المئات':'الآلاف';
    const dig=Math.floor(n/(place/10))%10;
    return {q:`Round ${n} to the nearest ${name}.`, a:`<b>${r}</b>`,
      s:steps(L(`Look at the digit just to the right of the ${name}s place: it is ${dig}.`, `ننظر إلى الرقم الذي على يمين منزلة ${nameAr}: وهو ${M(dig)}.`),
              L(dig>=5?'It is 5 or more, so round up.':'It is less than 5, so round down.', dig>=5?'وهو 5 أو أكثر، لذا نقرّب للأعلى.':'وهو أقل من 5، لذا نقرّب للأسفل.'),
              M(`${n} &asymp; ${r}`))};
  },
  percentOf(d){
    const p=pick(d===1?[10,25,50]:d===2?[5,10,20,25,40,50,75]:[5,12,15,18,24,35,60]);
    const step=100/gcd(p,100);
    const N=step*R(2,d===3?12:8);
    return {q:`Find ${p}% of ${N}.`, a:`<b>${p*N/100}</b>`,
      s:steps(L(`${p}% means ${p} out of 100, i.e. ${frac(p,100)}.`, `${M(p+'%')} تعني ${M(p)} من 100 أي ${M(frac(p,100))}.`),
              M(`${frac(p,100)} &times; ${N} = ${frac(p*N,100)} = ${p*N/100}`))};
  },
  fracToDecimal(d){
    const den=pick(d===1?[2,4,5,10]:[2,4,5,8,10,20,25]);
    const num=R(1,den-1), t=[10,100,1000].find(p=>p%den===0);
    return {q:`Write ${frac(num,den)} as a decimal.`, a:`<b>${+(num/den).toFixed(4)}</b>`,
      s:steps(L(`Make the denominator ${t}: multiply top and bottom by ${t/den}.`, `نجعل المقام ${M(t)}: نضرب البسط والمقام في ${M(t/den)}.`),
              M(`${frac(num,den)} = ${frac(num*t/den,t)} = ${+(num/den).toFixed(4)}`))};
  },
  gcfLcm(d){
    const hi=d===1?12:d===2?24:40;
    const a=R(2,hi), b=R(2,hi), g=gcd(a,b);
    const fz=n=>{ const f=[]; for(let p=2;n>1;p++) while(n%p===0){ f.push(p); n/=p; } return f.join(' &times; ')||'1'; };
    const fs=M(`${a} = ${fz(a)}`)+', '+M(`${b} = ${fz(b)}`);
    if(Math.random()<0.5) return {q:`Find the GCF of ${a} and ${b}.`, a:`<b>${g}</b>`,
      s:steps(L('Prime factorisations:', 'التحليل إلى عوامل أولية:')+' '+fs, L('GCF = product of the common prime factors (smallest powers):', 'العامل المشترك الأكبر = حاصل ضرب العوامل الأولية المشتركة (بأصغر أس):')+' '+M(`GCF = ${g}`))};
    return {q:`Find the LCM of ${a} and ${b}.`, a:`<b>${a*b/g}</b>`,
      s:steps(L('Prime factorisations:', 'التحليل إلى عوامل أولية:')+' '+fs, M(`GCF = ${g}`),
              L('LCM = (a × b) ÷ GCF:', 'المضاعف المشترك الأصغر = (a × b) ÷ ع.م.أ:')+' '+M(`${frac(`${a} &times; ${b}`, g)} = ${a*b/g}`))};
  },
  powers(d){
    const base=R(2,d===1?6:9), exp=R(2,d===1?3:d===2?4:5);
    let acc=base; const chain=[]; for(let i=2;i<=exp;i++){ chain.push(M(`${acc} &times; ${base} = ${acc*base}`)); acc*=base; }
    return {q:`${base}${sup(exp)} =`, a:`<b>${Math.pow(base,exp)}</b>`,
      s:steps(L(`${M(`${base}${sup(exp)}`)} means ${base} multiplied by itself ${exp} times:`, `${M(`${base}${sup(exp)}`)} تعني ضرب ${M(base)} في نفسه ${M(exp)} مرات:`)+' '+M([...Array(exp)].map(()=>base).join(' &times; ')),
              ...chain)};
  },
  absValue(d){
    const sgn=v=>v<0?'&minus;'+Math.abs(v):''+v;
    const a=nz(-25,25), b=nz(-25,25), op=pick(['+','&minus;']);
    const val = op==='+'? Math.abs(a)+Math.abs(b) : Math.abs(a)-Math.abs(b);
    return {q:`|${sgn(a)}| ${op} |${sgn(b)}| =`, a:`<b>${val<0?'&minus;'+Math.abs(val):val}</b>`,
      s:steps(L('Absolute value is the distance from 0, so it is never negative:', 'القيمة المطلقة هي البعد عن الصفر، فهي لا تكون سالبة:')+' '+M(`|${sgn(a)}| = ${Math.abs(a)}`)+', '+M(`|${sgn(b)}| = ${Math.abs(b)}`),
              M(`${Math.abs(a)} ${op} ${Math.abs(b)} = ${sgn(val)}`))};
  },

  /* ---- Algebra 1 pack ---- */
  evalExpr(d){
    const a=nz(2,9), b=nz(-12,12), x=nz(-8,8);
    return {q:`Evaluate ${lead(a,'x')}${term(b,'')} for x = ${x}.`, a:`<b>${a*x+b}</b>`,
      s:steps(L(`Replace x by ${x} (use brackets for the number):`, `نعوّض عن x بالعدد ${M(x)} (نضعه بين قوسين):`)+' '+M(`${a}(${sgn(x)})${term(b,'')}`),
              L('Multiply first, then add:', 'نضرب أولاً ثم نجمع:')+' '+M(`${sgn(a*x)}${term(b,'')} = ${sgn(a*x+b)}`))};
  },
  inequalities(d){
    const a=nz(2,d===3?9:6), x=nz(-8,8), b=nz(-12,12), op=pick(['&lt;','&gt;','&le;','&ge;']);
    const c=a*x+b;
    return {q:`Solve: ${a}x ${b<0?'&minus; '+Math.abs(b):'+ '+b} ${op} ${c}`, a:`<b>x ${op} ${x}</b>`,
      s:steps(L(`Solve like an equation. ${b<0?'Add':'Subtract'} ${Math.abs(b)} on both sides:`, `نحل كالمعادلة. ${b<0?'نضيف':'نطرح'} ${M(Math.abs(b))} للطرفين:`)+' '+M(`${a}x ${op} ${sgn(c-b)}`),
              L(`Divide by ${a}; it is positive, so the inequality sign stays the same:`, `نقسم على ${M(a)}؛ وهو موجب فلا تتغير إشارة المتباينة:`)+' '+M(`x ${op} ${sgn(x)}`),
              L('(Dividing or multiplying by a negative number would reverse the sign.)', '(القسمة أو الضرب في عدد سالب تقلب إشارة المتباينة.)'))};
  },
  exponentRules(d){
    const a=R(2,8), b=R(2,8);
    if(Math.random()<0.5) return {q:`Simplify: x${sup(a)} &middot; x${sup(b)}`, a:`<b>x${sup(a+b)}</b>`,
      s:steps(L('Same base multiplied: add the exponents.', 'عند ضرب قوى لها نفس الأساس نجمع الأسس.')+' '+M(`x${sup('m')} &middot; x${sup('n')} = x${sup('m+n')}`),
              M(`x${sup(a)} &middot; x${sup(b)} = x${sup(`${a}+${b}`)} = x${sup(a+b)}`))};
    const hi=Math.max(a,b)+R(1,4), lo=Math.min(a,b);
    return {q:`Simplify: ${frac('x'+sup(hi),'x'+sup(lo))}`, a:`<b>x${sup(hi-lo)}</b>`,
      s:steps(L('Same base divided: subtract the exponents.', 'عند قسمة قوى لها نفس الأساس نطرح الأسس.')+' '+M(`x${sup('m')} / x${sup('n')} = x${sup('m&minus;n')}`),
              M(`x${sup(`${hi}&minus;${lo}`)} = x${sup(hi-lo)}`))};
  },
  midpoint(d){
    const x1=nz(-12,12), y1=nz(-12,12), x2=nz(-12,12), y2=nz(-12,12);
    return {q:`Find the midpoint of (${x1}, ${y1}) and (${x2}, ${y2}).`,
            a:`<b>(${(x1+x2)/2}, ${(y1+y2)/2})</b>`,
      s:steps(L('The midpoint is the average of the x-coordinates and the average of the y-coordinates:', 'نقطة المنتصف = متوسط الإحداثيين السينيين ومتوسط الإحداثيين الصاديين:')+' '+M(`(${frac('x<sub>1</sub> + x<sub>2</sub>',2)}, ${frac('y<sub>1</sub> + y<sub>2</sub>',2)})`),
              M(`x = ${frac(`${sgn(x1)} + (${sgn(x2)})`,2)} = ${frac(sgn(x1+x2),2)} = ${num((x1+x2)/2)}`),
              M(`y = ${frac(`${sgn(y1)} + (${sgn(y2)})`,2)} = ${frac(sgn(y1+y2),2)} = ${num((y1+y2)/2)}`))};
  },

  /* ---- Algebra 2 pack ---- */
  polyMultiply(d){
    const a=nz(-9,9), b=nz(-9,9);
    const fa=a<0?`(x &minus; ${Math.abs(a)})`:`(x + ${a})`;
    const fb=b<0?`(x &minus; ${Math.abs(b)})`:`(x + ${b})`;
    return {q:`Expand: ${fa}${fb}`, a:`<b>x${sup(2)}${term(a+b,'x')}${term(a*b,'')}</b>`,
      s:steps(L('Multiply each term of the first bracket by each term of the second (FOIL):', 'نضرب كل حد في القوس الأول في كل حد في القوس الثاني:'),
              M(`x&middot;x + x&middot;(${sgn(b)}) + (${sgn(a)})&middot;x + (${sgn(a)})(${sgn(b)})`),
              M(`= x${sup(2)}${term(b,'x')}${term(a,'x')}${term(a*b,'')}`),
              L('Combine the like x terms:', 'نجمع حدود x المتشابهة:')+' '+M(`x${sup(2)}${term(a+b,'x')}${term(a*b,'')}`))};
  },
  powerOfPower(d){
    const a=R(2,6), b=R(2,5);
    return {q:`Simplify: (x${sup(a)})${sup(b)}`, a:`<b>x${sup(a*b)}</b>`,
      s:steps(L('Power of a power: multiply the exponents.', 'قوة لقوة: نضرب الأسس.')+' '+M(`(x${sup('m')})${sup('n')} = x${sup('m&middot;n')}`),
              M(`(x${sup(a)})${sup(b)} = x${sup(`${a}&times;${b}`)} = x${sup(a*b)}`))};
  },
  vertex(d){
    const h=nz(-6,6), b=-2*h, c=nz(-9,9), k=c-h*h;
    return {q:`Find the vertex of y = x${sup(2)}${term(b,'x')}${term(c,'')}`, a:`<b>(${h}, ${k})</b>`,
      s:steps(L(`Here a = 1, b = ${b}, c = ${c}. The x-coordinate of the vertex is ${M('x = &minus;b / 2a')}:`, `هنا ${M(`a = 1, b = ${b}, c = ${c}`)}. الإحداثي السيني للرأس ${M('x = &minus;b / 2a')}:`)+' '+M(`x = &minus;(${sgn(b)}) / 2 = ${sgn(h)}`),
              L('Substitute in y to get the y-coordinate:', 'نعوّض في y لنحصل على الإحداثي الصادي:')+' '+M(`y = (${sgn(h)})${sup(2)} + (${sgn(b)})(${sgn(h)}) + (${sgn(c)}) = ${sgn(k)}`),
              L(`Vertex = ${M(`(${h}, ${k})`)}.`, `الرأس = ${M(`(${h}, ${k})`)}.`))};
  },
  logEval(d){
    const base=pick([2,3,5,10]), exp=R(2,d===3?5:4);
    return {q:`Evaluate: log<sub>${base}</sub> ${Math.pow(base,exp)}`, a:`<b>${exp}</b>`,
      s:steps(L(`${M(`log<sub>${base}</sub> ${base**exp}`)} asks: to which power must ${base} be raised to give ${base**exp}?`, `${M(`log<sub>${base}</sub> ${base**exp}`)} تعني: إلى أي قوة نرفع ${M(base)} لنحصل على ${M(base**exp)}؟`),
              M(`${base}${sup(exp)} = ${[...Array(exp)].map(()=>base).join(' &times; ')} = ${base**exp}`),
              M(`log<sub>${base}</sub> ${base**exp} = ${exp}`))};
  },
  expEquation(d){
    const base=pick([2,3,5]), x=R(2,d===3?5:4);
    return {q:`Solve: ${base}${sup('x')} = ${Math.pow(base,x)}`, a:`<b>x = ${x}</b>`,
      s:steps(L(`Write ${base**x} as a power of ${base}:`, `نكتب ${M(base**x)} كقوة للعدد ${M(base)}:`)+' '+M(`${base**x} = ${base}${sup(x)}`),
              L('Same base on both sides, so the exponents are equal:', 'الأساسان متساويان، إذن الأسّان متساويان:')+' '+M(`${base}${sup('x')} = ${base}${sup(x)} &rArr; x = ${x}`))};
  },

  /* ---- Geometry pack ---- */
  parallelogram(d){
    const b=R(3,d===3?40:20), h=R(3,d===3?40:20);
    return {q:`Parallelogram with base ${b} and height ${h}. Find the area.`, a:`<b>A = ${b*h}</b>`,
      s:steps(L('Area of a parallelogram = base × height (the perpendicular height, not the slanted side).', 'مساحة متوازي الأضلاع = القاعدة × الارتفاع (العمودي وليس الضلع المائل).'),
              M(`A = ${b} &times; ${h} = ${b*h}`))};
  },
  trapezoid(d){
    const b1=R(3,d===3?30:16), b2=R(3,d===3?30:16), h=R(2,d===3?20:12)*2;
    return {q:`Trapezoid with parallel sides ${b1} and ${b2}, height ${h}. Find the area.`,
            a:`<b>A = ${(b1+b2)*h/2}</b>`,
      s:steps(L('Area of a trapezoid = ½ × (sum of the parallel sides) × height.', 'مساحة شبه المنحرف = ½ × (مجموع الضلعين المتوازيين) × الارتفاع.'),
              M(`A = ${frac(1,2)} &times; (${b1} + ${b2}) &times; ${h} = ${frac(1,2)} &times; ${b1+b2} &times; ${h} = ${(b1+b2)*h/2}`))};
  },
  volumeBox(d){
    const l=R(2,d===3?15:10), w=R(2,d===3?15:10), h=R(2,d===3?15:10);
    return {q:`Rectangular prism ${l} &times; ${w} &times; ${h}. Find the volume.`, a:`<b>V = ${l*w*h}</b>`,
      s:steps(L('Volume of a box = length × width × height.', 'حجم متوازي المستطيلات = الطول × العرض × الارتفاع.'),
              M(`V = ${l} &times; ${w} &times; ${h} = ${l*w} &times; ${h} = ${l*w*h}`))};
  },
  volumeCylinder(d){
    const r=R(2,d===3?12:8), h=R(2,d===3?15:10);
    return {q:`Cylinder with radius ${r} and height ${h}. Find the volume (in terms of &pi;).`,
            a:`<b>V = ${r*r*h}&pi;</b>`,
      s:steps(L('Volume of a cylinder = area of the base circle × height:', 'حجم الأسطوانة = مساحة القاعدة الدائرية × الارتفاع:')+' '+M(`V = &pi;r${sup(2)}h`),
              M(`V = &pi; &times; ${r}${sup(2)} &times; ${h} = &pi; &times; ${r*r} &times; ${h} = ${r*r*h}&pi;`))};
  },
  triangleAngles(d){
    const a=R(30,100), b=R(20,150-a), c=180-a-b;
    return {q:`Two angles of a triangle are ${a}&deg; and ${b}&deg;. Find the third angle.`, a:`<b>${c}&deg;</b>`,
      s:steps(L('The angles of a triangle add up to 180°.', 'مجموع زوايا المثلث 180°.'),
              M(`${a}&deg; + ${b}&deg; = ${a+b}&deg;`), M(`180&deg; &minus; ${a+b}&deg; = ${c}&deg;`))};
  },

  /* ---- Trigonometry pack ---- */
  trigValuesRad(d){
    const base={'&pi;/6':30,'&pi;/4':45,'&pi;/3':60,'&pi;/2':90};
    const more={'2&pi;/3':120,'3&pi;/4':135,'5&pi;/6':150,'&pi;':180};
    const choices=d===1?base:Object.assign({},base,more);
    const rk=pick(Object.keys(choices)), ang=choices[rk];
    const fn=pick(['sin','cos','tan']), key=fn==='sin'?'s':fn==='cos'?'c':'t';
    return {q:`${fn} (${rk}) =`, a:`<b>${TRIG[ang][key]}</b>`,
      s:steps(L('Convert to degrees (π = 180°):', 'نحوّل إلى درجات (π = 180°):')+' '+M(`${rk} = ${ang}&deg;`), ...trigStepList(fn, ang, `${ang}&deg;`))};
  },
  radToDeg(d){
    const opts=d===1?[['&pi;/6',30],['&pi;/4',45],['&pi;/3',60],['&pi;/2',90],['&pi;',180]]
      :[['&pi;/6',30],['&pi;/4',45],['&pi;/3',60],['2&pi;/3',120],['3&pi;/4',135],['5&pi;/6',150],['&pi;',180],['3&pi;/2',270],['2&pi;',360]];
    const [r,deg]=pick(opts);
    return {q:`Convert ${r} radians to degrees.`, a:`<b>${deg}&deg;</b>`,
      s:steps(L('π radians = 180°, so replace π by 180° (or multiply by 180/π):', 'π راديان = 180°، لذا نضع 180° مكان π (أو نضرب في 180/π):'),
              M(`${r} = ${r.replace('&pi;','(180&deg;)')} = ${deg}&deg;`))};
  },
  referenceAngle(d){
    const th=pick(d===1?[120,135,150,210,225,240,300,315,330]:[100,110,160,190,200,250,290,310,320,340,135,150,225]);
    let ref, rule;
    if(th<90){ ref=th; rule=['quadrant I: ref = θ','الربع الأول: الزاوية المرجعية = θ']; }
    else if(th<180){ ref=180-th; rule=['quadrant II: ref = 180° − θ','الربع الثاني: الزاوية المرجعية = 180° − θ']; }
    else if(th<270){ ref=th-180; rule=['quadrant III: ref = θ − 180°','الربع الثالث: الزاوية المرجعية = θ − 180°']; }
    else { ref=360-th; rule=['quadrant IV: ref = 360° − θ','الربع الرابع: الزاوية المرجعية = 360° − θ']; }
    return {q:`Find the reference angle for ${th}&deg;.`, a:`<b>${ref}&deg;</b>`,
      s:steps(L('The reference angle is the acute angle between the terminal side and the x-axis.', 'الزاوية المرجعية هي الزاوية الحادة بين الضلع النهائي ومحور x.'),
              L(`${th}° lies in ${rule[0]}.`, `الزاوية ${M(th+'°')} تقع في ${rule[1]}.`),
              M(`${th<180?`180&deg; &minus; ${th}&deg;`:th<270?`${th}&deg; &minus; 180&deg;`:`360&deg; &minus; ${th}&deg;`} = ${ref}&deg;`))};
  },

  /* ---- Calculus pack ---- */
  limitPoly(d){
    const a=nz(-4,4), c2=nz(1,5), c1=nz(-6,6), c0=nz(-9,9);
    const poly=`${lead(c2,'x'+sup(2))}${term(c1,'x')}${term(c0,'')}`, v=c2*a*a+c1*a+c0;
    return {q:`lim<sub>x&rarr;${a}</sub> (${poly}) =`, a:`<b>${v}</b>`,
      s:steps(L('A polynomial is continuous, so the limit equals its value at the point: substitute directly.', 'كثيرة الحدود متصلة، لذا النهاية تساوي قيمتها عند النقطة: نعوّض مباشرة.'),
              M(`${c2}(${sgn(a)})${sup(2)} + (${sgn(c1)})(${sgn(a)}) + (${sgn(c0)})`),
              M(`= ${sgn(c2*a*a)} + (${sgn(c1*a)}) + (${sgn(c0)}) = ${sgn(v)}`))};
  },
  secondDerivative(d){
    const used=new Set(), terms=[], n=d===1?2:3;
    for(let i=0;i<n;i++){ let p=R(2,d===3?6:5); while(used.has(p))p=R(2,6); used.add(p); terms.push([nz(2,6),p]); }
    terms.sort((a,b)=>b[1]-a[1]);
    const qh=terms.map((t,i)=>(i===0?lead(t[0],'x'+sup(t[1])):term(t[0],'x'+sup(t[1])))).join('');
    const xp=p=>p===0?'':(p===1?'x':'x'+sup(p));
    const show=ts=>ts.map((t,i)=>i===0?(xp(t[1])?lead(t[0],xp(t[1])):sgn(t[0])):(xp(t[1])?term(t[0],xp(t[1])):term(t[0],''))).join('');
    const d1=terms.map(t=>[t[0]*t[1], t[1]-1]), d2=terms.map(t=>[t[0]*t[1]*(t[1]-1), t[1]-2]);
    const ah=show(d2);
    return {q:`f(x) = ${qh}&nbsp;&nbsp; f&Prime;(x) =`, a:`<b>${ah}</b>`,
      s:steps(L('Differentiate once with the power rule', 'نشتق مرة واحدة بقاعدة القوة')+' '+M(`(ax${sup('n')})&prime; = anx${sup('n&minus;1')}`)+':', M(`f&prime;(x) = ${show(d1)}`),
              L('Differentiate again to get the second derivative:', 'نشتق مرة ثانية لنحصل على المشتقة الثانية:'), M(`f&Prime;(x) = ${ah}`))};
  },
  tangentSlope(d){
    const used=new Set(), terms=[];
    for(let i=0;i<2;i++){ let p=R(1,d===3?4:3); while(used.has(p))p=R(1,4); used.add(p); terms.push([nz(2,6),p]); }
    terms.sort((a,b)=>b[1]-a[1]);
    const qh=terms.map((t,i)=>(i===0?lead(t[0],'x'+sup(t[1])):term(t[0],'x'+sup(t[1])))).join('');
    const a=nz(-3,3);
    const slope=terms.reduce((s,t)=>s+t[0]*t[1]*Math.pow(a,t[1]-1),0);
    const xp=p=>p===0?'':p===1?'x':'x'+sup(p);
    const dh=terms.map((t,i)=>{ const c=t[0]*t[1], v=xp(t[1]-1); return i===0?(v?lead(c,v):sgn(c)):(v?term(c,v):term(c,'')); }).join('');
    return {q:`Slope of the tangent to f(x) = ${qh} at x = ${a}.`, a:`<b>${slope}</b>`,
      s:steps(L('The slope of the tangent is the derivative at the point. Differentiate with the power rule', 'ميل المماس هو قيمة المشتقة عند النقطة. نشتق بقاعدة القوة')+' '+M(`(x${sup('n')})&prime; = nx${sup('n&minus;1')}`)+':',
              M(`f&prime;(x) = ${dh}`),
              L(`Substitute x = ${a}:`, `نعوّض ${M(`x = ${a}`)}:`)+' '+M(`f&prime;(${a}) = ${terms.map(t=>t[1]===1?`${t[0]}`:`${t[0]*t[1]}(${sgn(a)})${t[1]-1>1?sup(t[1]-1):''}`).join(' + ')} = ${sgn(slope)}`))};
  },
  derivTrig(d){
    const opts=[['sin x','cos x'],['cos x','&minus;sin x'],['tan x','sec<sup>2</sup> x'],
      [`e${sup('x')}`,`e${sup('x')}`],['ln x', frac(1,'x')]];
    const [f,df]=pick(opts);
    return {q:`d/dx [ ${f} ] =`, a:`<b>${df}</b>`,
      s:steps(L('This is a basic derivative from the table of standard derivatives:', 'هذه مشتقة أساسية من جدول المشتقات:'),
              M(`(sin x)&prime; = cos x, (cos x)&prime; = &minus;sin x, (tan x)&prime; = sec<sup>2</sup> x, (e${sup('x')})&prime; = e${sup('x')}, (ln x)&prime; = 1/x`),
              M(`d/dx [ ${f} ] = ${df}`))};
  },

  /* ================= EXPANSION PACK 2 ================= */

  /* ---- Pre-Algebra ---- */
  scientificNotation(d){
    const e=R(2,d===3?8:6);
    const num=Math.round(R(10,99)*Math.pow(10,e-1));   // integer by construction
    const sig=num/Math.pow(10,e);                        // 1 <= sig < 10
    const sigStr=(+sig.toFixed(1)).toString();
    return {q:`Write ${num} in scientific notation.`, a:`<b>${sigStr} &times; 10${sup(e)}</b>`,
      s:steps(L('Scientific notation: a × 10ⁿ with 1 ≤ a < 10.', 'الصيغة العلمية: a × 10ⁿ حيث 1 ≤ a < 10.'),
              L(`Move the decimal point ${e} places to the left to get ${sigStr}:`, `ننقل الفاصلة العشرية ${M(e)} منازل لليسار فنحصل على ${M(sigStr)}:`),
              M(`${num} = ${sigStr} &times; 10${sup(e)}`))};
  },
  decimalOps(d){
    const f1=v=>(v/10).toFixed(1);
    if(Math.random()<0.5){
      const A=R(10,999), B=R(10,999), op=pick(['+','&minus;']);
      const r = op==='+'? A+B : A-B, res=r<0?'&minus;'+(Math.abs(r)/10).toFixed(1):(r/10).toFixed(1);
      return {q:`${f1(A)} ${op} ${f1(B)} =`, a:`<b>${res}</b>`,
        s:steps(L('Line up the decimal points and work as with whole numbers (in tenths):', 'نرتّب الفواصل العشرية تحت بعضها ونحسب كالأعداد الصحيحة (بالأعشار):'),
                M(`${A} ${op} ${B} = ${sgn(r)}`)+' '+L('tenths', 'من الأعشار'), M(`= ${res}`))};
    }
    const A=R(11,99), k=R(2,9);
    return {q:`${f1(A)} &times; ${k} =`, a:`<b>${(A*k/10).toFixed(1)}</b>`,
      s:steps(L('Multiply without the decimal point, then put back one decimal place:', 'نضرب بدون الفاصلة ثم نعيد منزلة عشرية واحدة:'),
              M(`${A} &times; ${k} = ${A*k}`), M(`&rArr; ${(A*k/10).toFixed(1)}`))};
  },
  meanMedianMode(d){
    const n=d===1?5:pick([5,7]);
    const type=pick(['mean','median','mode']);
    if(type==='mode'){
      const mv=R(1,20), list=[mv,mv,mv], used=new Set([mv]);
      while(list.length<n){ const v=R(1,20); if(!used.has(v)){ used.add(v); list.push(v);} }
      return {q:`Find the mode: ${shuffled(list).join(', ')}`, a:`<b>${mv}</b>`,
        s:steps(L('The mode is the value that appears most often.', 'المنوال هو القيمة الأكثر تكراراً.'),
                L(`${mv} appears 3 times; every other value appears once.`, `القيمة ${M(mv)} تتكرر 3 مرات وكل قيمة أخرى مرة واحدة.`),
                L(`Mode = ${mv}.`, `المنوال = ${M(mv)}.`))};
    }
    if(type==='mean'){
      const Mv=R(5,15), list=[]; let sum=0;
      for(let i=0;i<n-1;i++){ const v=R(1,2*Mv); list.push(v); sum+=v; }
      const last=n*Mv-sum;
      if(last>=1 && last<=40){ list.push(last); const sh=shuffled(list);
        return {q:`Find the mean: ${sh.join(', ')}`, a:`<b>${Mv}</b>`,
          s:steps(L('Mean = sum of the values ÷ number of values.', 'الوسط الحسابي = مجموع القيم ÷ عددها.'),
                  L('Sum:', 'المجموع:')+' '+M(`${sh.join(' + ')} = ${n*Mv}`),
                  M(`${n*Mv} &divide; ${n} = ${Mv}`))}; }
    }
    const list=[]; for(let i=0;i<n;i++) list.push(R(1,30));
    const sorted=[...list].sort((a,b)=>a-b);
    return {q:`Find the median: ${list.join(', ')}`, a:`<b>${sorted[(n-1)/2]}</b>`,
      s:steps(L('Order the values from smallest to largest:', 'نرتب القيم تصاعدياً:')+' '+M(sorted.join(', ')),
              L(`There are ${n} values (odd), so the median is the middle one, position ${(n+1)/2}.`, `عدد القيم ${M(n)} (فردي)، إذن الوسيط هو القيمة الوسطى في الترتيب ${M((n+1)/2)}.`),
              L(`Median = ${sorted[(n-1)/2]}.`, `الوسيط = ${M(sorted[(n-1)/2])}.`))};
  },
  probability(d){
    const r=R(1,9), b=R(1,9), tot=r+b; const [n,m]=reduceFrac(r,tot);
    return {q:`A bag has ${r} red and ${b} blue marbles. Find P(red).`, a:`<b>${fracStr(n,m)}</b>`,
      s:steps(L('P(event) = number of favourable outcomes ÷ total number of outcomes.', 'الاحتمال = عدد النواتج المطلوبة ÷ عدد النواتج الكلي.'),
              L(`Total marbles: ${M(`${r} + ${b} = ${tot}`)}; red marbles: ${r}.`, `عدد الكرات الكلي: ${M(`${r} + ${b} = ${tot}`)}، والكرات الحمراء: ${M(r)}.`),
              M(`P(red) = ${frac(r,tot)}${m!==tot?` = ${fracStr(n,m)}`:''}`))};
  },

  /* ---- Algebra 1 ---- */
  arithmeticSeq(d){
    const a1=nz(-9,9), diff=nz(-6,6), k=R(6,d===3?20:12);
    const terms=[a1,a1+diff,a1+2*diff,a1+3*diff];
    return {q:`Find the ${k}th term: ${terms.join(', ')}, ...`, a:`<b>${a1+(k-1)*diff}</b>`,
      s:steps(L('Common difference:', 'أساس المتتابعة الحسابية:')+' '+M(`d = ${sgn(terms[1])} &minus; (${sgn(terms[0])}) = ${sgn(diff)}`),
              L('nth term:', 'الحد العام:')+' '+M('a<sub>n</sub> = a<sub>1</sub> + (n &minus; 1)d'),
              M(`a<sub>${k}</sub> = ${sgn(a1)} + (${k} &minus; 1)(${sgn(diff)}) = ${sgn(a1)} + (${sgn((k-1)*diff)}) = ${sgn(a1+(k-1)*diff)}`))};
  },
  factorGCF(d){
    const g=R(2,9); let p=nz(2,9), q=nz(-9,9);
    while(gcd(Math.abs(p),Math.abs(q))!==1) q=nz(-9,9);
    return {q:`Factor: ${lead(g*p,'x')}${term(g*q,'')}`, a:`<b>${g}(${lead(p,'x')}${term(q,'')})</b>`,
      s:steps(L(`Find the greatest common factor of ${Math.abs(g*p)} and ${Math.abs(g*q)}: it is ${g}.`, `نوجد العامل المشترك الأكبر للعددين ${M(Math.abs(g*p))} و ${M(Math.abs(g*q))}: وهو ${M(g)}.`),
              L(`Divide each term by ${g}:`, `نقسم كل حد على ${M(g)}:`)+' '+M(`${lead(g*p,'x')} &divide; ${g} = ${lead(p,'x')}`)+', '+M(`${sgn(g*q)} &divide; ${g} = ${sgn(q)}`),
              L('Write the common factor outside the brackets:', 'نكتب العامل المشترك خارج القوس:')+' '+M(`${g}(${lead(p,'x')}${term(q,'')})`))};
  },

  /* ---- Algebra 2 ---- */
  geometricSeq(d){
    const a1=nz(1,5), r=pick(d===3?[2,3,4]:[2,3]), k=R(4,d===3?7:6);
    const terms=[a1,a1*r,a1*r*r,a1*r*r*r];
    return {q:`Find the ${k}th term: ${terms.join(', ')}, ...`, a:`<b>${a1*Math.pow(r,k-1)}</b>`,
      s:steps(L('Common ratio:', 'أساس المتتابعة الهندسية:')+' '+M(`r = ${terms[1]} &divide; ${terms[0]} = ${r}`),
              L('nth term:', 'الحد العام:')+' '+M(`a<sub>n</sub> = a<sub>1</sub> r${sup('n&minus;1')}`),
              M(`a<sub>${k}</sub> = ${a1} &times; ${r}${sup(k-1)} = ${a1} &times; ${r**(k-1)} = ${a1*r**(k-1)}`))};
  },
  iPowers(d){
    const n=R(2,d===3?40:16), vals=['1','i','&minus;1','&minus;i'];
    return {q:`Simplify: i${sup(n)}`, a:`<b>${vals[n%4]}</b>`,
      s:steps(L('Powers of i repeat every 4:', 'قوى i تتكرر كل 4:')+' '+M(`i${sup(1)} = i, i${sup(2)} = &minus;1, i${sup(3)} = &minus;i, i${sup(4)} = 1`),
              L(`Divide the exponent by 4: ${M(`${n} = 4 &times; ${Math.floor(n/4)} + ${n%4}`)}.`, `نقسم الأس على 4: ${M(`${n} = 4 &times; ${Math.floor(n/4)} + ${n%4}`)}.`),
              M(`i${sup(n)} = i${sup(n%4)} = ${vals[n%4]}`))};
  },

  /* ---- Geometry ---- */
  polygonAngles(d){
    const names={3:'triangle',4:'quadrilateral',5:'pentagon',6:'hexagon',7:'heptagon',8:'octagon',9:'nonagon',10:'decagon'};
    const sides=R(3,d===3?12:8);
    const nm=names[sides]?` (${names[sides]})`:'';
    return {q:`Find the sum of the interior angles of a polygon with ${sides} sides${nm}.`, a:`<b>${(sides-2)*180}&deg;</b>`,
      s:steps(L('A polygon with n sides splits into (n − 2) triangles, each 180°:', 'المضلع ذو n ضلعاً ينقسم إلى (n − 2) مثلثاً، كل منها 180°:')+' '+M('S = (n &minus; 2) &times; 180&deg;'),
              M(`S = (${sides} &minus; 2) &times; 180&deg; = ${sides-2} &times; 180&deg; = ${(sides-2)*180}&deg;`))};
  },
  distanceFormula(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[20,21,29]]);
    const x1=nz(-8,8), y1=nz(-8,8), x2=x1+t[0]*pick([1,-1]), y2=y1+t[1]*pick([1,-1]);
    return {q:`Find the distance between (${x1}, ${y1}) and (${x2}, ${y2}).`, a:`<b>${t[2]}</b>`,
      s:steps(L('Distance formula:', 'قانون المسافة:')+' '+M(`d = ${sq('(x<sub>2</sub> &minus; x<sub>1</sub>)'+sup(2)+' + (y<sub>2</sub> &minus; y<sub>1</sub>)'+sup(2))}`),
              L('Differences:', 'الفروق:')+' '+M(`x<sub>2</sub> &minus; x<sub>1</sub> = ${sgn(x2)} &minus; (${sgn(x1)}) = ${sgn(x2-x1)}`)+', '+M(`y<sub>2</sub> &minus; y<sub>1</sub> = ${sgn(y2)} &minus; (${sgn(y1)}) = ${sgn(y2-y1)}`),
              M(`d = ${sq(`(${sgn(x2-x1)})${sup(2)} + (${sgn(y2-y1)})${sup(2)}`)} = ${sq(`${t[0]**2} + ${t[1]**2}`)} = ${sq(t[2]**2)} = ${t[2]}`))};
  },

  /* ---- Calculus ---- */
  avgRateOfChange(d){
    const c=nz(1,4), e=nz(-9,9), a=nz(-5,5); let b=nz(-5,5); while(b===a) b=nz(-5,5);
    const poly=`${lead(c,'x'+sup(2))}${term(e,'')}`, lo=Math.min(a,b), hi=Math.max(a,b), f=x=>c*x*x+e;
    return {q:`Average rate of change of f(x) = ${poly} on [${lo}, ${hi}].`, a:`<b>${c*(a+b)}</b>`,
      s:steps(L('Average rate of change = (f(b) − f(a)) ÷ (b − a).', 'متوسط معدل التغير = (f(b) − f(a)) ÷ (b − a).'),
              M(`f(${hi}) = ${c}(${sgn(hi)})${sup(2)} + (${sgn(e)}) = ${sgn(f(hi))}`), M(`f(${lo}) = ${c}(${sgn(lo)})${sup(2)} + (${sgn(e)}) = ${sgn(f(lo))}`),
              M(`${frac(`${sgn(f(hi))} &minus; (${sgn(f(lo))})`, `${sgn(hi)} &minus; (${sgn(lo)})`)} = ${frac(sgn(f(hi)-f(lo)), hi-lo)} = ${sgn(c*(a+b))}`))};
  },

  /* ================= UNIVERSITY PACK ================= */

  /* ---- Linear Algebra (MATH 244) ---- */
  matrixAdd(d){
    const hi=d===3?12:9, A=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)], B=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)];
    return {q:`${mat(A)} + ${mat(B)} =`, a:`<b>${mat(A.map((x,i)=>x+B[i]))}</b>`,
      s:steps(L('Add corresponding entries (same row, same column).', 'نجمع العناصر المتناظرة (نفس الصف ونفس العمود).'),
              M(A.map((x,i)=>`${sgn(x)} + (${sgn(B[i])}) = ${sgn(x+B[i])}`).join('; ')))};
  },
  determinant2(d){
    const hi=d===3?12:9, a=nz(-hi,hi),b=nz(-hi,hi),c=nz(-hi,hi),e=nz(-hi,hi);
    return {q:`det ${mat([a,b,c,e])} =`, a:`<b>${sgn(a*e-b*c)}</b>`,
      s:steps(L(`For ${mat(['a','b','c','d'])}: ${M('det = ad &minus; bc')}`, `للمصفوفة ${mat(['a','b','c','d'])}: ${M('det = ad &minus; bc')}`),
              L(`${M(`(${sgn(a)})(${sgn(e)}) &minus; (${sgn(b)})(${sgn(c)}) = ${sgn(a*e)} &minus; (${sgn(b*c)}) = ${sgn(a*e-b*c)}`)}`, `${M(`(${sgn(a)})(${sgn(e)}) &minus; (${sgn(b)})(${sgn(c)}) = ${sgn(a*e)} &minus; (${sgn(b*c)}) = ${sgn(a*e-b*c)}`)}`))};
  },
  matrixMultiply(d){
    const hi=d===1?5:d===2?7:9;
    const A=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)], B=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)];
    const P=[A[0]*B[0]+A[1]*B[2], A[0]*B[1]+A[1]*B[3], A[2]*B[0]+A[3]*B[2], A[2]*B[1]+A[3]*B[3]];
    const dot=(i,j)=>`(${sgn(A[2*i])})(${sgn(B[j])}) + (${sgn(A[2*i+1])})(${sgn(B[j+2])}) = ${sgn(P[2*i+j])}`;
    return {q:`${mat(A)} ${mat(B)} =`, a:`<b>${mat(P)}</b>`,
      s:steps(L('Entry (i, j) = row i of the first matrix · column j of the second.', 'العنصر (i, j) = الصف i من المصفوفة الأولى · العمود j من الثانية.'),
              M(`c<sub>11</sub> = ${dot(0,0)}`), M(`c<sub>12</sub> = ${dot(0,1)}`), M(`c<sub>21</sub> = ${dot(1,0)}`), M(`c<sub>22</sub> = ${dot(1,1)}`))};
  },
  determinant3(d){
    const hi=d===1?3:d===2?5:7, v=Array.from({length:9},()=>R(-hi,hi));
    const m1=v[4]*v[8]-v[5]*v[7], m2=v[3]*v[8]-v[5]*v[6], m3=v[3]*v[7]-v[4]*v[6];
    const det=v[0]*m1 - v[1]*m2 + v[2]*m3, P=x=>`(${sgn(x)})`;
    return {q:`det ${mat(v,3)} =`, a:`<b>${sgn(det)}</b>`,
      s:steps(L('Expand along the first row with signs + − +; each entry multiplies the 2×2 determinant left after deleting its row and column.', 'نفكّ على الصف الأول بالإشارات + − +؛ كل عنصر يُضرب في محدد 2×2 الناتج عن حذف صفه وعموده.'),
              M(`${P(v[4])}${P(v[8])} &minus; ${P(v[5])}${P(v[7])} = ${sgn(m1)}`), M(`${P(v[3])}${P(v[8])} &minus; ${P(v[5])}${P(v[6])} = ${sgn(m2)}`), M(`${P(v[3])}${P(v[7])} &minus; ${P(v[4])}${P(v[6])} = ${sgn(m3)}`),
              M(`det = ${P(v[0])}${P(m1)} &minus; ${P(v[1])}${P(m2)} + ${P(v[2])}${P(m3)} = ${sgn(v[0]*m1)} &minus; (${sgn(v[1]*m2)}) + (${sgn(v[2]*m3)}) = ${sgn(det)}`))};
  },
  transpose(d){
    const [r,c]=d===1?pick([[2,3],[3,2]]):d===2?pick([[2,3],[3,2],[3,3]]):pick([[3,4],[4,3],[2,4]]);
    const A=Array.from({length:r*c},()=>R(-9,9));
    const T=[]; for(let j=0;j<c;j++) for(let i=0;i<r;i++) T.push(A[i*c+j]);
    return {q:`${mat(A,c)}${sup('T')} =`, a:`<b>${mat(T,r)}</b>`,
      s:steps(L(`The transpose turns rows into columns: row 1 becomes column 1, row 2 becomes column 2, … A ${r}×${c} matrix becomes ${c}×${r}.`, `المنقول يحوّل الصفوف إلى أعمدة: الصف الأول يصبح العمود الأول، والثاني يصبح الثاني، … فالمصفوفة ${M(`${r}&times;${c}`)} تصبح ${M(`${c}&times;${r}`)}.`),
              ...[...Array(r)].map((_,i)=>L(`Row ${i+1} (${A.slice(i*c,i*c+c).join(', ')}) → column ${i+1}`, `الصف ${M(i+1)} ${M(`(${A.slice(i*c,i*c+c).join(', ')})`)} ← العمود ${M(i+1)}`)),
              M(mat(T,r)))};
  },
  scalarMultiply(d){
    const n=d===3?3:2, hi=d===1?6:9, k=nz(d===1?2:-6,6), A=Array.from({length:n*n},()=>R(-hi,hi));
    return {q:`${k<0?'(&minus;'+Math.abs(k)+')':k} &middot; ${mat(A,n)} =`, a:`<b>${mat(A.map(x=>k*x),n)}</b>`,
      s:steps(L(`Multiply every entry of the matrix by ${k}:`, `نضرب كل عنصر في المصفوفة في ${M(k)}:`),
              M(A.map(x=>`${sgn(k)}&times;(${sgn(x)}) = ${sgn(k*x)}`).join(', ')), M(mat(A.map(x=>k*x),n)))};
  },
  trace(d){
    const n=d===1?2:d===2?3:pick([3,4]), hi=d===3?20:9, A=Array.from({length:n*n},()=>R(-hi,hi));
    let t=0; const dg=[]; for(let i=0;i<n;i++){ t+=A[i*n+i]; dg.push(A[i*n+i]); }
    return {q:`tr ${mat(A,n)} =`, a:`<b>${sgn(t)}</b>`,
      s:steps(L('The trace is the sum of the main-diagonal entries (top-left to bottom-right).', 'الأثر هو مجموع عناصر القطر الرئيسي (من أعلى اليسار إلى أسفل اليمين).'),
              M(`tr = ${dg.map((x,i)=>i&&x<0?`(${sgn(x)})`:sgn(x)).join(' + ')} = ${sgn(t)}`))};
  },

  /* ---- Complex Analysis (MATH 485) ---- */
  complexAdd(d){
    const hi=d===3?12:9, a=nz(-hi,hi),b=nz(-hi,hi),c=nz(-hi,hi),e=nz(-hi,hi);
    return {q:`(${cplx(a,b)}) + (${cplx(c,e)}) =`, a:`<b>${cplx(a+c,b+e)}</b>`,
      s:steps(L('Add the real parts and the imaginary parts separately.', 'نجمع الأجزاء الحقيقية معاً والأجزاء التخيلية معاً.'),
              M(`(${sgn(a)} + ${sgn(c)}) + (${sgn(b)} + ${sgn(e)})i = ${cplx(a+c,b+e)}`))};
  },
  complexMultiply(d){
    const hi=d===1?5:d===2?8:11, a=nz(-hi,hi),b=nz(-hi,hi),c=nz(-hi,hi),e=nz(-hi,hi);
    return {q:`(${cplx(a,b)})(${cplx(c,e)}) =`, a:`<b>${cplx(a*c-b*e, a*e+b*c)}</b>`,
      s:steps(L(`Expand (FOIL) and use ${M('i'+sup(2)+' = &minus;1')}.`, `نفك الأقواس ونستخدم ${M('i'+sup(2)+' = &minus;1')}.`),
              M(`(${sgn(a)})(${sgn(c)}) + (${sgn(a)})(${sgn(e)})i + (${sgn(b)})(${sgn(c)})i + (${sgn(b)})(${sgn(e)})i${sup(2)}`),
              M(`= ${sgn(a*c)} ${b*e<=0?'+':'&minus;'} ${Math.abs(b*e)} + (${sgn(a*e)} + ${sgn(b*c)})i = ${cplx(a*c-b*e, a*e+b*c)}`))};
  },
  complexModulus(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17],[7,24,25],[9,12,15]]);
    const re=t[0]*pick([1,-1]), im=t[1]*pick([1,-1]);
    return {q:`| ${cplx(re,im)} | =`, a:`<b>${t[2]}</b>`,
      s:steps(L('Modulus:', 'المقياس:')+' '+M(`|a + bi| = ${sq('a'+sup(2)+' + b'+sup(2))}`),
              M(`${sq(`(${sgn(re)})${sup(2)} + (${sgn(im)})${sup(2)}`)} = ${sq(`${re*re} + ${im*im}`)} = ${sq(t[2]**2)} = ${t[2]}`))};
  },
  complexConjugate(d){
    const hi=d===1?9:d===2?20:50, a=nz(-hi,hi), b=nz(-hi,hi);
    return {q:`If z = ${cplx(a,b)}, then <span style="text-decoration:overline">z</span> =`, a:`<b>${cplx(a,-b)}</b>`,
      s:steps(L('The conjugate keeps the real part and changes the sign of the imaginary part:', 'المرافق يُبقي الجزء الحقيقي ويغيّر إشارة الجزء التخيلي:')+' '+M('<span style="text-decoration:overline">a + bi</span> = a &minus; bi'),
              M(cplx(a,-b)))};
  },

  /* ---- Number Theory (MATH 367) ---- */
  modArithmetic(d){
    const m=R(2,d===3?20:12), a=R(m+1,m*10), q=Math.floor(a/m);
    return {q:`${a} mod ${m} =`, a:`<b>${a%m}</b>`,
      s:steps(L(`a mod m is the remainder when a is divided by m.`, `a mod m هو باقي قسمة a على m.`),
              M(`${a} = ${m} &times; ${q} + ${a%m}`), L(`Remainder = ${a%m}.`, `الباقي = ${M(a%m)}.`))};
  },
  isPrime(d){
    const cand=R(2,d===3?120:50);
    let div=0; for(let i=2;i*i<=cand;i++) if(cand%i===0){ div=i; break; }
    const prime=!div, lim=Math.floor(Math.sqrt(cand));
    return {q:`Is ${cand} prime?`, a:`<b>${prime?'Yes':'No'}</b>`,
      s:steps(L(`Check divisibility by primes up to ${sq(cand)} ≈ ${num(Math.sqrt(cand),2)}.`, `نختبر القسمة على الأعداد الأولية حتى ${M(`${sq(cand)} &asymp; ${num(Math.sqrt(cand),2)}`)}.`),
              prime ? L(`None of ${[2,3,5,7,11].filter(p=>p<=lim).join(', ')||'—'} divides ${cand}, so it is prime.`, `لا يقسمه أي من ${M([2,3,5,7,11].filter(p=>p<=lim).join(', ')||'—')}، إذن هو أولي.`)
                    : L(`${cand} = ${div} × ${cand/div}, so it is not prime.`, `${M(`${cand} = ${div} &times; ${cand/div}`)}، إذن ليس أولياً.`))};
  },
  eulerPhi(d){
    const n=R(2,d===1?30:d===2?100:500), ps=[]; let m=n; for(let p=2;p*p<=m;p++) if(m%p===0){ ps.push(p); while(m%p===0) m/=p; } if(m>1) ps.push(m);
    return {q:`&phi;(${n}) =`, a:`<b>${totient(n)}</b>`,
      s:steps(L('φ(n) counts the numbers from 1 to n that share no factor with n. Formula:', 'الدالة φ(n) تعدّ الأعداد من 1 إلى n الأولية نسبياً مع n. القانون:')+' '+M(`&phi;(n) = n &prod;(1 &minus; ${frac(1,'p')})`)+' '+L('over the distinct primes p dividing n.', 'على الأعداد الأولية المختلفة p التي تقسم n.'),
              L('Distinct prime factors of', 'العوامل الأولية المختلفة للعدد')+' '+M(`${n}: ${ps.join(', ')}`),
              M(`&phi;(${n}) = ${n}${ps.map(p=>`(1 &minus; ${frac(1,p)})`).join('')} = ${n}${ps.map(p=>` &times; ${frac(p-1,p)}`).join('')} = ${totient(n)}`))};
  },
  modPow(d){
    const m=R(d===1?3:5,d===1?12:d===2?30:100), a=R(2,d===1?9:30), b=R(d===1?2:5,d===1?6:d===2?20:200);
    // repeated squaring: a^(2^k) mod m for the binary digits of b
    const bits=b.toString(2).split('').reverse(), sqs=[]; let p=a%m;
    for(let k=0;k<bits.length;k++){ sqs.push(p); p=p*p%m; }
    const used=bits.map((x,k)=>x==='1'?k:-1).filter(k=>k>=0);
    return {q:`${a}${sup(b)} mod ${m} =`, a:`<b>${powMod(a,b,m)}</b>`,
      s:steps(L('Repeated squaring: write the exponent in powers of 2 and reduce mod m after every multiplication.', 'التربيع المتكرر: نكتب الأس كمجموع قوى للعدد 2 ونأخذ الباقي على m بعد كل ضرب.'),
              M(`${b} = ${used.map(k=>2**k).reverse().join(' + ')}`),
              M(sqs.map((v,k)=>`${a}${sup(2**k)} &equiv; ${v}`).join(', ')+` (mod ${m})`),
              M(`${a}${sup(b)} &equiv; ${used.map(k=>sqs[k]).join(' &times; ')} &equiv; ${powMod(a,b,m)} (mod ${m})`))};
  },

  /* ---- Numerical Analysis (MATH 353) ---- */
  newtonSqrt(d){
    // x1 = (x0 + N/x0)/2 = (x0^2 + N)/(2 x0); N = x0(2k - x0) keeps x1 = k an integer
    const x0=R(2,d===1?5:d===2?9:15), k=R(Math.floor(x0/2)+1, x0+(d===1?2:5)), N=x0*(2*k-x0);
    return {q:`Approximate &radic;${N} with one Newton step on f(x) = x${sup(2)} &minus; ${N}, starting from x<sub>0</sub> = ${x0}. x<sub>1</sub> =`,
            a:`<b>${k}</b>`,
      s:steps(L('Newton step:', 'خطوة نيوتن:')+' '+M(`x<sub>1</sub> = x<sub>0</sub> &minus; ${frac('f(x<sub>0</sub>)','f&prime;(x<sub>0</sub>)')}`)+', '+M('f&prime;(x) = 2x'),
              M(`f(${x0}) = ${x0*x0} &minus; ${N} = ${sgn(x0*x0-N)}`)+', '+M(`f&prime;(${x0}) = ${2*x0}`),
              M(`x<sub>1</sub> = ${x0} &minus; ${frac(sgn(x0*x0-N), 2*x0)} = ${x0} ${x0*x0-N<0?'+':'&minus;'} ${num(Math.abs(x0*x0-N)/(2*x0))} = ${k}`))};
  },
  linearInterp(d){
    const x0=R(-5,10), h=d===1?pick([2,4]):d===2?pick([2,3,4,5]):pick([4,5,6,8,10]);
    const m=nz(d===1?1:-6,6), y0=R(-20,20), t=R(1,h-1), x=x0+t, y1=y0+m*h;
    return {q:`Linearly interpolate through (${x0}, ${y0}) and (${x0+h}, ${y1}) to estimate y at x = ${x}.`,
            a:`<b>${sgn(y0+m*t)}</b>`,
      s:steps(L('Line through the two points:', 'المستقيم المار بالنقطتين:')+' '+M(`y = y<sub>0</sub> + ${frac('y<sub>1</sub> &minus; y<sub>0</sub>','x<sub>1</sub> &minus; x<sub>0</sub>')}(x &minus; x<sub>0</sub>)`),
              L('Slope:', 'الميل:')+' '+M(`${frac(`${sgn(y1)} &minus; (${sgn(y0)})`, `${x0+h} &minus; (${sgn(x0)})`)} = ${frac(sgn(m*h),h)} = ${sgn(m)}`),
              M(`y(${x}) = ${sgn(y0)} + (${sgn(m)})(${x} &minus; (${sgn(x0)})) = ${sgn(y0)} + (${sgn(m)})(${t}) = ${sgn(y0+m*t)}`))};
  },

  /* ---- Graph Theory (MATH 468) ---- */
  completeGraphEdges(d){
    const n=R(3,d===1?8:d===2?20:60);
    return {q:`How many edges does the complete graph K<sub>${n}</sub> have?`, a:`<b>${n*(n-1)/2}</b>`,
      s:steps(L('Every pair of vertices is joined by exactly one edge, so count the pairs:', 'كل زوج من الرؤوس يصل بينهما ضلع واحد، لذا نعدّ الأزواج:')+' '+M(`C(n, 2) = ${frac('n(n &minus; 1)',2)}`),
              M(`${frac(`${n} &times; ${n-1}`,2)} = ${n*(n-1)/2}`))};
  },
  degreeSum(d){
    // build an actual simple graph so the degree sequence is realizable
    const n=R(4,d===1?5:d===2?7:9), deg=new Array(n).fill(0);
    let e=0;
    for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) if(Math.random()<0.45){ deg[i]++; deg[j]++; e++; }
    if(e===0){ deg[0]++; deg[1]++; e=1; }
    deg.sort((a,b)=>b-a);
    return {q:`A simple graph has vertex degrees ${deg.join(', ')}. Find the sum of the degrees and the number of edges.`,
            a:`<b>sum = ${2*e}, edges = ${e}</b>`,
      s:steps(M(`${deg.join(' + ')} = ${2*e}`),
              L('Handshake lemma: each edge adds 2 to the degree sum, so edges = sum ÷ 2.', 'مبرهنة المصافحة: كل ضلع يضيف 2 إلى مجموع الدرجات، لذا عدد الأضلاع = المجموع ÷ 2.'),
              M(`${2*e} &divide; 2 = ${e}`))};
  },

  /* ---- Group Theory (MATH 344) ---- */
  elementOrder(d){
    const n=R(4,d===1?12:d===2?30:60), a=R(1,n-1), g=gcd(a,n);
    return {q:`Order of ${a} in (&#8484;<sub>${n}</sub>, +) =`, a:`<b>${n/g}</b>`,
      s:steps(L(`The order of a in ℤₙ is the smallest k with k·a ≡ 0 (mod n), which equals n ÷ gcd(a, n).`, `رتبة العنصر a في ${M('&#8484;<sub>n</sub>')} هي أصغر k بحيث ${M('k&middot;a &equiv; 0 (mod n)')}، وتساوي ${M('n &divide; gcd(a, n)')}.`),
              M(`gcd(${a}, ${n}) = ${g}`), M(`${n} &divide; ${g} = ${n/g}`),
              L(`Check: ${M(`${n/g} &times; ${a} = ${n/g*a}`)}, a multiple of ${n}.`, `تحقق: ${M(`${n/g} &times; ${a} = ${n/g*a}`)} وهو مضاعف لـ ${M(n)}.`))};
  },

  /* ---- Rings & Fields (MATH 444) ---- */
  isUnit(d){
    const n=R(4,d===1?12:d===2?30:60), a=R(2,n-1), g=gcd(a,n);
    let inv=0; if(g===1) for(let x=1;x<n;x++) if(a*x%n===1){ inv=x; break; }
    return {q:`Is ${a} a unit in &#8484;<sub>${n}</sub>?`,
            a:`<b>${g===1?`Yes (inverse ${inv})`:`No (gcd = ${g})`}</b>`,
      s:steps(L('a is a unit in ℤₙ exactly when gcd(a, n) = 1.', 'العنصر a وحدة في ℤₙ إذا وفقط إذا كان gcd(a, n) = 1.'), M(`gcd(${a}, ${n}) = ${g}`),
              g===1 ? L('So it is a unit; its inverse:', 'إذن هو وحدة، ومعكوسه:')+' '+M(`${a} &times; ${inv} = ${a*inv} &equiv; 1 (mod ${n})`)
                    : L(`${g} ≠ 1, so ${a} is not a unit.`, `${M(`${g} &ne; 1`)}، إذن ${M(a)} ليس وحدة.`))};
  },

  /* ---- Special Functions (MATH 417) ---- */
  gammaFunction(d){
    const n=R(1,d===1?5:d===2?8:12);
    return {q:`&Gamma;(${n}) =`, a:`<b>${factorial(n-1)}</b>`,
      s:steps(L('For a positive integer n,', 'لأي عدد صحيح موجب n:')+' '+M('&Gamma;(n) = (n &minus; 1)!'),
              M(`&Gamma;(${n}) = ${n-1}! = ${n-1>1?[...Array(n-1)].map((_,i)=>n-1-i).join(' &times; ')+' = ':''}${factorial(n-1)}`))};
  },

  /* ---- Foundations (MATH 234) ---- */
  setUnion(d){
    const hi=d===1?15:d===2?40:120, c=R(0,Math.floor(hi/3)), a=c+R(1,hi), b=c+R(1,hi);
    return {q:`If |A| = ${a}, |B| = ${b} and |A &cap; B| = ${c}, then |A &cup; B| =`, a:`<b>${a+b-c}</b>`,
      s:steps(L('Inclusion–exclusion: elements in both sets are counted twice in |A| + |B|, so subtract them once.', 'مبدأ الاحتواء والاستبعاد: العناصر المشتركة تُعدّ مرتين في |A| + |B| فنطرحها مرة.'),
              M('|A &cup; B| = |A| + |B| &minus; |A &cap; B|'), M(`= ${a} + ${b} &minus; ${c} = ${a+b-c}`))};
  },
  powerSetSize(d){
    const n=R(d===1?1:3,d===1?4:d===2?7:10), A='abcdefghij'.slice(0,n).split('');
    return {q:`If A = {${A.join(', ')}}, then |&#119979;(A)| =`, a:`<b>${2**n}</b>`,
      s:steps(L(`A has ${n} elements. Each element is either in a subset or not (2 choices).`, `المجموعة A فيها ${M(n)} عناصر، وكل عنصر إما أن يكون في المجموعة الجزئية أو لا (خياران).`),
              M(`|&#119979;(A)| = 2${sup('n')} = 2${sup(n)} = ${2**n}`))};
  },

  /* ================= MATHEMATICS TRACK PACK 2 ================= */

  /* ---- Integral Calculus (MATH 212) ---- */
  riemannSum(d){
    const n=R(2,d===1?3:d===2?4:6), h=d===3?R(1,2):1, k=R(0,5), side=pick(['left','right']);
    let s=0; const xs=[]; for(let i=0;i<n;i++){ const x=(side==='left'?i:i+1)*h; xs.push(x); s+=h*(x*x+k); }
    return {q:`Compute the ${side} Riemann sum of f(x) = x${sup(2)}${term(k,'')} on [0, ${n*h}] with n = ${n} equal subintervals.`, a:`<b>${s}</b>`,
      s:steps(L(`Width of each subinterval: ${M(`&Delta;x = ${frac(n*h,n)} = ${h}`)}.`, `عرض كل فترة جزئية: ${M(`&Delta;x = ${frac(n*h,n)} = ${h}`)}.`),
              L(`Use the ${side} endpoints:`, `نستخدم ${side==='left'?'الأطراف اليسرى':'الأطراف اليمنى'}:`)+' '+M(`x = ${xs.join(', ')}`),
              L('Function values:', 'قيم الدالة:')+' '+M(xs.map(x=>`f(${x}) = ${x*x+k}`).join(', ')),
              M(`S = ${h===1?'':h+' &times; '}(${xs.map(x=>x*x+k).join(' + ')}) = ${s}`))};
  },
  avgValue(d){
    const p=R(1,d===1?1:d===2?2:3), m=R(1,4), b=R(1,d===3?4:5), c=m*(p+1);
    return {q:`Find the average value of f(x) = ${c}x${p===1?'':sup(p)} on [0, ${b}].`, a:`<b>${m*b**p}</b>`,
      s:steps(L('Average value:', 'القيمة المتوسطة:')+' '+M(`f<sub>avg</sub> = ${frac(1,'b &minus; a')} &int;<sub>a</sub><sup>b</sup> f(x) dx`),
              M(`&int;<sub>0</sub><sup>${b}</sup> ${c}x${p===1?'':sup(p)} dx = [${lead(m,'x'+sup(p+1))}]<sub>0</sub><sup>${b}</sup> = ${m*b**(p+1)}`),
              M(`f<sub>avg</sub> = ${frac(m*b**(p+1), b)} = ${m*b**p}`))};
  },
  defIntegralExp(d){
    const k=R(2,d===1?5:12), m=d===3?R(2,5):1;
    return {q:`&int;<sub>0</sub><sup>ln ${k}</sup> ${m>1?m:''}e${sup('x')} dx =`, a:`<b>${m*(k-1)}</b>`,
      s:steps(L('The antiderivative of', 'الدالة الأصلية لـ')+' '+M(`e${sup('x')}`)+' '+L('is itself:', 'هي نفسها:')+' '+M(`&int; ${m>1?m:''}e${sup('x')} dx = ${m>1?m:''}e${sup('x')}`),
              M(`${m>1?m:''}[e${sup('x')}]<sub>0</sub><sup>ln ${k}</sup> = ${m>1?m:''}(e${sup('ln '+k)} &minus; e${sup(0)})`),
              L(`Since ${M(`e${sup('ln '+k)} = ${k}`)} and ${M(`e${sup(0)} = 1`)}:`, `بما أن ${M(`e${sup('ln '+k)} = ${k}`)} و ${M(`e${sup(0)} = 1`)}:`)+' '+M(`${m>1?m+'(':''}${k} &minus; 1${m>1?')':''} = ${m*(k-1)}`))};
  },

  /* ---- Differential & Integral Calculus (MATH 232) ---- */
  derivChainAt(d){
    const n=R(2,d===1?2:d===2?3:4), a=nz(-3,3), b=nz(-5,5), x0=R(-2,2), u=a*x0+b, v=n*a*u**(n-1);
    return {q:`f(x) = (${lead(a,'x')}${term(b,'')})${sup(n)}. Find f&prime;(${x0}).`, a:`<b>${sgn(v)}</b>`,
      s:steps(L('Chain rule: derivative of the outside power × derivative of the inside.', 'قاعدة السلسلة: مشتقة القوة الخارجية × مشتقة ما بداخل القوس.')+' '+M(`[u${sup('n')}]&prime; = n u${sup('n&minus;1')} u&prime;`),
              M(`f&prime;(x) = ${n}(${lead(a,'x')}${term(b,'')})${n-1>1?sup(n-1):''} &middot; (${sgn(a)})`),
              L(`At x = ${x0}: inside = ${M(`${a}(${sgn(x0)})${term(b,'')} = ${sgn(u)}`)}.`, `عند ${M(`x = ${x0}`)}: ما بداخل القوس ${M(`= ${a}(${sgn(x0)})${term(b,'')} = ${sgn(u)}`)}.`),
              M(`f&prime;(${x0}) = ${n}(${sgn(u)})${n-1>1?sup(n-1):''}(${sgn(a)}) = ${sgn(v)}`))};
  },
  derivProductAt(d){
    const m=R(1,d===1?2:4), c=nz(-6,6), x0=nz(-3,3), v=m*x0**(m-1)*(x0+c) + x0**m;
    const xm='x'+(m===1?'':sup(m)), dm=m===1?'1':`${m}x${m-1===1?'':sup(m-1)}`;
    return {q:`f(x) = ${xm}(x${term(c,'')}). Find f&prime;(${x0}).`,
            a:`<b>${sgn(v)}</b>`,
      s:steps(L('Product rule:', 'قاعدة الضرب:')+' '+M('(uv)&prime; = u&prime;v + uv&prime;')+', '+M(`u = ${xm}, v = x${term(c,'')}`),
              M(`u&prime; = ${dm}, v&prime; = 1`),
              M(`f&prime;(x) = ${dm}(x${term(c,'')}) + ${xm}`),
              L(`Substitute x = ${x0}:`, `نعوّض ${M(`x = ${x0}`)}:`)+' '+M(`${m===1?'':`${m}(${sgn(x0)})${m-1>1?sup(m-1):''}`}(${sgn(x0+c)}) + (${sgn(x0)})${m>1?sup(m):''} = ${sgn(m*x0**(m-1)*(x0+c))} + (${sgn(x0**m)}) = ${sgn(v)}`))};
  },
  criticalPoints(d){
    const k=R(1,d===1?3:6), c=R(-9,9);
    return {q:`Find the critical points of f(x) = x${sup(3)}${term(-3*k*k,'x')}${term(c,'')}.`, a:`<b>x = &minus;${k}, ${k}</b>`,
      s:steps(L('Critical points: where f′(x) = 0 (or does not exist).', 'النقاط الحرجة: حيث f′(x) = 0 (أو غير موجودة).'),
              M(`f&prime;(x) = 3x${sup(2)} &minus; ${3*k*k}`),
              M(`3x${sup(2)} &minus; ${3*k*k} = 0 &rArr; x${sup(2)} = ${k*k} &rArr; x = &plusmn;${k}`))};
  },

  /* ---- Foundations (MATH 234) ---- */
  setOps(d){
    const U=d===1?6:d===2?8:10;
    const rnd=()=>{ const s=[]; for(let i=1;i<=U;i++) if(Math.random()<0.5) s.push(i); return s.length?s:[R(1,U)]; };
    const A=rnd(), B=rnd(), op=pick(['&cup;','&cap;','&minus;']);
    const res = op==='&cup;' ? [...new Set([...A,...B])].sort((x,y)=>x-y)
              : op==='&cap;' ? A.filter(x=>B.includes(x)) : A.filter(x=>!B.includes(x));
    const S=s=>s.length?`{${s.join(', ')}}`:'&empty;';
    const rule={'&cup;':['Union: every element that is in A or in B (or both), written once.','الاتحاد: كل عنصر في A أو في B (أو كليهما) يُكتب مرة واحدة.'],
      '&cap;':['Intersection: only the elements that are in both A and B.','التقاطع: العناصر الموجودة في A و B معاً فقط.'],
      '&minus;':['Difference: the elements of A that are not in B.','الفرق: عناصر A غير الموجودة في B.']}[op];
    return {q:align([['A','=',S(A)],['B','=',S(B)]])+'<br>'+L(`Find A ${op} B.`, `أوجد ${M(`A ${op} B`)}.`), a:`<b>${S(res)}</b>`,
      s:steps(L(rule[0], rule[1]),
              L('Go through the elements one by one:', 'نمرّ على العناصر واحداً واحداً:')+' '+M([...new Set([...A,...B])].sort((x,y)=>x-y).map(x=>`${x}${res.includes(x)?' &#10003;':' &#10007;'}`).join(', ')),
              M(`A ${op} B = ${S(res)}`))};
  },
  cartesianSize(d){
    const a=R(2,d===1?6:12), b=R(2,d===1?6:12);
    const rule=L('Each element of the product is an ordered tuple: one choice from each set, so multiply the sizes.', 'كل عنصر في الضرب الديكارتي زوج مرتب: اختيار من كل مجموعة، لذا نضرب الأعداد.');
    if(d===3){ const c=R(2,6); return {q:`|A| = ${a}, |B| = ${b}, |C| = ${c}. Find |A &times; B &times; C|.`, a:`<b>${a*b*c}</b>`,
      s:steps(rule, M(`|A &times; B &times; C| = |A|&middot;|B|&middot;|C| = ${a} &times; ${b} &times; ${c} = ${a*b*c}`))}; }
    return {q:`|A| = ${a}, |B| = ${b}. Find |A &times; B|.`, a:`<b>${a*b}</b>`,
      s:steps(rule, M(`|A &times; B| = |A|&middot;|B| = ${a} &times; ${b} = ${a*b}`))};
  },
  logicEval(d){
    const p=pick([true,false]), q=pick([true,false]), r=pick([true,false]), T=v=>v?'T':'F';
    const ex=pick([
      ['(p &and; q) &or; r',          (p,q,r)=>(p&&q)||r,   (p,q,r)=>[`p &and; q = ${T(p&&q)}`]],
      ['&not;p &or; (q &and; r)',     (p,q,r)=>!p||(q&&r),  (p,q,r)=>[`&not;p = ${T(!p)}`, `q &and; r = ${T(q&&r)}`]],
      ['(p &or; q) &and; &not;r',     (p,q,r)=>(p||q)&&!r,  (p,q,r)=>[`p &or; q = ${T(p||q)}`, `&not;r = ${T(!r)}`]],
      ['&not;(p &and; q) &or; r',     (p,q,r)=>!(p&&q)||r,  (p,q,r)=>[`p &and; q = ${T(p&&q)}`, `&not;(p &and; q) = ${T(!(p&&q))}`]],
      ['(p &or; &not;q) &and; (q &or; r)', (p,q,r)=>(p||!q)&&(q||r), (p,q,r)=>[`&not;q = ${T(!q)}`, `p &or; &not;q = ${T(p||!q)}`, `q &or; r = ${T(q||r)}`]],
      ['&not;(p &or; r) &and; q',     (p,q,r)=>!(p||r)&&q,  (p,q,r)=>[`p &or; r = ${T(p||r)}`, `&not;(p &or; r) = ${T(!(p||r))}`]],
    ]);
    return {q:`If p = ${T(p)}, q = ${T(q)}, r = ${T(r)}, evaluate ${ex[0]}.`, a:`<b>${T(ex[1](p,q,r))}</b>`,
      s:steps(L('Rules: ¬ flips the value; ∧ (and) is T only when both are T; ∨ (or) is F only when both are F. Work from the inside brackets out:', 'القواعد: النفي ¬ يعكس القيمة؛ و ∧ صائبة فقط إذا كان الطرفان صائبين؛ و ∨ خاطئة فقط إذا كان الطرفان خاطئين. نبدأ من داخل الأقواس:'),
              ...ex[2](p,q,r).map(t=>M(t)), M(`${ex[0]} = ${T(ex[1](p,q,r))}`))};
  },
  functionCount(d){
    const m=R(2,d===1?3:5), n=R(m,d===1?4:6), inj=Math.random()<0.5, top=[...Array(m)].map((_,i)=>n-i);
    return {q:`|A| = ${m}, |B| = ${n}. How many ${inj?'one-to-one ':''}functions A &rarr; B are there?`,
            a:`<b>${inj?factorial(n)/factorial(n-m):n**m}</b>`,
      s:inj ? steps(L(`One-to-one: the ${m} elements of A must go to different elements of B. The first has ${n} choices, the next ${n-1}, …`, `دالة متباينة: عناصر A الـ ${M(m)} تذهب إلى عناصر مختلفة من B. الأول له ${M(n)} خيارات، والتالي ${M(n-1)}، …`),
                    M(`${top.join(' &times; ')} = ${factorial(n)/factorial(n-m)}`))
              : steps(L(`Each of the ${m} elements of A can go to any of the ${n} elements of B.`, `كل عنصر من عناصر A الـ ${M(m)} يمكن أن يذهب إلى أي عنصر من عناصر B الـ ${M(n)}.`),
                      M(`${n}${sup(m)} = ${[...Array(m)].map(()=>n).join(' &times; ')} = ${n**m}`))};
  },

  /* ---- Linear Algebra (MATH 244) ---- */
  inverse2(d){
    const k=nz(-4,4), m=R(d===1?0:-3,3); let A=[1+k*m,k,m,1];          // det = 1 by construction
    if(Math.random()<0.5) A=[A[3],A[2],A[1],A[0]];
    if(d>1 && Math.random()<0.5) A=[A[1],A[0],A[3],A[2]];                // column swap: det = -1
    const det=A[0]*A[3]-A[1]*A[2];                                        // ±1, so 1/det = det
    return {q:`${mat(A)}${sup('&minus;1')} =`, a:`<b>${mat([A[3]*det,-A[1]*det,-A[2]*det,A[0]*det])}</b>`,
      s:steps(L(`${M(`det = (${sgn(A[0])})(${sgn(A[3])}) &minus; (${sgn(A[1])})(${sgn(A[2])}) = ${det}`)} ≠ 0, so the inverse exists.`, `${M(`det = (${sgn(A[0])})(${sgn(A[3])}) &minus; (${sgn(A[1])})(${sgn(A[2])}) = ${det}`)} ≠ 0 إذن المعكوس موجود.`),
              L(`Swap the diagonal, negate the other two, divide by det: ${M('(1/'+det+')')} ${mat([A[3],-A[1],-A[2],A[0]])} = ${mat([A[3]*det,-A[1]*det,-A[2]*det,A[0]*det])}`,
                `نبدّل عنصري القطر الرئيسي ونغيّر إشارة الآخرين ثم نقسم على المحدد: ${M('(1/'+det+')')} ${mat([A[3],-A[1],-A[2],A[0]])} = ${mat([A[3]*det,-A[1]*det,-A[2]*det,A[0]*det])}`))};
  },
  matVec(d){
    const n=d===1?2:3, hi=d===3?9:5, A=Array.from({length:n*n},()=>R(-hi,hi)), v=Array.from({length:n},()=>R(-hi,hi));
    const P=[]; for(let i=0;i<n;i++){ let s=0; for(let j=0;j<n;j++) s+=A[i*n+j]*v[j]; P.push(s); }
    return {q:`${mat(A,n)} ${mat(v,1)} =`, a:`<b>${mat(P,1)}</b>`,
      s:steps(L('Each entry of the result = (row of the matrix) · (vector): multiply matching entries and add.', 'كل عنصر في الناتج = (صف المصفوفة) · (المتجه): نضرب العناصر المتقابلة ونجمع.'),
              ...P.map((p,i)=>M(`${v.map((x,j)=>`(${sgn(A[i*n+j])})(${sgn(x)})`).join(' + ')} = ${sgn(p)}`)), M(mat(P,1)))};
  },
  dotProduct(d){
    const n=d===1?2:3, hi=d===3?12:6, u=Array.from({length:n},()=>R(-hi,hi)), v=Array.from({length:n},()=>R(-hi,hi));
    const s=u.reduce((t,x,i)=>t+x*v[i],0);
    return {q:`${vec(u)} &middot; ${vec(v)} =`, a:`<b>${sgn(s)}</b>`,
      s:steps(L('Dot product: multiply the matching components and add.', 'الضرب النقطي: نضرب المركبات المتقابلة ونجمع.'),
              M(`${u.map((x,i)=>`(${sgn(x)})(${sgn(v[i])})`).join(' + ')}`), M(`= ${u.map((x,i)=>x*v[i]).map((x,i)=>i&&x<0?`(${sgn(x)})`:sgn(x)).join(' + ')} = ${sgn(s)}`))};
  },
  eigenvalues2(d){
    // pick the eigenvalues first, then build an integer matrix with that trace and determinant
    const hi=d===1?4:d===2?6:9, l1=R(-hi,hi), l2=R(-hi,hi), a=R(-hi,hi), e=l1+l2-a, p=a*e-l1*l2;
    let b, c;
    if(p===0){ if(Math.random()<0.5){ b=0; c=R(-hi,hi); } else { c=0; b=R(-hi,hi); } }
    else { const divs=[]; for(let k=1;k<=Math.abs(p);k++) if(p%k===0) divs.push(k); b=pick(divs)*pick([1,-1]); c=p/b; }
    c+=0;
    const ans = l1===l2 ? `&lambda; = ${sgn(l1)} (double)` : `&lambda; = ${sgn(Math.min(l1,l2))}, ${sgn(Math.max(l1,l2))}`;
    const tr=a+e, det=a*e-b*c, f=r=>r===0?'&lambda;':`(&lambda; ${r<0?'+ '+Math.abs(r):'&minus; '+r})`;
    return {q:`Find the eigenvalues of ${mat([a,b,c,e])}.`, a:`<b>${ans}</b>`,
      s:steps(L('Eigenvalues solve the characteristic equation', 'القيم الذاتية هي حلول المعادلة المميزة')+' '+M('det(A &minus; &lambda;I) = 0')+'. '+L('For a 2×2 matrix it is', 'وللمصفوفة 2×2 هي')+' '+M(`&lambda;${sup(2)} &minus; (tr A)&lambda; + det A = 0`),
              M(`tr A = ${sgn(a)} + (${sgn(e)}) = ${sgn(tr)}`)+', '+M(`det A = (${sgn(a)})(${sgn(e)}) &minus; (${sgn(b)})(${sgn(c)}) = ${sgn(det)}`),
              M(`&lambda;${sup(2)}${term(-tr,'&lambda;')}${term(det,'')} = 0`),
              L('Factor:', 'نحلل:')+' '+M(`${f(l1)}${f(l2)} = 0 &rArr; ${ans}`))};
  },

  /* ---- Numerical Analysis (MATH 353) ---- */
  bisectionStep(d){
    let a, b, N, m;
    do{ a=R(1,d===1?5:9); b=a+2*R(1,d===3?3:2); N=R(a*a+1,b*b-1); m=(a+b)/2; }while(m*m===N);
    const next = (a*a-N)*(m*m-N)<0 ? [a,m] : [m,b];
    return {q:`Apply one bisection step to f(x) = x${sup(2)} &minus; ${N} on [${a}, ${b}].`,
            a:`<b>m = ${m}; new interval [${next[0]}, ${next[1]}]</b>`,
      s:steps(L(`Check the signs at the ends: ${M(`f(${a}) = ${sgn(a*a-N)}`)} &lt; 0 and ${M(`f(${b}) = ${sgn(b*b-N)}`)} &gt; 0, so a root lies between them.`, `نفحص الإشارات عند الطرفين: ${M(`f(${a}) = ${sgn(a*a-N)}`)} سالبة و ${M(`f(${b}) = ${sgn(b*b-N)}`)} موجبة، إذن يوجد جذر بينهما.`),
              L('Midpoint:', 'نقطة المنتصف:')+' '+M(`m = (${a} + ${b})/2 = ${m}`)+', '+M(`f(${m}) = ${m*m} &minus; ${N} = ${sgn(m*m-N)}`),
              L(`Keep the half where the sign changes: f(${m}) is ${m*m-N<0?'negative, like f(a)':'positive, like f(b)'}, so the root is in ${M(`[${next[0]}, ${next[1]}]`)}.`, `نحتفظ بالنصف الذي تتغير فيه الإشارة: ${M(`f(${m})`)} ${m*m-N<0?'سالبة مثل f(a)':'موجبة مثل f(b)'}، إذن الجذر في ${M(`[${next[0]}, ${next[1]}]`)}.`))};
  },
  trapezoidRule(d){
    const n=R(2,d===1?2:4), h=d===3?pick([1,2]):1, p=d===3?3:2, c=R(0,4), f=x=>x**p+c;
    let s=(f(0)+f(n*h))/2; for(let i=1;i<n;i++) s+=f(i*h);
    const xs=[...Array(n+1)].map((_,i)=>i*h);
    return {q:`Use the trapezoidal rule with n = ${n} subintervals to approximate &int;<sub>0</sub><sup>${n*h}</sup> (x${sup(p)}${term(c,'')}) dx.`,
            a:`<b>${h*s}</b>`,
      s:steps(L('Trapezoidal rule:', 'قاعدة شبه المنحرف:')+' '+M(`T = ${frac('h',2)}[f(x<sub>0</sub>) + 2f(x<sub>1</sub>) + … + 2f(x<sub>n&minus;1</sub>) + f(x<sub>n</sub>)]`)+', '+M(`h = ${frac(n*h,n)} = ${h}`),
              L('Values:', 'القيم:')+' '+M(xs.map(x=>`f(${x}) = ${f(x)}`).join(', ')),
              M(`T = ${frac(h,2)}[${xs.map((x,i)=>i===0||i===n?f(x):`2(${f(x)})`).join(' + ')}] = ${frac(h,2)}(${2*s}) = ${h*s}`))};
  },
  eulerStep(d){
    const a=nz(-3,3), b=nz(-2,2), h=pick(d===1?[1]:d===2?[0.5,1]:[0.25,0.5]), n=d===3?2:1, x0=R(0,2), y0=R(-3,5);
    let x=x0, y=y0; const st=[];
    for(let i=0;i<n;i++){ const f=a*x+b*y, y1=y+h*f;   // h is a power of 2: exact in floating point
      st.push(M(`f(x<sub>${i}</sub>, y<sub>${i}</sub>) = ${a}(${num(x)}) + ${b}(${num(y)}) = ${num(f)}`), M(`y<sub>${i+1}</sub> = ${num(y)} + ${h}(${num(f)}) = ${num(y1)}`));
      y=y1; x+=h; }
    return {q:L(`Use Euler's method with h = ${h} (${n} step${n>1?'s':''}) to find y(${x}):`, `استخدم طريقة أويلر بخطوة ${M('h = '+h)} (${n>1?'خطوتان':'خطوة واحدة'}) لإيجاد ${M(`y(${x})`)}:`)+'<br>'+
              align([['y&prime;','=',`${lead(a,'x')}${term(b,'y')}`],[`y(${x0})`,'=',y0]], true),
            a:`<b>${sgn(y)}</b>`,
      s:steps(L('Euler step:', 'خطوة أويلر:')+' '+M('y<sub>n+1</sub> = y<sub>n</sub> + h f(x<sub>n</sub>, y<sub>n</sub>)')+', '+M(`f(x, y) = ${lead(a,'x')}${term(b,'y')}`), ...st)};
  },
  absoluteError(d){
    const p=pick([50,100,200,250,400,500,1000])*(d===3?pick([2,4,5,10]):1), e=R(1,d===1?9:30), approx=p+pick([1,-1])*e;
    return {q:`True value p = ${p}, approximation p* = ${approx}. Find the absolute and relative errors.`,
            a:`<b>abs = ${e}, rel = ${+(e/p).toFixed(6)}</b>`,
      s:steps(L('Absolute error = |true − approximate|:', 'الخطأ المطلق = |القيمة الحقيقية − التقريبية|:')+' '+M(`|${p} &minus; ${approx}| = ${e}`),
              L('Relative error = absolute error ÷ |true value|:', 'الخطأ النسبي = الخطأ المطلق ÷ |القيمة الحقيقية|:')+' '+M(`${frac(e,p)} = ${+(e/p).toFixed(6)}`))};
  },

  /* ---- Ordinary Differential Equations (MATH 333) ---- */
  charRoots(d){
    const hi=d===1?4:d===2?6:9, r1=R(-hi,hi), r2=R(-hi,hi), b=-(r1+r2), c=r1*r2;
    const ans = r1===r2 ? `r = ${sgn(r1)} (double)` : `r = ${sgn(Math.min(r1,r2))}, ${sgn(Math.max(r1,r2))}`;
    const f=r=>r===0?'r':`(r ${r<0?'+ '+Math.abs(r):'&minus; '+r})`;
    return {q:`Find the roots of the characteristic equation of y&Prime;${term(b,'y&prime;')}${term(c,'y')} = 0.`, a:`<b>${ans}</b>`,
      s:steps(L('Try y = e^(rx): each derivative brings a factor r, so y″ → r², y′ → r, y → 1.', 'نجرب y = e^(rx): كل اشتقاق يُخرج r، فيصبح y″ ← r² و y′ ← r و y ← 1.'),
              M(`r${sup(2)}${term(b,'r')}${term(c,'')} = 0`),
              L('Factor:', 'نحلل:')+' '+M(`${f(r1)}${f(r2)} = 0 &rArr; ${ans}`))};
  },
  expGrowth(d){
    const y0=R(2,50), T=R(1,6), n=R(1,d===1?3:d===2?5:8);
    return {q:`A population follows y&prime; = ky with y(0) = ${y0} and doubles every ${T} hours. Find y(${n*T}).`, a:`<b>${y0*2**n}</b>`,
      s:steps(L('The solution of y′ = ky is exponential:', 'حل المعادلة y′ = ky أسي:')+' '+M(`y = y(0)e${sup('kt')}`)+'. '+L(`Doubling every ${T} hours means`, `التضاعف كل ${M(T)} ساعات يعني`)+' '+M(`y = ${y0} &middot; 2${sup(`t/${T}`)}`),
              L(`t = ${n*T} hours is ${n} doubling period(s):`, `${M(`t = ${n*T}`)} ساعة تعادل ${M(n)} فترات تضاعف:`)+' '+M(`${n*T}/${T} = ${n}`),
              M(`y(${n*T}) = ${y0} &times; 2${sup(n)} = ${y0} &times; ${2**n} = ${y0*2**n}`))};
  },
  ivpPolynomial(d){
    const p=R(0,d===1?1:3), c=nz(-4,4), y0=R(-9,9), x1=nz(-3,3), k=c*(p+1);
    const rhs = p===0 ? sgn(k) : lead(k,'x'+(p===1?'':sup(p)));
    const Y=lead(c,'x'+(p+1===1?'':sup(p+1)));
    return {q:L(`Solve the initial value problem and find y(${x1}):`, `حل مسألة القيمة الابتدائية وأوجد ${M(`y(${x1})`)}:`)+'<br>'+align([['y&prime;','=',rhs],['y(0)','=',y0]], true), a:`<b>${sgn(c*x1**(p+1)+y0)}</b>`,
      s:steps(L('Integrate both sides:', 'نكامل الطرفين:')+' '+M(`y = &int; ${rhs} dx = ${Y} + C`),
              L('Use the initial condition:', 'نستخدم الشرط الابتدائي:')+' '+M(`y(0) = 0 + C = ${y0} &rArr; C = ${y0}`)+' '+L('so', 'إذن')+' '+M(`y = ${Y}${term(y0,'')}`),
              M(`y(${x1}) = ${c}(${sgn(x1)})${p+1>1?sup(p+1):''}${term(y0,'')} = ${sgn(c*x1**(p+1))}${term(y0,'')} = ${sgn(c*x1**(p+1)+y0)}`))};
  },

  /* ---- Partial Differential Equations (MATH 315) ---- */
  pdeClassify(d){
    let A=nz(-5,5), B=R(-8,8), C=nz(-5,5);
    if(Math.random()<1/3){ const k=pick([1,-1,2]), s=R(1,3), t=R(1,3); A=k*s*s; C=k*t*t; B=2*k*s*t*pick([1,-1]); } // B² = 4AC
    const disc=B*B-4*A*C;
    const pde=`${lead(A,'u<sub>xx</sub>')}${term(B,'u<sub>xy</sub>')}${term(C,'u<sub>yy</sub>')} = 0`;
    const T=disc>0?['Hyperbolic','زائدية','like the wave equation','مثل معادلة الموجة']:disc===0?['Parabolic','مكافئة','like the heat equation','مثل معادلة الحرارة']:['Elliptic','ناقصية','like Laplace\'s equation','مثل معادلة لابلاس'];
    return {q:`Classify the PDE ${pde}.`,
            a:`<b>${Li(T[0],T[1])}</b>`,
      s:steps(L(`For ${M('Au<sub>xx</sub> + Bu<sub>xy</sub> + Cu<sub>yy</sub> = 0')}: A = ${A}, B = ${B}, C = ${C}.`, `للمعادلة ${M('Au<sub>xx</sub> + Bu<sub>xy</sub> + Cu<sub>yy</sub> = 0')}: ${M(`A = ${A}, B = ${B}, C = ${C}`)}.`),
              L(`${M(`B${sup(2)} &minus; 4AC = ${B*B} &minus; (${4*A*C}) = ${disc}`)}`, `${M(`B${sup(2)} &minus; 4AC = ${B*B} &minus; (${4*A*C}) = ${disc}`)}`),
              L(`${M(`B${sup(2)} &minus; 4AC ${disc>0?'&gt;':disc===0?'=':'&lt;'} 0`)} ⇒ <b>${T[0]}</b> (${T[2]}).`, `${M(`B${sup(2)} &minus; 4AC ${disc>0?'&gt;':disc===0?'=':'&lt;'} 0`)} ⇐ <b>${T[1]}</b> (${T[3]}).`))};
  },
  waveSpeed(d){
    const c=R(2,d===1?5:12);
    return {q:`u<sub>tt</sub> = ${c*c}u<sub>xx</sub>. Find the wave speed c.`, a:`<b>${c}</b>`,
      s:steps(L('The wave equation has the form', 'معادلة الموجة على الصورة')+' '+M(`u<sub>tt</sub> = c${sup(2)}u<sub>xx</sub>`)+'.',
              M(`c${sup(2)} = ${c*c} &rArr; c = ${sq(c*c)} = ${c}`))};
  },
  laplacianPoly(d){
    const a=nz(-6,6), b=R(-6,6), c=nz(-6,6), e=d===1?0:R(-9,9);
    return {q:`u(x, y) = ${lead(a,'x'+sup(2))}${term(b,'xy')}${term(c,'y'+sup(2))}${term(e,'x')}. Find u<sub>xx</sub> + u<sub>yy</sub>.`,
            a:`<b>${sgn(2*a+2*c)}</b>`,
      s:steps(L('Differentiate twice in x (treat y as a constant):', 'نشتق مرتين بالنسبة لـ x (y ثابت):')+' '+M(`u<sub>x</sub> = ${lead(2*a,'x')}${term(b,'y')}${term(e,'')}`)+', '+M(`u<sub>xx</sub> = ${sgn(2*a)}`),
              L('Differentiate twice in y (treat x as a constant):', 'نشتق مرتين بالنسبة لـ y (x ثابت):')+' '+M(`u<sub>y</sub> = ${b?lead(b,'x'):''}${b?term(2*c,'y'):lead(2*c,'y')}`)+', '+M(`u<sub>yy</sub> = ${sgn(2*c)}`),
              M(`u<sub>xx</sub> + u<sub>yy</sub> = ${sgn(2*a)} + (${sgn(2*c)}) = ${sgn(2*a+2*c)}`))};
  },
  heatSeparation(d){
    const n=R(1,d===1?3:6), al=R(1,d===1?3:9), nx=`${n===1?'':n}x`;
    return {q:`u(x, t) = e${sup('&minus;kt')} sin(${nx}) solves u<sub>t</sub> = ${al===1?'':al}u<sub>xx</sub>. Find k.`, a:`<b>${al*n*n}</b>`,
      s:steps(M(`u<sub>t</sub> = &minus;k e${sup('&minus;kt')} sin(${nx})`),
              M(`u<sub>xx</sub> = &minus;${n*n===1?'':n*n} e${sup('&minus;kt')} sin(${nx})`),
              L('Substitute in the equation and cancel', 'نعوّض في المعادلة ونحذف')+' '+M(`e${sup('&minus;kt')} sin(${nx})`)+':'+' '+M(`&minus;k = ${al===1?'':al+' &times; '}(&minus;${n*n}) &rArr; k = ${al*n*n}`))};
  },

  /* ---- Vector Analysis (MATH 335) ---- */
  crossProduct(d){
    const hi=d===1?4:d===2?6:9, u=[R(-hi,hi),R(-hi,hi),R(-hi,hi)], v=[R(-hi,hi),R(-hi,hi),R(-hi,hi)];
    const w=[u[1]*v[2]-u[2]*v[1], u[2]*v[0]-u[0]*v[2], u[0]*v[1]-u[1]*v[0]].map(x=>x+0), P=x=>`(${sgn(x)})`;
    return {q:`${vec(u)} &times; ${vec(v)} =`, a:`<b>${vec(w)}</b>`,
      s:steps(L('Cross product:', 'الضرب الاتجاهي:')+' '+M('u &times; v = &lang;u<sub>2</sub>v<sub>3</sub> &minus; u<sub>3</sub>v<sub>2</sub>, u<sub>3</sub>v<sub>1</sub> &minus; u<sub>1</sub>v<sub>3</sub>, u<sub>1</sub>v<sub>2</sub> &minus; u<sub>2</sub>v<sub>1</sub>&rang;'),
              M(`${P(u[1])}${P(v[2])} &minus; ${P(u[2])}${P(v[1])} = ${sgn(w[0])}`), M(`${P(u[2])}${P(v[0])} &minus; ${P(u[0])}${P(v[2])} = ${sgn(w[1])}`), M(`${P(u[0])}${P(v[1])} &minus; ${P(u[1])}${P(v[0])} = ${sgn(w[2])}`),
              M(vec(w)))};
  },
  vectorMagnitude(d){
    const t=pick(d===1?[[1,2,2,3],[2,3,6,7]]:[[1,2,2,3],[2,3,6,7],[1,4,8,9],[4,4,7,9],[2,6,9,11],[6,6,7,11],[3,4,12,13],[2,10,11,15]]);
    const v=shuffled(t.slice(0,3)).map(x=>x*pick([1,-1]));
    return {q:`|${vec(v)}| =`, a:`<b>${t[3]}</b>`,
      s:steps(L('Length of a vector = square root of the sum of the squares of its components:', 'طول المتجه = الجذر التربيعي لمجموع مربعات مركباته:')+' '+M(`|v| = ${sq('v<sub>1</sub>'+sup(2)+' + v<sub>2</sub>'+sup(2)+' + v<sub>3</sub>'+sup(2))}`),
              M(`${sq(v.map(x=>`(${sgn(x)})${sup(2)}`).join(' + '))} = ${sq(v.map(x=>x*x).join(' + '))} = ${sq(t[3]**2)} = ${t[3]}`))};
  },
  divergence(d){
    const a=nz(-5,5), b=nz(-5,5), c=nz(-5,5), x=R(-3,3), y=R(-3,3), z=R(-3,3);
    return {q:`F = &lang;${lead(a,'xy')}, ${lead(b,'yz')}, ${lead(c,'zx')}&rang;. Find &nabla;&middot;F at (${x}, ${y}, ${z}).`,
            a:`<b>${sgn(a*y+b*z+c*x)}</b>`,
      s:steps(L('Divergence:', 'التباعد:')+' '+M('&nabla;&middot;F = &part;P/&part;x + &part;Q/&part;y + &part;R/&part;z'),
              M(`&part;(${lead(a,'xy')})/&part;x = ${lead(a,'y')}`)+', '+M(`&part;(${lead(b,'yz')})/&part;y = ${lead(b,'z')}`)+', '+M(`&part;(${lead(c,'zx')})/&part;z = ${lead(c,'x')}`),
              M(`&nabla;&middot;F = ${lead(a,'y')}${term(b,'z')}${term(c,'x')}`),
              L(`At (${x}, ${y}, ${z}):`, `عند ${M(`(${x}, ${y}, ${z})`)}:`)+' '+M(`${a}(${sgn(y)}) + ${b}(${sgn(z)}) + ${c}(${sgn(x)}) = ${sgn(a*y+b*z+c*x)}`))};
  },
  gradientAt(d){
    const a=nz(-5,5), b=nz(-5,5), c=nz(-5,5), x=R(-3,3), y=R(-3,3), z=R(-3,3);
    const g=[2*a*x,2*b*y,2*c*z].map(v=>v+0);
    return {q:`f = ${lead(a,'x'+sup(2))}${term(b,'y'+sup(2))}${term(c,'z'+sup(2))}. Find &nabla;f at (${x}, ${y}, ${z}).`,
            a:`<b>${vec(g)}</b>`,
      s:steps(L('Gradient = vector of partial derivatives:', 'التدرج = متجه المشتقات الجزئية:')+' '+M('&nabla;f = &lang;f<sub>x</sub>, f<sub>y</sub>, f<sub>z</sub>&rang;'),
              M(`f<sub>x</sub> = ${lead(2*a,'x')}, f<sub>y</sub> = ${lead(2*b,'y')}, f<sub>z</sub> = ${lead(2*c,'z')}`),
              L(`At (${x}, ${y}, ${z}):`, `عند ${M(`(${x}, ${y}, ${z})`)}:`)+' '+M(`&lang;${2*a}(${sgn(x)}), ${2*b}(${sgn(y)}), ${2*c}(${sgn(z)})&rang; = ${vec(g)}`))};
  },

  /* ---- Real Analysis (MATH 383) ---- */
  seqLimit(d){
    const a=nz(-9,9), b=R(-9,9), c=nz(1,d===1?3:9), e=R(-9,9);
    return {q:`lim<sub>n&rarr;&infin;</sub> ${frac(lead(a,'n')+term(b,''), lead(c,'n')+term(e,''))} =`, a:`<b>${fracStr(a,c)}</b>`,
      s:steps(L('Divide the numerator and the denominator by n (the highest power):', 'نقسم البسط والمقام على n (أعلى قوة):'),
              M(frac(`${sgn(a)}${b?` ${b<0?'&minus;':'+'} ${frac(Math.abs(b),'n')}`:''}`, `${c}${e?` ${e<0?'&minus;':'+'} ${frac(Math.abs(e),'n')}`:''}`)),
              L('As n → ∞, every term k/n → 0:', 'عندما n → ∞ كل حد على الصورة k/n يؤول إلى 0:')+' '+M(`${frac(a,c)}${gcd(Math.abs(a),c)>1?' = '+fracStr(a,c):''}`))};
  },
  geometricSeries(d){
    const a=nz(-9,9), q=R(2,d===1?3:6), p=d===1?1:nz(-(q-1),q-1);
    const ratio=(p<0?'&minus;':'')+frac(Math.abs(p),q);
    return {q:`Find the sum of the infinite geometric series with first term ${sgn(a)} and common ratio ${ratio}.`, a:`<b>${fracStr(a*q,q-p)}</b>`,
      s:steps(L('Since |r| < 1 the series converges, and', 'بما أن |r| < 1 فالمتسلسلة متقاربة، و')+' '+M(`S = ${frac('a','1 &minus; r')}`),
              M(`1 &minus; (${ratio}) = ${frac(q-p,q)}`),
              M(`S = ${sgn(a)} &divide; ${frac(q-p,q)} = ${sgn(a)} &times; ${frac(q,q-p)} = ${fracStr(a*q,q-p)}`))};
  },
  telescopingSum(d){
    const N=R(3,d===1?9:d===2?50:200), k=d===3?2:1;
    // k=1: N/(N+1);  k=2: (1/2)(3/2 − 1/(N+1) − 1/(N+2))
    const ans = k===1 ? fracStr(N,N+1) : fracStr(3*(N+1)*(N+2)-2*(N+2)-2*(N+1), 4*(N+1)*(N+2));
    const s = k===1
      ? steps(L('Partial fractions:', 'نفكّ إلى كسور جزئية:')+' '+M(`${frac(1,'n(n + 1)')} = ${frac(1,'n')} &minus; ${frac(1,'n + 1')}`),
              L('Write the terms out — almost everything cancels:', 'نكتب الحدود فيُحذف معظمها:')+' '+M(`(1 &minus; ${frac(1,2)}) + (${frac(1,2)} &minus; ${frac(1,3)}) + … + (${frac(1,N)} &minus; ${frac(1,N+1)})`),
              M(`= 1 &minus; ${frac(1,N+1)} = ${fracStr(N,N+1)}`))
      : steps(L('Partial fractions:', 'نفكّ إلى كسور جزئية:')+' '+M(`${frac(1,'n(n + 2)')} = ${frac(1,2)}(${frac(1,'n')} &minus; ${frac(1,'n + 2')})`),
              L('The terms cancel two steps apart; only the first two positives and last two negatives remain:', 'تُحذف الحدود على بعد خطوتين، ويبقى أول حدين موجبين وآخر حدين سالبين:'),
              M(`${frac(1,2)}(1 + ${frac(1,2)} &minus; ${frac(1,N+1)} &minus; ${frac(1,N+2)}) = ${ans}`));
    return {q:`&sum;<sub>n=1</sub><sup>${N}</sup> ${frac(1,`n(n + ${k})`)} =`, a:`<b>${ans}</b>`, s};
  },
  epsilonN(d){
    const c=d===1?1:R(1,5), k=R(2,d===3?1000:20);
    return {q:`For a<sub>n</sub> = ${frac(c,'n')}, find the smallest N with a<sub>n</sub> &lt; ${frac(1,k)} for all n &ge; N.`, a:`<b>N = ${c*k+1}</b>`,
      s:steps(L('Solve the inequality for n:', 'نحل المتباينة بالنسبة لـ n:')+' '+M(`${frac(c,'n')} &lt; ${frac(1,k)} &hArr; n &gt; ${c}&times;${k} = ${c*k}`),
              L(`The smallest whole number greater than ${c*k} is ${c*k+1}; since aₙ decreases, all later terms work too.`, `أصغر عدد صحيح أكبر من ${M(c*k)} هو ${M(c*k+1)}، وبما أن المتتابعة متناقصة فكل الحدود بعده تحقق الشرط.`),
              M(`N = ${c*k+1}`))};
  },

  /* ---- Topology (MATH 473) ---- */
  eulerCharacteristic(d){
    const n=R(3,d===1?6:12), solid=pick(['prism','pyramid','bipyramid']);
    const [V,E,F] = solid==='prism' ? [2*n,3*n,n+2] : solid==='pyramid' ? [n+1,2*n,n+1] : [n+2,3*n,2*n];
    const miss=pick(['V','E','F']), vals={V,E,F};
    const known=['V','E','F'].filter(x=>x!==miss).map(x=>`${x} = ${vals[x]}`).join(', ');
    const solve={V:`V = 2 + E &minus; F = 2 + ${E} &minus; ${F} = ${V}`, E:`E = V + F &minus; 2 = ${V} + ${F} &minus; 2 = ${E}`, F:`F = 2 + E &minus; V = 2 + ${E} &minus; ${V} = ${F}`}[miss];
    return {q:`A convex polyhedron (${n}-gonal ${solid}) has ${known}. Find ${miss}.`, a:`<b>${miss} = ${vals[miss]}</b>`,
      s:steps(L("Euler's formula for convex polyhedra:", 'صيغة أويلر للمجسمات المحدبة:')+' '+M('V &minus; E + F = 2'), M(solve))};
  },
  surfaceGenus(d){
    const g=R(0,d===1?3:10), rule=L('For a closed orientable surface of genus g (g holes):', 'للسطح المغلق القابل للتوجيه من الجنس g (عدد الثقوب):')+' '+M('&chi; = 2 &minus; 2g');
    if(Math.random()<0.5) return {q:`Find the Euler characteristic of a closed orientable surface of genus ${g}.`, a:`<b>&chi; = ${sgn(2-2*g)}</b>`,
      s:steps(rule, M(`&chi; = 2 &minus; 2(${g}) = ${sgn(2-2*g)}`))};
    return {q:`A closed orientable surface has Euler characteristic ${sgn(2-2*g)}. Find its genus.`, a:`<b>g = ${g}</b>`,
      s:steps(rule, M(`${sgn(2-2*g)} = 2 &minus; 2g &rArr; 2g = ${2*g} &rArr; g = ${g}`))};
  },
  topologyOpenSets(d){
    const n=R(1,d===1?4:8), t=pick(['discrete','indiscrete']);
    return {q:`How many open sets does the ${t} topology on a set with ${n} point${n>1?'s':''} have?`, a:`<b>${t==='discrete'?2**n:2}</b>`,
      s:t==='discrete' ? steps(L('In the discrete topology every subset is open, so count all subsets:', 'في التبولوجيا المتقطعة كل مجموعة جزئية مفتوحة، فنعدّ كل المجموعات الجزئية:'), M(`2${sup(n)} = ${2**n}`))
                       : steps(L('The indiscrete topology has only the two required open sets: ∅ and X.', 'التبولوجيا غير المتقطعة فيها المجموعتان المفتوحتان الإلزاميتان فقط: ∅ و X.'), M('{&empty;, X} &rArr; 2'))};
  },

  /* ---- Differential Geometry (MATH 475) ---- */
  circleCurvature(d){
    const r=R(2,d===1?5:20);
    return {q:`Find the curvature of the circle r(t) = (${r} cos t, ${r} sin t).`, a:`<b>&kappa; = ${fracStr(1,r)}</b>`,
      s:steps(M(`r&prime;(t) = (&minus;${r} sin t, ${r} cos t), |r&prime;| = ${r}`), M(`r&Prime;(t) = (&minus;${r} cos t, &minus;${r} sin t)`),
              L('For a plane curve', 'لمنحنى مستوٍ')+' '+M(`&kappa; = ${frac('|x&prime;y&Prime; &minus; y&prime;x&Prime;|','|r&prime;|'+sup(3))} = ${frac(r*r,r**3)} = ${fracStr(1,r)}`),
              L('(A circle of radius r always has curvature 1/r.)', '(الدائرة التي نصف قطرها r انحناؤها دائماً 1/r.)'))};
  },
  parabolaCurvature(d){
    const a=nz(-6,6), b=d===1?0:R(-6,6), c=R(-9,9);
    return {q:`Find the curvature of y = ${lead(a,'x'+sup(2))}${term(b,'x')}${term(c,'')} at its vertex.`, a:`<b>&kappa; = ${2*Math.abs(a)}</b>`,
      s:steps(L('Curvature of y = f(x):', 'انحناء المنحنى y = f(x):')+' '+M(`&kappa; = ${frac("|y&Prime;|","(1 + y&prime;"+sup(2)+")"+sup('3/2'))}`),
              M(`y&prime; = ${lead(2*a,'x')}${term(b,'')}, y&Prime; = ${sgn(2*a)}`),
              L('At the vertex y′ = 0, so', 'عند الرأس y′ = 0، إذن')+' '+M(`&kappa; = |${sgn(2*a)}| = ${2*Math.abs(a)}`))};
  },
  helixArcLength(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17]]), n=R(1,d===1?1:3), [r,c,h]=Math.random()<0.5?t:[t[1],t[0],t[2]];
    return {q:`Find the arc length of the helix r(t) = (${r} cos t, ${r} sin t, ${c}t) for 0 &le; t &le; ${2*n}&pi;.`, a:`<b>${2*n*h}&pi;</b>`,
      s:steps(M(`r&prime;(t) = (&minus;${r} sin t, ${r} cos t, ${c})`),
              M(`|r&prime;(t)| = ${sq(`${r*r}(sin${sup(2)}t + cos${sup(2)}t) + ${c*c}`)} = ${sq(r*r+c*c)} = ${h}`),
              L('The speed is constant, so length = speed × time:', 'السرعة ثابتة، لذا الطول = السرعة × الزمن:')+' '+M(`L = &int;<sub>0</sub><sup>${2*n}&pi;</sup> ${h} dt = ${h} &times; ${2*n}&pi; = ${2*n*h}&pi;`))};
  },
  helixCurvature(d){
    const r=R(1,d===1?4:9), c=R(1,d===1?4:9);
    return {q:`Find the curvature of the helix r(t) = (${r} cos t, ${r} sin t, ${c}t).`, a:`<b>&kappa; = ${fracStr(r,r*r+c*c)}</b>`,
      s:steps(L('For the helix (a cos t, a sin t, bt):', 'للحلزون (a cos t, a sin t, bt):')+' '+M(`&kappa; = ${frac('|r&prime; &times; r&Prime;|','|r&prime;|'+sup(3))} = ${frac('a','a'+sup(2)+' + b'+sup(2))}`),
              L(`Here a = ${r}, b = ${c}:`, `هنا ${M(`a = ${r}, b = ${c}`)}:`)+' '+M(`&kappa; = ${frac(r, `${r*r} + ${c*c}`)} = ${fracStr(r,r*r+c*c)}`))};
  },

  /* ---- Group Theory (MATH 344) ---- */
  groupGenerators(d){
    const n=R(2,d===1?20:d===2?60:200), ps=[]; let m=n; for(let p=2;p*p<=m;p++) if(m%p===0){ ps.push(p); while(m%p===0) m/=p; } if(m>1) ps.push(m);
    return {q:`How many generators does the cyclic group &#8484;<sub>${n}</sub> have?`, a:`<b>${totient(n)}</b>`,
      s:steps(L(`k generates ℤₙ exactly when gcd(k, n) = 1, so the number of generators is Euler's φ(n).`, `العنصر k يولّد ${M('&#8484;<sub>n</sub>')} عندما ${M('gcd(k, n) = 1')}، لذا عدد المولّدات هو ${M('&phi;(n)')}.`),
              L('Prime factors of', 'العوامل الأولية للعدد')+' '+M(`${n}: ${ps.join(', ')}`),
              M(`&phi;(${n}) = ${n}${ps.map(p=>`(1 &minus; ${frac(1,p)})`).join('')} = ${totient(n)}`))};
  },
  permutationOrder(d){
    const n=R(4,d===1?5:d===2?7:9); let cycles;
    do{
      const p=shuffled(Array.from({length:n},(_,i)=>i+1)), seen=new Set(); cycles=[];
      for(let i=1;i<=n;i++){ if(seen.has(i)) continue; const c=[]; let j=i; while(!seen.has(j)){ seen.add(j); c.push(j); j=p[j-1]; } if(c.length>1) cycles.push(c); }
    }while(!cycles.length);
    const o=cycles.reduce((o,c)=>lcm(o,c.length),1);
    return {q:`Find the order of the permutation ${cycles.map(c=>`(${c.join(' ')})`).join('')} in S<sub>${n}</sub>.`,
            a:`<b>${o}</b>`,
      s:steps(L('For disjoint cycles, the order is the LCM of the cycle lengths.', 'رتبة حاصل ضرب دورات منفصلة = المضاعف المشترك الأصغر لأطوال الدورات.'),
              L('Cycle lengths:', 'أطوال الدورات:')+' '+M(cycles.map(c=>c.length).join(', ')),
              M(`lcm(${cycles.map(c=>c.length).join(', ')}) = ${o}`))};
  },
  groupOrder(d){
    const t=pick(['S','A','D']), n=t==='D'?R(3,d===1?6:20):R(t==='A'?3:2,d===1?5:7);
    const ans = t==='S'?factorial(n):t==='A'?factorial(n)/2:2*n;
    const name = t==='D' ? `the dihedral group D<sub>${n}</sub> (symmetries of a regular ${n}-gon)` : `${t}<sub>${n}</sub>`;
    const s = t==='S' ? steps(L(`Sₙ contains all permutations of n objects: n! of them.`, `الزمرة ${M('S<sub>n</sub>')} تضم كل تباديل n عنصراً وعددها ${M('n!')}.`), M(`|S<sub>${n}</sub>| = ${n}! = ${[...Array(n)].map((_,i)=>n-i).join(' &times; ')} = ${ans}`))
            : t==='A' ? steps(L('Aₙ contains the even permutations: exactly half of Sₙ.', 'الزمرة المتناوبة تضم التباديل الزوجية وهي نصف تباديل Sₙ.'), M(`|A<sub>${n}</sub>| = ${frac(`${n}!`,2)} = ${frac(factorial(n),2)} = ${ans}`))
            : steps(L(`D${n} has ${n} rotations and ${n} reflections.`, `الزمرة ${M(`D<sub>${n}</sub>`)} فيها ${M(n)} دورانات و ${M(n)} انعكاسات.`), M(`|D<sub>${n}</sub>| = 2 &times; ${n} = ${ans}`));
    return {q:`Find the order of ${name}.`, a:`<b>${ans}</b>`, s};
  },
  lagrangeIndex(d){
    const k=R(2,d===1?6:12), m=R(2,d===1?6:12);
    return {q:`A group G of order ${k*m} has a subgroup H of order ${k}. Find [G : H].`, a:`<b>${m}</b>`,
      s:steps(L('Lagrange: the index (number of cosets) is |G| ÷ |H|.', 'مبرهنة لاغرانج: الدليل (عدد المجموعات المشاركة) = |G| ÷ |H|.'),
              M(`[G : H] = ${frac(k*m,k)} = ${m}`))};
  },

  /* ---- Rings & Fields (MATH 444) ---- */
  modInverse(d){
    const m=R(5,d===1?13:d===2?31:97); let a=R(2,m-1); while(gcd(a,m)!==1) a=R(2,m-1);
    let inv=1; while(a*inv%m!==1) inv++;
    // extended Euclid rows: r, q
    const rows=[]; let r0=m, r1=a; while(r1){ rows.push(M(`${r0} = ${Math.floor(r0/r1)} &times; ${r1} + ${r0%r1}`)); [r0,r1]=[r1,r0%r1]; }
    return {q:`Find ${a}${sup('&minus;1')} mod ${m}.`, a:`<b>${inv}</b>`,
      s:steps(L(`We need x with ${a}x ≡ 1 (mod ${m}). Euclid's algorithm confirms gcd = 1:`, `نبحث عن x بحيث ${M(`${a}x &equiv; 1 (mod ${m})`)}. خوارزمية إقليدس تؤكد أن القاسم المشترك = 1:`), ...rows,
              L('Working back (or testing) gives', 'بالرجوع للخلف (أو بالتجربة) نجد')+' '+M(`x = ${inv}`)+': '+M(`${a} &times; ${inv} = ${a*inv} = ${Math.floor(a*inv/m)} &times; ${m} + 1`))};
  },
  zeroDivisors(d){
    const n=R(4,d===1?12:d===2?30:60);
    return {q:`How many nonzero zero divisors does &#8484;<sub>${n}</sub> have?`, a:`<b>${n-1-totient(n)}</b>`,
      s:steps(L('In ℤₙ every nonzero element is either a unit (gcd with n = 1) or a zero divisor.', 'في ℤₙ كل عنصر غير صفري إما وحدة (قاسمه المشترك مع n = 1) أو قاسم للصفر.'),
              L('Number of units:', 'عدد الوحدات:')+' '+M(`&phi;(${n}) = ${totient(n)}`),
              M(`(${n} &minus; 1) &minus; ${totient(n)} = ${n-1-totient(n)}`))};
  },
  polyEvalModP(d){
    const p=pick(d===1?[5,7]:d===2?[7,11,13]:[13,17,19,23]), a=R(0,p-1), b=R(0,p-1), c=R(0,p-1), v=c*c+a*c+b;
    return {q:`In &#8484;<sub>${p}</sub>, evaluate f(${c}) for f(x) = x${sup(2)}${term(a,'x')}${term(b,'')}.`, a:`<b>${v%p}</b>`,
      s:steps(L('Substitute, then reduce mod', 'نعوّض ثم نأخذ الباقي على')+' '+M(p)+':', M(`f(${c}) = ${c}${sup(2)} + ${a}(${c}) + ${b} = ${c*c} + ${a*c} + ${b} = ${v}`),
              M(`${v} = ${p} &times; ${Math.floor(v/p)} + ${v%p} &rArr; ${v%p}`))};
  },
  fieldCheck(d){
    const n=R(2,d===1?15:d===2?40:100), pr=isPrimeN(n); let f=0; if(!pr) for(let k=2;k<n;k++) if(n%k===0){ f=k; break; }
    return {q:`Is &#8484;<sub>${n}</sub> a field?`, a:`<b>${pr?'Yes':'No'}</b>`,
      s:steps(L('ℤₙ is a field exactly when n is prime (then every nonzero element has an inverse).', 'ℤₙ حقل إذا وفقط إذا كان n أولياً (فيكون لكل عنصر غير صفري معكوس).'),
              pr ? L(`${n} is prime, so ℤ${n} is a field.`, `${M(n)} عدد أولي، إذن ${M(`&#8484;<sub>${n}</sub>`)} حقل.`)
                 : L(`${n} = ${f} × ${n/f} is not prime: ${f} · ${n/f} ≡ 0, so ${f} has no inverse.`, `${M(`${n} = ${f} &times; ${n/f}`)} ليس أولياً: ${M(`${f}&middot;${n/f} &equiv; 0`)}، فلا معكوس للعدد ${M(f)}.`))};
  },

  /* ---- Complex Analysis (MATH 485) ---- */
  complexDivide(d){
    const hi=d===1?4:d===2?6:9, a=nz(-hi,hi), b=nz(-hi,hi), c=nz(-hi,hi), e=nz(-hi,hi);   // (a+bi)(c+ei) ÷ (c+ei) = a+bi
    const p=a*c-b*e, q=a*e+b*c, D=c*c+e*e;
    return {q:`(${cplx(p,q)}) &divide; (${cplx(c,e)}) =`, a:`<b>${cplx(a,b)}</b>`,
      s:steps(L('Multiply top and bottom by the conjugate of the denominator,', 'نضرب البسط والمقام في مرافق المقام')+' '+M(cplx(c,-e))+':',
              L('Denominator:', 'المقام:')+' '+M(`(${cplx(c,e)})(${cplx(c,-e)}) = ${c*c} + ${e*e} = ${D}`),
              L('Numerator:', 'البسط:')+' '+M(`(${cplx(p,q)})(${cplx(c,-e)}) = ${cplx(a*D,b*D)}`),
              M(`${frac(cplx(a*D,b*D), D)} = ${cplx(a,b)}`))};
  },
  complexSquare(d){
    const hi=d===1?4:d===2?7:12, a=nz(-hi,hi), b=nz(-hi,hi);
    return {q:`(${cplx(a,b)})${sup(2)} =`, a:`<b>${cplx(a*a-b*b, 2*a*b)}</b>`,
      s:steps(L('Use', 'نستخدم')+' '+M(`(a + bi)${sup(2)} = a${sup(2)} + 2abi + b${sup(2)}i${sup(2)} = (a${sup(2)} &minus; b${sup(2)}) + 2abi`),
              M(`a${sup(2)} &minus; b${sup(2)} = ${a*a} &minus; ${b*b} = ${sgn(a*a-b*b)}`), M(`2ab = 2(${sgn(a)})(${sgn(b)}) = ${sgn(2*a*b)}`),
              M(`= ${cplx(a*a-b*b, 2*a*b)}`))};
  },
  complexArgument(d){
    const dir=R(0,7), k=R(1,d===1?5:12), dx=[1,1,0,-1,-1,-1,0,1][dir], dy=[0,1,1,1,0,-1,-1,-1][dir];
    const re=k*dx, im=k*dy;
    const z = im===0 ? sgn(re) : re===0 ? `${im<0?'&minus;':''}${Math.abs(im)===1?'':Math.abs(im)}i` : cplx(re,im);
    const arg=['0','&pi;/4','&pi;/2','3&pi;/4','&pi;','&minus;3&pi;/4','&minus;&pi;/2','&minus;&pi;/4'][dir];
    const where=[['on the positive real axis','على الجزء الموجب من المحور الحقيقي'],['in quadrant I with |a| = |b|','في الربع الأول و |a| = |b|'],['on the positive imaginary axis','على الجزء الموجب من المحور التخيلي'],['in quadrant II with |a| = |b|','في الربع الثاني و |a| = |b|'],
      ['on the negative real axis','على الجزء السالب من المحور الحقيقي'],['in quadrant III with |a| = |b|','في الربع الثالث و |a| = |b|'],['on the negative imaginary axis','على الجزء السالب من المحور التخيلي'],['in quadrant IV with |a| = |b|','في الربع الرابع و |a| = |b|']][dir];
    return {q:`Find the principal argument of z = ${z}.`, a:`<b>Arg z = ${arg}</b>`,
      s:steps(L('The principal argument is the angle of z from the positive real axis, in (−π, π].', 'السعة الرئيسية هي زاوية z من الجزء الموجب للمحور الحقيقي، في الفترة (−π, π].'),
              L(`z = (${re}, ${im}) lies ${where[0]}.`, `النقطة ${M(`(${re}, ${im})`)} تقع ${where[1]}.`),
              M(`Arg z = ${arg}`))};
  },

  /* ---- Number Theory (MATH 367) ---- */
  divisorCount(d){
    const n=R(2,d===1?30:d===2?100:1000); const ds=[]; for(let k=1;k<=n;k++) if(n%k===0) ds.push(k);
    const f=[]; let m=n; for(let p=2;m>1;p++){ let e=0; while(m%p===0){ m/=p; e++; } if(e) f.push([p,e]); }
    return {q:`&tau;(${n}) = (number of positive divisors)`, a:`<b>${ds.length}</b>`,
      s:steps(L('Prime factorisation:', 'التحليل إلى عوامل أولية:')+' '+M(`${n} = ${f.map(([p,e])=>e>1?p+sup(e):p).join(' &middot; ')}`),
              L('Number of divisors = product of (exponent + 1):', 'عدد القواسم = حاصل ضرب (الأس + 1):')+' '+M(`&tau;(${n}) = ${f.map(([,e])=>`(${e} + 1)`).join('')} = ${ds.length}`),
              L('The divisors:', 'القواسم:')+' '+M(ds.join(', ')))};
  },
  divisorSum(d){
    const n=R(2,d===1?30:d===2?100:500); const ds=[]; for(let k=1;k<=n;k++) if(n%k===0) ds.push(k);
    const s=ds.reduce((a,b)=>a+b,0);
    return {q:`&sigma;(${n}) = (sum of positive divisors)`, a:`<b>${s}</b>`,
      s:steps(L(`List the divisors of ${n}:`, `نكتب قواسم ${M(n)}:`)+' '+M(ds.join(', ')), M(`&sigma;(${n}) = ${ds.join(' + ')} = ${s}`))};
  },
  linearCongruence(d){
    const m=R(5,d===1?12:d===2?30:60); let a=R(2,m-1); while(gcd(a,m)!==1) a=R(2,m-1);
    const x=R(0,m-1), b=a*x%m; let inv=1; while(a*inv%m!==1) inv++;
    return {q:`Solve ${a}x &equiv; ${b} (mod ${m}).`, a:`<b>x &equiv; ${x} (mod ${m})</b>`,
      s:steps(L(`gcd(${a}, ${m}) = 1, so ${a} has an inverse mod ${m} and there is exactly one solution.`, `${M(`gcd(${a}, ${m}) = 1`)}، إذن للعدد ${M(a)} معكوس بمقياس ${M(m)} ويوجد حل وحيد.`),
              L('Inverse:', 'المعكوس:')+' '+M(`${a} &times; ${inv} = ${a*inv} &equiv; 1 (mod ${m})`),
              L('Multiply both sides by it:', 'نضرب الطرفين فيه:')+' '+M(`x &equiv; ${b} &times; ${inv} = ${b*inv} &equiv; ${x} (mod ${m})`))};
  },
  crt(d){
    const m1=R(3,d===1?5:9); let m2=R(3,d===1?7:13); while(gcd(m1,m2)!==1||m1===m2) m2=R(3,d===1?7:13);
    const x=R(0,m1*m2-1), r1=x%m1, r2=x%m2;
    const cand=[]; for(let k=0;k<m2;k++) cand.push(r1+k*m1);
    return {q:L('Find the smallest x &ge; 0 that satisfies:', `أوجد أصغر عدد ${M('x &ge; 0')} يحقق:`)+'<br>'+
              align([['x','&equiv;',`${r1} (mod ${m1})`],['x','&equiv;',`${r2} (mod ${m2})`]], true), a:`<b>x = ${x}</b>`,
      s:steps(L(`The moduli are coprime, so there is one solution mod ${m1*m2} (Chinese remainder theorem).`, `المقياسان أوليان نسبياً، لذا يوجد حل وحيد بمقياس ${M(m1*m2)} (مبرهنة الباقي الصينية).`),
              L(`Numbers with remainder ${r1} mod ${m1}:`, `الأعداد التي باقيها ${M(r1)} بمقياس ${M(m1)}:`)+' '+M(cand.slice(0,cand.indexOf(x)+1).join(', ')+(cand.indexOf(x)+1<cand.length?', …':'')),
              L(`Check each one mod ${m2}; the first with remainder ${r2} is ${x}:`, `نختبر كلاً منها بمقياس ${M(m2)}؛ أول عدد باقيه ${M(r2)} هو ${M(x)}:`)+' '+M(`${x} = ${m2} &times; ${Math.floor(x/m2)} + ${r2}`))};
  },
  primeFactorization(d){
    const ps=shuffled(d===1?[2,3,5]:[2,3,5,7,11,13]).slice(0,d===1?2:R(2,4)).sort((a,b)=>a-b);
    const ex=ps.map(()=>R(1,d===3?3:2)); let n=1; ps.forEach((p,i)=>n*=p**ex[i]);
    const chain=[]; let m=n; for(const p of ps) while(m%p===0){ chain.push(M(`${m} &divide; ${p} = ${m/p}`)); m/=p; }
    return {q:`Find the prime factorization of ${n}.`, a:`<b>${ps.map((p,i)=>ex[i]>1?p+sup(ex[i]):''+p).join(' &middot; ')}</b>`,
      s:steps(L('Divide repeatedly by the smallest prime that divides the number:', 'نقسم بالتكرار على أصغر عدد أولي يقسم العدد:'), ...chain,
              M(`${n} = ${ps.map((p,i)=>ex[i]>1?p+sup(ex[i]):''+p).join(' &middot; ')}`))};
  },

  /* ---- Graph Theory (MATH 468) ---- */
  treeEdges(d){
    const n=R(4,d===1?15:100);
    if(d===3 && Math.random()<0.5){ const k=R(2,6); return {q:`A forest has ${n} vertices and ${k} components (trees). How many edges does it have?`, a:`<b>${n-k}</b>`,
      s:steps(L('Each tree with v vertices has v − 1 edges. Adding over the k trees:', 'كل شجرة فيها v رأساً لها v − 1 ضلعاً. بالجمع على الأشجار k:')+' '+M('E = n &minus; k'), M(`E = ${n} &minus; ${k} = ${n-k}`))}; }
    return {q:`How many edges does a tree with ${n} vertices have?`, a:`<b>${n-1}</b>`,
      s:steps(L('A tree is connected with no cycles; it always has one edge fewer than its vertices.', 'الشجرة بيان متصل بلا دورات، وعدد أضلاعها دائماً أقل من عدد رؤوسها بواحد.'), M(`E = ${n} &minus; 1 = ${n-1}`))};
  },
  bipartiteEdges(d){
    const m=R(2,d===1?5:12), n=R(2,d===1?5:12);
    return {q:`How many edges does the complete bipartite graph K<sub>${m},${n}</sub> have?`, a:`<b>${m*n}</b>`,
      s:steps(L(`Each of the ${m} vertices on one side is joined to all ${n} vertices on the other side.`, `كل رأس من الرؤوس الـ ${M(m)} في جهة متصل بكل الرؤوس الـ ${M(n)} في الجهة الأخرى.`), M(`${m} &times; ${n} = ${m*n}`))};
  },
  eulerCircuit(d){
    const n=R(4,d===1?5:7), wantYes=Math.random()<0.5; let deg;
    for(let tries=0;tries<300;tries++){
      deg=new Array(n).fill(0); const has=new Set();
      for(let i=1;i<n;i++){ const j=R(0,i-1); has.add(j+','+i); deg[i]++; deg[j]++; }   // random spanning tree keeps it connected
      for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) if(!has.has(i+','+j) && Math.random()<0.35){ deg[i]++; deg[j]++; }
      if(deg.every(x=>x%2===0)===wantYes) break;
    }
    const odd=deg.filter(x=>x%2).length;
    deg.sort((a,b)=>b-a);
    return {q:`A connected graph has vertex degrees ${deg.join(', ')}. Does it have an Euler circuit?`,
            a:`<b>${odd?`No (${odd} odd-degree vertices)`:'Yes'}</b>`,
      s:steps(L("Euler's theorem: a connected graph has an Euler circuit exactly when every vertex has even degree.", 'مبرهنة أويلر: البيان المتصل له دارة أويلرية إذا وفقط إذا كانت درجات جميع الرؤوس زوجية.'),
              odd ? L(`Odd degrees: ${deg.filter(x=>x%2).join(', ')} (${odd} vertices), so there is no Euler circuit.`, `الدرجات الفردية: ${M(deg.filter(x=>x%2).join(', '))} (${M(odd)} رؤوس)، إذن لا توجد دارة أويلرية.`)
                  : L('All degrees are even, so an Euler circuit exists.', 'كل الدرجات زوجية، إذن توجد دارة أويلرية.'))};
  },
  chromaticNumber(d){
    const t=pick(['C','K','KK','W']), n=R(t==='W'?3:t==='C'?3:2,d===1?6:12);
    if(t==='C') return {q:`Find the chromatic number of the cycle C<sub>${n}</sub>.`, a:`<b>${n%2?3:2}</b>`,
      s:steps(L('Colour around the cycle alternating two colours.', 'نلوّن حول الدورة بلونين بالتناوب.'),
              n%2 ? L(`${n} is odd, so the last vertex meets the first in the same colour: a third colour is needed → 3.`, `${M(n)} فردي، فيلتقي الرأس الأخير بالأول بنفس اللون، فنحتاج لوناً ثالثاً ← 3.`)
                  : L(`${n} is even, so two colours work → 2.`, `${M(n)} زوجي، فيكفي لونان ← 2.`))};
    if(t==='K') return {q:`Find the chromatic number of the complete graph K<sub>${n}</sub>.`, a:`<b>${n}</b>`,
      s:steps(L('Every two vertices are adjacent, so all vertices need different colours.', 'كل رأسين متجاوران، لذا يحتاج كل رأس لوناً مختلفاً.'), M(`&chi;(K<sub>${n}</sub>) = ${n}`))};
    if(t==='KK'){ const m=R(1,8); return {q:`Find the chromatic number of K<sub>${m},${n}</sub>.`, a:`<b>2</b>`,
      s:steps(L('A bipartite graph: give one side colour 1 and the other side colour 2. It has edges, so one colour is not enough.', 'بيان ثنائي التجزئة: نلوّن جهة باللون 1 والأخرى باللون 2. وفيه أضلاع فلا يكفي لون واحد.'), M('&chi; = 2'))}; }
    return {q:`Find the chromatic number of the wheel W<sub>${n}</sub> (a cycle C<sub>${n}</sub> plus a hub).`, a:`<b>${n%2?4:3}</b>`,
      s:steps(L('The hub is adjacent to every rim vertex, so it needs its own colour.', 'المركز متصل بكل رؤوس الإطار، لذا يحتاج لوناً خاصاً.'),
              L(`The rim is C${n}: it needs ${n%2?3:2} colours (${n} is ${n%2?'odd':'even'}).`, `الإطار هو ${M(`C<sub>${n}</sub>`)} ويحتاج ${M(n%2?3:2)} ألوان (${M(n)} ${n%2?'فردي':'زوجي'}).`),
              M(`&chi; = ${n%2?3:2} + 1 = ${n%2?4:3}`))};
  },

  /* ---- Special Functions (MATH 417) ---- */
  gammaHalf(d){
    const n=R(0,d===1?2:4), c=fracStr(factorial(2*n), 4**n*factorial(n));   // Γ(n + 1/2) = (2n)! / (4ⁿ n!) · √π
    const chain=[...Array(n)].map((_,i)=>frac(2*(n-i)-1,2));
    return {q:`&Gamma;(${frac(2*n+1,2)}) =`, a:`<b>${c==='1'?'':c}&radic;&pi;</b>`,
      s:steps(L('Use', 'نستخدم')+' '+M(`&Gamma;(${frac(1,2)}) = &radic;&pi;`)+' '+L('and', 'و')+' '+M('&Gamma;(x + 1) = x&Gamma;(x)')+'.',
              n===0 ? M(`&Gamma;(${frac(1,2)}) = &radic;&pi;`)
                    : M(`&Gamma;(${frac(2*n+1,2)}) = ${chain.join(' &middot; ')} &middot; &Gamma;(${frac(1,2)}) = ${c}&radic;&pi;`))};
  },
  betaFunction(d){
    const m=R(1,d===1?3:6), n=R(1,d===1?3:6), v=fracStr(factorial(m-1)*factorial(n-1), factorial(m+n-1));
    return {q:`B(${m}, ${n}) =`, a:`<b>${v}</b>`,
      s:steps(L('Relation to the gamma function:', 'العلاقة مع دالة جاما:')+' '+M(`B(m, n) = ${frac('&Gamma;(m)&Gamma;(n)','&Gamma;(m + n)')} = ${frac('(m &minus; 1)!(n &minus; 1)!','(m + n &minus; 1)!')}`),
              M(`B(${m}, ${n}) = ${frac(`${m-1}! &times; ${n-1}!`, `${m+n-1}!`)} = ${frac(factorial(m-1)*factorial(n-1), factorial(m+n-1))} = ${v}`))};
  },
  legendreP(d){
    const n=R(2,d===1?2:d===2?3:4), x=R(-3,3);
    const [num,den] = n===2 ? [3*x*x-1,2] : n===3 ? [5*x**3-3*x,2] : [35*x**4-30*x*x+3,8];
    const f = n===2 ? `${frac(1,2)}(3x${sup(2)} &minus; 1)` : n===3 ? `${frac(1,2)}(5x${sup(3)} &minus; 3x)` : `${frac(1,8)}(35x${sup(4)} &minus; 30x${sup(2)} + 3)`;
    const sub = n===2 ? `${frac(1,2)}(3(${sgn(x)})${sup(2)} &minus; 1)` : n===3 ? `${frac(1,2)}(5(${sgn(x)})${sup(3)} &minus; 3(${sgn(x)}))` : `${frac(1,8)}(35(${sgn(x)})${sup(4)} &minus; 30(${sgn(x)})${sup(2)} + 3)`;
    return {q:`P<sub>${n}</sub>(${x}) = (Legendre polynomial)`, a:`<b>${fracStr(num,den)}</b>`,
      s:steps(L('Legendre polynomial:', 'كثيرة حدود لوجندر:')+' '+M(`P<sub>${n}</sub>(x) = ${f}`), M(`P<sub>${n}</sub>(${x}) = ${sub} = ${frac(sgn(num),den)}`), M(`= ${fracStr(num,den)}`))};
  },
  chebyshevT(d){
    const n=R(2,d===1?3:5), x=R(-3,3); let a=1, b=x; const st=[M(`T<sub>0</sub> = 1, T<sub>1</sub> = ${sgn(x)}`)];
    for(let k=1;k<n;k++){ const c=2*x*b-a; st.push(M(`T<sub>${k+1}</sub> = 2(${sgn(x)})(${sgn(b)}) &minus; (${sgn(a)}) = ${sgn(c)}`)); [a,b]=[b,c]; }
    return {q:`T<sub>${n}</sub>(${x}) = (Chebyshev polynomial)`, a:`<b>${sgn(b)}</b>`,
      s:steps(L('Use the recurrence', 'نستخدم العلاقة التكرارية')+' '+M('T<sub>k+1</sub>(x) = 2x T<sub>k</sub>(x) &minus; T<sub>k&minus;1</sub>(x)')+' '+L(`with x = ${x}:`, `مع ${M(`x = ${x}`)}:`), ...st)};
  },

  /* ---- Functional Analysis (MATH 432) ---- */
  vectorNorms(d){
    const t=pick(['1','&infin;','2']); let v;
    if(t==='2'){ const q=pick([[3,4,5],[6,8,10],[5,12,13],[1,2,2,3],[2,3,6,7],[1,4,8,9]]); v=shuffled(q.slice(0,-1)).map(x=>x*pick([1,-1])); }
    else v=Array.from({length:d===1?3:R(3,5)},()=>nz(-9,9));
    const ans = t==='1' ? v.reduce((s,x)=>s+Math.abs(x),0) : t==='&infin;' ? Math.max(...v.map(Math.abs)) : Math.round(Math.hypot(...v));
    const s = t==='1' ? steps(L('1-norm = sum of the absolute values:', 'النظيم 1 = مجموع القيم المطلقة:'), M(`${v.map(x=>Math.abs(x)).join(' + ')} = ${ans}`))
            : t==='&infin;' ? steps(L('∞-norm = the largest absolute value:', 'النظيم ∞ = أكبر قيمة مطلقة:'), M(`max(${v.map(x=>Math.abs(x)).join(', ')}) = ${ans}`))
            : steps(L('2-norm = square root of the sum of squares:', 'النظيم 2 = الجذر التربيعي لمجموع المربعات:'), M(`${sq(v.map(x=>x*x).join(' + '))} = ${sq(ans*ans)} = ${ans}`));
    return {q:`v = (${v.map(sgn).join(', ')}). Find &Vert;v&Vert;<sub>${t}</sub>.`, a:`<b>${ans}</b>`, s};
  },
  operatorNormDiag(d){
    const n=d===1?2:R(3,4), D=new Array(n*n).fill(0); for(let i=0;i<n;i++) D[i*n+i]=nz(-12,12);
    const dg=[...Array(n)].map((_,i)=>D[i*n+i]), mx=Math.max(...dg.map(Math.abs));
    return {q:`Find the operator norm (induced 2-norm) of ${mat(D,n)}.`, a:`<b>${mx}</b>`,
      s:steps(L('A diagonal matrix stretches each coordinate axis by its diagonal entry, so the largest stretch is the largest |entry| (its largest singular value).', 'المصفوفة القطرية تمدّ كل محور بعنصرها القطري، لذا أكبر تمديد هو أكبر قيمة مطلقة لعناصر القطر (أكبر قيمة شاذة).'),
              M(`&Vert;D&Vert;<sub>2</sub> = max(${dg.map(x=>`|${sgn(x)}|`).join(', ')}) = ${mx}`))};
  },
  l2InnerProduct(d){
    const a=nz(-6,6), b=nz(-6,6), m=R(0,d===1?2:5), n=R(0,d===1?2:5);
    const mono=(c,p)=>p===0?sgn(c):lead(c,'x'+(p===1?'':sup(p)));
    return {q:`In L${sup(2)}[0, 1], compute &lang;${mono(a,m)}, ${mono(b,n)}&rang;.`, a:`<b>${fracStr(a*b,m+n+1)}</b>`,
      s:steps(L('Inner product in L²[0, 1]:', 'الضرب الداخلي في L²[0, 1]:')+' '+M('&lang;f, g&rang; = &int;<sub>0</sub><sup>1</sup> f(x)g(x) dx'),
              M(`&int;<sub>0</sub><sup>1</sup> ${mono(a*b, m+n)} dx = ${sgn(a*b)}[${frac('x'+sup(m+n+1), m+n+1)}]<sub>0</sub><sup>1</sup> = ${frac(sgn(a*b), m+n+1)}${gcd(Math.abs(a*b),m+n+1)>1?' = '+fracStr(a*b,m+n+1):''}`))};
  },

  /* ================= STUDY-PLAN PACK (Shaqra University, Mathematics) ================= */

  /* ---- Probability Theory 2 (STAT 312) ---- */
  binomialProb(d){
    const n=R(2,d===1?4:d===2?6:8), k=R(0,n), [a,b]=pick(d===1?[[1,2]]:[[1,2],[1,3],[2,3],[1,4],[3,4]]);
    let C=1; for(let i=1;i<=k;i++) C=C*(n-k+i)/i;
    return {q:`X ~ Bin(${n}, ${frac(a,b)}). Find P(X = ${k}).`, a:`<b>${fracStr(C*a**k*(b-a)**(n-k), b**n)}</b>`,
      s:steps(L('Binomial formula:', 'قانون ذي الحدين:')+' '+M(`P(X = k) = C(n, k) p${sup('k')} (1 &minus; p)${sup('n&minus;k')}`),
              L(`Here n = ${n}, p = ${a}/${b}, 1 − p = ${b-a}/${b}, k = ${k}; ${M(`C(${n}, ${k}) = ${C}`)}.`, `هنا ${M(`n = ${n}, p = ${a}/${b}, 1 &minus; p = ${b-a}/${b}, k = ${k}`)}، و ${M(`C(${n}, ${k}) = ${C}`)}.`),
              M(`P(X = ${k}) = ${C} &times; (${frac(a,b)})${sup(k)} &times; (${frac(b-a,b)})${sup(n-k)} = ${frac(C*a**k*(b-a)**(n-k), b**n)}${gcd(C*a**k*(b-a)**(n-k), b**n)>1?` = ${fracStr(C*a**k*(b-a)**(n-k), b**n)}`:''}`))};
  },
  expectedValue(d){
    const [xs,cs,D]=discreteDist(d), E=xs.reduce((s,x,i)=>s+x*cs[i],0);
    return {q:`X takes the values ${xs.map(sgn).join(', ')} with probabilities ${cs.map(c=>fracStr(c,D)).join(', ')}. Find E(X).`, a:`<b>${fracStr(E,D)}</b>`,
      s:steps(L('Expected value = sum of (value × probability):', 'القيمة المتوقعة = مجموع (القيمة × الاحتمال):')+' '+M('E(X) = &Sigma; x P(x)'),
              M(`E(X) = ${xs.map((x,i)=>`(${sgn(x)})(${fracStr(cs[i],D)})`).join(' + ')}`),
              L(`Put everything over ${D}:`, `نوحّد المقامات على ${M(D)}:`)+' '+M(`${frac(xs.map((x,i)=>sgn(x*cs[i])).join(' + '), D)} = ${frac(sgn(E),D)}${gcd(E,D)>1?` = ${fracStr(E,D)}`:''}`))};
  },
  varianceDiscrete(d){
    const [xs,cs,D]=discreteDist(d), E=xs.reduce((s,x,i)=>s+x*cs[i],0), E2=xs.reduce((s,x,i)=>s+x*x*cs[i],0);
    return {q:`X takes the values ${xs.map(sgn).join(', ')} with probabilities ${cs.map(c=>fracStr(c,D)).join(', ')}. Find Var(X).`,
            a:`<b>${fracStr(E2*D-E*E, D*D)}</b>`,                                   // Var = E[X²] − E[X]²
      s:steps(L('Use', 'نستخدم')+' '+M(`Var(X) = E(X${sup(2)}) &minus; [E(X)]${sup(2)}`),
              M(`E(X) = ${frac(xs.map((x,i)=>sgn(x*cs[i])).join(' + '), D)} = ${fracStr(E,D)}`),
              M(`E(X${sup(2)}) = ${frac(xs.map((x,i)=>x*x*cs[i]).join(' + '), D)} = ${fracStr(E2,D)}`),
              M(`Var(X) = ${fracStr(E2,D)} &minus; (${fracStr(E,D)})${sup(2)} = ${fracStr(E2*D-E*E, D*D)}`))};
  },

  /* ---- Operations Research 1 (STAT 361) ---- */
  lpCornerPoint(d){
    // feasible region: x + y ≤ c, x ≤ p, y ≤ q, x, y ≥ 0  with p, q < c < p + q
    const p=R(2,d===1?6:12), q=R(2,d===1?6:12), c=R(Math.max(p,q)+1,p+q-1), a=R(1,d===1?5:9), b=R(1,d===1?5:9);
    const V=[[0,0],[p,0],[p,c-p],[c-q,q],[0,q]], Z=V.map(([x,y])=>a*x+b*y), best=Math.max(...Z), k=Z.indexOf(best);
    return {q:L(`Maximize Z = ${a}x + ${b}y subject to:`, `أوجد القيمة العظمى لـ ${M(`Z = ${a}x + ${b}y`)} بشرط:`)+'<br>'+
              align([['x + y','&le;',c],['x','&le;',p],['y','&le;',q],['x, y','&ge;','0']], true), a:`<b>max Z = ${best}</b>`,
      s:steps(L('The maximum of a linear objective is at a corner of the feasible region. Find the corners from the boundary lines:', 'القيمة العظمى لدالة خطية تكون عند أحد رؤوس منطقة الحلول. نوجد الرؤوس من خطوط الحدود:'),
              L(`${M(`x = ${p}`)} meets ${M(`x + y = ${c}`)} at ${M(`(${p}, ${c-p})`)}; ${M(`y = ${q}`)} meets ${M(`x + y = ${c}`)} at ${M(`(${c-q}, ${q})`)}.`, `${M(`x = ${p}`)} يقطع ${M(`x + y = ${c}`)} عند ${M(`(${p}, ${c-p})`)}، و ${M(`y = ${q}`)} يقطعه عند ${M(`(${c-q}, ${q})`)}.`),
              L('Evaluate Z at every corner:', 'نحسب Z عند كل رأس:')+tbl([L('Point','النقطة'),'Z'], V.map(([x,y],i)=>[`(${x}, ${y})`, i===k?{v:Z[i],hl:true}:Z[i]])),
              L(`Largest value: ${M(`Z = ${best}`)} at ${M(`(${V[k][0]}, ${V[k][1]})`)}.`, `أكبر قيمة: ${M(`Z = ${best}`)} عند ${M(`(${V[k][0]}, ${V[k][1]})`)}.`))};
  },

  /* ================= STAT 361 — Operations Research (1) ================= */
  lpFormulate(d){
    const P=lpData(d), [p1,p2]=P.c, [[a1,b1,c1],[a2,b2,c2]]=P.rows;
    const model=align([['Max Z','=',`${cx(p1)}x<sub>1</sub> + ${cx(p2)}x<sub>2</sub>`],[`${cx(a1)}x<sub>1</sub> + ${cx(b1)}x<sub>2</sub>`,'&le;',c1],[`${cx(a2)}x<sub>1</sub> + ${cx(b2)}x<sub>2</sub>`,'&le;',c2],['x<sub>1</sub>, x<sub>2</sub>','&ge;','0']], true);
    return {q:L(`A factory makes two products A and B. A unit of A needs ${a1} hours on machine 1 and ${a2} hours on machine 2; a unit of B needs ${b1} and ${b2} hours. Machine 1 is available ${c1} hours and machine 2 ${c2} hours. The profit is ${p1} SAR per unit of A and ${p2} SAR per unit of B. Formulate the linear programming model.`,
                `مصنع ينتج منتجين A و B. تحتاج الوحدة من A إلى ${M(a1)} ساعات على الآلة 1 و ${M(a2)} ساعات على الآلة 2، وتحتاج الوحدة من B إلى ${M(b1)} و ${M(b2)} ساعات. الوقت المتاح للآلة 1 هو ${M(c1)} ساعة وللآلة 2 هو ${M(c2)} ساعة. الربح ${M(p1)} ريال لوحدة A و ${M(p2)} ريال لوحدة B. صِغ نموذج البرمجة الخطية.`),
      a:`<b>${model}</b>`,
      s:steps(L(`Decision variables: ${M('x<sub>1</sub>')} = units of A, ${M('x<sub>2</sub>')} = units of B.`, `متغيرات القرار: ${M('x<sub>1</sub>')} عدد وحدات A، و ${M('x<sub>2</sub>')} عدد وحدات B.`),
              L(`Objective (total profit): ${M(`Max Z = ${cx(p1)}x<sub>1</sub> + ${cx(p2)}x<sub>2</sub>`)}`, `دالة الهدف (الربح الكلي): ${M(`Max Z = ${cx(p1)}x<sub>1</sub> + ${cx(p2)}x<sub>2</sub>`)}`),
              L('Constraints: hours used on each machine ≤ hours available; quantities cannot be negative.', 'القيود: الساعات المستخدمة على كل آلة ≤ الساعات المتاحة، والكميات لا تكون سالبة.')+'<br>'+model)};
  },
  lpGraphical(d){
    const P=lpData(d), min=d===3&&Math.random()<0.5, rows=P.rows, [c1,c2]=P.c;
    const V=lpVertices(rows, min);                                       // corner points as exact fractions
    const z=([x,y])=>c1*x[0]/x[1]+c2*y[0]/y[1], vals=V.map(z), best=min?Math.min(...vals):Math.max(...vals);
    if(vals.filter(v=>Math.abs(v-best)<1e-9).length>1) return G.lpGraphical(d);   // avoid ties (alternative optima)
    const k=vals.findIndex(v=>Math.abs(v-best)<1e-9), F=([p,q])=>fracStr(p,q), pt=v=>`(${F(v[0])}, ${F(v[1])})`;
    const rel=min?'&ge;':'&le;', xs=V.map(v=>v[0][0]/v[0][1]), ys=V.map(v=>v[1][0]/v[1][1]), X1=Math.max(...xs)*1.25+1, Y1=Math.max(...ys)*1.25+1;
    const line=([a,b,c])=>t=>(c-a*t)/b, P2=V.map((v,i)=>[xs[i],ys[i]]), poly=min ? [...P2,[X1,0],[X1,Y1],[0,Y1]] : P2;
    const g=plot({x:[0,X1], y:[0,Y1], curves:rows.map((r,i)=>({f:line(r), cls:i?'c2':'c1'})), polys:[{pts:poly}], points:V.map((v,i)=>({x:xs[i], y:ys[i], label:`(${num(xs[i],2)}, ${num(ys[i],2)})`, cls:i===k?'stat':'pt'}))});
    const cons=rows.map(([a,b,c])=>[`${a===1?'':a}x<sub>1</sub> + ${b===1?'':b}x<sub>2</sub>`, rel, c]);
    const intercepts=rows.map(([a,b,c],i)=>tbl([`(${i+1})`,'x<sub>1</sub>','x<sub>2</sub>'],[['',0,F(rN([c,a]))],['',F(rN([c,b])),0]]));
    return {q:L(`Solve graphically:`, 'حل بالرسم البياني:')+'<br>'+align([[min?'Min Z':'Max Z','=',`${cx(c1)}x<sub>1</sub> + ${cx(c2)}x<sub>2</sub>`],...cons,['x<sub>1</sub>, x<sub>2</sub>','&ge;','0']], true),
      a:`<b>${M(`x<sub>1</sub> = ${F(V[k][0])}, x<sub>2</sub> = ${F(V[k][1])}, ${min?'Min':'Max'} Z = ${num(best,4)}`)}</b>`,
      s:steps(L('Turn each constraint into an equation and find where it meets the axes:', 'نحوّل كل قيد إلى معادلة ونوجد نقاط تقاطعه مع المحورين:')+intercepts.join(' '),
              L(`Intersection of the two lines (solving the equations together): ${M(pt(lpCross(rows)))}`, `نقطة تقاطع المستقيمين (بحل المعادلتين معاً): ${M(pt(lpCross(rows)))}`),
              L(`Shade the feasible region (${min?'above':'below'} both lines, x₁, x₂ ≥ 0) and list its corner points:`, `نظلّل منطقة الحلول الممكنة (${min?'فوق':'تحت'} المستقيمين و ${M('x₁, x₂ ≥ 0')}) ونحدد رؤوسها:`)+g,
              L('Substitute every corner point in Z:', 'نعوّض بكل رأس في دالة الهدف:')+tbl([L('Point','النقطة'),'Z'], V.map((v,i)=>[pt(v), i===k?{v:num(vals[i],4),hl:true}:num(vals[i],4)])),
              L(`The ${min?'smallest':'largest'} value is the optimum: ${M(`Z = ${num(best,4)}`)} at ${M(pt(V[k]))}.`, `${min?'أصغر':'أكبر'} قيمة هي الحل الأمثل: ${M(`Z = ${num(best,4)}`)} عند ${M(pt(V[k]))}.`))};
  },
  simplexMethod(d){
    const P=lpData(d), [[a1,b1,c1],[a2,b2,c2]]=P.rows, [p1,p2]=P.c, F=([p,q])=>fracStr(p,q);
    const names=['x<sub>1</sub>','x<sub>2</sub>','S<sub>1</sub>','S<sub>2</sub>'];
    let T=[[a1,b1,1,0,c1],[a2,b2,0,1,c2],[-p1,-p2,0,0,0]].map(r=>r.map(v=>[v,1])), basis=[2,3];
    const show=(enter,leave,ratios)=>tbl([L('Basic','الأساسي'),...names,L('Solution','الحل'),'Ratio'],
      T.map((r,i)=>[i<2?names[basis[i]]:'Z', ...r.slice(0,4).map((v,j)=>i===leave&&j===enter?{v:F(v),hl:true}:F(v)), F(r[4]), i<2&&ratios?ratios[i]:'']));
    const out=[];
    for(let it=0; it<4; it++){
      const zr=T[2].slice(0,4), minv=Math.min(...zr.map(v=>v[0]/v[1]));
      if(minv>=0){ out.push(L('No negative entries remain in the Z row ⇒ the tableau is optimal.', 'لا توجد قيم سالبة في صف Z ⇐ الجدول أمثل.')+show(-1,-1,null)); break; }
      const e=zr.findIndex(v=>v[0]/v[1]===minv);
      const ratios=[0,1].map(i=>T[i][e][0]>0 ? rDiv(T[i][4],T[i][e]) : null);
      const rv=ratios.map(r=>r?r[0]/r[1]:Infinity), l=rv.indexOf(Math.min(...rv));
      out.push(L(`Entering ${M(names[e])} (most negative in the Z row); ratios Solution ÷ column; leaving ${M(names[basis[l]])} (smallest ratio); pivot ${M(F(T[l][e]))}.`,
                 `المتغير الداخل ${M(names[e])} (أكبر قيمة سالبة في صف Z)؛ النسب = الحل ÷ العمود؛ المتغير الخارج ${M(names[basis[l]])} (أصغر نسبة)؛ المحور ${M(F(T[l][e]))}.`)
              +show(e,l,ratios.map(r=>r?F(r):'—')));
      const pv=T[l][e]; T[l]=T[l].map(v=>rDiv(v,pv));
      for(let i=0;i<3;i++){ if(i===l||T[i][e][0]===0) continue; const m=T[i][e]; T[i]=T[i].map((v,j)=>rSub(v,rMul(m,T[l][j]))); }
      basis[l]=e;
    }
    const val=k=>{ const i=basis.indexOf(k); return i<0?[0,1]:T[i][4]; }, x1=val(0), x2=val(1), Z=T[2][4];
    return {q:L('Solve by the simplex method:', 'حل بطريقة السمبلكس:')+'<br>'+align([['Max Z','=',`${cx(p1)}x<sub>1</sub> + ${cx(p2)}x<sub>2</sub>`],[`${cx(a1)}x<sub>1</sub> + ${cx(b1)}x<sub>2</sub>`,'&le;',c1],[`${cx(a2)}x<sub>1</sub> + ${cx(b2)}x<sub>2</sub>`,'&le;',c2],['x<sub>1</sub>, x<sub>2</sub>','&ge;','0']], true),
      a:`<b>${M(`x<sub>1</sub> = ${F(x1)}, x<sub>2</sub> = ${F(x2)}, Max Z = ${F(Z)}`)}</b>`,
      s:steps(L(`Standard form with slack variables: ${M(`Z &minus; ${cx(p1)}x<sub>1</sub> &minus; ${cx(p2)}x<sub>2</sub> = 0`)}, ${M(`${cx(a1)}x<sub>1</sub> + ${cx(b1)}x<sub>2</sub> + S<sub>1</sub> = ${c1}`)}, ${M(`${cx(a2)}x<sub>1</sub> + ${cx(b2)}x<sub>2</sub> + S<sub>2</sub> = ${c2}`)}`,
                `الصيغة القياسية بإضافة متغيرات الفائض: ${M(`Z &minus; ${cx(p1)}x<sub>1</sub> &minus; ${cx(p2)}x<sub>2</sub> = 0`)}، ${M(`${cx(a1)}x<sub>1</sub> + ${cx(b1)}x<sub>2</sub> + S<sub>1</sub> = ${c1}`)}، ${M(`${cx(a2)}x<sub>1</sub> + ${cx(b2)}x<sub>2</sub> + S<sub>2</sub> = ${c2}`)}`),
              ...out, L(`Read the solution: ${M(`x<sub>1</sub> = ${F(x1)}, x<sub>2</sub> = ${F(x2)}, Z = ${F(Z)}`)}`, `نقرأ الحل: ${M(`x<sub>1</sub> = ${F(x1)}, x<sub>2</sub> = ${F(x2)}, Z = ${F(Z)}`)}`))};
  },
  decisionCriteria(d){
    const nA=d===1?3:R(3,4), nS=3, A=Array.from({length:nA},(_,i)=>`A<sub>${i+1}</sub>`), S=[...Array(nS).keys()].map(j=>`S<sub>${j+1}</sub>`);
    const crit=pick(d===1?['maximax','maximin','laplace']:['maximax','maximin','laplace','hurwicz','regret','ev']);
    const al=pick([0.4,0.6,0.7]), pr=pick([[0.2,0.5,0.3],[0.3,0.4,0.3],[0.5,0.3,0.2],[0.1,0.6,0.3]]);
    let P, score, best;
    for(let tries=0;;tries++){
      P=A.map(()=>S.map(()=>R(-4,20)*5));
      const colMax=S.map((_,j)=>Math.max(...P.map(r=>r[j])));
      score = { maximax:P.map(r=>Math.max(...r)), maximin:P.map(r=>Math.min(...r)), laplace:P.map(r=>r.reduce((s,v)=>s+v,0)/nS),
                hurwicz:P.map(r=>al*Math.max(...r)+(1-al)*Math.min(...r)), regret:P.map(r=>Math.max(...r.map((v,j)=>colMax[j]-v))),
                ev:P.map(r=>r.reduce((s,v,j)=>s+v*pr[j],0)) }[crit].map(v=>+v.toFixed(6));
      best = crit==='regret' ? Math.min(...score) : Math.max(...score);
      if(score.filter(v=>v===best).length===1) break;
    }
    const k=score.indexOf(best), name={maximax:['Maximax (optimistic)','المتفائل (أعظم الأعظم)'], maximin:['Maximin (pessimistic)','المتشائم (أعظم الأصغر)'],
      laplace:['Laplace (equal likelihood)','لابلاس (الاحتمالات المتساوية)'], hurwicz:[`Hurwicz (α = ${al})`,`هيرويز (${M('α = '+al)})`],
      regret:['Minimax regret (Savage)','أقل الندم (سافاج)'], ev:['Expected value','القيمة المتوقعة']}[crit];
    const colMax=S.map((_,j)=>Math.max(...P.map(r=>r[j])));
    const how={maximax:['largest payoff of each alternative, then the largest of these','أكبر عائد لكل بديل ثم نختار الأكبر'], maximin:['smallest payoff of each alternative, then the largest of these','أصغر عائد لكل بديل ثم نختار الأكبر'],
      laplace:['average of each row, then the largest','متوسط كل صف ثم نختار الأكبر'], hurwicz:[`α·max + (1 − α)·min for each row, then the largest`,`${M('α·max + (1 − α)·min')} لكل صف ثم نختار الأكبر`],
      regret:['regret = column max − payoff; take each row\'s largest regret, then the smallest','الندم = أكبر قيمة في العمود − العائد؛ نأخذ أكبر ندم لكل صف ثم نختار الأصغر'],
      ev:['Σ payoff × probability for each row, then the largest','مجموع العائد × الاحتمال لكل صف ثم نختار الأكبر']}[crit];
    const head=[L('Alternative','البديل'),...S.map((s,j)=>crit==='ev'?`${s} (${pr[j]})`:s)];
    const table=tbl(head, P.map((r,i)=>[A[i],...r]));
    const work = crit==='regret' ? tbl([L('Regret','الندم'),...S,'max'], P.map((r,i)=>[A[i],...r.map((v,j)=>colMax[j]-v), i===k?{v:score[i],hl:true}:score[i]]))
                                 : tbl([L('Alternative','البديل'),L('Value','القيمة')], A.map((a,i)=>[a, i===k?{v:num(score[i],4),hl:true}:num(score[i],4)]));
    return {q:L(`Payoff table (profit, SAR). Choose the best alternative by the ${name[0]} criterion.`, `جدول العوائد (ربح بالريال). اختر أفضل بديل حسب معيار ${name[1]}.`)+table,
      a:`<b>${A[k]} (${num(best,4)})</b>`,
      s:steps(L(`${name[0]}: ${how[0]}.`, `${name[1]}: ${how[1]}.`)+work, L(`Best: ${M(A[k])} with ${M(num(best,4))}.`, `الأفضل: ${M(A[k])} بقيمة ${M(num(best,4))}.`))};
  },
  decisionTree(d){
    const n=d===1?2:3, alts=[];
    for(let i=0;i<n;i++){ const p=pick([0.2,0.3,0.4,0.5,0.6,0.7]), hi=R(10,60)*1000, lo=R(-20,8)*1000; alts.push({p,hi,lo,emv:+(p*hi+(1-p)*lo).toFixed(2)}); }
    if(new Set(alts.map(a=>a.emv)).size<n || alts.filter(a=>a.emv===Math.max(...alts.map(b=>b.emv))).length>1) return G.decisionTree(d);
    const k=alts.reduce((b,a,i)=>a.emv>alts[b].emv?i:b,0), nm=i=>`A<sub>${i+1}</sub>`;
    const tree=decisionTreeSVG(alts);
    return {q:L(`An investor has ${n} alternatives. Each succeeds with the probability shown (profit) or fails (loss), in SAR. Draw the decision tree and choose the best alternative by expected monetary value.`,
                `لدى مستثمر ${M(n)} بدائل، كل بديل ينجح بالاحتمال المذكور (ربح) أو يفشل (خسارة) بالريال. ارسم شجرة القرارات واختر أفضل بديل حسب القيمة النقدية المتوقعة.`)+
              tbl([L('Alternative','البديل'),L('P(success)','احتمال النجاح'),L('Profit','الربح'),L('Loss','الخسارة')], alts.map((a,i)=>[nm(i),a.p,a.hi,sgn(a.lo)])),
      a:`<b>${nm(k)} (EMV = ${sgn(alts[k].emv)})</b>`,
      s:steps(L('Decision node (square) → one branch per alternative → chance node (circle) → success / failure branches:', 'عقدة القرار (مربع) ← فرع لكل بديل ← عقدة احتمال (دائرة) ← فرعا النجاح والفشل:')+tree,
              ...alts.map((a,i)=>M(`EMV(${nm(i)}) = ${a.p}(${a.hi}) + ${num(1-a.p,2)}(${sgn(a.lo)}) = ${sgn(a.emv)}`)),
              L(`Largest EMV: ${M(nm(k))}.`, `أكبر قيمة متوقعة: ${M(nm(k))}.`))};
  },
  transportNW(d){ return transport(d,'nw'); },
  transportLeastCost(d){ return transport(d,'lc'); },
  transportVogel(d){ return transport(d,'vogel'); },
  transportCompare(d){
    const T=transportData(d), r={nw:transportSolve(T,'nw'), lc:transportSolve(T,'lc'), vogel:transportSolve(T,'vogel')};
    const low=Math.min(r.nw.cost,r.lc.cost,r.vogel.cost), names={nw:['Northwest corner','الركن الشمالي الغربي'], lc:['Least cost','أقل تكلفة'], vogel:['Vogel','فوجل']};
    const winners=Object.keys(r).filter(k=>r[k].cost===low);
    return {q:L('Find an initial solution by the northwest corner, least cost and Vogel methods and compare their total costs.', 'أوجد الحل المبدئي بطرق الركن الشمالي الغربي وأقل تكلفة وفوجل، وقارن بين التكاليف الكلية.')+transportTableHTML(T),
      a:`<b>NW = ${r.nw.cost}; ${Li('Least cost','أقل تكلفة')} = ${r.lc.cost}; Vogel = ${r.vogel.cost} → ${Li(winners.map(k=>names[k][0]).join(', '), winners.map(k=>names[k][1]).join('، '))}</b>`,
      s:steps(...Object.keys(r).map(k=>L(`${names[k][0]}: total cost ${M(r[k].cost)}`, `${names[k][1]}: التكلفة الكلية ${M(r[k].cost)}`)+transportTableHTML(T,r[k].x)),
              L('Vogel usually gives the lowest (closest to optimal) starting cost; the northwest corner ignores costs completely.', 'طريقة فوجل تعطي عادة أقل تكلفة مبدئية (الأقرب للأمثل)، بينما الركن الشمالي الغربي لا يراعي التكاليف إطلاقاً.'))};
  },
  assignmentHungarian(d){
    const n=d===3?4:3, C=Array.from({length:n},()=>Array.from({length:n},()=>R(2,d===1?12:20)));
    const costs=permutations(n).map(p=>p.reduce((s,j,i)=>s+C[i][j],0)), lo=Math.min(...costs);
    if(costs.filter(c=>c===lo).length>1) return G.assignmentHungarian(d);          // keep the optimal assignment unique
    const W=n===3?['W<sub>1</sub>','W<sub>2</sub>','W<sub>3</sub>']:['W<sub>1</sub>','W<sub>2</sub>','W<sub>3</sub>','W<sub>4</sub>'], J=W.map((_,j)=>`J<sub>${j+1}</sub>`);
    const show=(Mx,hl)=>tbl(['',...J], Mx.map((r,i)=>[W[i],...r.map((v,j)=>hl&&hl[i]===j?{v,hl:true}:v)]));
    const out=[]; let Mx=C.map(r=>{ const m=Math.min(...r); return r.map(v=>v-m); });
    out.push(L('Subtract the smallest element of each row from that row:', 'نطرح أصغر عنصر في كل صف من عناصر الصف:')+show(Mx));
    for(let j=0;j<n;j++){ const m=Math.min(...Mx.map(r=>r[j])); Mx.forEach(r=>r[j]-=m); }
    out.push(L('Subtract the smallest element of each column from that column:', 'نطرح أصغر عنصر في كل عمود من عناصر العمود:')+show(Mx));
    for(let it=0;; it++){
      const cover=minLineCover(Mx);
      if(it>8) return G.assignmentHungarian(d);
      if(cover.count===n) { out.push(L(`The zeros need ${n} lines to cover them (= n) ⇒ an optimal assignment exists among the zeros.`, `نحتاج ${M(n)} خطوط لتغطية الأصفار (= عدد الصفوف) ⇐ يوجد تخصيص أمثل على الأصفار.`)); break; }
      let m=Infinity; for(let i=0;i<n;i++) for(let j=0;j<n;j++) if(!cover.rows[i]&&!cover.cols[j]) m=Math.min(m,Mx[i][j]);
      for(let i=0;i<n;i++) for(let j=0;j<n;j++){ if(!cover.rows[i]&&!cover.cols[j]) Mx[i][j]-=m; else if(cover.rows[i]&&cover.cols[j]) Mx[i][j]+=m; }
      const lines=[...cover.rows.map((r,i)=>r?W[i]:null), ...cover.cols.map((c,j)=>c?J[j]:null)].filter(Boolean).join(', ');
      out.push(L(`Only ${cover.count} lines (${lines}) cover all zeros (&lt; ${n}): subtract the smallest uncovered element ${m} from uncovered cells and add it where lines cross:`,
                 `تكفي ${M(cover.count)} خطوط (${M(lines)}) لتغطية الأصفار (أقل من ${M(n)}): نطرح أصغر عنصر غير مغطى ${M(m)} من العناصر غير المغطاة ونضيفه عند تقاطع الخطوط:`)+show(Mx));
    }
    const perm=bestZeroAssignment(Mx), cost=perm.reduce((s,j,i)=>s+C[i][j],0);
    return {q:L(`Assign each worker to one job (cost table below) so that the total cost is minimal (Hungarian method).`, 'خصّص كل عامل لعمل واحد (جدول التكاليف أدناه) بحيث تكون التكلفة الكلية أقل ما يمكن (الطريقة المجرية).')+show(C),
      a:`<b>${perm.map((j,i)=>`${W[i]}&rarr;${J[j]}`).join(', ')}; ${Li('total cost','التكلفة الكلية')} = ${cost}</b>`,
      s:steps(...out, L('Assignment on the zeros (back in the original table):', 'التخصيص على الأصفار (في الجدول الأصلي):')+show(C,perm),
              M(`${perm.map((j,i)=>C[i][j]).join(' + ')} = ${cost}`))};
  },

  /* ---- Economic and Financial Mathematics (MATH 371) ---- */
  effectiveRate(d){
    const r=R(2,d===1?12:24), m=pick(d===1?[2,4]:[2,4,12]), name={2:'semi-annually',4:'quarterly',12:'monthly'}[m], i=r/100/m, eff=((1+i)**m-1)*100;
    return {q:`Find the effective annual rate of ${r}% compounded ${name}.`, a:`<b>${+eff.toFixed(4)}%</b>`,
      s:steps(L('Effective rate:', 'المعدل الفعلي:')+' '+M(`r<sub>eff</sub> = (1 + ${frac('r','m')})${sup('m')} &minus; 1`)+', '+M(`m = ${m}`),
              M(`${frac(num(r/100),m)} = ${num(i,6)}`), M(`(1 + ${num(i,6)})${sup(m)} &minus; 1 = ${num((1+i)**m,6)} &minus; 1 = ${num((1+i)**m-1,6)}`),
              L('As a percentage:', 'كنسبة مئوية:')+' '+M(`${+eff.toFixed(4)}%`))};
  },
  annuityFV(d){
    const P=R(1,20)*100, r=R(2,d===1?6:10), n=R(2,d===1?5:15), i=r/100, g=(1+i)**n;
    return {q:`$${P} is deposited at the end of each year for ${n} years at ${r}% compounded annually. Find the future value.`,
            a:`<b>$${(P*(g-1)/i).toFixed(2)}</b>`,
      s:steps(L('Future value of an ordinary annuity:', 'القيمة المستقبلية للدفعات العادية:')+' '+M(`FV = P${frac('(1 + i)'+sup('n')+' &minus; 1','i')}`),
              M(`(1 + ${num(i)})${sup(n)} = ${num(g,6)}`),
              M(`FV = ${P} &times; ${frac(`${num(g,6)} &minus; 1`, num(i))} = ${P} &times; ${num((g-1)/i,6)} &asymp; ${(P*(g-1)/i).toFixed(2)}`))};
  },

  /* ---- Computational Methods for ODEs (MATH 342) ---- */
  improvedEuler(d){
    const a=nz(-3,3), b=nz(-2,2), h=pick(d===1?[1]:[0.5,0.25]), x0=R(0,2), y0=R(-3,5), f=(x,y)=>a*x+b*y;
    const k1=f(x0,y0), yp=y0+h*k1, k2=f(x0+h,yp), y1=y0+h/2*(k1+k2);   // h is a power of 2: exact in floating point
    return {q:L(`Use one step of the improved Euler (Heun) method with h = ${h} to find y(${x0+h}):`, `استخدم خطوة واحدة من طريقة أويلر المحسّنة (هيون) بخطوة ${M('h = '+h)} لإيجاد ${M(`y(${x0+h})`)}:`)+'<br>'+
              align([['y&prime;','=',`${lead(a,'x')}${term(b,'y')}`],[`y(${x0})`,'=',y0]], true),
            a:`<b>${sgn(y1)}</b>`,
      s:steps(L('Slope at the start:', 'الميل عند البداية:')+' '+M(`k<sub>1</sub> = f(${x0}, ${y0}) = ${a}(${x0}) + ${b}(${sgn(y0)}) = ${num(k1)}`),
              L('Predictor (ordinary Euler):', 'التنبؤ (أويلر العادية):')+' '+M(`y* = ${y0} + ${h}(${num(k1)}) = ${num(yp)}`),
              L('Slope at the end:', 'الميل عند النهاية:')+' '+M(`k<sub>2</sub> = f(${x0+h}, ${num(yp)}) = ${num(k2)}`),
              L('Average the two slopes:', 'نأخذ متوسط الميلين:')+' '+M(`y<sub>1</sub> = ${y0} + ${frac(h,2)}(${num(k1)} + ${num(k2)}) = ${num(y1)}`))};
  },

  /* ---- Integral Equations (MATH 416) ---- */
  fredholmSeparable(d){
    // u(x) = c·x + λ∫₀¹ x t u(t) dt  ⇒  u(x) = kx with k = c + λk/3  ⇒  k = 3c / (3 − λ)
    const c=R(1,d===1?3:6); let l=nz(-6,6); while(l===3) l=nz(-6,6);
    const k=fracStr(3*c,3-l);
    return {q:`Solve u(x) = ${c===1?'':c}x ${l<0?'&minus;':'+'} ${Math.abs(l)===1?'':Math.abs(l)}&int;<sub>0</sub><sup>1</sup> xt u(t) dt.`,
            a:`<b>u(x) = ${k==='1'?'':k==='&minus;1'?'&minus;':k}x</b>`,
      s:steps(L('The kernel is separable: x comes out of the integral. Let', 'النواة قابلة للفصل: x تخرج من التكامل. نضع')+' '+M('A = &int;<sub>0</sub><sup>1</sup> t u(t) dt')+', '+L('so', 'فيكون')+' '+M(`u(x) = (${c} ${l<0?'&minus;':'+'} ${Math.abs(l)}A)x = kx`),
              L('Substitute u(t) = kt into the definition of A:', 'نعوّض u(t) = kt في تعريف A:')+' '+M(`A = &int;<sub>0</sub><sup>1</sup> kt${sup(2)} dt = ${frac('k',3)}`),
              M(`k = ${c} + (${sgn(l)})${frac('k',3)} &rArr; k(1 &minus; ${frac(sgn(l),3)}) = ${c} &rArr; k = ${frac(3*c, sgn(3-l))} = ${k}`))};
  },

  /* ================= MATH 130 — Introduction to Mathematics (worked solutions) ================= */
  linearEquation(d){
    const x=nz(-9,9), a=nz(2,9)*(d===1?1:pick([1,-1])), b=nz(-15,15), c=a*x+b, ax=lead(a,'x');
    const eq=`${ax}${term(b,'')} = ${sgn(c)}`;
    const ys=[a*(x-6)+b, a*(x+6)+b, c];
    const g=plot({x:[x-6,x+6], y:[Math.min(...ys)-2, Math.max(...ys)+2], curves:[{f:t=>a*t+b},{f:()=>c, cls:'c2'}], points:[{x, y:c, label:`(${x}, ${c})`}]});
    return {q:L(`Solve ${eq}`, `حل المعادلة ${M(eq)}`), a:`<b>x = ${sgn(x)}</b>`,
      s:steps(
        L(`Move the constant to the right: ${M(`${ax} = ${sgn(c)} ${b<0?'+':'&minus;'} ${Math.abs(b)} = ${sgn(a*x)}`)}`, `ننقل الحد الثابت إلى الطرف الأيمن: ${M(`${ax} = ${sgn(c)} ${b<0?'+':'&minus;'} ${Math.abs(b)} = ${sgn(a*x)}`)}`),
        L(`Divide both sides by ${sgn(a)}: ${M(`x = ${sgn(a*x)} &divide; ${a<0?`(${sgn(a)})`:a} = ${sgn(x)}`)}`, `نقسم الطرفين على ${M(sgn(a))}: ${M(`x = ${sgn(a*x)} &divide; ${a<0?`(${sgn(a)})`:a} = ${sgn(x)}`)}`),
        L(`Graph: the line y = ${ax}${term(b,'')} meets the line y = ${sgn(c)} at x = ${sgn(x)}.`, `بيانياً: يتقاطع المستقيم ${M(`y = ${ax}${term(b,'')}`)} مع المستقيم ${M(`y = ${sgn(c)}`)} عند ${M(`x = ${sgn(x)}`)}.`)+g)};
  },
  inequalityGraph(d){
    const k=nz(-6,6), a=nz(2,d===1?5:9)*(d===1?1:pick([1,-1])), b=nz(-12,12), op=pick(['<','>','<=','>=']);
    const H={'<':'&lt;','>':'&gt;','<=':'&le;','>=':'&ge;'}, flip={'<':'>','>':'<','<=':'>=','>=':'<='};
    const res = a<0 ? flip[op] : op, c=a*k+b, ax=lead(a,'x');
    const ineq=`${ax}${term(b,'')} ${H[op]} ${sgn(c)}`;
    return {q:L(`Solve and graph: ${ineq}`, `حل المتباينة ومثّل الحل على خط الأعداد: ${M(ineq)}`), a:`<b>x ${H[res]} ${sgn(k)}</b>`,
      s:steps(
        L(`Subtract ${sgn(b)} from both sides: ${M(`${ax} ${H[op]} ${sgn(a*k)}`)}`, `نطرح ${M(sgn(b))} من الطرفين: ${M(`${ax} ${H[op]} ${sgn(a*k)}`)}`),
        a<0 ? L(`Divide by ${sgn(a)} — dividing by a negative number <b>reverses</b> the inequality: ${M(`x ${H[res]} ${sgn(k)}`)}`, `نقسم على ${M(sgn(a))} — القسمة على عدد سالب <b>تعكس</b> إشارة المتباينة: ${M(`x ${H[res]} ${sgn(k)}`)}`)
            : L(`Divide by ${a}: ${M(`x ${H[res]} ${sgn(k)}`)}`, `نقسم على ${M(a)}: ${M(`x ${H[res]} ${sgn(k)}`)}`),
        L(`On the number line: ${res.length>1?'a closed dot (included)':'an open dot (not included)'} at ${sgn(k)}, shaded to the ${res[0]==='>'?'right':'left'}.`,
          `على خط الأعداد: دائرة ${res.length>1?'مغلقة (العدد ضمن الحل)':'مفتوحة (العدد ليس ضمن الحل)'} عند ${M(sgn(k))} والتظليل نحو ${res[0]==='>'?'اليمين':'اليسار'}.`)+numberLine(k,res))};
  },
  linearSystem2(d){
    const x=nz(-5,5), y=nz(-5,5), hi=d===1?3:5;
    let a1=nz(1,hi), b1=nz(-hi,hi), a2=nz(-hi,hi), b2=nz(-hi,hi);
    while(a1*b2-a2*b1===0){ a2=nz(-hi,hi); b2=nz(-hi,hi); }
    const c1=a1*x+b1*y, c2=a2*x+b2*y, eq=(a,b,c)=>`${lead(a,'x')}${term(b,'y')} = ${sgn(c)}`, D=a2*b1-a1*b2, N=a2*c1-a1*c2;
    const g=plot({x:[x-6,x+6], y:[y-6,y+6], curves:[{f:t=>(c1-a1*t)/b1},{f:t=>(c2-a2*t)/b2, cls:'c2'}], points:[{x, y, label:`(${x}, ${y})`}]});
    const lhs=(a,b)=>`${lead(a,'x')}${term(b,'y')}`;
    return {q:L('Solve the system:','حل النظام:')+'<br>'+align([[lhs(a1,b1),'=',sgn(c1)],[lhs(a2,b2),'=',sgn(c2)]], true), a:`<b>(x, y) = (${sgn(x)}, ${sgn(y)})</b>`,
      s:steps(
        L(`Eliminate x: multiply equation (1) by ${sgn(a2)} and equation (2) by ${sgn(a1)}, then subtract.`, `نحذف ${M('x')}: نضرب المعادلة (1) في ${M(sgn(a2))} والمعادلة (2) في ${M(sgn(a1))} ثم نطرح.`),
        L(`${M(`${D===1?'':D===-1?'&minus;':sgn(D)}y = ${sgn(N)}`)} ⇒ ${M(`y = ${sgn(y)}`)}`, `${M(`${D===1?'':D===-1?'&minus;':sgn(D)}y = ${sgn(N)}`)} ⇐ ${M(`y = ${sgn(y)}`)}`),
        L(`Substitute into (1): ${M(`${lead(a1,'x')} = ${sgn(c1)} ${b1*y<0?'+':'&minus;'} ${Math.abs(b1*y)} = ${sgn(a1*x)}`)} ⇒ ${M(`x = ${sgn(x)}`)}`,
          `نعوّض في (1): ${M(`${lead(a1,'x')} = ${sgn(c1)} ${b1*y<0?'+':'&minus;'} ${Math.abs(b1*y)} = ${sgn(a1*x)}`)} ⇐ ${M(`x = ${sgn(x)}`)}`),
        L(`Graph: the two lines intersect at (${sgn(x)}, ${sgn(y)}).`, `بيانياً: يتقاطع المستقيمان في النقطة ${M(`(${sgn(x)}, ${sgn(y)})`)}.`)+g)};
  },
  quadraticEquation(d){
    const a=d===3?pick([1,2,3]):1, r1=nz(-6,6), r2=R(-6,6), b=-a*(r1+r2), c=a*r1*r2, D=b*b-4*a*c;
    const eq=`${lead(a,'x'+sup(2))}${term(b,'x')}${term(c,'')} = 0`, lo=Math.min(r1,r2), hi=Math.max(r1,r2);
    const ans = r1===r2 ? `x = ${sgn(r1)}` : `x = ${sgn(lo)}, ${sgn(hi)}`;
    const vx=(r1+r2)/2, vy=a*(vx-r1)*(vx-r2), f=t=>a*(t-r1)*(t-r2);
    const g=plot({x:[lo-3,hi+3], y:[Math.min(vy,0)-2, Math.max(f(lo-3),f(hi+3))+1], curves:[{f}],
      points:[...new Set([r1,r2])].map(r=>({x:r, y:0, label:`x = ${r}`}))});
    return {q:L(`Solve ${eq}`, `حل المعادلة ${M(eq)}`), a:`<b>${ans}</b>`,
      s:steps(
        L(`Here a = ${a}, b = ${sgn(b)}, c = ${sgn(c)}.`, `هنا ${M(`a = ${a}, b = ${sgn(b)}, c = ${sgn(c)}`)}.`),
        L(`Discriminant: ${M(`&Delta; = b${sup(2)} &minus; 4ac = ${b*b} ${4*a*c<0?'+':'&minus;'} ${Math.abs(4*a*c)} = ${D}`)}`, `المميّز: ${M(`&Delta; = b${sup(2)} &minus; 4ac = ${b*b} ${4*a*c<0?'+':'&minus;'} ${Math.abs(4*a*c)} = ${D}`)}`),
        L(`Quadratic formula: ${M(`x = (&minus;b &plusmn; &radic;&Delta;) / 2a = (${sgn(-b)} &plusmn; ${Math.sqrt(D)}) / ${2*a}`)} ⇒ ${M(ans)}`, `القانون العام: ${M(`x = (&minus;b &plusmn; &radic;&Delta;) / 2a = (${sgn(-b)} &plusmn; ${Math.sqrt(D)}) / ${2*a}`)} ⇐ ${M(ans)}`),
        L(`Graph: the parabola crosses the x-axis at the roots.`, `بيانياً: يقطع القطع المكافئ محور ${M('x')} عند الجذور.`)+g)};
  },
  logExp(d){
    const b=pick([2,3,5,10]), t=pick(d===1?['eval','solveExp']:['eval','product','quotient','solveExp','solveLog']);
    const lg=(base,x)=>`log<sub>${base}</sub> ${x}`;
    if(t==='eval'){ const k=R(2,b===10?4:5), N=b**k;
      return {q:L(`Evaluate ${lg(b,N)}`, `أوجد قيمة ${M(lg(b,N))}`), a:`<b>${k}</b>`,
        s:steps(L(`Write ${N} as a power of ${b}: ${M(`${N} = ${b}${sup(k)}`)}`, `نكتب ${M(N)} كقوة للأساس ${M(b)}: ${M(`${N} = ${b}${sup(k)}`)}`),
                L(`${M(`${lg(b,b+sup('k'))} = k`)}, so ${M(`${lg(b,N)} = ${k}`)}`, `بما أن ${M(`${lg(b,b+sup('k'))} = k`)} فإن ${M(`${lg(b,N)} = ${k}`)}`))}; }
    if(t==='product'||t==='quotient'){ const k1=R(1,3), k2=R(1,3), m=b**k1, n=b**k2, prod=t==='product';   // quotient: log(mn) − log(n) = log(m)
      const expr=prod?`${lg(b,m)} + ${lg(b,n)}`:`${lg(b,m*n)} &minus; ${lg(b,n)}`, val=prod?k1+k2:k1;
      return {q:L(`Evaluate ${expr}`, `أوجد قيمة ${M(expr)}`), a:`<b>${val}</b>`,
        s:steps(prod ? L(`Product rule: ${M(`log M + log N = log(MN)`)} ⇒ ${M(lg(b,m*n))}`, `قاعدة الضرب: ${M(`log M + log N = log(MN)`)} ⇐ ${M(lg(b,m*n))}`)
                     : L(`Quotient rule: ${M(`log M &minus; log N = log(M/N)`)} ⇒ ${M(lg(b,`(${m*n}/${n})`)+' = '+lg(b,m))}`, `قاعدة القسمة: ${M(`log M &minus; log N = log(M/N)`)} ⇐ ${M(lg(b,`(${m*n}/${n})`)+' = '+lg(b,m))}`),
                L(`${M(`${prod?m*n:m} = ${b}${sup(val)}`)}, so the value is ${val}.`, `${M(`${prod?m*n:m} = ${b}${sup(val)}`)} إذن القيمة ${M(val)}.`))}; }
    if(t==='solveExp'){ const k=R(1,4), m=R(-3,3), N=b**k, ex=`x${term(m,'')}`;
      return {q:L(`Solve ${b}${sup(ex)} = ${N}`, `حل المعادلة ${M(`${b}${sup(ex)} = ${N}`)}`), a:`<b>x = ${sgn(k-m)}</b>`,
        s:steps(L(`Same base: ${M(`${N} = ${b}${sup(k)}`)}, so ${M(`${ex} = ${k}`)}`, `نوحّد الأساس: ${M(`${N} = ${b}${sup(k)}`)} إذن ${M(`${ex} = ${k}`)}`),
                L(`${M(`x = ${k} ${m<0?'+':'&minus;'} ${Math.abs(m)} = ${sgn(k-m)}`)}`, `${M(`x = ${k} ${m<0?'+':'&minus;'} ${Math.abs(m)} = ${sgn(k-m)}`)}`))}; }
    const k=R(1,3), m=R(-5,5), ex=`(x${term(-m,'')})`;
    return {q:L(`Solve ${lg(b,ex)} = ${k}`, `حل المعادلة ${M(`${lg(b,ex)} = ${k}`)}`), a:`<b>x = ${sgn(b**k+m)}</b>`,
      s:steps(L(`Rewrite in exponential form: ${M(`log<sub>b</sub> y = k &hArr; y = b${sup('k')}`)} ⇒ ${M(`x${term(-m,'')} = ${b}${sup(k)} = ${b**k}`)}`, `نحوّل إلى الصورة الأسية: ${M(`log<sub>b</sub> y = k &hArr; y = b${sup('k')}`)} ⇐ ${M(`x${term(-m,'')} = ${b}${sup(k)} = ${b**k}`)}`),
              L(`${M(`x = ${b**k} ${m<0?'&minus;':'+'} ${Math.abs(m)} = ${sgn(b**k+m)}`)} (check: ${M(`x${term(-m,'')} &gt; 0`)} ✓)`, `${M(`x = ${b**k} ${m<0?'&minus;':'+'} ${Math.abs(m)} = ${sgn(b**k+m)}`)} (تحقق: ${M(`x${term(-m,'')} &gt; 0`)} ✓)`))};
  },

  /* ================= STAT 302 — Statistical Methods (worked solutions, tables, graphs) ================= */
  ciMeanZ(d){ return ciMean(d,'z'); },          // σ known
  ciMeanS(d){ return ciMean(d,'s'); },          // σ unknown, large sample (n ≥ 30)
  ciMeanT(d){ return ciMean(d,'t'); },          // σ unknown, small sample from a normal population
  ciProportion(d){
    const conf=pick(d===1?[95]:[90,95,99]), a2=CONF_A2[conf], z=zCrit(a2), n=pick([100,200,400,500]), x=R(Math.round(n*0.15),Math.round(n*0.85)), p=x/n;
    const se=Math.sqrt(p*(1-p)/n), E=z*se, lo=p-E, hi=p+E;
    return {q:L(`In a sample of n = ${n}, ${x} have the characteristic. Find a ${conf}% confidence interval for the proportion p.`,
                `في عينة حجمها ${M('n = '+n)} يوجد ${M(x)} يحملون الصفة. أوجد فترة ثقة ${M(conf+'%')} للنسبة ${M('p')}.`),
      a:`<b>(${num(lo,4)}, ${num(hi,4)})</b>`,
      s:steps(
        L(`Formula: ${M(`p&#770; &plusmn; z<sub>&alpha;/2</sub> &radic;(p&#770;(1 &minus; p&#770;)/n)`)}`, `القانون: ${M(`p&#770; &plusmn; z<sub>&alpha;/2</sub> &radic;(p&#770;(1 &minus; p&#770;)/n)`)}`),
        L(`${M(`p&#770; = ${x}/${n} = ${num(p,4)}`)}; α = ${num(1-conf/100,2)}, α/2 = ${a2} ⇒ ${M(`z = ${z.toFixed(3)}`)} (table)`, `${M(`p&#770; = ${x}/${n} = ${num(p,4)}`)}؛ ${M(`α = ${num(1-conf/100,2)}, α/2 = ${a2}`)} ⇐ ${M(`z = ${z.toFixed(3)}`)} (من الجدول)`)+zTableHTML(a2),
        L(`Margin of error: ${M(`E = ${z.toFixed(3)} &times; &radic;(${num(p,4)} &times; ${num(1-p,4)} / ${n}) = ${num(E,4)}`)}`, `هامش الخطأ: ${M(`E = ${z.toFixed(3)} &times; &radic;(${num(p,4)} &times; ${num(1-p,4)} / ${n}) = ${num(E,4)}`)}`),
        L(`Interval: ${M(`${num(p,4)} &plusmn; ${num(E,4)} = (${num(lo,4)}, ${num(hi,4)})`)}`, `الفترة: ${M(`${num(p,4)} &plusmn; ${num(E,4)} = (${num(lo,4)}, ${num(hi,4)})`)}`)+distPlot({crit:z, kind:'ci'}))};
  },
  sampleSizeMean(d){
    const conf=pick(d===1?[95]:[90,95,99]), a2=CONF_A2[conf], z=zCrit(a2), sg=R(2,d===3?30:15), E=pick([0.5,1,1.5,2,2.5,3]);
    const raw=(z*sg/E)**2, n=Math.ceil(raw-1e-9);
    return {q:L(`How large a sample is needed to estimate μ within E = ${E} with ${conf}% confidence if σ = ${sg}?`,
                `ما حجم العينة اللازم لتقدير ${M('μ')} بخطأ لا يزيد عن ${M('E = '+E)} وبثقة ${M(conf+'%')} إذا كان ${M('σ = '+sg)}؟`),
      a:`<b>n = ${n}</b>`,
      s:steps(
        L(`Derivation: the margin of error is ${M(`E = z<sub>&alpha;/2</sub> &sigma;/&radic;n`)} ⇒ ${M(`&radic;n = z<sub>&alpha;/2</sub> &sigma;/E`)} ⇒ ${M(`n = (z<sub>&alpha;/2</sub> &sigma;/E)${sup(2)}`)}`,
          `اشتقاق القانون: هامش الخطأ ${M(`E = z<sub>&alpha;/2</sub> &sigma;/&radic;n`)} ⇐ ${M(`&radic;n = z<sub>&alpha;/2</sub> &sigma;/E`)} ⇐ ${M(`n = (z<sub>&alpha;/2</sub> &sigma;/E)${sup(2)}`)}`),
        L(`α/2 = ${a2} ⇒ ${M(`z = ${z.toFixed(3)}`)} (table)`, `${M(`α/2 = ${a2}`)} ⇐ ${M(`z = ${z.toFixed(3)}`)} (من الجدول)`)+zTableHTML(a2),
        L(`${M(`n = (${z.toFixed(3)} &times; ${sg} / ${E})${sup(2)} = ${num(raw,3)}`)} → round <b>up</b> ⇒ ${M(`n = ${n}`)}`, `${M(`n = (${z.toFixed(3)} &times; ${sg} / ${E})${sup(2)} = ${num(raw,3)}`)} ← نقرّب <b>للأعلى</b> ⇐ ${M(`n = ${n}`)}`))};
  },
  sampleSizeProp(d){
    const conf=pick(d===1?[95]:[90,95,99]), a2=CONF_A2[conf], z=zCrit(a2), E=pick([0.02,0.03,0.04,0.05]), known=d>1&&Math.random()<0.6, p=known?pick([0.1,0.2,0.3,0.4,0.6]):0.5;
    const raw=z*z*p*(1-p)/(E*E), n=Math.ceil(raw-1e-9);
    return {q:L(`Find the sample size needed to estimate a proportion within E = ${E} with ${conf}% confidence${known?` if a prior estimate is p = ${p}`:' (no prior estimate)'}.`,
                `أوجد حجم العينة اللازم لتقدير نسبة بخطأ ${M('E = '+E)} وبثقة ${M(conf+'%')}${known?` إذا كان التقدير المسبق ${M('p = '+p)}`:' (لا يوجد تقدير مسبق)'}.`),
      a:`<b>n = ${n}</b>`,
      s:steps(
        L(`Derivation: ${M(`E = z<sub>&alpha;/2</sub> &radic;(p(1 &minus; p)/n)`)} ⇒ ${M(`E${sup(2)} = z${sup(2)} p(1 &minus; p)/n`)} ⇒ ${M(`n = z${sup(2)} p(1 &minus; p) / E${sup(2)}`)}`,
          `اشتقاق القانون: ${M(`E = z<sub>&alpha;/2</sub> &radic;(p(1 &minus; p)/n)`)} ⇐ ${M(`E${sup(2)} = z${sup(2)} p(1 &minus; p)/n`)} ⇐ ${M(`n = z${sup(2)} p(1 &minus; p) / E${sup(2)}`)}`),
        known ? '' : L(`No prior estimate: use ${M('p = 0.5')} (it makes ${M('p(1 &minus; p)')} largest, so n is safe).`, `لا يوجد تقدير مسبق: نستخدم ${M('p = 0.5')} لأنها تجعل ${M('p(1 &minus; p)')} أكبر ما يمكن.`),
        L(`α/2 = ${a2} ⇒ ${M(`z = ${z.toFixed(3)}`)} (table)`, `${M(`α/2 = ${a2}`)} ⇐ ${M(`z = ${z.toFixed(3)}`)} (من الجدول)`)+zTableHTML(a2),
        L(`${M(`n = ${z.toFixed(3)}${sup(2)} &times; ${p} &times; ${num(1-p,2)} / ${E}${sup(2)} = ${num(raw,3)}`)} → round up ⇒ ${M(`n = ${n}`)}`, `${M(`n = ${z.toFixed(3)}${sup(2)} &times; ${p} &times; ${num(1-p,2)} / ${E}${sup(2)} = ${num(raw,3)}`)} ← نقرّب للأعلى ⇐ ${M(`n = ${n}`)}`))};
  },
  testMeanZ(d){ return testMean(d,'z'); },
  testMeanS(d){ return testMean(d,'s'); },
  testMeanT(d){ return testMean(d,'t'); },
  testProportion(d){
    const [p0,n]=pick([[0.5,100],[0.5,400],[0.2,100],[0.2,400],[0.1,900],[0.4,600]]), alpha=pick(d===1?[0.05]:[0.05,0.01,0.10]), tail=pick(d===1?['two']:['two','right','left']);
    const se=Math.sqrt(p0*(1-p0)/n), cv=zCrit(tail==='two'?alpha/2:alpha);
    let x, z; do{ x=Math.round(n*(p0+R(-30,30)/10*se)); z=(x/n-p0)/se; }while(Math.abs(Math.abs(z)-cv)<0.05 || x<=0 || x>=n);
    const reject = tail==='two'?Math.abs(z)>cv : tail==='right'?z>cv : z<-cv, H1={two:'&ne;',right:'&gt;',left:'&lt;'}[tail];
    return {q:L(`In n = ${n} trials there are ${x} successes. Test at α = ${alpha}:`,
                `في ${M('n = '+n)} محاولة كان عدد النجاحات ${M(x)}. اختبر عند ${M(`α = ${alpha}`)}:`)+'<br>'+align([['H₀: p','=',p0],['H₁: p',H1,p0]]),
      a:`<b>z = ${num(z,3)}; ${decision(reject)}</b>`,
      s:steps(
        L(`Hypotheses: ${M(`H₀: p = ${p0}`)}, ${M(`H₁: p ${H1} ${p0}`)} (${tailName(tail).en})`, `الفرضيات: ${M(`H₀: p = ${p0}`)}، ${M(`H₁: p ${H1} ${p0}`)} (${tailName(tail).ar})`),
        L(`Test statistic: ${M(`z = (p&#770; &minus; p₀) / &radic;(p₀(1 &minus; p₀)/n) = (${num(x/n,4)} &minus; ${p0}) / ${num(se,4)} = ${num(z,3)}`)}`, `إحصاءة الاختبار: ${M(`z = (p&#770; &minus; p₀) / &radic;(p₀(1 &minus; p₀)/n) = (${num(x/n,4)} &minus; ${p0}) / ${num(se,4)} = ${num(z,3)}`)}`),
        critStep(tail, alpha, cv)+zTableHTML(tail==='two'?alpha/2:alpha),
        decisionStep(reject, tail, z, cv)+distPlot({crit:cv, kind:tail, stat:z}))};
  },
  anovaTable(d){
    const k=pick([3,4]), ni=pick(k===3?[3,4,5,6]:[3,4,5]), N=k*ni, df1=k-1, df2=N-k, cv=fCrit(df1,df2);
    let msb, mse, F; do{ mse=R(2,d===1?10:20); msb=R(1,mse*8); F=msb/mse; }while(Math.abs(F-cv)<0.15);
    const ssb=msb*df1, sse=mse*df2, sst=ssb+sse, reject=F>cv, giveSST=d>1&&Math.random()<0.5;
    const row=(src,ss,df,ms,f)=>`<tr><th>${src}</th><td>${ss}</td><td>${df}</td><td>${ms}</td><td>${f}</td></tr>`;
    const head=`<tr><th>${Li('Source','المصدر')}</th><th>SS</th><th>df</th><th>MS</th><th>F</th></tr>`;
    const tq=`<table class="anova">${head}${row(Li('Between','بين المجموعات'),ssb,'?','?','?')}${row(Li('Within','داخل المجموعات'),giveSST?'?':sse,'?','?','')}${row(Li('Total','الكلي'),giveSST?sst:'?','?','','')}</table>`;
    const ta=`<table class="anova">${head}${row(Li('Between','بين المجموعات'),ssb,df1,msb,num(F,3))}${row(Li('Within','داخل المجموعات'),sse,df2,mse,'')}${row(Li('Total','الكلي'),sst,N-1,'','')}</table>`;
    const xm=Math.max(cv,F)+1.5, fx=t=>fPdf(t,df1,df2); let ym=0; for(let i=1;i<=100;i++) ym=Math.max(ym,fx(xm*i/100));
    const g=plot({x:[0,xm], y:[0,Math.min(ym*1.15,1.2)], curves:[{f:fx}], fills:[{f:fx,a:cv,b:xm,cls:'rej'}], vlines:[{x:cv,label:'F = '+cv}], points:[{x:F,y:0,label:'F = '+num(F,2),cls:'stat'}]});
    return {q:L(`One-way ANOVA with k = ${k} groups of ${ni} observations each (N = ${N}). Complete the table and test equality of the means at α = 0.05.`,
                `تحليل تباين أحادي: ${M('k = '+k)} مجموعات في كل منها ${M(ni)} مشاهدات (${M('N = '+N)}). أكمل الجدول واختبر تساوي المتوسطات عند ${M('α = 0.05')}.`)+tq,
      a:`<b>F = ${num(F,3)}; ${decision(reject)}</b>`+ta,
      s:steps(
        L(`Degrees of freedom: ${M(`df₁ = k &minus; 1 = ${df1}`)}, ${M(`df₂ = N &minus; k = ${df2}`)}, ${M(`total = N &minus; 1 = ${N-1}`)}`, `درجات الحرية: ${M(`df₁ = k &minus; 1 = ${df1}`)}، ${M(`df₂ = N &minus; k = ${df2}`)}، ${M(`الكلي = N &minus; 1 = ${N-1}`)}`),
        giveSST ? L(`${M(`SSW = SST &minus; SSB = ${sst} &minus; ${ssb} = ${sse}`)}`, `${M(`SSW = SST &minus; SSB = ${sst} &minus; ${ssb} = ${sse}`)}`)
                : L(`${M(`SST = SSB + SSW = ${ssb} + ${sse} = ${sst}`)}`, `${M(`SST = SSB + SSW = ${ssb} + ${sse} = ${sst}`)}`),
        L(`${M(`MSB = SSB/df₁ = ${ssb}/${df1} = ${msb}`)}, ${M(`MSW = SSW/df₂ = ${sse}/${df2} = ${mse}`)}`, `${M(`MSB = SSB/df₁ = ${ssb}/${df1} = ${msb}`)}، ${M(`MSW = SSW/df₂ = ${sse}/${df2} = ${mse}`)}`),
        L(`${M(`F = MSB/MSW = ${msb}/${mse} = ${num(F,3)}`)}`, `${M(`F = MSB/MSW = ${msb}/${mse} = ${num(F,3)}`)}`),
        L(`Critical value ${M(`F<sub>0.05</sub>(${df1}, ${df2}) = ${cv}`)} (table)`, `القيمة الحرجة ${M(`F<sub>0.05</sub>(${df1}, ${df2}) = ${cv}`)} (من الجدول)`)+fTableHTML(df1,df2),
        L(`${M(`F = ${num(F,3)} ${reject?'&gt;':'&lt;'} ${cv}`)} ⇒ ${decision(reject)} — ${reject?'the group means are not all equal.':'no evidence that the means differ.'}`,
          `${M(`F = ${num(F,3)} ${reject?'&gt;':'&lt;'} ${cv}`)} ⇐ ${decision(reject)} — ${reject?'المتوسطات ليست كلها متساوية.':'لا دليل على اختلاف المتوسطات.'}`)+g)};
  },

  /* ================= MATH 442 — Computational Methods for PDEs (FDM: exact, approximate, error) ================= */
  fdSchemeClassify(d){
    const sc=pick(['ftcs','btcs','cn']), r=pick(d===1?[0.25,0.5]:[0.25,0.4,0.5,0.6,0.8,1]);
    const U=(i,n)=>`u<sub>${i}</sub>${sup(n)}`, D2=n=>`(${U('i+1',n)} &minus; 2${U('i',n)} + ${U('i&minus;1',n)})`;
    const eq = sc==='ftcs' ? `${U('i','n+1')} = ${U('i','n')} + r${D2('n')}`
             : sc==='btcs' ? `${U('i','n+1')} &minus; r${D2('n+1')} = ${U('i','n')}`
             : `${U('i','n+1')} &minus; (r/2)${D2('n+1')} = ${U('i','n')} + (r/2)${D2('n')}`;
    const name={ftcs:Li('Explicit (FTCS)','صريحة (FTCS)'), btcs:Li('Implicit (BTCS)','ضمنية (BTCS)'), cn:Li('Implicit (Crank–Nicolson)','ضمنية (كرانك–نيكلسون)')}[sc];
    const stable = sc!=='ftcs' || r<=0.5;
    const stab = sc==='ftcs' ? (stable?Li(`stable (r = ${r} ≤ 1/2)`,`مستقرة (${M(`r = ${r} ≤ 1/2`)})`):Li(`unstable (r = ${r} > 1/2)`,`غير مستقرة (${M(`r = ${r} > 1/2`)})`))
                             : Li('unconditionally stable','مستقرة دون شرط');
    return {q:L(`Classify this scheme for u<sub>t</sub> = u<sub>xx</sub> (r = k/h${sup(2)} = ${r}) and state its stability:<br>${eq}`,
                `صنّف هذه الطريقة لمعادلة ${M('u<sub>t</sub> = u<sub>xx</sub>')} (${M(`r = k/h${sup(2)} = ${r}`)}) وبيّن استقرارها:<br>${M(eq)}`),
      a:`<b>${name}; ${stab}</b>`,
      s:steps(
        sc==='ftcs' ? L(`Only one unknown ${M(U('i','n+1'))} at the new level — it is computed directly from level n ⇒ <b>explicit</b>.`, `يوجد مجهول واحد ${M(U('i','n+1'))} في المستوى الجديد ويُحسب مباشرة من المستوى n ⇐ طريقة <b>صريحة</b>.`)
                    : L(`Several unknowns at level n + 1 (${M(`${U('i&minus;1','n+1')}, ${U('i','n+1')}, ${U('i+1','n+1')}`)}) ⇒ a linear system must be solved each step ⇒ <b>implicit</b>.`, `توجد عدة مجاهيل في المستوى ${M('n + 1')} ⇐ نحل نظاماً خطياً في كل خطوة ⇐ طريقة <b>ضمنية</b>.`),
        sc==='ftcs' ? L(`Von Neumann analysis gives the condition ${M('r ≤ 1/2')}: here ${M(`r = ${r}`)} ⇒ ${stable?'stable':'unstable'}.`, `تحليل فون نيومان يعطي الشرط ${M('r ≤ 1/2')}: هنا ${M(`r = ${r}`)} ⇐ ${stable?'مستقرة':'غير مستقرة'}.`)
                    : L(`Its amplification factor satisfies |G| ≤ 1 for every r ⇒ unconditionally stable${sc==='cn'?' (and second-order accurate in time)':''}.`, `معامل التضخيم يحقق ${M('|G| ≤ 1')} لكل ${M('r')} ⇐ مستقرة دون شرط${sc==='cn'?' (ودقتها من الرتبة الثانية في الزمن)':''}.`))};
  },
  fdFirstX(d){ return fdFirst(d,'x'); },
  fdFirstT(d){ return fdFirst(d,'t'); },
  fdSecondX(d){ return fdSecond(d,'x'); },
  fdSecondT(d){ return fdSecond(d,'t'); },
  fdmOdeUx(d){
    const p=d===1?1:pick([1,2]), c=p+1, u0=R(0,3), h=d===3?0.25:0.5, n=Math.round(1/h);     // u_x = c·x^p, exact u = x^(p+1) + u0
    const f=x=>c*x**p, ex=x=>x**(p+1)+u0, rows=[]; let u=u0;
    for(let i=0;i<n;i++){ const x=i*h, nu=u+h*f(x); rows.push(`${M(`u<sub>${i+1}</sub> = ${num(u)} + ${h}&middot;f(${x}) = ${num(nu)}`)}`); u=nu; }
    const err=Math.abs(ex(1)-u), fx=p===1?`${c}x`:`${c}x${sup(2)}`;
    const g=plot({x:[0,1], y:[0,ex(1)+0.5], curves:[{f:ex}], points:Array.from({length:n+1},(_,i)=>{ let v=u0; for(let j=0;j<i;j++) v+=h*f(j*h); return {x:i*h,y:v,cls:'apx'}; })});
    return {q:L(`Solve on [0, 1] by the forward difference with h = ${h}; give the exact value, the approximation of u(1) and the error:`,
                `حل على ${M('[0, 1]')} بالفروق الأمامية بخطوة ${M('h = '+h)}، وأوجد القيمة التامة والتقريبية لـ ${M('u(1)')} والخطأ:`)+'<br>'+
              align([['u<sub>x</sub>','=',fx],['u(0)','=',u0]], true),
      a:fdmAnswer(ex(1),u,err),
      s:steps(
        L(`<b>Exact:</b> integrate ⇒ ${M(`u(x) = x${sup(p+1)} + ${u0}`)} ⇒ ${M(`u(1) = ${num(ex(1))}`)}`, `<b>الحل التام:</b> بالتكامل ${M(`u(x) = x${sup(p+1)} + ${u0}`)} ⇐ ${M(`u(1) = ${num(ex(1))}`)}`),
        L(`<b>Scheme:</b> ${M(`(u<sub>i+1</sub> &minus; u<sub>i</sub>)/h = f(x<sub>i</sub>)`)} ⇒ ${M(`u<sub>i+1</sub> = u<sub>i</sub> + h f(x<sub>i</sub>)`)}`, `<b>المخطط:</b> ${M(`(u<sub>i+1</sub> &minus; u<sub>i</sub>)/h = f(x<sub>i</sub>)`)} ⇐ ${M(`u<sub>i+1</sub> = u<sub>i</sub> + h f(x<sub>i</sub>)`)}`),
        L(`<b>Approximate:</b> ${rows.join('; ')}`, `<b>الحل التقريبي:</b> ${rows.join('؛ ')}`),
        L(`<b>Error:</b> ${M(`|${num(ex(1))} &minus; ${num(u)}| = ${num(err)}`)}`, `<b>الخطأ:</b> ${M(`|${num(ex(1))} &minus; ${num(u)}| = ${num(err)}`)}`)+g)};
  },
  fdmOdeUt(d){
    const k=pick(d===1?[1]:[1,2]), u0=R(1,5), dt=pick(d===1?[0.1]:[0.1,0.2,0.25]), n=2, T=n*dt;          // u_t = −k u
    const ex=u0*Math.exp(-k*T), g1=1-k*dt, rows=[]; let u=u0;
    for(let i=0;i<n;i++){ const nu=u*g1; rows.push(M(`u<sub>${i+1}</sub> = ${num(u)} &times; ${num(g1)} = ${num(nu)}`)); u=nu; }
    const err=Math.abs(ex-u);
    const g=plot({x:[0,T], y:[0,u0*1.1], curves:[{f:t=>u0*Math.exp(-k*t)}], points:[0,1,2].map(i=>({x:i*dt,y:u0*g1**i,cls:'apx'}))});
    return {q:L(`Solve with the forward difference, Δt = ${dt}, and find u(${num(T)}): exact, approximate and error:`,
                `حل بالفروق الأمامية بخطوة ${M('Δt = '+dt)} وأوجد ${M(`u(${num(T)})`)}: التام والتقريبي والخطأ:`)+'<br>'+
              align([['u<sub>t</sub>','=',`&minus;${k===1?'':k}u`],['u(0)','=',u0]], true),
      a:fdmAnswer(ex,u,err),
      s:steps(
        L(`<b>Exact:</b> ${M(`u(t) = ${u0}e${sup(`&minus;${k===1?'':k}t`)}`)} ⇒ ${M(`u(${num(T)}) = ${num(ex)}`)}`, `<b>الحل التام:</b> ${M(`u(t) = ${u0}e${sup(`&minus;${k===1?'':k}t`)}`)} ⇐ ${M(`u(${num(T)}) = ${num(ex)}`)}`),
        L(`<b>Scheme:</b> ${M(`(u<sub>n+1</sub> &minus; u<sub>n</sub>)/Δt = &minus;${k===1?'':k}u<sub>n</sub>`)} ⇒ ${M(`u<sub>n+1</sub> = (1 &minus; ${k===1?'':k}Δt)u<sub>n</sub> = ${num(g1)}u<sub>n</sub>`)}`, `<b>المخطط:</b> ${M(`u<sub>n+1</sub> = (1 &minus; ${k===1?'':k}Δt)u<sub>n</sub> = ${num(g1)}u<sub>n</sub>`)}`),
        L(`<b>Approximate:</b> ${rows.join('; ')}`, `<b>الحل التقريبي:</b> ${rows.join('؛ ')}`),
        L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(u)}| = ${num(err)}`)}`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(u)}| = ${num(err)}`)}`)+g)};
  },
  fdmOdeUxx(d){
    const Lx=d===1?1:pick([1,2]), c=R(-3,3), h=Lx/2, x1=h, uL=Lx**4+c*Lx;                               // exact u = x⁴ + c x
    const apx=(uL-12*x1*x1*h*h)/2, ex=x1**4+c*x1, err=Math.abs(ex-apx), cx=c===0?'':`${term(c,'x')}`;
    const g=plot({x:[0,Lx], y:[Math.min(0,...[0,x1,Lx].map(t=>t**4+c*t))-0.5, Math.max(...[0,x1,Lx].map(t=>t**4+c*t),apx)+0.5], curves:[{f:t=>t**4+c*t}], points:[{x:0,y:0,cls:'apx'},{x:x1,y:apx,cls:'apx',label:'≈ '+num(apx)},{x:Lx,y:uL,cls:'apx'}]});
    return {q:L(`Solve by central differences with h = ${num(h)} and find u(${num(x1)}): exact, approximate and error:`,
                `حل بالفروق المركزية بخطوة ${M('h = '+num(h))} وأوجد ${M(`u(${num(x1)})`)}: التام والتقريبي والخطأ:`)+'<br>'+
              align([['u<sub>xx</sub>','=',`12x${sup(2)}`],['u(0)','=','0'],[`u(${Lx})`,'=',uL]], true),
      a:fdmAnswer(ex,apx,err),
      s:steps(
        L(`<b>Exact:</b> integrate twice ⇒ ${M(`u = x${sup(4)} + Ax + B`)}; the boundary values give ${M(`B = 0, A = ${c}`)} ⇒ ${M(`u(x) = x${sup(4)}${cx}`)}, ${M(`u(${num(x1)}) = ${num(ex)}`)}`,
          `<b>الحل التام:</b> بالتكامل مرتين ${M(`u = x${sup(4)} + Ax + B`)}، ومن الشروط الحدية ${M(`B = 0, A = ${c}`)} ⇐ ${M(`u(x) = x${sup(4)}${cx}`)}، ${M(`u(${num(x1)}) = ${num(ex)}`)}`),
        L(`<b>Scheme</b> at the single interior node ${M(`x<sub>1</sub> = ${num(x1)}`)}: ${M(`(u<sub>0</sub> &minus; 2u<sub>1</sub> + u<sub>2</sub>)/h${sup(2)} = 12x<sub>1</sub>${sup(2)}`)}`, `<b>المخطط</b> عند العقدة الداخلية ${M(`x<sub>1</sub> = ${num(x1)}`)}: ${M(`(u<sub>0</sub> &minus; 2u<sub>1</sub> + u<sub>2</sub>)/h${sup(2)} = 12x<sub>1</sub>${sup(2)}`)}`),
        L(`<b>Approximate:</b> ${M(`(0 &minus; 2u<sub>1</sub> + ${uL})/${num(h*h)} = ${num(12*x1*x1)}`)} ⇒ ${M(`u<sub>1</sub> = ${num(apx)}`)}`, `<b>الحل التقريبي:</b> ${M(`(0 &minus; 2u<sub>1</sub> + ${uL})/${num(h*h)} = ${num(12*x1*x1)}`)} ⇐ ${M(`u<sub>1</sub> = ${num(apx)}`)}`),
        L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)}`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)}`)+g)};
  },
  fdmOdeUtt(d){
    const k=pick(d===1?[0.5]:[0.2,0.5,1]), a=R(0,3), b=R(0,3);                                               // u_tt = 6t, exact u = t³ + b t + a
    const u1=a+k*b, u2=2*u1-a+k*k*6*k, ex=(2*k)**3+2*k*b+a, err=Math.abs(ex-u2), T=2*k;
    const g=plot({x:[0,T], y:[Math.min(0,a)-0.2, ex*1.1+0.2], curves:[{f:t=>t**3+b*t+a}], points:[{x:0,y:a,cls:'apx'},{x:k,y:u1,cls:'apx'},{x:T,y:u2,cls:'apx'}]});
    return {q:L(`Solve with central differences, Δt = ${k}, and find u(${num(T)}): exact, approximate and error:`,
                `حل بالفروق المركزية بخطوة ${M('Δt = '+k)} وأوجد ${M(`u(${num(T)})`)}: التام والتقريبي والخطأ:`)+'<br>'+
              align([['u<sub>tt</sub>','=','6t'],['u(0)','=',a],['u<sub>t</sub>(0)','=',b]], true),
      a:fdmAnswer(ex,u2,err),
      s:steps(
        L(`<b>Exact:</b> ${M(`u = t${sup(3)} + ${b}t + ${a}`)} ⇒ ${M(`u(${num(T)}) = ${num(ex)}`)}`, `<b>الحل التام:</b> ${M(`u = t${sup(3)} + ${b}t + ${a}`)} ⇐ ${M(`u(${num(T)}) = ${num(ex)}`)}`),
        L(`<b>Scheme:</b> ${M(`u<sub>n+1</sub> = 2u<sub>n</sub> &minus; u<sub>n&minus;1</sub> + Δt${sup(2)} f(t<sub>n</sub>)`)}; first step from Taylor: ${M(`u<sub>1</sub> = u<sub>0</sub> + Δt u&prime;(0) + (Δt${sup(2)}/2) f(0) = ${num(u1)}`)}`,
          `<b>المخطط:</b> ${M(`u<sub>n+1</sub> = 2u<sub>n</sub> &minus; u<sub>n&minus;1</sub> + Δt${sup(2)} f(t<sub>n</sub>)`)}؛ الخطوة الأولى من تايلور: ${M(`u<sub>1</sub> = u<sub>0</sub> + Δt u&prime;(0) + (Δt${sup(2)}/2) f(0) = ${num(u1)}`)}`),
        L(`<b>Approximate:</b> ${M(`u<sub>2</sub> = 2(${num(u1)}) &minus; ${a} + ${num(k*k)} &times; ${num(6*k)} = ${num(u2)}`)}`, `<b>الحل التقريبي:</b> ${M(`u<sub>2</sub> = 2(${num(u1)}) &minus; ${a} + ${num(k*k)} &times; ${num(6*k)} = ${num(u2)}`)}`),
        L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(u2)}| = ${num(err)}`)}`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(u2)}| = ${num(err)}`)}`)+g)};
  },
  fdmAdvection(d){
    const [c,h,k]=pick(d===1?[[1,0.5,0.25]]:[[1,0.5,0.25],[2,0.5,0.125],[1,0.2,0.1],[1,1,0.5]]), xi=pick([1,1.5,2]), r=c*k/h;   // u_t + c u_x = 0, u(x,0) = x²
    const apx=xi*xi-r*(xi*xi-(xi-h)**2), ex=(xi-c*k)**2, err=Math.abs(ex-apx);
    const g=plot({x:[0,xi+1], y:[0,(xi+1)**2], curves:[{f:t=>t*t, cls:'c2'},{f:t=>(t-c*k)**2}], points:[{x:xi,y:apx,cls:'apx',label:'≈ '+num(apx)}]});
    return {q:L(`Use the upwind scheme with h = ${h}, k = ${k} to find u(${xi}, ${k}): exact, approximate and error:`,
                `استخدم مخطط الاتجاه المعاكس بخطوتين ${M(`h = ${h}, k = ${k}`)} لإيجاد ${M(`u(${xi}, ${k})`)}: التام والتقريبي والخطأ:`)+'<br>'+
              align([[`u<sub>t</sub> + ${c===1?'':c}u<sub>x</sub>`,'=','0'],['u(x, 0)','=',`x${sup(2)}`]], true),
      a:fdmAnswer(ex,apx,err),
      s:steps(
        L(`<b>Exact:</b> the profile moves right with speed ${c}: ${M(`u(x, t) = (x &minus; ${c===1?'':c}t)${sup(2)}`)} ⇒ ${M(`u(${xi}, ${k}) = (${xi} &minus; ${num(c*k)})${sup(2)} = ${num(ex)}`)}`,
          `<b>الحل التام:</b> الموجة تنتقل يميناً بسرعة ${M(c)}: ${M(`u(x, t) = (x &minus; ${c===1?'':c}t)${sup(2)}`)} ⇐ ${M(`u(${xi}, ${k}) = (${xi} &minus; ${num(c*k)})${sup(2)} = ${num(ex)}`)}`),
        L(`<b>Scheme</b> (c > 0): ${M(`u<sub>i</sub>${sup('n+1')} = u<sub>i</sub>${sup('n')} &minus; r(u<sub>i</sub>${sup('n')} &minus; u<sub>i&minus;1</sub>${sup('n')})`)}, ${M(`r = ck/h = ${num(r)} ≤ 1`)}`, `<b>المخطط</b> (${M('c > 0')}): ${M(`u<sub>i</sub>${sup('n+1')} = u<sub>i</sub>${sup('n')} &minus; r(u<sub>i</sub>${sup('n')} &minus; u<sub>i&minus;1</sub>${sup('n')})`)}، ${M(`r = ck/h = ${num(r)} ≤ 1`)}`),
        L(`<b>Approximate:</b> ${M(`u = ${num(xi*xi)} &minus; ${num(r)}(${num(xi*xi)} &minus; ${num((xi-h)**2)}) = ${num(apx)}`)}`, `<b>الحل التقريبي:</b> ${M(`u = ${num(xi*xi)} &minus; ${num(r)}(${num(xi*xi)} &minus; ${num((xi-h)**2)}) = ${num(apx)}`)}`),
        L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)}`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)}`)+g)};
  },
  fdmFamous(d){
    const wave=d>1&&Math.random()<0.5, h=0.25, xi=pick([0.25,0.5]), S=Math.SQRT1_2;          // u(x,0) = sin(πx) on [0,1], zero ends
    const ul=Math.sin(Math.PI*(xi-h)), uc=Math.sin(Math.PI*xi), ur=Math.sin(Math.PI*(xi+h));
    let r, k, apx, ex, eqn, exf, sch, st;
    if(!wave){ r=pick([0.25,0.5]); k=r*h*h; apx=uc+r*(ur-2*uc+ul); ex=Math.exp(-(Math.PI**2)*k)*uc;
      eqn='u<sub>t</sub> = u<sub>xx</sub>'; exf=`u = e${sup('&minus;&pi;'+sup(2)+'t')} sin(&pi;x)`;
      sch=`u<sub>i</sub>${sup(1)} = u<sub>i</sub>${sup(0)} + r(u<sub>i+1</sub>${sup(0)} &minus; 2u<sub>i</sub>${sup(0)} + u<sub>i&minus;1</sub>${sup(0)})`; st=`r = k/h${sup(2)} = ${r}`; }
    else { r=0.5; k=r*h; apx=uc+(r*r/2)*(ur-2*uc+ul); ex=Math.cos(Math.PI*k)*uc;
      eqn='u<sub>tt</sub> = u<sub>xx</sub>, u<sub>t</sub>(x, 0) = 0'; exf='u = cos(&pi;t) sin(&pi;x)';
      sch=`u<sub>i</sub>${sup(1)} = u<sub>i</sub>${sup(0)} + (r${sup(2)}/2)(u<sub>i+1</sub>${sup(0)} &minus; 2u<sub>i</sub>${sup(0)} + u<sub>i&minus;1</sub>${sup(0)})`; st=`r = k/h = ${r}`; }
    const err=Math.abs(ex-apx);
    const g=plot({x:[0,1], y:[0,1.1], curves:[{f:t=>Math.sin(Math.PI*t), cls:'c2'},{f:t=>(wave?Math.cos(Math.PI*k):Math.exp(-(Math.PI**2)*k))*Math.sin(Math.PI*t)}], points:[{x:xi,y:apx,cls:'apx',label:'≈ '+num(apx)}]});
    const nm=wave?L('wave equation','معادلة الموجة'):L('heat equation','معادلة الحرارة');
    const rows=[[wave?'u<sub>tt</sub>':'u<sub>t</sub>','=','u<sub>xx</sub>,&nbsp; 0 &lt; x &lt; 1'],['u(x, 0)','=','sin(&pi;x)'],...(wave?[['u<sub>t</sub>(x, 0)','=','0']]:[]),['u(0, t)','=','u(1, t) = 0']];
    return {q:L(`The ${wave?'wave':'heat'} equation below. With h = ${h}, k = ${num(k,6)} take one time step and find u(${xi}, ${num(k,6)}): exact, approximate and error:`,
                `${wave?'معادلة الموجة':'معادلة الحرارة'} التالية. بخطوتين ${M(`h = ${h}, k = ${num(k,6)}`)} نفّذ خطوة زمنية واحدة وأوجد ${M(`u(${xi}, ${num(k,6)})`)}: التام والتقريبي والخطأ:`)+'<br>'+align(rows, true),
      a:fdmAnswer(ex,apx,err),
      s:steps(
        L(`<b>Exact</b> (separation of variables): ${M(exf)} ⇒ ${M(`u(${xi}, ${num(k,6)}) = ${num(ex)}`)}`, `<b>الحل التام</b> (فصل المتغيرات) لـ${nm}: ${M(exf)} ⇐ ${M(`u(${xi}, ${num(k,6)}) = ${num(ex)}`)}`),
        L(`<b>Grid values</b> at t = 0: ${M(`u(${num(xi-h)}) = ${num(ul)}, u(${xi}) = ${num(uc)}, u(${num(xi+h)}) = ${num(ur)}`)} (note ${M(`sin(&pi;/4) = ${num(S)}`)})`, `<b>قيم الشبكة</b> عند ${M('t = 0')}: ${M(`u(${num(xi-h)}) = ${num(ul)}, u(${xi}) = ${num(uc)}, u(${num(xi+h)}) = ${num(ur)}`)}`),
        L(`<b>Approximate</b> (${M(st)}): ${M(sch)} = ${M(num(apx))}`, `<b>الحل التقريبي</b> (${M(st)}): ${M(sch)} = ${M(num(apx))}`),
        L(`<b>Error:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)}`, `<b>الخطأ:</b> ${M(`|${num(ex)} &minus; ${num(apx)}| = ${num(err)}`)}`)+g)};
  },

  /* ================= QM 102 — Principles of Quantitative Methods (2), Business Administration ================= */
  numberSets(d){
    const pool=[
      ['7',['N','Z','Q','R']], ['&minus;3',['Z','Q','R']], ['0',['Z','Q','R']], [frac(2,5),['Q','R']], ['0.75',['Q','R']],
      ['&minus;'+frac(7,3),['Q','R']], [sq(2),['I','R']], ['&pi;',['I','R']], [sq(9),['N','Z','Q','R']],
      ['&minus;'+sq(16),['Z','Q','R']], [sq(5),['I','R']], ['0.<span style="text-decoration:overline">3</span>',['Q','R']],
    ];
    const [h,sets]=pick(d===1?pool.slice(0,6):pool), NAME={N:'ℕ',Z:'ℤ',Q:'ℚ',I:'ℚ′',R:'ℝ'};
    const why = sets.includes('I') ? L('It cannot be written as a fraction p/q of integers (non-terminating, non-repeating decimal) ⇒ irrational ℚ′.', `لا يمكن كتابته على صورة كسر ${M('p/q')} لعددين صحيحين (عشري غير منتهٍ وغير دوري) ⇐ غير نسبي ${M('ℚ′')}.`)
            : sets.includes('Z') ? L('It is a whole number (after simplifying) ⇒ an integer, hence also rational and real.', 'هو عدد صحيح (بعد التبسيط) ⇐ صحيح، وبالتالي نسبي وحقيقي.')
            : L('It can be written as a fraction p/q of integers (terminating or repeating decimal) ⇒ rational.', `يمكن كتابته على صورة ${M('p/q')} (عشري منتهٍ أو دوري) ⇐ نسبي.`);
    return {q:L(`To which sets does ${h} belong? (ℕ natural, ℤ integers, ℚ rational, ℚ′ irrational, ℝ real)`,
                `إلى أي المجموعات ينتمي العدد ${M(h)}؟ (${M('ℕ')} طبيعية، ${M('ℤ')} صحيحة، ${M('ℚ')} نسبية، ${M('ℚ′')} غير نسبية، ${M('ℝ')} حقيقية)`),
      a:`<b>${sets.map(x=>NAME[x]).join(', ')}</b>`,
      s:steps(why, L(`ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ and ℚ′ ⊂ ℝ; every number here is real.`, `${M('ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ')} و ${M('ℚ′ ⊂ ℝ')}؛ كل الأعداد هنا حقيقية.`))};
  },
  intervalNotation(d){
    const a=R(-9,5), b=a+R(1,8); const t=pick(d===1?['between','ge','lt']:['between','ge','le','gt','lt']);
    const lc=pick([true,false]), rc=pick([true,false]);
    const H={lt:'&lt;',le:'&le;',gt:'&gt;',ge:'&ge;'};
    const ineq = t==='between' ? `${sgn(a)} ${lc?'&le;':'&lt;'} x ${rc?'&le;':'&lt;'} ${sgn(b)}` : `x ${H[t]} ${sgn(a)}`;
    const iv = t==='between' ? `${lc?'[':'('}${sgn(a)}, ${sgn(b)}${rc?']':')'}`
             : t==='ge' ? `[${sgn(a)}, &infin;)` : t==='gt' ? `(${sgn(a)}, &infin;)` : t==='le' ? `(&minus;&infin;, ${sgn(a)}]` : `(&minus;&infin;, ${sgn(a)})`;
    return {q:L(`Write in interval notation: ${ineq}`, `اكتب باستخدام الفترات: ${M(ineq)}`), a:`<b>${iv}</b>`,
      s:steps(L('Square bracket [ ] = endpoint included (≤, ≥); parenthesis ( ) = not included (&lt;, &gt;); ∞ always takes a parenthesis.',
                `القوس المربع ${M('[ ]')} يعني أن الطرف داخل الفترة (${M('≤, ≥')})، والقوس الدائري ${M('( )')} يعني أنه خارجها (${M('&lt;, &gt;')})؛ واللانهاية دائماً بقوس دائري.`),
              L(`${M(ineq)} ⇒ ${M(iv)}`, `${M(ineq)} ⇐ ${M(iv)}`)+
              (t==='between' ? intervalLine(a,b,lc&&rc,false) : numberLine(a, t==='lt'?'<':t==='le'?'<=':t==='gt'?'>':'>=')))};
  },
  breakEven(d){
    const x=R(d===1?50:100, d===1?400:2000), m=R(2,d===1?10:40), v=R(5,60), p=v+m, F=m*x;
    const C=t=>F+v*t, Rv=t=>p*t;
    const g=plot({x:[0,2*x], y:[0,Rv(2*x)], curves:[{f:Rv},{f:C,cls:'c2'}], points:[{x, y:Rv(x), label:`(${x}, ${Rv(x)})`}]});
    return {q:L(`A company has fixed costs of ${F} SAR. Each unit costs ${v} SAR to produce and sells for ${p} SAR. Find the break-even quantity.`,
                `شركة تكاليفها الثابتة ${M(F)} ريال، وتكلفة إنتاج الوحدة ${M(v)} ريال، وسعر بيعها ${M(p)} ريال. أوجد كمية التعادل.`),
      a:`<b>x = ${x}</b>`,
      s:steps(L(`Cost ${M(`C(x) = ${F} + ${v}x`)}, revenue ${M(`R(x) = ${p}x`)}.`, `التكلفة ${M(`C(x) = ${F} + ${v}x`)}، والإيراد ${M(`R(x) = ${p}x`)}.`),
              L(`Break-even: ${M(`R(x) = C(x) ⇒ ${p}x = ${F} + ${v}x ⇒ ${m}x = ${F}`)}`, `نقطة التعادل: ${M(`R(x) = C(x) ⇒ ${p}x = ${F} + ${v}x ⇒ ${m}x = ${F}`)}`),
              L(`${M(`x = ${F} / ${m} = ${x}`)} units (revenue = cost = ${Rv(x)} SAR).`, `${M(`x = ${F} / ${m} = ${x}`)} وحدة (الإيراد = التكلفة = ${M(Rv(x))} ريال).`)+g)};
  },
  absEquation(d){
    const a=pick(d===1?[1]:[1,2]), c=a*R(1,6), x1=R(-6,6), b=c-a*x1, x2=x1-2*c/a, lo=Math.min(x1,x2), hi=Math.max(x1,x2);
    const inner=`${lead(a,'x')}${term(b,'')}`;
    const g=plot({x:[lo-3,hi+3], y:[-1,c+4], curves:[{f:t=>Math.abs(a*t+b)},{f:()=>c,cls:'c2'}], points:[{x:lo,y:c,label:`x = ${lo}`},{x:hi,y:c,label:`x = ${hi}`}]});
    return {q:L(`Solve |${inner}| = ${c}`, `حل المعادلة ${M(`|${inner}| = ${c}`)}`), a:`<b>x = ${sgn(lo)}, ${sgn(hi)}</b>`,
      s:steps(L(`${M(`|u| = c`)} (c &gt; 0) means ${M('u = c')} or ${M('u = &minus;c')}.`, `${M('|u| = c')} حيث ${M('c &gt; 0')} تعني ${M('u = c')} أو ${M('u = &minus;c')}.`),
              M(`${inner} = ${c} ⇒ x = ${sgn((c-b)/a)}`), M(`${inner} = &minus;${c} ⇒ x = ${sgn((-c-b)/a)}`),
              L(`Graph: y = |${inner}| meets y = ${c} at both solutions.`, `بيانياً: ${M(`y = |${inner}|`)} يقطع ${M(`y = ${c}`)} عند الحلين.`)+g)};
  },
  absInequality(d){
    const a=d===1?1:pick([1,2]), outside=Math.random()<0.5, closed=Math.random()<0.5;
    let b=R(-6,6), c=R(1,6); if(a===2 && (b+c)%2) c++;                     // keeps the endpoints (b ± c)/a whole numbers
    const lo=(b-c)/a, hi=(b+c)/a, inner=`${lead(a,'x')}${term(-b,'')}`;
    const op = outside ? (closed?'&ge;':'&gt;') : (closed?'&le;':'&lt;');
    const ans = outside ? `(&minus;&infin;, ${sgn(lo)}${closed?']':')'} &cup; ${closed?'[':'('}${sgn(hi)}, &infin;)` : `${closed?'[':'('}${sgn(lo)}, ${sgn(hi)}${closed?']':')'}`;
    return {q:L(`Solve and graph: |${inner}| ${op} ${c}`, `حل المتباينة ومثّل الحل: ${M(`|${inner}| ${op} ${c}`)}`), a:`<b>${ans}</b>`,
      s:steps(outside ? L(`${M(`|u| ${op} c`)} means ${M(`u ${closed?'&le;':'&lt;'} &minus;c`)} or ${M(`u ${op} c`)}.`, `${M(`|u| ${op} c`)} تعني ${M(`u ${closed?'&le;':'&lt;'} &minus;c`)} أو ${M(`u ${op} c`)}.`)
                      : L(`${M(`|u| ${op} c`)} means ${M(`&minus;c ${op} u ${op} c`)}.`, `${M(`|u| ${op} c`)} تعني ${M(`&minus;c ${op} u ${op} c`)}.`),
              outside ? M(`${inner} ${closed?'&le;':'&lt;'} &minus;${c} ⇒ x ${closed?'&le;':'&lt;'} ${sgn(lo)}; &nbsp; ${inner} ${op} ${c} ⇒ x ${op} ${sgn(hi)}`)
                      : M(`&minus;${c} ${op} ${inner} ${op} ${c} ⇒ ${sgn(lo)} ${op} x ${op} ${sgn(hi)}`),
              L(`Interval notation: ${M(ans)}`, `بالفترات: ${M(ans)}`)+intervalLine(lo,hi,closed,outside))};
  },
  functionDomain(d){
    const t=pick(d===1?['poly','sqrtR','rat1']:['poly','sqrtR','sqrtL','rat1','rat2']), a=nz(-6,6), b=R(1,6);
    let f, dom, why;
    if(t==='poly'){ f=`${lead(a,'x'+sup(2))}${term(b,'x')}${term(R(-9,9),'')}`; dom='(&minus;&infin;, &infin;)';
      why=L('A polynomial is defined for every real x.', 'كثيرة الحدود معرّفة لكل عدد حقيقي x.'); }
    else if(t==='sqrtR'){ f=`&radic;(x${term(-a,'')})`; dom=`[${sgn(a)}, &infin;)`;
      why=L(`The radicand must be ≥ 0: ${M(`x${term(-a,'')} &ge; 0 ⇒ x &ge; ${sgn(a)}`)}`, `ما تحت الجذر ≥ 0: ${M(`x${term(-a,'')} &ge; 0 ⇒ x &ge; ${sgn(a)}`)}`); }
    else if(t==='sqrtL'){ f=`&radic;(${sgn(a)} &minus; x)`; dom=`(&minus;&infin;, ${sgn(a)}]`;
      why=L(`The radicand must be ≥ 0: ${M(`${sgn(a)} &minus; x &ge; 0 ⇒ x &le; ${sgn(a)}`)}`, `ما تحت الجذر ≥ 0: ${M(`${sgn(a)} &minus; x &ge; 0 ⇒ x &le; ${sgn(a)}`)}`); }
    else if(t==='rat1'){ f=frac(`x${term(b,'')}`, `x${term(-a,'')}`); dom=`(&minus;&infin;, ${sgn(a)}) &cup; (${sgn(a)}, &infin;)`;
      why=L(`The denominator cannot be 0: ${M(`x &ne; ${sgn(a)}`)}`, `المقام لا يساوي صفراً: ${M(`x &ne; ${sgn(a)}`)}`); }
    else { const k=Math.abs(a); f=frac(`x${term(b,'')}`, `x${sup(2)} &minus; ${k*k}`); dom=`(&minus;&infin;, &minus;${k}) &cup; (&minus;${k}, ${k}) &cup; (${k}, &infin;)`;
      why=L(`${M(`x${sup(2)} &minus; ${k*k} = 0 ⇒ x = &plusmn;${k}`)} must be excluded.`, `نستبعد ${M(`x = &plusmn;${k}`)} لأن ${M(`x${sup(2)} &minus; ${k*k} = 0`)} عندهما.`); }
    return {q:L(`Find the domain of f(x) = ${f}`, `أوجد مجال الدالة ${M(`f(x) = ${f}`)}`), a:`<b>${dom}</b>`,
      s:steps(why, L(`Domain: ${M(dom)}`, `المجال: ${M(dom)}`))};
  },
  funcOps(d){
    const a=nz(-5,5), b=R(-6,6), c=R(-5,5), k=R(-3,3), op=pick(d===1?['sum','prod']:['sum','prod','fog','gof']);
    const f=t=>a*t+b, g=t=>t*t+c, fs=`${lead(a,'x')}${term(b,'')}`, gs=`x${sup(2)}${term(c,'')}`;
    const V={sum:f(k)+g(k), prod:f(k)*g(k), fog:f(g(k)), gof:g(f(k))}[op];
    const N={sum:`(f + g)(${k})`, prod:`(f &middot; g)(${k})`, fog:`(f &#8728; g)(${k})`, gof:`(g &#8728; f)(${k})`}[op];
    const work = op==='sum' ? `f(${k}) + g(${k}) = ${sgn(f(k))} + ${sgn(g(k))} = ${sgn(V)}`
               : op==='prod' ? `f(${k}) &middot; g(${k}) = (${sgn(f(k))})(${sgn(g(k))}) = ${sgn(V)}`
               : op==='fog' ? `g(${k}) = ${sgn(g(k))} ⇒ f(${sgn(g(k))}) = ${sgn(V)}` : `f(${k}) = ${sgn(f(k))} ⇒ g(${sgn(f(k))}) = ${sgn(V)}`;
    return {q:L('Given:','إذا كان:')+'<br>'+align([['f(x)','=',fs],['g(x)','=',gs]])+'<br>'+L(`Find ${N}.`, `أوجد ${M(N)}.`), a:`<b>${sgn(V)}</b>`,
      s:steps(L(`${M(N)}: ${op==='fog'||op==='gof'?'evaluate the inner function first.':'evaluate each function at the point.'}`, `${M(N)}: ${op==='fog'||op==='gof'?'نحسب الدالة الداخلية أولاً.':'نحسب قيمة كل دالة عند النقطة.'}`), M(work))};
  },
  evenOdd(d){
    const kind=pick(['even','odd','neither']), coefs={};
    const powsE=[0,2,4], powsO=[1,3,5];
    if(kind==='even') shuffled(powsE).slice(0,2).forEach(p=>coefs[p]=nz(-6,6));
    else if(kind==='odd') shuffled(powsO).slice(0,2).forEach(p=>coefs[p]=nz(-6,6));
    else { coefs[pick(powsE.slice(1))]=nz(-6,6); coefs[pick(powsO)]=nz(-6,6); }
    const ps=Object.keys(coefs).map(Number).sort((x,y)=>y-x);
    const mono=p=>p===0?'':p===1?'x':'x'+sup(p);
    const poly=ps.map((p,i)=>i===0?lead(coefs[p],mono(p)):term(coefs[p],mono(p))).join('');
    const neg=ps.map((p,i)=>{ const c=p%2?-coefs[p]:coefs[p]; return i===0?lead(c,mono(p)):term(c,mono(p)); }).join('');
    const name={even:Li('Even','زوجية'), odd:Li('Odd','فردية'), neither:Li('Neither','ليست زوجية ولا فردية')}[kind];
    return {q:L(`Is f(x) = ${poly} even, odd, or neither?`, `هل الدالة ${M(`f(x) = ${poly}`)} زوجية أم فردية أم غير ذلك؟`), a:`<b>${name}</b>`,
      s:steps(L(`Compute ${M('f(&minus;x)')}: ${M(`f(&minus;x) = ${neg}`)}`, `نحسب ${M('f(&minus;x)')}: ${M(`f(&minus;x) = ${neg}`)}`),
              kind==='even' ? L(`${M('f(&minus;x) = f(x)')} ⇒ even (symmetric about the y-axis).`, `${M('f(&minus;x) = f(x)')} ⇐ زوجية (متماثلة حول محور y).`)
            : kind==='odd' ? L(`${M('f(&minus;x) = &minus;f(x)')} ⇒ odd (symmetric about the origin).`, `${M('f(&minus;x) = &minus;f(x)')} ⇐ فردية (متماثلة حول نقطة الأصل).`)
            : L(`${M('f(&minus;x)')} is neither f(x) nor −f(x) ⇒ neither.`, `${M('f(&minus;x)')} لا تساوي ${M('f(x)')} ولا ${M('&minus;f(x)')} ⇐ ليست زوجية ولا فردية.`))};
  },
  inverseFunction(d){
    const a=nz(2,6)*(d===1?1:pick([1,-1])), b=nz(-9,9), fs=`${lead(a,'x')}${term(b,'')}`;
    const inv=frac(`x${term(-b,'')}`, a<0?`&minus;${Math.abs(a)}`:a);
    return {q:L(`Find the inverse of f(x) = ${fs}`, `أوجد معكوس الدالة ${M(`f(x) = ${fs}`)}`), a:`<b>f${sup('&minus;1')}(x) = ${inv}</b>`,
      s:steps(L(`Write ${M(`y = ${fs}`)} and swap x and y: ${M(`x = ${lead(a,'y')}${term(b,'')}`)}`, `نكتب ${M(`y = ${fs}`)} ونبدّل x و y: ${M(`x = ${lead(a,'y')}${term(b,'')}`)}`),
              L(`Solve for y: ${M(`y = ${inv}`)}`, `نحل بالنسبة لـ y: ${M(`y = ${inv}`)}`),
              L(`Check: ${M(`f(f${sup('&minus;1')}(x)) = x`)}.`, `تحقق: ${M(`f(f${sup('&minus;1')}(x)) = x`)}.`))};
  },
  gaussJordan(d){
    const n=d===3?3:2, X=Array.from({length:n},()=>R(-5,5));
    let A; do{ A=Array.from({length:n},()=>Array.from({length:n},()=>R(-4,4))); }while(Math.abs(detN(A))<1);
    const B=A.map(r=>r.reduce((s,v,j)=>s+v*X[j],0));
    // exact Gauss–Jordan on fractions, recording each row operation
    let Mx=A.map((r,i)=>[...r,B[i]].map(v=>[v,1])); const ops=[];
    const show=()=>aug(Mx.map(r=>r.map(([p,q])=>fracStr(p,q))));
    const rn=i=>`R<sub>${i+1}</sub>`, fq=([p,q])=>fracStr(p,q);
    for(let c=0;c<n;c++){
      let r=c; while(Mx[r][c][0]===0) r++;
      if(r!==c){ [Mx[r],Mx[c]]=[Mx[c],Mx[r]]; ops.push(M(`${rn(c)} &harr; ${rn(r)}`)+show()); }
      const [pp,pq]=Mx[c][c];
      if(!(pp===pq)){ Mx[c]=Mx[c].map(([p,q])=>rDiv([p,q],[pp,pq])); ops.push(M(`${rn(c)} &rarr; ${rn(c)} &divide; ${fq([pp,pq])}`)+show()); }
      for(let i=0;i<n;i++){ if(i===c||Mx[i][c][0]===0) continue; const m=Mx[i][c];
        Mx[i]=Mx[i].map((v,j)=>rSub(v, rMul(m, Mx[c][j]))); ops.push(M(`${rn(i)} &rarr; ${rn(i)} &minus; (${fq(m)})${rn(c)}`)+show()); }
    }
    const vars=['x','y','z'].slice(0,n), eqs=A.map((r,i)=>[linN(r,vars),'=',sgn(B[i])]);
    return {q:L('Solve by Gauss–Jordan elimination:','حل بطريقة جاوس–جوردان:')+'<br>'+align(eqs, true),
      a:`<b>(${vars.join(', ')}) = (${X.map(sgn).join(', ')})</b>`,
      s:steps(L('Write the augmented matrix [A | b]:','نكتب المصفوفة الموسّعة [A | b]:')+aug(A.map((r,i)=>[...r,B[i]].map(sgn))), ...ops,
              L(`Reduced form gives ${M(vars.map((v,i)=>`${v} = ${sgn(X[i])}`).join(', '))}.`, `الصورة المختزلة تعطي ${M(vars.map((v,i)=>`${v} = ${sgn(X[i])}`).join('، '))}.`))};
  },
  matrixSubtract(d){
    const hi=d===3?12:9, A=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)], B=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)];
    return {q:`${mat(A)} &minus; ${mat(B)} =`, a:`<b>${mat(A.map((x,i)=>x-B[i]))}</b>`,
      s:steps(L('Subtract corresponding entries.', 'نطرح العناصر المتناظرة.'), M(A.map((x,i)=>`${sgn(x)} &minus; (${sgn(B[i])}) = ${sgn(x-B[i])}`).join('; ')))};
  },
  inverseSolve(d){
    const k=nz(-4,4), m=R(-3,3); let A=[1+k*m,k,m,1];                    // det = 1 by construction
    if(Math.random()<0.5) A=[A[3],A[2],A[1],A[0]];
    if(d>1 && Math.random()<0.5) A=[A[1],A[0],A[3],A[2]];
    const det=A[0]*A[3]-A[1]*A[2], I=[A[3]*det,-A[1]*det,-A[2]*det,A[0]*det], x=R(-6,6), y=R(-6,6);
    const b1=A[0]*x+A[1]*y, b2=A[2]*x+A[3]*y;
    return {q:L('Solve using the inverse matrix:','حل باستخدام معكوس المصفوفة:')+'<br>'+align([[linN([A[0],A[1]],['x','y']),'=',sgn(b1)],[linN([A[2],A[3]],['x','y']),'=',sgn(b2)]], true),
      a:`<b>(x, y) = (${sgn(x)}, ${sgn(y)})</b>`,
      s:steps(L(`Matrix form ${M('AX = B')} with A = ${mat(A)}, B = ${mat([b1,b2],1)}.`, `بالصورة ${M('AX = B')} حيث A = ${mat(A)}، B = ${mat([b1,b2],1)}.`),
              L(`${M(`det A = (${sgn(A[0])})(${sgn(A[3])}) &minus; (${sgn(A[1])})(${sgn(A[2])}) = ${det}`)}`, `${M(`det A = (${sgn(A[0])})(${sgn(A[3])}) &minus; (${sgn(A[1])})(${sgn(A[2])}) = ${det}`)}`),
              L(`${M('A'+sup('&minus;1')+' = (1/det)')} ${mat([A[3],-A[1],-A[2],A[0]])} = ${mat(I)}`, `${M('A'+sup('&minus;1')+' = (1/det)')} ${mat([A[3],-A[1],-A[2],A[0]])} = ${mat(I)}`),
              L(`${M('X = A'+sup('&minus;1')+'B')} = ${mat([x,y],1)}`, `${M('X = A'+sup('&minus;1')+'B')} = ${mat([x,y],1)}`))};
  },

  /* ================= STAT 312 — Probability Theory (2): bivariate random variables ================= */
  jointConstant(d){
    if(d===3 && Math.random()<0.5){                                   // continuous: f(x,y) = c·x·y on 0<x<a, 0<y<b ⇒ c = 4/(a²b²)
      const a=R(1,3), b=R(1,3), c=fracStr(4, a*a*b*b);
      return {q:L(`f(x, y) = c&middot;xy for 0 &lt; x &lt; ${a}, 0 &lt; y &lt; ${b} (0 elsewhere) is a joint pdf. Find c.`, `${M(`f(x, y) = c&middot;xy`)} عندما ${M(`0 &lt; x &lt; ${a}, 0 &lt; y &lt; ${b}`)} (وصفر خلاف ذلك) دالة كثافة مشتركة. أوجد ${M('c')}.`),
        a:`<b>c = ${c}</b>`,
        s:steps(L(`The total probability is 1: ${M(`&int;<sub>0</sub><sup>${b}</sup>&int;<sub>0</sub><sup>${a}</sup> c&middot;xy dx dy = 1`)}`, `مجموع الاحتمال يساوي 1: ${M(`&int;<sub>0</sub><sup>${b}</sup>&int;<sub>0</sub><sup>${a}</sup> c&middot;xy dx dy = 1`)}`),
                M(`c &middot; (${a}${sup(2)}/2)(${b}${sup(2)}/2) = c &middot; ${fracStr(a*a*b*b,4)} = 1`),
                L(`${M(`c = ${c}`)}`, `${M(`c = ${c}`)}`))};
    }
    const xs=[1,2,...(d>1?[3]:[])], ys=[1,2], a=R(1,3), b=R(1,3);
    const S=xs.reduce((s,x)=>s+ys.reduce((t,y)=>t+a*x+b*y,0),0), fx=`${a===1?'':a}x + ${b===1?'':b}y`;
    return {q:L(`f(x, y) = c(${fx}) for x = ${xs.join(', ')} and y = ${ys.join(', ')} is a joint pmf. Find c.`, `${M(`f(x, y) = c(${fx})`)} عندما ${M(`x = ${xs.join(', ')}`)} و ${M(`y = ${ys.join(', ')}`)} دالة احتمال مشتركة. أوجد ${M('c')}.`),
      a:`<b>c = ${fracStr(1,S)}</b>`,
      s:steps(L(`The probabilities add up to 1: ${M(`&sum;&sum; c(${fx}) = 1`)}`, `مجموع الاحتمالات يساوي 1: ${M(`&sum;&sum; c(${fx}) = 1`)}`),
              M(`c(${xs.flatMap(x=>ys.map(y=>a*x+b*y)).join(' + ')}) = ${S}c = 1`), M(`c = ${fracStr(1,S)}`))};
  },
  jointProb(d){
    const J=jointTable(d), t=pick(['cell','sumLe','xLe']);
    let w=0, desc, descAr;
    if(t==='cell'){ const i=R(0,J.xs.length-1), j=R(0,J.ys.length-1); w=J.w[j][i]; desc=`P(X = ${J.xs[i]}, Y = ${J.ys[j]})`; descAr=desc; }
    else if(t==='sumLe'){ const k=R(1,J.xs.length+J.ys.length-2); J.ys.forEach((y,j)=>J.xs.forEach((x,i)=>{ if(x+y<=k) w+=J.w[j][i]; })); desc=`P(X + Y &le; ${k})`; descAr=desc; }
    else { const k=J.xs[R(0,J.xs.length-2)], y0=pick(J.ys); J.xs.forEach((x,i)=>{ if(x<=k) w+=J.w[J.ys.indexOf(y0)][i]; }); desc=`P(X &le; ${k}, Y = ${y0})`; descAr=desc; }
    return {q:L(`The joint pmf of X and Y is given below. Find ${desc}.`, `دالة الاحتمال المشتركة لـ ${M('X')} و ${M('Y')} في الجدول. أوجد ${M(descAr)}.`)+J.html,
      a:`<b>${fracStr(w,J.N)}</b>`,
      s:steps(L(`Add the cells of the table that satisfy the condition ${M(desc)}.`, `نجمع خلايا الجدول التي تحقق الشرط ${M(desc)}.`), M(`${desc} = ${fracStr(w,J.N)}`))};
  },
  marginalDist(d){
    const J=jointTable(d), ofX=Math.random()<0.5, V=ofX?J.xs:J.ys, m=ofX?J.mx:J.my, v=ofX?'X':'Y', o=ofX?'y':'x';
    const list=V.map((x,i)=>`f<sub>${v}</sub>(${x}) = ${fracStr(m[i],J.N)}`).join(', &nbsp;');
    return {q:L(`The joint pmf of X and Y is given below. Find the marginal distribution of ${v}.`, `دالة الاحتمال المشتركة في الجدول. أوجد التوزيع الهامشي لـ ${M(v)}.`)+J.html,
      a:`<b>${list}</b>`,
      s:steps(L(`${M(`f<sub>${v}</sub>(${v.toLowerCase()}) = &sum;<sub>${o}</sub> f(x, y)`)}: add each ${ofX?'column':'row'} of the table.`, `${M(`f<sub>${v}</sub>(${v.toLowerCase()}) = &sum;<sub>${o}</sub> f(x, y)`)}: نجمع كل ${ofX?'عمود':'صف'} في الجدول.`),
              M(list), L(`Check: the marginal probabilities add up to 1.`, 'تحقق: مجموع الاحتمالات الهامشية يساوي 1.'))};
  },
  conditionalProb(d){
    const J=jointTable(d), i=R(0,J.xs.length-1), j=R(0,J.ys.length-1);
    if(J.my[j]===0) return G.conditionalProb(d);
    const x=J.xs[i], y=J.ys[j];
    return {q:L(`The joint pmf of X and Y is given below. Find P(X = ${x} | Y = ${y}).`, `دالة الاحتمال المشتركة في الجدول. أوجد ${M(`P(X = ${x} | Y = ${y})`)}.`)+J.html,
      a:`<b>${fracStr(J.w[j][i], J.my[j])}</b>`,
      s:steps(L(`${M(`P(X = x | Y = y) = f(x, y) / f<sub>Y</sub>(y)`)}`, `${M(`P(X = x | Y = y) = f(x, y) / f<sub>Y</sub>(y)`)}`),
              M(`f<sub>Y</sub>(${y}) = ${fracStr(J.my[j],J.N)}`),
              M(`P(X = ${x} | Y = ${y}) = ${fracStr(J.w[j][i],J.N)} &divide; ${fracStr(J.my[j],J.N)} = ${fracStr(J.w[j][i], J.my[j])}`))};
  },
  jointMoments(d){
    const J=jointTable(d), {EX,EY,EXY}=jointE(J), cov=rSub(EXY, rMul(EX,EY)), F=([p,q])=>fracStr(p,q);
    return {q:L('The joint pmf of X and Y is given below. Find Cov(X, Y).', `دالة الاحتمال المشتركة في الجدول. أوجد ${M('Cov(X, Y)')}.`)+J.html,
      a:`<b>Cov(X, Y) = ${F(cov)}</b>`,
      s:steps(L(`${M(`E(X) = &sum; x f<sub>X</sub>(x) = ${F(EX)}`)}, ${M(`E(Y) = &sum; y f<sub>Y</sub>(y) = ${F(EY)}`)}`, `${M(`E(X) = &sum; x f<sub>X</sub>(x) = ${F(EX)}`)}، ${M(`E(Y) = &sum; y f<sub>Y</sub>(y) = ${F(EY)}`)}`),
              L(`${M(`E(XY) = &sum;&sum; xy f(x, y) = ${F(EXY)}`)}`, `${M(`E(XY) = &sum;&sum; xy f(x, y) = ${F(EXY)}`)}`),
              L(`${M(`Cov(X, Y) = E(XY) &minus; E(X)E(Y) = ${F(EXY)} &minus; (${F(EX)})(${F(EY)}) = ${F(cov)}`)}`, `${M(`Cov(X, Y) = E(XY) &minus; E(X)E(Y) = ${F(EXY)} &minus; (${F(EX)})(${F(EY)}) = ${F(cov)}`)}`))};
  },
  correlationCoef(d){
    let J, r; do{ J=jointTable(d); r=jointE(J); }while(r.VX[0]===0||r.VY[0]===0);
    const {EX,EY,EXY,VX,VY}=r, cov=rSub(EXY, rMul(EX,EY)), F=([p,q])=>fracStr(p,q), v=x=>x[0]/x[1], rho=v(cov)/Math.sqrt(v(VX)*v(VY));
    return {q:L('The joint pmf of X and Y is given below. Find the correlation coefficient ρ(X, Y).', `دالة الاحتمال المشتركة في الجدول. أوجد معامل الارتباط ${M('ρ(X, Y)')}.`)+J.html,
      a:`<b>ρ &asymp; ${num(rho,4)}</b>`,
      s:steps(L(`${M(`Cov(X, Y) = E(XY) &minus; E(X)E(Y) = ${F(EXY)} &minus; (${F(EX)})(${F(EY)}) = ${F(cov)}`)}`, `${M(`Cov(X, Y) = E(XY) &minus; E(X)E(Y) = ${F(cov)}`)}`),
              L(`${M(`Var(X) = E(X${sup(2)}) &minus; [E(X)]${sup(2)} = ${F(VX)}`)}, ${M(`Var(Y) = ${F(VY)}`)}`, `${M(`Var(X) = E(X${sup(2)}) &minus; [E(X)]${sup(2)} = ${F(VX)}`)}، ${M(`Var(Y) = ${F(VY)}`)}`),
              L(`${M(`ρ = Cov(X, Y) / &radic;(Var(X)Var(Y)) &asymp; ${num(rho,4)}`)} (always between −1 and 1)`, `${M(`ρ = Cov(X, Y) / &radic;(Var(X)Var(Y)) &asymp; ${num(rho,4)}`)} (دائماً بين −1 و 1)`))};
  },
  independenceCheck(d){
    const J=jointTable(d, Math.random()<0.5);
    let bad=null; J.ys.forEach((y,j)=>J.xs.forEach((x,i)=>{ if(!bad && J.w[j][i]*J.N!==J.mx[i]*J.my[j]) bad={x,y,i,j}; }));
    const indep=!bad;
    return {q:L('The joint pmf of X and Y is given below. Are X and Y independent?', `دالة الاحتمال المشتركة في الجدول. هل ${M('X')} و ${M('Y')} مستقلان؟`)+J.html,
      a:`<b>${indep?Li('Independent','مستقلان'):Li('Not independent','غير مستقلين')}</b>`,
      s:steps(L(`X and Y are independent iff ${M('f(x, y) = f<sub>X</sub>(x) f<sub>Y</sub>(y)')} for every cell.`, `${M('X')} و ${M('Y')} مستقلان إذا وفقط إذا ${M('f(x, y) = f<sub>X</sub>(x) f<sub>Y</sub>(y)')} لكل خلية.`),
              L(`Marginals: ${M(J.xs.map((x,i)=>`f<sub>X</sub>(${x}) = ${fracStr(J.mx[i],J.N)}`).join(', '))}; ${M(J.ys.map((y,j)=>`f<sub>Y</sub>(${y}) = ${fracStr(J.my[j],J.N)}`).join(', '))}`,
                `الهامشيات: ${M(J.xs.map((x,i)=>`f<sub>X</sub>(${x}) = ${fracStr(J.mx[i],J.N)}`).join(', '))}؛ ${M(J.ys.map((y,j)=>`f<sub>Y</sub>(${y}) = ${fracStr(J.my[j],J.N)}`).join(', '))}`),
              indep ? L('Every cell equals the product of its marginals ⇒ independent.', 'كل خلية تساوي حاصل ضرب الهامشيين ⇐ مستقلان.')
                    : L(`At (${bad.x}, ${bad.y}): ${M(`f = ${fracStr(J.w[bad.j][bad.i],J.N)} &ne; ${fracStr(J.mx[bad.i],J.N)} &times; ${fracStr(J.my[bad.j],J.N)} = ${fracStr(J.mx[bad.i]*J.my[bad.j],J.N*J.N)}`)} ⇒ not independent.`,
                        `عند ${M(`(${bad.x}, ${bad.y})`)}: ${M(`f = ${fracStr(J.w[bad.j][bad.i],J.N)} &ne; ${fracStr(J.mx[bad.i],J.N)} &times; ${fracStr(J.my[bad.j],J.N)} = ${fracStr(J.mx[bad.i]*J.my[bad.j],J.N*J.N)}`)} ⇐ غير مستقلين.`))};
  },
  sumOfRV(d){
    const ex=R(-5,9), ey=R(-5,9), vx=R(1,9), vy=R(1,9), cov=d===1?0:R(-2,3), a=nz(-3,3), b=nz(-3,3);
    const E=a*ex+b*ey, V=a*a*vx+b*b*vy+2*a*b*cov, W=`${lead(a,'X')}${term(b,'Y')}`;
    return {q:L(`E(X) = ${ex}, E(Y) = ${ey}, Var(X) = ${vx}, Var(Y) = ${vy}, Cov(X, Y) = ${cov}. Find the mean and variance of W = ${W}.`,
                `${M(`E(X) = ${ex}, E(Y) = ${ey}, Var(X) = ${vx}, Var(Y) = ${vy}, Cov(X, Y) = ${cov}`)}. أوجد التوقع والتباين للمتغير ${M(`W = ${W}`)}.`),
      a:`<b>E(W) = ${sgn(E)}, Var(W) = ${V}</b>`,
      s:steps(L(`${M('E(aX + bY) = aE(X) + bE(Y)')} = ${M(`(${a})(${ex}) + (${b})(${ey}) = ${sgn(E)}`)}`, `${M('E(aX + bY) = aE(X) + bE(Y)')} = ${M(`(${a})(${ex}) + (${b})(${ey}) = ${sgn(E)}`)}`),
              L(`${M(`Var(aX + bY) = a${sup(2)}Var(X) + b${sup(2)}Var(Y) + 2ab&middot;Cov(X, Y)`)}`, `${M(`Var(aX + bY) = a${sup(2)}Var(X) + b${sup(2)}Var(Y) + 2ab&middot;Cov(X, Y)`)}`),
              M(`= ${a*a}(${vx}) + ${b*b}(${vy}) + 2(${a})(${b})(${cov}) = ${V}`),
              cov===0 ? L('(Cov = 0, e.g. X and Y independent.)', '(التغاير صفر، كما لو كان X و Y مستقلين.)') : '')};
  },
  bivariateNormal(d){
    const mx=R(10,60), my=R(10,60), sx=pick([2,4,5,10]), sy=pick([2,3,4,5,6,8]), rho=pick([0.2,0.4,0.5,0.6,0.8,-0.5,-0.6]), x=mx+pick([-2,-1,1,2])*sx;
    const cm=my+rho*sy/sx*(x-mx), cv=sy*sy*(1-rho*rho);
    const base=steps(
      L(`For a bivariate normal: ${M(`E(Y | X = x) = μ<sub>Y</sub> + ρ(σ<sub>Y</sub>/σ<sub>X</sub>)(x &minus; μ<sub>X</sub>)`)}`, `للتوزيع الطبيعي الثنائي: ${M(`E(Y | X = x) = μ<sub>Y</sub> + ρ(σ<sub>Y</sub>/σ<sub>X</sub>)(x &minus; μ<sub>X</sub>)`)}`),
      M(`= ${my} + (${rho})(${sy}/${sx})(${x} &minus; ${mx}) = ${num(cm,4)}`),
      L(`${M(`Var(Y | X = x) = σ<sub>Y</sub>${sup(2)}(1 &minus; ρ${sup(2)}) = ${sy*sy}(1 &minus; ${num(rho*rho,4)}) = ${num(cv,4)}`)}`, `${M(`Var(Y | X = x) = σ<sub>Y</sub>${sup(2)}(1 &minus; ρ${sup(2)}) = ${sy*sy}(1 &minus; ${num(rho*rho,4)}) = ${num(cv,4)}`)}`));
    const given=`μ<sub>X</sub> = ${mx}, μ<sub>Y</sub> = ${my}, σ<sub>X</sub> = ${sx}, σ<sub>Y</sub> = ${sy}, ρ = ${rho}`;
    if(d<3) return {q:L(`(X, Y) is bivariate normal with ${given}. Find E(Y | X = ${x}) and Var(Y | X = ${x}).`, `${M('(X, Y)')} له توزيع طبيعي ثنائي حيث ${M(given)}. أوجد ${M(`E(Y | X = ${x})`)} و ${M(`Var(Y | X = ${x})`)}.`),
      a:`<b>E(Y | X = ${x}) = ${num(cm,4)}, Var(Y | X = ${x}) = ${num(cv,4)}</b>`, s:base};
    const y=Math.round(cm+pick([-1,1])*Math.sqrt(cv)*pick([0.5,1,1.5])), z=+((y-cm)/Math.sqrt(cv)).toFixed(2), P=Phi(z);
    return {q:L(`(X, Y) is bivariate normal with ${given}. Find P(Y &le; ${y} | X = ${x}).`, `${M('(X, Y)')} له توزيع طبيعي ثنائي حيث ${M(given)}. أوجد ${M(`P(Y &le; ${y} | X = ${x})`)}.`),
      a:`<b>z = ${num(z,2)}; P &asymp; ${num(P,4)}</b>`,
      s:base+steps(L(`Given X = ${x}, Y is normal: ${M(`z = (${y} &minus; ${num(cm,4)}) / &radic;${num(cv,4)} = ${num(z,2)}`)}`, `بمعلومية ${M(`X = ${x}`)} يكون ${M('Y')} طبيعياً: ${M(`z = (${y} &minus; ${num(cm,4)}) / &radic;${num(cv,4)} = ${num(z,2)}`)}`),
                   L(`${M(`P(Y &le; ${y} | X = ${x}) = Φ(${num(z,2)}) &asymp; ${num(P,4)}`)} (z table)`, `${M(`P(Y &le; ${y} | X = ${x}) = Φ(${num(z,2)}) &asymp; ${num(P,4)}`)} (من جدول z)`)+distPlot({crit:Math.abs(z), kind:z<0?'left':'right', stat:z}))};
  },
  multinomialProb(d){
    const n=d===1?R(3,4):R(4,6), den=pick([4,5,6,10]); let w1=R(1,den-2), w2=R(1,den-w1-1); const w3=den-w1-w2;
    const a=R(0,n), b=R(0,n-a), c=n-a-b;
    const coef=factorial(n)/(factorial(a)*factorial(b)*factorial(c)), num_=coef*w1**a*w2**b*w3**c, dd=den**n;
    const p=(w)=>fracStr(w,den);
    return {q:L(`Each trial gives outcome 1, 2 or 3 with probabilities ${p(w1)}, ${p(w2)}, ${p(w3)}. In ${n} independent trials, find P(X<sub>1</sub> = ${a}, X<sub>2</sub> = ${b}, X<sub>3</sub> = ${c}).`,
                `كل محاولة تعطي النتيجة 1 أو 2 أو 3 باحتمالات ${M(`${p(w1)}, ${p(w2)}, ${p(w3)}`)}. في ${M(n)} محاولات مستقلة أوجد ${M(`P(X<sub>1</sub> = ${a}, X<sub>2</sub> = ${b}, X<sub>3</sub> = ${c})`)}.`),
      a:`<b>${fracStr(num_,dd)}</b>`,
      s:steps(L(`Multinomial: ${M(`P = n! / (x<sub>1</sub>! x<sub>2</sub>! x<sub>3</sub>!) &middot; p<sub>1</sub>${sup('x₁')} p<sub>2</sub>${sup('x₂')} p<sub>3</sub>${sup('x₃')}`)}`, `التوزيع متعدد الحدود: ${M(`P = n! / (x<sub>1</sub>! x<sub>2</sub>! x<sub>3</sub>!) &middot; p<sub>1</sub>${sup('x₁')} p<sub>2</sub>${sup('x₂')} p<sub>3</sub>${sup('x₃')}`)}`),
              M(`${n}! / (${a}! ${b}! ${c}!) = ${coef}`),
              M(`P = ${coef} &middot; (${p(w1)})${sup(a)} (${p(w2)})${sup(b)} (${p(w3)})${sup(c)} = ${fracStr(num_,dd)}`))};
  },

  /* ---- Probability (STAT 212) ---- */
  combinations(d){
    const n=R(4,d===3?10:7), r=R(1,n-1), v=factorial(n)/(factorial(r)*factorial(n-r));
    const top=[...Array(r)].map((_,i)=>n-i), bot=[...Array(r)].map((_,i)=>r-i);
    return {q:`C(${n}, ${r}) =`, a:`<b>${v}</b>`,
      s:steps(L('Combinations (order does not matter):', 'التوافيق (الترتيب غير مهم):')+' '+M(`C(n, r) = ${frac('n!','r!(n &minus; r)!')}`),
              M(`C(${n}, ${r}) = ${frac(`${n}!`, `${r}! &times; ${n-r}!`)}`),
              L('Cancel and multiply:', 'نختصر ونضرب:')+' '+M(`${frac(top.join(' &times; '), bot.join(' &times; '))} = ${frac(top.reduce((a,b)=>a*b,1), factorial(r))} = ${v}`))};
  },
  permutations(d){
    const n=R(3,d===3?9:6), r=R(1,Math.min(n,4)), v=factorial(n)/factorial(n-r);
    const top=[...Array(r)].map((_,i)=>n-i);
    return {q:`P(${n}, ${r}) =`, a:`<b>${v}</b>`,
      s:steps(L('Permutations (order matters):', 'التباديل (الترتيب مهم):')+' '+M(`P(n, r) = ${frac('n!','(n &minus; r)!')}`),
              M(`P(${n}, ${r}) = ${frac(`${n}!`, `${n-r}!`)}`),
              L(`This is the product of ${r} numbers counting down from ${n}:`, `وهو حاصل ضرب ${M(r)} أعداد تنازلياً بدءاً من ${M(n)}:`)+' '+M(`${top.join(' &times; ')} = ${v}`))};
  },

  /* ---- Statistical Methods (STAT 302) ---- */
  zScore(d){
    const mu=R(10,60), sigma=pick([2,3,4,5]), k=nz(-3,3), x=mu+k*sigma;
    return {q:`A data set has mean ${mu} and standard deviation ${sigma}. Find the z-score of ${x}.`, a:`<b>${k}</b>`,
      s:steps(L('The z-score says how many standard deviations the value is from the mean:', 'الدرجة المعيارية تبيّن كم انحرافاً معيارياً تبعد القيمة عن الوسط:')+' '+M(`z = ${frac('x &minus; &mu;','&sigma;')}`),
              M(`z = ${frac(`${x} &minus; ${mu}`, sigma)} = ${frac(sgn(x-mu), sigma)} = ${sgn(k)}`),
              L(`The value is ${Math.abs(k)} standard deviation(s) ${k>0?'above':'below'} the mean.`, `القيمة ${k>0?'أعلى':'أقل'} من الوسط بمقدار ${M(Math.abs(k))} انحراف معياري.`))};
  },

  /* ---- Principles of Financial Mathematics (MATH 321) ---- */
  simpleInterest(d){
    const P=R(1,20)*100, r=R(1,12), t=R(1,8);
    return {q:`Find the simple interest on $${P} at ${r}% per year for ${t} years.`, a:`<b>$${P*r*t/100}</b>`,
      s:steps(L('Simple interest:', 'الفائدة البسيطة:')+' '+M('I = P &times; r &times; t')+' '+L('(r as a decimal).', '(r كعدد عشري).'),
              M(`I = ${P} &times; ${num(r/100)} &times; ${t} = ${num(P*r*t/100)}`))};
  },
  compoundInterest(d){
    const P=R(1,20)*100, r=R(2,10), t=R(2,d===3?8:5), A=P*Math.pow(1+r/100,t);
    return {q:`$${P} is invested at ${r}% compounded annually for ${t} years. Find the amount.`, a:`<b>$${A.toFixed(2)}</b>`,
      s:steps(L('Compound amount:', 'الجملة بالفائدة المركبة:')+' '+M(`A = P(1 + r)${sup('t')}`),
              M(`A = ${P}(1 + ${num(r/100)})${sup(t)} = ${P} &times; ${num(1+r/100)}${sup(t)}`),
              M(`${num(1+r/100)}${sup(t)} = ${num((1+r/100)**t,6)}`), M(`A = ${P} &times; ${num((1+r/100)**t,6)} &asymp; ${A.toFixed(2)}`))};
  },
  presentValue(d){
    const FV=R(5,40)*100, r=R(2,10), t=R(2,d===3?8:5), PV=FV/Math.pow(1+r/100,t);
    return {q:`Find the present value of $${FV} due in ${t} years at ${r}% annual interest.`, a:`<b>$${PV.toFixed(2)}</b>`,
      s:steps(L('Present value (discount the future amount):', 'القيمة الحالية (نخصم المبلغ المستقبلي):')+' '+M(`PV = ${frac('FV','(1 + r)'+sup('t'))}`),
              M(`(1 + ${num(r/100)})${sup(t)} = ${num((1+r/100)**t,6)}`), M(`PV = ${frac(FV, num((1+r/100)**t,6))} &asymp; ${PV.toFixed(2)}`))};
  },
};

