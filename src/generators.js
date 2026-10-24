import { R, pick, nz, gcd, sup, frac, sq, reduceFrac, fracStr, term, lead, factorial, sgn, cplx, mat, TRIG, shuffled,
         lcm, totient, powMod, isPrimeN, vec } from './helpers.js';
import { L, Li, M, align, steps, num, plot, numberLine, intervalLine, aug, Phi, distPlot, zCrit, tCrit, fCrit, fPdf, zTableHTML, tTableHTML, fTableHTML } from './viz.js';

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

export const G = {
  /* ---- Pre-Algebra ---- */
  intAddSub(d){
    const hi = d===1?12:d===2?25:60;
    const a=nz(-hi,hi), b=nz(-hi,hi), op=pick(['+','&minus;']);
    const val = op==='+'? a+b : a-b;
    const bb = b<0 ? `(${b<0?'&minus;':''}${Math.abs(b)})` : b;
    return {q:`${a<0?'&minus;'+Math.abs(a):a} ${op} ${bb} =`, a:`<b>${val<0?'&minus;'+Math.abs(val):val}</b>`};
  },
  intMulDiv(d){
    const hi=d===1?9:d===2?12:15;
    if(Math.random()<0.5){
      const a=nz(-hi,hi), b=nz(-hi,hi);
      return {q:`${a<0?'('+'&minus;'+Math.abs(a)+')':a} &times; ${b<0?'('+'&minus;'+Math.abs(b)+')':b} =`,
              a:`<b>${a*b<0?'&minus;'+Math.abs(a*b):a*b}</b>`};
    }else{
      const b=nz(-hi,hi), q=nz(-hi,hi), a=b*q;
      return {q:`${a<0?'&minus;'+Math.abs(a):a} &divide; ${b<0?'('+'&minus;'+Math.abs(b)+')':b} =`,
              a:`<b>${q<0?'&minus;'+Math.abs(q):q}</b>`};
    }
  },
  orderOps(d){
    const a=R(2,9), b=R(2,9), c=R(2,9);
    if(d===1){ return {q:`${a} + ${b} &times; ${c} =`, a:`<b>${a+b*c}</b>`}; }
    if(d===2){ const e=R(2,9); return {q:`(${a} + ${b}) &times; ${c} &minus; ${e} =`, a:`<b>${(a+b)*c-e}</b>`}; }
    const e=R(2,6); return {q:`${a}${sup(2)} &minus; ${b} &times; ${c} + ${e} =`, a:`<b>${a*a-b*c+e}</b>`};
  },
  fracAddSub(d){
    const dens = d===1?[2,3,4,5]:d===2?[2,3,4,5,6,8]:[3,4,6,8,9,12];
    const b=pick(dens); let c=pick(dens); if(d===1) c=b;
    const n1=R(1,b-1>0?b-1:1), n2=R(1,c-1>0?c-1:1), op=pick(['+','&minus;']);
    const den=b*c; let num = op==='+'? n1*c+n2*b : n1*c-n2*b;
    return {q:`${frac(n1,b)} ${op} ${frac(n2,c)} =`, a:`<b>${fracStr(num,den)}</b>`};
  },
  fracMul(d){
    const hi=d===1?6:d===2?9:12;
    const n1=R(1,hi),b=R(2,hi),n2=R(1,hi),c=R(2,hi);
    return {q:`${frac(n1,b)} &times; ${frac(n2,c)} =`, a:`<b>${fracStr(n1*n2,b*c)}</b>`};
  },

  /* ---- Algebra 1 ---- */
  oneStep(d){
    const x=nz(-12,12);
    const type=pick(['add','mul','div']);
    if(type==='add'){ const b=nz(-15,15); return {q:`x ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${x+b}`, a:`<b>x = ${x}</b>`}; }
    if(type==='mul'){ const a=nz(2,9); return {q:`${a}x = ${a*x}`, a:`<b>x = ${x}</b>`}; }
    const a=nz(2,9); return {q:`${frac('x',a)} = ${x}`, a:`<b>x = ${a*x}</b>`};
  },
  twoStep(d){
    const x=nz(-10,10), a=nz(2,d===3?12:9), b=nz(-15,15);
    return {q:`${a}x ${b<0?'&minus; '+Math.abs(b):'+ '+b} = ${a*x+b}`, a:`<b>x = ${x}</b>`};
  },
  multiStep(d){
    // ax + b = cx + e   with integer solution
    const x=nz(-8,8);
    let a=nz(2,8), c=nz(-8,8); while(a===c)c=nz(-8,8);
    const b=nz(-12,12);
    const e=(a-c)*x+b; // a x + b = c x + e
    return {q:`${lead(a,'x')} ${term(b,'')} = ${lead(c,'x')} ${term(e,'')}`.replace(/\s+/g,' '),
            a:`<b>x = ${x}</b>`};
  },
  combineLike(d){
    const a=nz(-8,8),c=nz(-8,8),b=nz(-9,9),e=nz(-9,9);
    const q=`${lead(a,'x')}${term(b,'')}${term(c,'x')}${term(e,'')}`;
    const ans=`${lead(a+c,'x')}${term(b+e,'')}`;
    return {q, a:`<b>${ans}</b>`};
  },
  distribute(d){
    const a=nz(2,d===3?9:6), b=nz(-7,7), c=nz(-9,9);
    return {q:`${a}(${lead(b,'x')} ${term(c,'')})`, a:`<b>${lead(a*b,'x')}${term(a*c,'')}</b>`};
  },
  slope(d){
    let x1=nz(-8,8),y1=nz(-8,8),x2=nz(-8,8),y2=nz(-8,8);
    while(x2===x1)x2=nz(-8,8);
    const [n,dd]=reduceFrac(y2-y1,x2-x1);
    return {q:`Slope through (${x1}, ${y1}) and (${x2}, ${y2})`,
            a:`<b>m = ${fracStr(n,dd)}</b>`};
  },

  /* ---- Algebra 2 ---- */
  factorQuad(d){
    const hi=d===1?6:d===2?9:12;
    const r1=nz(-hi,hi), r2=nz(-hi,hi);
    const b=-(r1+r2), c=r1*r2;
    const q=`x${sup(2)}${term(b,'x')}${term(c,'')}`;
    const f=(r)=> r===0?'x':`(x ${r<0?'+ '+Math.abs(r):'&minus; '+r})`;
    return {q, a:`<b>${f(r1)}${f(r2)}</b>`};
  },
  solveQuad(d){
    const hi=d===1?6:9;
    const r1=nz(-hi,hi),r2=nz(-hi,hi);
    const b=-(r1+r2),c=r1*r2;
    const roots = r1===r2?`x = ${r1}`:`x = ${Math.min(r1,r2)}, ${Math.max(r1,r2)}`;
    return {q:`x${sup(2)}${term(b,'x')}${term(c,'')} = 0`, a:`<b>${roots}</b>`};
  },
  simplifyRadical(d){
    const inside=pick(d===1?[2,3,5,6,7]:[2,3,5,6,7,10,11,13,14,15]);
    const out=R(2,d===3?8:5);
    const n=out*out*inside;
    return {q:`&radic;<span style="border-top:1.2px solid currentColor;padding:0 2px">${n}</span> =`,
            a:`<b>${out}&radic;<span style="border-top:1.2px solid currentColor;padding:0 2px">${inside}</span></b>`};
  },

  /* ---- Geometry ---- */
  rectangle(d){
    const w=R(3,d===3?40:20),h=R(3,d===3?40:20);
    return {q:`Rectangle ${w} by ${h}. Find area and perimeter.`,
            a:`<b>A = ${w*h}, P = ${2*(w+h)}</b>`};
  },
  triangleArea(d){
    const b=R(2,d===3?30:16)*2, h=R(2,d===3?30:16);
    return {q:`Triangle, base ${b}, height ${h}. Find area.`, a:`<b>A = ${b*h/2}</b>`};
  },
  circle(d){
    const r=R(2,d===3?20:12);
    return {q:`Circle, radius ${r}. Area and circumference (in terms of &pi;).`,
            a:`<b>A = ${r*r}&pi;, C = ${2*r}&pi;</b>`};
  },
  pythagorean(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[20,21,29]]);
    const k=d===3?R(1,3):1; const [a,b,c]=t.map(v=>v*k);
    if(Math.random()<0.5) return {q:`Right triangle, legs ${a} and ${b}. Find the hypotenuse.`, a:`<b>c = ${c}</b>`};
    return {q:`Right triangle, hypotenuse ${c}, one leg ${a}. Find the other leg.`, a:`<b>${b}</b>`};
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
    const [n,m]=reduceFrac(a,b);
    return {q:`Simplify the ratio ${a} : ${b}`, a:`<b>${n} : ${m}</b>`};
  },
  proportions(d){
    const m=R(1,6), n=R(1,6), t1=R(2,d===3?9:6), t2=R(2,d===3?9:6);
    const a=m*t1, b=n*t1, c=m*t2, x=n*t2;
    return {q:`Solve the proportion: ${frac(a,b)} = ${frac(c,'x')}`, a:`<b>x = ${x}</b>`};
  },

  /* ---- Systems of equations (Algebra 1) ---- */
  systems(d){
    const x=nz(-6,6), y=nz(-6,6);
    let a1=nz(1,d===3?6:4), b1=nz(1,d===3?6:4), a2=nz(1,d===3?6:4), b2=nz(1,d===3?6:4);
    while(a1*b2-a2*b1===0){ a2=nz(1,5); b2=nz(1,5); }
    const c1=a1*x+b1*y, c2=a2*x+b2*y;
    const eq=(a,b,c)=>`${lead(a,'x')}${term(b,'y')} = ${c}`;
    const lhs=(a,b)=>`${lead(a,'x')}${term(b,'y')}`;
    return {q:L('Solve the system:','حل النظام:')+'<br>'+align([[lhs(a1,b1),'=',c1],[lhs(a2,b2),'=',c2]], true),
            a:`<b>(${x}, ${y})</b>`};
  },

  /* ---- Trigonometry ---- */
  trigValues(d){
    const easy=[0,30,45,60,90];
    const angles = d===1?easy:[0,30,45,60,90,120,135,150,180];
    const ang=pick(angles), fn=pick(['sin','cos','tan']);
    const key=fn==='sin'?'s':fn==='cos'?'c':'t';
    return {q:`${fn} ${ang}&deg; =`, a:`<b>${TRIG[ang][key]}</b>`};
  },
  trigRatios(d){
    const t=pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29],[6,8,10],[9,12,15]]);
    const [opp,adj,hyp]=t, fn=pick(['sin','cos','tan']);
    let val;
    if(fn==='sin') val=fracStr(opp,hyp);
    else if(fn==='cos') val=fracStr(adj,hyp);
    else val=fracStr(opp,adj);
    return {q:`Right triangle with &ang;&theta;: opposite = ${opp}, adjacent = ${adj}, hypotenuse = ${hyp}. Find ${fn} &theta;.`,
            a:`<b>${val}</b>`};
  },
  degRad(d){
    const degs = d===1?[30,45,60,90,180]:[30,45,60,90,120,135,150,210,225,240,270,300,315,330,360];
    const deg=pick(degs); const [n,m]=reduceFrac(deg,180);
    const rad = m===1 ? `${n===1?'':n}&pi;` : frac(`${n===1?'':n}&pi;`, m);
    return {q:`Convert ${deg}&deg; to radians.`, a:`<b>${rad}</b>`};
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
    const F=v=>k*Math.pow(v,p+1);
    return {q:`&int;<sub>${a}</sub><sup>${b}</sup> ${lead(c,'x'+(p===1?'':sup(p)))} dx =`,
            a:`<b>${F(b)-F(a)}</b>`};
  },

  /* ================= EXPANSION PACKS ================= */

  /* ---- Pre-Algebra pack ---- */
  rounding(d){
    const place=pick(d===1?[10,100]:[10,100,1000]);
    const n=R(place,place*90)+R(0,place-1);
    const r=Math.round(n/place)*place;
    const name=place===10?'ten':place===100?'hundred':'thousand';
    return {q:`Round ${n} to the nearest ${name}.`, a:`<b>${r}</b>`};
  },
  percentOf(d){
    const p=pick(d===1?[10,25,50]:d===2?[5,10,20,25,40,50,75]:[5,12,15,18,24,35,60]);
    const step=100/gcd(p,100);
    const N=step*R(2,d===3?12:8);
    return {q:`Find ${p}% of ${N}.`, a:`<b>${p*N/100}</b>`};
  },
  fracToDecimal(d){
    const den=pick(d===1?[2,4,5,10]:[2,4,5,8,10,20,25]);
    const num=R(1,den-1);
    return {q:`Write ${frac(num,den)} as a decimal.`, a:`<b>${+(num/den).toFixed(4)}</b>`};
  },
  gcfLcm(d){
    const hi=d===1?12:d===2?24:40;
    const a=R(2,hi), b=R(2,hi), g=gcd(a,b);
    if(Math.random()<0.5) return {q:`Find the GCF of ${a} and ${b}.`, a:`<b>${g}</b>`};
    return {q:`Find the LCM of ${a} and ${b}.`, a:`<b>${a*b/g}</b>`};
  },
  powers(d){
    const base=R(2,d===1?6:9), exp=R(2,d===1?3:d===2?4:5);
    return {q:`${base}${sup(exp)} =`, a:`<b>${Math.pow(base,exp)}</b>`};
  },
  absValue(d){
    const sgn=v=>v<0?'&minus;'+Math.abs(v):''+v;
    const a=nz(-25,25), b=nz(-25,25), op=pick(['+','&minus;']);
    const val = op==='+'? Math.abs(a)+Math.abs(b) : Math.abs(a)-Math.abs(b);
    return {q:`|${sgn(a)}| ${op} |${sgn(b)}| =`, a:`<b>${val<0?'&minus;'+Math.abs(val):val}</b>`};
  },

  /* ---- Algebra 1 pack ---- */
  evalExpr(d){
    const a=nz(2,9), b=nz(-12,12), x=nz(-8,8);
    return {q:`Evaluate ${lead(a,'x')}${term(b,'')} for x = ${x}.`, a:`<b>${a*x+b}</b>`};
  },
  inequalities(d){
    const a=nz(2,d===3?9:6), x=nz(-8,8), b=nz(-12,12), op=pick(['&lt;','&gt;','&le;','&ge;']);
    const c=a*x+b;
    return {q:`Solve: ${a}x ${b<0?'&minus; '+Math.abs(b):'+ '+b} ${op} ${c}`, a:`<b>x ${op} ${x}</b>`};
  },
  exponentRules(d){
    const a=R(2,8), b=R(2,8);
    if(Math.random()<0.5) return {q:`Simplify: x${sup(a)} &middot; x${sup(b)}`, a:`<b>x${sup(a+b)}</b>`};
    const hi=Math.max(a,b)+R(1,4), lo=Math.min(a,b);
    return {q:`Simplify: ${frac('x'+sup(hi),'x'+sup(lo))}`, a:`<b>x${sup(hi-lo)}</b>`};
  },
  midpoint(d){
    const x1=nz(-12,12), y1=nz(-12,12), x2=nz(-12,12), y2=nz(-12,12);
    return {q:`Find the midpoint of (${x1}, ${y1}) and (${x2}, ${y2}).`,
            a:`<b>(${(x1+x2)/2}, ${(y1+y2)/2})</b>`};
  },

  /* ---- Algebra 2 pack ---- */
  polyMultiply(d){
    const a=nz(-9,9), b=nz(-9,9);
    const fa=a<0?`(x &minus; ${Math.abs(a)})`:`(x + ${a})`;
    const fb=b<0?`(x &minus; ${Math.abs(b)})`:`(x + ${b})`;
    return {q:`Expand: ${fa}${fb}`, a:`<b>x${sup(2)}${term(a+b,'x')}${term(a*b,'')}</b>`};
  },
  powerOfPower(d){
    const a=R(2,6), b=R(2,5);
    return {q:`Simplify: (x${sup(a)})${sup(b)}`, a:`<b>x${sup(a*b)}</b>`};
  },
  vertex(d){
    const h=nz(-6,6), b=-2*h, c=nz(-9,9), k=c-h*h;
    return {q:`Find the vertex of y = x${sup(2)}${term(b,'x')}${term(c,'')}`, a:`<b>(${h}, ${k})</b>`};
  },
  logEval(d){
    const base=pick([2,3,5,10]), exp=R(2,d===3?5:4);
    return {q:`Evaluate: log<sub>${base}</sub> ${Math.pow(base,exp)}`, a:`<b>${exp}</b>`};
  },
  expEquation(d){
    const base=pick([2,3,5]), x=R(2,d===3?5:4);
    return {q:`Solve: ${base}${sup('x')} = ${Math.pow(base,x)}`, a:`<b>x = ${x}</b>`};
  },

  /* ---- Geometry pack ---- */
  parallelogram(d){
    const b=R(3,d===3?40:20), h=R(3,d===3?40:20);
    return {q:`Parallelogram with base ${b} and height ${h}. Find the area.`, a:`<b>A = ${b*h}</b>`};
  },
  trapezoid(d){
    const b1=R(3,d===3?30:16), b2=R(3,d===3?30:16), h=R(2,d===3?20:12)*2;
    return {q:`Trapezoid with parallel sides ${b1} and ${b2}, height ${h}. Find the area.`,
            a:`<b>A = ${(b1+b2)*h/2}</b>`};
  },
  volumeBox(d){
    const l=R(2,d===3?15:10), w=R(2,d===3?15:10), h=R(2,d===3?15:10);
    return {q:`Rectangular prism ${l} &times; ${w} &times; ${h}. Find the volume.`, a:`<b>V = ${l*w*h}</b>`};
  },
  volumeCylinder(d){
    const r=R(2,d===3?12:8), h=R(2,d===3?15:10);
    return {q:`Cylinder with radius ${r} and height ${h}. Find the volume (in terms of &pi;).`,
            a:`<b>V = ${r*r*h}&pi;</b>`};
  },
  triangleAngles(d){
    const a=R(30,100), b=R(20,150-a), c=180-a-b;
    return {q:`Two angles of a triangle are ${a}&deg; and ${b}&deg;. Find the third angle.`, a:`<b>${c}&deg;</b>`};
  },

  /* ---- Trigonometry pack ---- */
  trigValuesRad(d){
    const base={'&pi;/6':30,'&pi;/4':45,'&pi;/3':60,'&pi;/2':90};
    const more={'2&pi;/3':120,'3&pi;/4':135,'5&pi;/6':150,'&pi;':180};
    const choices=d===1?base:Object.assign({},base,more);
    const rk=pick(Object.keys(choices)), ang=choices[rk];
    const fn=pick(['sin','cos','tan']), key=fn==='sin'?'s':fn==='cos'?'c':'t';
    return {q:`${fn} (${rk}) =`, a:`<b>${TRIG[ang][key]}</b>`};
  },
  radToDeg(d){
    const opts=d===1?[['&pi;/6',30],['&pi;/4',45],['&pi;/3',60],['&pi;/2',90],['&pi;',180]]
      :[['&pi;/6',30],['&pi;/4',45],['&pi;/3',60],['2&pi;/3',120],['3&pi;/4',135],['5&pi;/6',150],['&pi;',180],['3&pi;/2',270],['2&pi;',360]];
    const [r,deg]=pick(opts);
    return {q:`Convert ${r} radians to degrees.`, a:`<b>${deg}&deg;</b>`};
  },
  referenceAngle(d){
    const th=pick(d===1?[120,135,150,210,225,240,300,315,330]:[100,110,160,190,200,250,290,310,320,340,135,150,225]);
    let ref; if(th<90)ref=th; else if(th<180)ref=180-th; else if(th<270)ref=th-180; else ref=360-th;
    return {q:`Find the reference angle for ${th}&deg;.`, a:`<b>${ref}&deg;</b>`};
  },

  /* ---- Calculus pack ---- */
  limitPoly(d){
    const a=nz(-4,4), c2=nz(1,5), c1=nz(-6,6), c0=nz(-9,9);
    const poly=`${lead(c2,'x'+sup(2))}${term(c1,'x')}${term(c0,'')}`;
    return {q:`lim<sub>x&rarr;${a}</sub> (${poly}) =`, a:`<b>${c2*a*a+c1*a+c0}</b>`};
  },
  secondDerivative(d){
    const used=new Set(), terms=[], n=d===1?2:3;
    for(let i=0;i<n;i++){ let p=R(2,d===3?6:5); while(used.has(p))p=R(2,6); used.add(p); terms.push([nz(2,6),p]); }
    terms.sort((a,b)=>b[1]-a[1]);
    const qh=terms.map((t,i)=>(i===0?lead(t[0],'x'+sup(t[1])):term(t[0],'x'+sup(t[1])))).join('');
    const d2=terms.map(t=>[t[0]*t[1]*(t[1]-1), t[1]-2]);
    const ah=d2.map((t,i)=>{ const vp=t[1]===0?'':(t[1]===1?'x':'x'+sup(t[1])); return i===0?lead(t[0],vp):term(t[0],vp); }).join('');
    return {q:`f(x) = ${qh}&nbsp;&nbsp; f&Prime;(x) =`, a:`<b>${ah}</b>`};
  },
  tangentSlope(d){
    const used=new Set(), terms=[];
    for(let i=0;i<2;i++){ let p=R(1,d===3?4:3); while(used.has(p))p=R(1,4); used.add(p); terms.push([nz(2,6),p]); }
    terms.sort((a,b)=>b[1]-a[1]);
    const qh=terms.map((t,i)=>(i===0?lead(t[0],'x'+sup(t[1])):term(t[0],'x'+sup(t[1])))).join('');
    const a=nz(-3,3);
    const slope=terms.reduce((s,t)=>s+t[0]*t[1]*Math.pow(a,t[1]-1),0);
    return {q:`Slope of the tangent to f(x) = ${qh} at x = ${a}.`, a:`<b>${slope}</b>`};
  },
  derivTrig(d){
    const opts=[['sin x','cos x'],['cos x','&minus;sin x'],['tan x','sec<sup>2</sup> x'],
      [`e${sup('x')}`,`e${sup('x')}`],['ln x', frac(1,'x')]];
    const [f,df]=pick(opts);
    return {q:`d/dx [ ${f} ] =`, a:`<b>${df}</b>`};
  },

  /* ================= EXPANSION PACK 2 ================= */

  /* ---- Pre-Algebra ---- */
  scientificNotation(d){
    const s=R(10,99)/10, e=R(2,d===3?8:6);
    const num=Math.round(R(10,99)*Math.pow(10,e-1));   // integer by construction
    const sig=num/Math.pow(10,e);                        // 1 <= sig < 10
    const sigStr=(+sig.toFixed(1)).toString();
    return {q:`Write ${num} in scientific notation.`, a:`<b>${sigStr} &times; 10${sup(e)}</b>`};
  },
  decimalOps(d){
    const f1=v=>(v/10).toFixed(1);
    if(Math.random()<0.5){
      const A=R(10,999), B=R(10,999), op=pick(['+','&minus;']);
      const r = op==='+'? A+B : A-B;
      return {q:`${f1(A)} ${op} ${f1(B)} =`, a:`<b>${r<0?'&minus;'+(Math.abs(r)/10).toFixed(1):(r/10).toFixed(1)}</b>`};
    }
    const A=R(11,99), k=R(2,9);
    return {q:`${f1(A)} &times; ${k} =`, a:`<b>${(A*k/10).toFixed(1)}</b>`};
  },
  meanMedianMode(d){
    const n=d===1?5:pick([5,7]);
    const type=pick(['mean','median','mode']);
    if(type==='mode'){
      const mv=R(1,20), list=[mv,mv,mv], used=new Set([mv]);
      while(list.length<n){ const v=R(1,20); if(!used.has(v)){ used.add(v); list.push(v);} }
      return {q:`Find the mode: ${shuffled(list).join(', ')}`, a:`<b>${mv}</b>`};
    }
    if(type==='mean'){
      const M=R(5,15), list=[]; let sum=0;
      for(let i=0;i<n-1;i++){ const v=R(1,2*M); list.push(v); sum+=v; }
      const last=n*M-sum;
      if(last>=1 && last<=40){ list.push(last); return {q:`Find the mean: ${shuffled(list).join(', ')}`, a:`<b>${M}</b>`}; }
    }
    const list=[]; for(let i=0;i<n;i++) list.push(R(1,30));
    const sorted=[...list].sort((a,b)=>a-b);
    return {q:`Find the median: ${list.join(', ')}`, a:`<b>${sorted[(n-1)/2]}</b>`};
  },
  probability(d){
    const r=R(1,9), b=R(1,9), tot=r+b; const [n,m]=reduceFrac(r,tot);
    return {q:`A bag has ${r} red and ${b} blue marbles. Find P(red).`, a:`<b>${fracStr(n,m)}</b>`};
  },

  /* ---- Algebra 1 ---- */
  arithmeticSeq(d){
    const a1=nz(-9,9), diff=nz(-6,6), k=R(6,d===3?20:12);
    const terms=[a1,a1+diff,a1+2*diff,a1+3*diff];
    return {q:`Find the ${k}th term: ${terms.join(', ')}, ...`, a:`<b>${a1+(k-1)*diff}</b>`};
  },
  factorGCF(d){
    const g=R(2,9); let p=nz(2,9), q=nz(-9,9);
    while(gcd(Math.abs(p),Math.abs(q))!==1) q=nz(-9,9);
    return {q:`Factor: ${lead(g*p,'x')}${term(g*q,'')}`, a:`<b>${g}(${lead(p,'x')}${term(q,'')})</b>`};
  },

  /* ---- Algebra 2 ---- */
  geometricSeq(d){
    const a1=nz(1,5), r=pick(d===3?[2,3,4]:[2,3]), k=R(4,d===3?7:6);
    const terms=[a1,a1*r,a1*r*r,a1*r*r*r];
    return {q:`Find the ${k}th term: ${terms.join(', ')}, ...`, a:`<b>${a1*Math.pow(r,k-1)}</b>`};
  },
  iPowers(d){
    const n=R(2,d===3?40:16), vals=['1','i','&minus;1','&minus;i'];
    return {q:`Simplify: i${sup(n)}`, a:`<b>${vals[n%4]}</b>`};
  },

  /* ---- Geometry ---- */
  polygonAngles(d){
    const names={3:'triangle',4:'quadrilateral',5:'pentagon',6:'hexagon',7:'heptagon',8:'octagon',9:'nonagon',10:'decagon'};
    const sides=R(3,d===3?12:8);
    const nm=names[sides]?` (${names[sides]})`:'';
    return {q:`Find the sum of the interior angles of a polygon with ${sides} sides${nm}.`, a:`<b>${(sides-2)*180}&deg;</b>`};
  },
  distanceFormula(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[20,21,29]]);
    const x1=nz(-8,8), y1=nz(-8,8), x2=x1+t[0]*pick([1,-1]), y2=y1+t[1]*pick([1,-1]);
    return {q:`Find the distance between (${x1}, ${y1}) and (${x2}, ${y2}).`, a:`<b>${t[2]}</b>`};
  },

  /* ---- Calculus ---- */
  avgRateOfChange(d){
    const c=nz(1,4), e=nz(-9,9), a=nz(-5,5); let b=nz(-5,5); while(b===a) b=nz(-5,5);
    const poly=`${lead(c,'x'+sup(2))}${term(e,'')}`;
    return {q:`Average rate of change of f(x) = ${poly} on [${Math.min(a,b)}, ${Math.max(a,b)}].`, a:`<b>${c*(a+b)}</b>`};
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
    const det=v[0]*(v[4]*v[8]-v[5]*v[7]) - v[1]*(v[3]*v[8]-v[5]*v[6]) + v[2]*(v[3]*v[7]-v[4]*v[6]);
    return {q:`det ${mat(v,3)} =`, a:`<b>${sgn(det)}</b>`};
  },
  transpose(d){
    const [r,c]=d===1?pick([[2,3],[3,2]]):d===2?pick([[2,3],[3,2],[3,3]]):pick([[3,4],[4,3],[2,4]]);
    const A=Array.from({length:r*c},()=>R(-9,9));
    const T=[]; for(let j=0;j<c;j++) for(let i=0;i<r;i++) T.push(A[i*c+j]);
    return {q:`${mat(A,c)}${sup('T')} =`, a:`<b>${mat(T,r)}</b>`};
  },
  scalarMultiply(d){
    const n=d===3?3:2, hi=d===1?6:9, k=nz(d===1?2:-6,6), A=Array.from({length:n*n},()=>R(-hi,hi));
    return {q:`${k<0?'(&minus;'+Math.abs(k)+')':k} &middot; ${mat(A,n)} =`, a:`<b>${mat(A.map(x=>k*x),n)}</b>`};
  },
  trace(d){
    const n=d===1?2:d===2?3:pick([3,4]), hi=d===3?20:9, A=Array.from({length:n*n},()=>R(-hi,hi));
    let t=0; for(let i=0;i<n;i++) t+=A[i*n+i];
    return {q:`tr ${mat(A,n)} =`, a:`<b>${sgn(t)}</b>`};
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
    return {q:`| ${cplx(re,im)} | =`, a:`<b>${t[2]}</b>`};
  },
  complexConjugate(d){
    const hi=d===1?9:d===2?20:50, a=nz(-hi,hi), b=nz(-hi,hi);
    return {q:`If z = ${cplx(a,b)}, then <span style="text-decoration:overline">z</span> =`, a:`<b>${cplx(a,-b)}</b>`};
  },

  /* ---- Number Theory (MATH 367) ---- */
  modArithmetic(d){
    const m=R(2,d===3?20:12), a=R(m+1,m*10);
    return {q:`${a} mod ${m} =`, a:`<b>${a%m}</b>`};
  },
  isPrime(d){
    const cand=R(2,d===3?120:50);
    const prime = cand<2?false:(()=>{ for(let i=2;i*i<=cand;i++) if(cand%i===0) return false; return true; })();
    return {q:`Is ${cand} prime?`, a:`<b>${prime?'Yes':'No'}</b>`};
  },
  eulerPhi(d){
    const n=R(2,d===1?30:d===2?100:500);
    return {q:`&phi;(${n}) =`, a:`<b>${totient(n)}</b>`};
  },
  modPow(d){
    const m=R(d===1?3:5,d===1?12:d===2?30:100), a=R(2,d===1?9:30), b=R(d===1?2:5,d===1?6:d===2?20:200);
    return {q:`${a}${sup(b)} mod ${m} =`, a:`<b>${powMod(a,b,m)}</b>`};
  },

  /* ---- Numerical Analysis (MATH 353) ---- */
  newtonSqrt(d){
    // x1 = (x0 + N/x0)/2 = (x0^2 + N)/(2 x0); N = x0(2k - x0) keeps x1 = k an integer
    const x0=R(2,d===1?5:d===2?9:15), k=R(Math.floor(x0/2)+1, x0+(d===1?2:5)), N=x0*(2*k-x0);
    return {q:`Approximate &radic;${N} with one Newton step on f(x) = x${sup(2)} &minus; ${N}, starting from x<sub>0</sub> = ${x0}. x<sub>1</sub> =`,
            a:`<b>${k}</b>`};
  },
  linearInterp(d){
    const x0=R(-5,10), h=d===1?pick([2,4]):d===2?pick([2,3,4,5]):pick([4,5,6,8,10]);
    const m=nz(d===1?1:-6,6), y0=R(-20,20), t=R(1,h-1), x=x0+t;
    return {q:`Linearly interpolate through (${x0}, ${y0}) and (${x0+h}, ${y0+m*h}) to estimate y at x = ${x}.`,
            a:`<b>${sgn(y0+m*t)}</b>`};
  },

  /* ---- Graph Theory (MATH 468) ---- */
  completeGraphEdges(d){
    const n=R(3,d===1?8:d===2?20:60);
    return {q:`How many edges does the complete graph K<sub>${n}</sub> have?`, a:`<b>${n*(n-1)/2}</b>`};
  },
  degreeSum(d){
    // build an actual simple graph so the degree sequence is realizable
    const n=R(4,d===1?5:d===2?7:9), deg=new Array(n).fill(0);
    let e=0;
    for(let i=0;i<n;i++) for(let j=i+1;j<n;j++) if(Math.random()<0.45){ deg[i]++; deg[j]++; e++; }
    if(e===0){ deg[0]++; deg[1]++; e=1; }
    return {q:`A simple graph has vertex degrees ${deg.sort((a,b)=>b-a).join(', ')}. Find the sum of the degrees and the number of edges.`,
            a:`<b>sum = ${2*e}, edges = ${e}</b>`};
  },

  /* ---- Group Theory (MATH 344) ---- */
  elementOrder(d){
    const n=R(4,d===1?12:d===2?30:60), a=R(1,n-1);
    return {q:`Order of ${a} in (&#8484;<sub>${n}</sub>, +) =`, a:`<b>${n/gcd(a,n)}</b>`};
  },

  /* ---- Rings & Fields (MATH 444) ---- */
  isUnit(d){
    const n=R(4,d===1?12:d===2?30:60), a=R(2,n-1), g=gcd(a,n);
    let inv=0; if(g===1) for(let x=1;x<n;x++) if(a*x%n===1){ inv=x; break; }
    return {q:`Is ${a} a unit in &#8484;<sub>${n}</sub>?`,
            a:`<b>${g===1?`Yes (inverse ${inv})`:`No (gcd = ${g})`}</b>`};
  },

  /* ---- Special Functions (MATH 417) ---- */
  gammaFunction(d){
    const n=R(1,d===1?5:d===2?8:12);
    return {q:`&Gamma;(${n}) =`, a:`<b>${factorial(n-1)}</b>`};
  },

  /* ---- Foundations (MATH 234) ---- */
  setUnion(d){
    const hi=d===1?15:d===2?40:120, c=R(0,Math.floor(hi/3)), a=c+R(1,hi), b=c+R(1,hi);
    return {q:`If |A| = ${a}, |B| = ${b} and |A &cap; B| = ${c}, then |A &cup; B| =`, a:`<b>${a+b-c}</b>`};
  },
  powerSetSize(d){
    const n=R(d===1?1:3,d===1?4:d===2?7:10), A='abcdefghij'.slice(0,n).split('');
    return {q:`If A = {${A.join(', ')}}, then |&#119979;(A)| =`, a:`<b>${2**n}</b>`};
  },

  /* ================= MATHEMATICS TRACK PACK 2 ================= */

  /* ---- Integral Calculus (MATH 212) ---- */
  riemannSum(d){
    const n=R(2,d===1?3:d===2?4:6), h=d===3?R(1,2):1, k=R(0,5), side=pick(['left','right']);
    let s=0; for(let i=0;i<n;i++){ const x=(side==='left'?i:i+1)*h; s+=h*(x*x+k); }
    return {q:`Compute the ${side} Riemann sum of f(x) = x${sup(2)}${term(k,'')} on [0, ${n*h}] with n = ${n} equal subintervals.`, a:`<b>${s}</b>`};
  },
  avgValue(d){
    const p=R(1,d===1?1:d===2?2:3), m=R(1,4), b=R(1,d===3?4:5);
    return {q:`Find the average value of f(x) = ${m*(p+1)}x${p===1?'':sup(p)} on [0, ${b}].`, a:`<b>${m*b**p}</b>`};
  },
  defIntegralExp(d){
    const k=R(2,d===1?5:12), m=d===3?R(2,5):1;
    return {q:`&int;<sub>0</sub><sup>ln ${k}</sup> ${m>1?m:''}e${sup('x')} dx =`, a:`<b>${m*(k-1)}</b>`};
  },

  /* ---- Differential & Integral Calculus (MATH 232) ---- */
  derivChainAt(d){
    const n=R(2,d===1?2:d===2?3:4), a=nz(-3,3), b=nz(-5,5), x0=R(-2,2);
    return {q:`f(x) = (${lead(a,'x')}${term(b,'')})${sup(n)}. Find f&prime;(${x0}).`, a:`<b>${sgn(n*a*(a*x0+b)**(n-1))}</b>`};
  },
  derivProductAt(d){
    const m=R(1,d===1?2:4), c=nz(-6,6), x0=nz(-3,3);
    return {q:`f(x) = x${m===1?'':sup(m)}(x${term(c,'')}). Find f&prime;(${x0}).`,
            a:`<b>${sgn(m*x0**(m-1)*(x0+c) + x0**m)}</b>`};
  },
  criticalPoints(d){
    const k=R(1,d===1?3:6), c=R(-9,9);
    return {q:`Find the critical points of f(x) = x${sup(3)}${term(-3*k*k,'x')}${term(c,'')}.`, a:`<b>x = &minus;${k}, ${k}</b>`};
  },

  /* ---- Foundations (MATH 234) ---- */
  setOps(d){
    const U=d===1?6:d===2?8:10;
    const rnd=()=>{ const s=[]; for(let i=1;i<=U;i++) if(Math.random()<0.5) s.push(i); return s.length?s:[R(1,U)]; };
    const A=rnd(), B=rnd(), op=pick(['&cup;','&cap;','&minus;']);
    const res = op==='&cup;' ? [...new Set([...A,...B])].sort((x,y)=>x-y)
              : op==='&cap;' ? A.filter(x=>B.includes(x)) : A.filter(x=>!B.includes(x));
    const S=s=>s.length?`{${s.join(', ')}}`:'&empty;';
    return {q:align([['A','=',S(A)],['B','=',S(B)]])+'<br>'+L(`Find A ${op} B.`, `أوجد ${M(`A ${op} B`)}.`), a:`<b>${S(res)}</b>`};
  },
  cartesianSize(d){
    const a=R(2,d===1?6:12), b=R(2,d===1?6:12);
    if(d===3){ const c=R(2,6); return {q:`|A| = ${a}, |B| = ${b}, |C| = ${c}. Find |A &times; B &times; C|.`, a:`<b>${a*b*c}</b>`}; }
    return {q:`|A| = ${a}, |B| = ${b}. Find |A &times; B|.`, a:`<b>${a*b}</b>`};
  },
  logicEval(d){
    const p=pick([true,false]), q=pick([true,false]), r=pick([true,false]), T=v=>v?'T':'F';
    const ex=pick([
      ['(p &and; q) &or; r',          (p,q,r)=>(p&&q)||r],
      ['&not;p &or; (q &and; r)',     (p,q,r)=>!p||(q&&r)],
      ['(p &or; q) &and; &not;r',     (p,q,r)=>(p||q)&&!r],
      ['&not;(p &and; q) &or; r',     (p,q,r)=>!(p&&q)||r],
      ['(p &or; &not;q) &and; (q &or; r)', (p,q,r)=>(p||!q)&&(q||r)],
      ['&not;(p &or; r) &and; q',     (p,q,r)=>!(p||r)&&q],
    ]);
    return {q:`If p = ${T(p)}, q = ${T(q)}, r = ${T(r)}, evaluate ${ex[0]}.`, a:`<b>${T(ex[1](p,q,r))}</b>`};
  },
  functionCount(d){
    const m=R(2,d===1?3:5), n=R(m,d===1?4:6), inj=Math.random()<0.5;
    return {q:`|A| = ${m}, |B| = ${n}. How many ${inj?'one-to-one ':''}functions A &rarr; B are there?`,
            a:`<b>${inj?factorial(n)/factorial(n-m):n**m}</b>`};
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
    return {q:`${mat(A,n)} ${mat(v,1)} =`, a:`<b>${mat(P,1)}</b>`};
  },
  dotProduct(d){
    const n=d===1?2:3, hi=d===3?12:6, u=Array.from({length:n},()=>R(-hi,hi)), v=Array.from({length:n},()=>R(-hi,hi));
    return {q:`${vec(u)} &middot; ${vec(v)} =`, a:`<b>${sgn(u.reduce((s,x,i)=>s+x*v[i],0))}</b>`};
  },
  eigenvalues2(d){
    // pick the eigenvalues first, then build an integer matrix with that trace and determinant
    const hi=d===1?4:d===2?6:9, l1=R(-hi,hi), l2=R(-hi,hi), a=R(-hi,hi), e=l1+l2-a, p=a*e-l1*l2;
    let b, c;
    if(p===0){ if(Math.random()<0.5){ b=0; c=R(-hi,hi); } else { c=0; b=R(-hi,hi); } }
    else { const divs=[]; for(let k=1;k<=Math.abs(p);k++) if(p%k===0) divs.push(k); b=pick(divs)*pick([1,-1]); c=p/b; }
    const ans = l1===l2 ? `&lambda; = ${sgn(l1)} (double)` : `&lambda; = ${sgn(Math.min(l1,l2))}, ${sgn(Math.max(l1,l2))}`;
    return {q:`Find the eigenvalues of ${mat([a,b,c+0,e])}.`, a:`<b>${ans}</b>`};
  },

  /* ---- Numerical Analysis (MATH 353) ---- */
  bisectionStep(d){
    let a, b, N, m;
    do{ a=R(1,d===1?5:9); b=a+2*R(1,d===3?3:2); N=R(a*a+1,b*b-1); m=(a+b)/2; }while(m*m===N);
    const next = (a*a-N)*(m*m-N)<0 ? [a,m] : [m,b];
    return {q:`Apply one bisection step to f(x) = x${sup(2)} &minus; ${N} on [${a}, ${b}].`,
            a:`<b>m = ${m}; new interval [${next[0]}, ${next[1]}]</b>`};
  },
  trapezoidRule(d){
    const n=R(2,d===1?2:4), h=d===3?pick([1,2]):1, p=d===3?3:2, c=R(0,4), f=x=>x**p+c;
    let s=(f(0)+f(n*h))/2; for(let i=1;i<n;i++) s+=f(i*h);
    return {q:`Use the trapezoidal rule with n = ${n} subintervals to approximate &int;<sub>0</sub><sup>${n*h}</sup> (x${sup(p)}${term(c,'')}) dx.`,
            a:`<b>${h*s}</b>`};
  },
  eulerStep(d){
    const a=nz(-3,3), b=nz(-2,2), h=pick(d===1?[1]:d===2?[0.5,1]:[0.25,0.5]), steps=d===3?2:1, x0=R(0,2), y0=R(-3,5);
    let x=x0, y=y0; for(let i=0;i<steps;i++){ y+=h*(a*x+b*y); x+=h; }   // h is a power of 2: exact in floating point
    return {q:L(`Use Euler's method with h = ${h} (${steps} step${steps>1?'s':''}) to find y(${x}):`, `استخدم طريقة أويلر بخطوة ${M('h = '+h)} (${steps>1?'خطوتان':'خطوة واحدة'}) لإيجاد ${M(`y(${x})`)}:`)+'<br>'+
              align([['y&prime;','=',`${lead(a,'x')}${term(b,'y')}`],[`y(${x0})`,'=',y0]], true),
            a:`<b>${sgn(y)}</b>`};
  },
  absoluteError(d){
    const p=pick([50,100,200,250,400,500,1000])*(d===3?pick([2,4,5,10]):1), e=R(1,d===1?9:30), approx=p+pick([1,-1])*e;
    return {q:`True value p = ${p}, approximation p* = ${approx}. Find the absolute and relative errors.`,
            a:`<b>abs = ${e}, rel = ${+(e/p).toFixed(6)}</b>`};
  },

  /* ---- Ordinary Differential Equations (MATH 333) ---- */
  charRoots(d){
    const hi=d===1?4:d===2?6:9, r1=R(-hi,hi), r2=R(-hi,hi), b=-(r1+r2), c=r1*r2;
    const ans = r1===r2 ? `r = ${sgn(r1)} (double)` : `r = ${sgn(Math.min(r1,r2))}, ${sgn(Math.max(r1,r2))}`;
    return {q:`Find the roots of the characteristic equation of y&Prime;${term(b,'y&prime;')}${term(c,'y')} = 0.`, a:`<b>${ans}</b>`};
  },
  expGrowth(d){
    const y0=R(2,50), T=R(1,6), n=R(1,d===1?3:d===2?5:8);
    return {q:`A population follows y&prime; = ky with y(0) = ${y0} and doubles every ${T} hours. Find y(${n*T}).`, a:`<b>${y0*2**n}</b>`};
  },
  ivpPolynomial(d){
    const p=R(0,d===1?1:3), c=nz(-4,4), y0=R(-9,9), x1=nz(-3,3), k=c*(p+1);
    const rhs = p===0 ? sgn(k) : lead(k,'x'+(p===1?'':sup(p)));
    return {q:L(`Solve the initial value problem and find y(${x1}):`, `حل مسألة القيمة الابتدائية وأوجد ${M(`y(${x1})`)}:`)+'<br>'+align([['y&prime;','=',rhs],['y(0)','=',y0]], true), a:`<b>${sgn(c*x1**(p+1)+y0)}</b>`};
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
    return {q:`u<sub>tt</sub> = ${c*c}u<sub>xx</sub>. Find the wave speed c.`, a:`<b>${c}</b>`};
  },
  laplacianPoly(d){
    const a=nz(-6,6), b=R(-6,6), c=nz(-6,6), e=d===1?0:R(-9,9);
    return {q:`u(x, y) = ${lead(a,'x'+sup(2))}${term(b,'xy')}${term(c,'y'+sup(2))}${term(e,'x')}. Find u<sub>xx</sub> + u<sub>yy</sub>.`,
            a:`<b>${sgn(2*a+2*c)}</b>`};
  },
  heatSeparation(d){
    const n=R(1,d===1?3:6), al=R(1,d===1?3:9);
    return {q:`u(x, t) = e${sup('&minus;kt')} sin(${n===1?'':n}x) solves u<sub>t</sub> = ${al===1?'':al}u<sub>xx</sub>. Find k.`, a:`<b>${al*n*n}</b>`};
  },

  /* ---- Vector Analysis (MATH 335) ---- */
  crossProduct(d){
    const hi=d===1?4:d===2?6:9, u=[R(-hi,hi),R(-hi,hi),R(-hi,hi)], v=[R(-hi,hi),R(-hi,hi),R(-hi,hi)];
    const w=[u[1]*v[2]-u[2]*v[1], u[2]*v[0]-u[0]*v[2], u[0]*v[1]-u[1]*v[0]].map(x=>x+0);
    return {q:`${vec(u)} &times; ${vec(v)} =`, a:`<b>${vec(w)}</b>`};
  },
  vectorMagnitude(d){
    const t=pick(d===1?[[1,2,2,3],[2,3,6,7]]:[[1,2,2,3],[2,3,6,7],[1,4,8,9],[4,4,7,9],[2,6,9,11],[6,6,7,11],[3,4,12,13],[2,10,11,15]]);
    const v=shuffled(t.slice(0,3)).map(x=>x*pick([1,-1]));
    return {q:`|${vec(v)}| =`, a:`<b>${t[3]}</b>`};
  },
  divergence(d){
    const a=nz(-5,5), b=nz(-5,5), c=nz(-5,5), x=R(-3,3), y=R(-3,3), z=R(-3,3);
    return {q:`F = &lang;${lead(a,'xy')}, ${lead(b,'yz')}, ${lead(c,'zx')}&rang;. Find &nabla;&middot;F at (${x}, ${y}, ${z}).`,
            a:`<b>${sgn(a*y+b*z+c*x)}</b>`};
  },
  gradientAt(d){
    const a=nz(-5,5), b=nz(-5,5), c=nz(-5,5), x=R(-3,3), y=R(-3,3), z=R(-3,3);
    return {q:`f = ${lead(a,'x'+sup(2))}${term(b,'y'+sup(2))}${term(c,'z'+sup(2))}. Find &nabla;f at (${x}, ${y}, ${z}).`,
            a:`<b>${vec([2*a*x,2*b*y,2*c*z].map(v=>v+0))}</b>`};
  },

  /* ---- Real Analysis (MATH 383) ---- */
  seqLimit(d){
    const a=nz(-9,9), b=R(-9,9), c=nz(1,d===1?3:9), e=R(-9,9);
    return {q:`lim<sub>n&rarr;&infin;</sub> ${frac(lead(a,'n')+term(b,''), lead(c,'n')+term(e,''))} =`, a:`<b>${fracStr(a,c)}</b>`};
  },
  geometricSeries(d){
    const a=nz(-9,9), q=R(2,d===1?3:6), p=d===1?1:nz(-(q-1),q-1);
    const ratio=(p<0?'&minus;':'')+frac(Math.abs(p),q);
    return {q:`Find the sum of the infinite geometric series with first term ${sgn(a)} and common ratio ${ratio}.`, a:`<b>${fracStr(a*q,q-p)}</b>`};
  },
  telescopingSum(d){
    const N=R(3,d===1?9:d===2?50:200), k=d===3?2:1;
    // k=1: N/(N+1);  k=2: (1/2)(3/2 − 1/(N+1) − 1/(N+2))
    const ans = k===1 ? fracStr(N,N+1) : fracStr(3*(N+1)*(N+2)-2*(N+2)-2*(N+1), 4*(N+1)*(N+2));
    return {q:`&sum;<sub>n=1</sub><sup>${N}</sup> ${frac(1,`n(n + ${k})`)} =`, a:`<b>${ans}</b>`};
  },
  epsilonN(d){
    const c=d===1?1:R(1,5), k=R(2,d===3?1000:20);
    return {q:`For a<sub>n</sub> = ${frac(c,'n')}, find the smallest N with a<sub>n</sub> &lt; ${frac(1,k)} for all n &ge; N.`, a:`<b>N = ${c*k+1}</b>`};
  },

  /* ---- Topology (MATH 473) ---- */
  eulerCharacteristic(d){
    const n=R(3,d===1?6:12), solid=pick(['prism','pyramid','bipyramid']);
    const [V,E,F] = solid==='prism' ? [2*n,3*n,n+2] : solid==='pyramid' ? [n+1,2*n,n+1] : [n+2,3*n,2*n];
    const miss=pick(['V','E','F']), vals={V,E,F};
    const known=['V','E','F'].filter(x=>x!==miss).map(x=>`${x} = ${vals[x]}`).join(', ');
    return {q:`A convex polyhedron (${n}-gonal ${solid}) has ${known}. Find ${miss}.`, a:`<b>${miss} = ${vals[miss]}</b>`};
  },
  surfaceGenus(d){
    const g=R(0,d===1?3:10);
    if(Math.random()<0.5) return {q:`Find the Euler characteristic of a closed orientable surface of genus ${g}.`, a:`<b>&chi; = ${sgn(2-2*g)}</b>`};
    return {q:`A closed orientable surface has Euler characteristic ${sgn(2-2*g)}. Find its genus.`, a:`<b>g = ${g}</b>`};
  },
  topologyOpenSets(d){
    const n=R(1,d===1?4:8), t=pick(['discrete','indiscrete']);
    return {q:`How many open sets does the ${t} topology on a set with ${n} point${n>1?'s':''} have?`, a:`<b>${t==='discrete'?2**n:2}</b>`};
  },

  /* ---- Differential Geometry (MATH 475) ---- */
  circleCurvature(d){
    const r=R(2,d===1?5:20);
    return {q:`Find the curvature of the circle r(t) = (${r} cos t, ${r} sin t).`, a:`<b>&kappa; = ${fracStr(1,r)}</b>`};
  },
  parabolaCurvature(d){
    const a=nz(-6,6), b=d===1?0:R(-6,6), c=R(-9,9);
    return {q:`Find the curvature of y = ${lead(a,'x'+sup(2))}${term(b,'x')}${term(c,'')} at its vertex.`, a:`<b>&kappa; = ${2*Math.abs(a)}</b>`};
  },
  helixArcLength(d){
    const t=pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17]]), n=R(1,d===1?1:3), [r,c,h]=Math.random()<0.5?t:[t[1],t[0],t[2]];
    return {q:`Find the arc length of the helix r(t) = (${r} cos t, ${r} sin t, ${c}t) for 0 &le; t &le; ${2*n}&pi;.`, a:`<b>${2*n*h}&pi;</b>`};
  },
  helixCurvature(d){
    const r=R(1,d===1?4:9), c=R(1,d===1?4:9);
    return {q:`Find the curvature of the helix r(t) = (${r} cos t, ${r} sin t, ${c}t).`, a:`<b>&kappa; = ${fracStr(r,r*r+c*c)}</b>`};
  },

  /* ---- Group Theory (MATH 344) ---- */
  groupGenerators(d){
    const n=R(2,d===1?20:d===2?60:200);
    return {q:`How many generators does the cyclic group &#8484;<sub>${n}</sub> have?`, a:`<b>${totient(n)}</b>`};
  },
  permutationOrder(d){
    const n=R(4,d===1?5:d===2?7:9); let cycles;
    do{
      const p=shuffled(Array.from({length:n},(_,i)=>i+1)), seen=new Set(); cycles=[];
      for(let i=1;i<=n;i++){ if(seen.has(i)) continue; const c=[]; let j=i; while(!seen.has(j)){ seen.add(j); c.push(j); j=p[j-1]; } if(c.length>1) cycles.push(c); }
    }while(!cycles.length);
    return {q:`Find the order of the permutation ${cycles.map(c=>`(${c.join(' ')})`).join('')} in S<sub>${n}</sub>.`,
            a:`<b>${cycles.reduce((o,c)=>lcm(o,c.length),1)}</b>`};
  },
  groupOrder(d){
    const t=pick(['S','A','D']), n=t==='D'?R(3,d===1?6:20):R(t==='A'?3:2,d===1?5:7);
    const ans = t==='S'?factorial(n):t==='A'?factorial(n)/2:2*n;
    const name = t==='D' ? `the dihedral group D<sub>${n}</sub> (symmetries of a regular ${n}-gon)` : `${t}<sub>${n}</sub>`;
    return {q:`Find the order of ${name}.`, a:`<b>${ans}</b>`};
  },
  lagrangeIndex(d){
    const k=R(2,d===1?6:12), m=R(2,d===1?6:12);
    return {q:`A group G of order ${k*m} has a subgroup H of order ${k}. Find [G : H].`, a:`<b>${m}</b>`};
  },

  /* ---- Rings & Fields (MATH 444) ---- */
  modInverse(d){
    const m=R(5,d===1?13:d===2?31:97); let a=R(2,m-1); while(gcd(a,m)!==1) a=R(2,m-1);
    let inv=1; while(a*inv%m!==1) inv++;
    return {q:`Find ${a}${sup('&minus;1')} mod ${m}.`, a:`<b>${inv}</b>`};
  },
  zeroDivisors(d){
    const n=R(4,d===1?12:d===2?30:60);
    return {q:`How many nonzero zero divisors does &#8484;<sub>${n}</sub> have?`, a:`<b>${n-1-totient(n)}</b>`};
  },
  polyEvalModP(d){
    const p=pick(d===1?[5,7]:d===2?[7,11,13]:[13,17,19,23]), a=R(0,p-1), b=R(0,p-1), c=R(0,p-1);
    return {q:`In &#8484;<sub>${p}</sub>, evaluate f(${c}) for f(x) = x${sup(2)}${term(a,'x')}${term(b,'')}.`, a:`<b>${(c*c+a*c+b)%p}</b>`};
  },
  fieldCheck(d){
    const n=R(2,d===1?15:d===2?40:100);
    return {q:`Is &#8484;<sub>${n}</sub> a field?`, a:`<b>${isPrimeN(n)?'Yes':'No'}</b>`};
  },

  /* ---- Complex Analysis (MATH 485) ---- */
  complexDivide(d){
    const hi=d===1?4:d===2?6:9, a=nz(-hi,hi), b=nz(-hi,hi), c=nz(-hi,hi), e=nz(-hi,hi);   // (a+bi)(c+ei) ÷ (c+ei) = a+bi
    return {q:`(${cplx(a*c-b*e, a*e+b*c)}) &divide; (${cplx(c,e)}) =`, a:`<b>${cplx(a,b)}</b>`};
  },
  complexSquare(d){
    const hi=d===1?4:d===2?7:12, a=nz(-hi,hi), b=nz(-hi,hi);
    return {q:`(${cplx(a,b)})${sup(2)} =`, a:`<b>${cplx(a*a-b*b, 2*a*b)}</b>`};
  },
  complexArgument(d){
    const dir=R(0,7), k=R(1,d===1?5:12), dx=[1,1,0,-1,-1,-1,0,1][dir], dy=[0,1,1,1,0,-1,-1,-1][dir];
    const re=k*dx, im=k*dy;
    const z = im===0 ? sgn(re) : re===0 ? `${im<0?'&minus;':''}${Math.abs(im)===1?'':Math.abs(im)}i` : cplx(re,im);
    const arg=['0','&pi;/4','&pi;/2','3&pi;/4','&pi;','&minus;3&pi;/4','&minus;&pi;/2','&minus;&pi;/4'][dir];
    return {q:`Find the principal argument of z = ${z}.`, a:`<b>Arg z = ${arg}</b>`};
  },

  /* ---- Number Theory (MATH 367) ---- */
  divisorCount(d){
    const n=R(2,d===1?30:d===2?100:1000); let c=0; for(let k=1;k<=n;k++) if(n%k===0) c++;
    return {q:`&tau;(${n}) = (number of positive divisors)`, a:`<b>${c}</b>`};
  },
  divisorSum(d){
    const n=R(2,d===1?30:d===2?100:500); let s=0; for(let k=1;k<=n;k++) if(n%k===0) s+=k;
    return {q:`&sigma;(${n}) = (sum of positive divisors)`, a:`<b>${s}</b>`};
  },
  linearCongruence(d){
    const m=R(5,d===1?12:d===2?30:60); let a=R(2,m-1); while(gcd(a,m)!==1) a=R(2,m-1);
    const x=R(0,m-1), b=a*x%m;
    return {q:`Solve ${a}x &equiv; ${b} (mod ${m}).`, a:`<b>x &equiv; ${x} (mod ${m})</b>`};
  },
  crt(d){
    const m1=R(3,d===1?5:9); let m2=R(3,d===1?7:13); while(gcd(m1,m2)!==1||m1===m2) m2=R(3,d===1?7:13);
    const x=R(0,m1*m2-1);
    return {q:L('Find the smallest x &ge; 0 that satisfies:', `أوجد أصغر عدد ${M('x &ge; 0')} يحقق:`)+'<br>'+
              align([['x','&equiv;',`${x%m1} (mod ${m1})`],['x','&equiv;',`${x%m2} (mod ${m2})`]], true), a:`<b>x = ${x}</b>`};
  },
  primeFactorization(d){
    const ps=shuffled(d===1?[2,3,5]:[2,3,5,7,11,13]).slice(0,d===1?2:R(2,4)).sort((a,b)=>a-b);
    const ex=ps.map(()=>R(1,d===3?3:2)); let n=1; ps.forEach((p,i)=>n*=p**ex[i]);
    return {q:`Find the prime factorization of ${n}.`, a:`<b>${ps.map((p,i)=>ex[i]>1?p+sup(ex[i]):''+p).join(' &middot; ')}</b>`};
  },

  /* ---- Graph Theory (MATH 468) ---- */
  treeEdges(d){
    const n=R(4,d===1?15:100);
    if(d===3 && Math.random()<0.5){ const k=R(2,6); return {q:`A forest has ${n} vertices and ${k} components (trees). How many edges does it have?`, a:`<b>${n-k}</b>`}; }
    return {q:`How many edges does a tree with ${n} vertices have?`, a:`<b>${n-1}</b>`};
  },
  bipartiteEdges(d){
    const m=R(2,d===1?5:12), n=R(2,d===1?5:12);
    return {q:`How many edges does the complete bipartite graph K<sub>${m},${n}</sub> have?`, a:`<b>${m*n}</b>`};
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
    return {q:`A connected graph has vertex degrees ${deg.sort((a,b)=>b-a).join(', ')}. Does it have an Euler circuit?`,
            a:`<b>${odd?`No (${odd} odd-degree vertices)`:'Yes'}</b>`};
  },
  chromaticNumber(d){
    const t=pick(['C','K','KK','W']), n=R(t==='W'?3:t==='C'?3:2,d===1?6:12);
    if(t==='C') return {q:`Find the chromatic number of the cycle C<sub>${n}</sub>.`, a:`<b>${n%2?3:2}</b>`};
    if(t==='K') return {q:`Find the chromatic number of the complete graph K<sub>${n}</sub>.`, a:`<b>${n}</b>`};
    if(t==='KK'){ const m=R(1,8); return {q:`Find the chromatic number of K<sub>${m},${n}</sub>.`, a:`<b>2</b>`}; }
    return {q:`Find the chromatic number of the wheel W<sub>${n}</sub> (a cycle C<sub>${n}</sub> plus a hub).`, a:`<b>${n%2?4:3}</b>`};
  },

  /* ---- Special Functions (MATH 417) ---- */
  gammaHalf(d){
    const n=R(0,d===1?2:4), c=fracStr(factorial(2*n), 4**n*factorial(n));   // Γ(n + 1/2) = (2n)! / (4ⁿ n!) · √π
    return {q:`&Gamma;(${frac(2*n+1,2)}) =`, a:`<b>${c==='1'?'':c}&radic;&pi;</b>`};
  },
  betaFunction(d){
    const m=R(1,d===1?3:6), n=R(1,d===1?3:6);
    return {q:`B(${m}, ${n}) =`, a:`<b>${fracStr(factorial(m-1)*factorial(n-1), factorial(m+n-1))}</b>`};
  },
  legendreP(d){
    const n=R(2,d===1?2:d===2?3:4), x=R(-3,3);
    const [num,den] = n===2 ? [3*x*x-1,2] : n===3 ? [5*x**3-3*x,2] : [35*x**4-30*x*x+3,8];
    return {q:`P<sub>${n}</sub>(${x}) = (Legendre polynomial)`, a:`<b>${fracStr(num,den)}</b>`};
  },
  chebyshevT(d){
    const n=R(2,d===1?3:5), x=R(-3,3); let a=1, b=x;
    for(let k=1;k<n;k++) [a,b]=[b,2*x*b-a];
    return {q:`T<sub>${n}</sub>(${x}) = (Chebyshev polynomial)`, a:`<b>${sgn(b)}</b>`};
  },

  /* ---- Functional Analysis (MATH 432) ---- */
  vectorNorms(d){
    const t=pick(['1','&infin;','2']); let v;
    if(t==='2'){ const q=pick([[3,4,5],[6,8,10],[5,12,13],[1,2,2,3],[2,3,6,7],[1,4,8,9]]); v=shuffled(q.slice(0,-1)).map(x=>x*pick([1,-1])); }
    else v=Array.from({length:d===1?3:R(3,5)},()=>nz(-9,9));
    const ans = t==='1' ? v.reduce((s,x)=>s+Math.abs(x),0) : t==='&infin;' ? Math.max(...v.map(Math.abs)) : Math.round(Math.hypot(...v));
    return {q:`v = (${v.map(sgn).join(', ')}). Find &Vert;v&Vert;<sub>${t}</sub>.`, a:`<b>${ans}</b>`};
  },
  operatorNormDiag(d){
    const n=d===1?2:R(3,4), D=new Array(n*n).fill(0); for(let i=0;i<n;i++) D[i*n+i]=nz(-12,12);
    return {q:`Find the operator norm (induced 2-norm) of ${mat(D,n)}.`, a:`<b>${Math.max(...D.map(Math.abs))}</b>`};
  },
  l2InnerProduct(d){
    const a=nz(-6,6), b=nz(-6,6), m=R(0,d===1?2:5), n=R(0,d===1?2:5);
    const mono=(c,p)=>p===0?sgn(c):lead(c,'x'+(p===1?'':sup(p)));
    return {q:`In L${sup(2)}[0, 1], compute &lang;${mono(a,m)}, ${mono(b,n)}&rang;.`, a:`<b>${fracStr(a*b,m+n+1)}</b>`};
  },

  /* ================= STUDY-PLAN PACK (Shaqra University, Mathematics) ================= */

  /* ---- Probability Theory 2 (STAT 312) ---- */
  binomialProb(d){
    const n=R(2,d===1?4:d===2?6:8), k=R(0,n), [a,b]=pick(d===1?[[1,2]]:[[1,2],[1,3],[2,3],[1,4],[3,4]]);
    let C=1; for(let i=1;i<=k;i++) C=C*(n-k+i)/i;
    return {q:`X ~ Bin(${n}, ${frac(a,b)}). Find P(X = ${k}).`, a:`<b>${fracStr(C*a**k*(b-a)**(n-k), b**n)}</b>`};
  },
  expectedValue(d){
    const [xs,cs,D]=discreteDist(d), E=xs.reduce((s,x,i)=>s+x*cs[i],0);
    return {q:`X takes the values ${xs.map(sgn).join(', ')} with probabilities ${cs.map(c=>fracStr(c,D)).join(', ')}. Find E(X).`, a:`<b>${fracStr(E,D)}</b>`};
  },
  varianceDiscrete(d){
    const [xs,cs,D]=discreteDist(d), E=xs.reduce((s,x,i)=>s+x*cs[i],0), E2=xs.reduce((s,x,i)=>s+x*x*cs[i],0);
    return {q:`X takes the values ${xs.map(sgn).join(', ')} with probabilities ${cs.map(c=>fracStr(c,D)).join(', ')}. Find Var(X).`,
            a:`<b>${fracStr(E2*D-E*E, D*D)}</b>`};                                   // Var = E[X²] − E[X]²
  },

  /* ---- Operations Research 1 (STAT 361) ---- */
  lpCornerPoint(d){
    // feasible region: x + y ≤ c, x ≤ p, y ≤ q, x, y ≥ 0  with p, q < c < p + q
    const p=R(2,d===1?6:12), q=R(2,d===1?6:12), c=R(Math.max(p,q)+1,p+q-1), a=R(1,d===1?5:9), b=R(1,d===1?5:9);
    const V=[[0,0],[p,0],[p,c-p],[c-q,q],[0,q]], best=Math.max(...V.map(([x,y])=>a*x+b*y));
    return {q:L(`Maximize Z = ${a}x + ${b}y subject to:`, `أوجد القيمة العظمى لـ ${M(`Z = ${a}x + ${b}y`)} بشرط:`)+'<br>'+
              align([['x + y','&le;',c],['x','&le;',p],['y','&le;',q],['x, y','&ge;','0']], true), a:`<b>max Z = ${best}</b>`};
  },

  /* ---- Economic and Financial Mathematics (MATH 371) ---- */
  effectiveRate(d){
    const r=R(2,d===1?12:24), m=pick(d===1?[2,4]:[2,4,12]), name={2:'semi-annually',4:'quarterly',12:'monthly'}[m];
    return {q:`Find the effective annual rate of ${r}% compounded ${name}.`, a:`<b>${+(((1+r/100/m)**m-1)*100).toFixed(4)}%</b>`};
  },
  annuityFV(d){
    const P=R(1,20)*100, r=R(2,d===1?6:10), n=R(2,d===1?5:15), i=r/100;
    return {q:`$${P} is deposited at the end of each year for ${n} years at ${r}% compounded annually. Find the future value.`,
            a:`<b>$${(P*((1+i)**n-1)/i).toFixed(2)}</b>`};
  },

  /* ---- Computational Methods for ODEs (MATH 342) ---- */
  improvedEuler(d){
    const a=nz(-3,3), b=nz(-2,2), h=pick(d===1?[1]:[0.5,0.25]), x0=R(0,2), y0=R(-3,5), f=(x,y)=>a*x+b*y;
    const k1=f(x0,y0), k2=f(x0+h,y0+h*k1);                       // h is a power of 2: exact in floating point
    return {q:L(`Use one step of the improved Euler (Heun) method with h = ${h} to find y(${x0+h}):`, `استخدم خطوة واحدة من طريقة أويلر المحسّنة (هيون) بخطوة ${M('h = '+h)} لإيجاد ${M(`y(${x0+h})`)}:`)+'<br>'+
              align([['y&prime;','=',`${lead(a,'x')}${term(b,'y')}`],[`y(${x0})`,'=',y0]], true),
            a:`<b>${sgn(y0+h/2*(k1+k2))}</b>`};
  },

  /* ---- Integral Equations (MATH 416) ---- */
  fredholmSeparable(d){
    // u(x) = c·x + λ∫₀¹ x t u(t) dt  ⇒  u(x) = kx with k = c + λk/3  ⇒  k = 3c / (3 − λ)
    const c=R(1,d===1?3:6); let l=nz(-6,6); while(l===3) l=nz(-6,6);
    const k=fracStr(3*c,3-l);
    return {q:`Solve u(x) = ${c===1?'':c}x ${l<0?'&minus;':'+'} ${Math.abs(l)===1?'':Math.abs(l)}&int;<sub>0</sub><sup>1</sup> xt u(t) dt.`,
            a:`<b>u(x) = ${k==='1'?'':k==='&minus;1'?'&minus;':k}x</b>`};
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
    const n=R(4,d===3?10:7), r=R(1,n-1);
    return {q:`C(${n}, ${r}) =`, a:`<b>${factorial(n)/(factorial(r)*factorial(n-r))}</b>`};
  },
  permutations(d){
    const n=R(3,d===3?9:6), r=R(1,Math.min(n,4));
    return {q:`P(${n}, ${r}) =`, a:`<b>${factorial(n)/factorial(n-r)}</b>`};
  },

  /* ---- Statistical Methods (STAT 302) ---- */
  zScore(d){
    const mu=R(10,60), sigma=pick([2,3,4,5]), k=nz(-3,3), x=mu+k*sigma;
    return {q:`A data set has mean ${mu} and standard deviation ${sigma}. Find the z-score of ${x}.`, a:`<b>${k}</b>`};
  },

  /* ---- Principles of Financial Mathematics (MATH 321) ---- */
  simpleInterest(d){
    const P=R(1,20)*100, r=R(1,12), t=R(1,8);
    return {q:`Find the simple interest on $${P} at ${r}% per year for ${t} years.`, a:`<b>$${P*r*t/100}</b>`};
  },
  compoundInterest(d){
    const P=R(1,20)*100, r=R(2,10), t=R(2,d===3?8:5);
    return {q:`$${P} is invested at ${r}% compounded annually for ${t} years. Find the amount.`, a:`<b>$${(P*Math.pow(1+r/100,t)).toFixed(2)}</b>`};
  },
  presentValue(d){
    const FV=R(5,40)*100, r=R(2,10), t=R(2,d===3?8:5);
    return {q:`Find the present value of $${FV} due in ${t} years at ${r}% annual interest.`, a:`<b>$${(FV/Math.pow(1+r/100,t)).toFixed(2)}</b>`};
  }
};

