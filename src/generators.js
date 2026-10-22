import { R, pick, nz, gcd, sup, frac, sq, reduceFrac, fracStr, term, lead, factorial, sgn, cplx, mat, TRIG, shuffled,
         lcm, totient, powMod, isPrimeN, vec } from './helpers.js';

/* a small discrete distribution: distinct values xs with probabilities cs[i]/D (all cs[i] ≥ 1) */
function discreteDist(d){
  const n=d===1?2:d===2?3:4, D=pick(d===1?[4,5]:[5,8,10]), xs=[];
  while(xs.length<n){ const x=R(-5,9); if(!xs.includes(x)) xs.push(x); }
  const cs=new Array(n).fill(1); for(let k=n;k<D;k++) cs[R(0,n-1)]++;
  return [xs.sort((a,b)=>a-b), cs, D];
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
    return {q:`f(x) = ${qh}&nbsp;&nbsp; f&prime;(x) =`, a:`<b>${ah}</b>`};
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
    return {q:`${eq(a1,b1,c1)}&nbsp;&nbsp;,&nbsp;&nbsp; ${eq(a2,b2,c2)}`,
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
    return {q:`&int; (${qh}) dx =`, a:`<b>${ah} + C</b>`};
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
    return {q:`${mat(A)} + ${mat(B)} =`, a:`<b>${mat(A.map((x,i)=>x+B[i]))}</b>`};
  },
  determinant2(d){
    const hi=d===3?12:9, a=nz(-hi,hi),b=nz(-hi,hi),c=nz(-hi,hi),e=nz(-hi,hi);
    return {q:`det ${mat([a,b,c,e])} =`, a:`<b>${a*e-b*c}</b>`};
  },
  matrixMultiply(d){
    const hi=d===1?5:d===2?7:9;
    const A=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)], B=[nz(-hi,hi),nz(-hi,hi),nz(-hi,hi),nz(-hi,hi)];
    const P=[A[0]*B[0]+A[1]*B[2], A[0]*B[1]+A[1]*B[3], A[2]*B[0]+A[3]*B[2], A[2]*B[1]+A[3]*B[3]];
    return {q:`${mat(A)} ${mat(B)} =`, a:`<b>${mat(P)}</b>`};
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
    return {q:`(${cplx(a,b)}) + (${cplx(c,e)}) =`, a:`<b>${cplx(a+c,b+e)}</b>`};
  },
  complexMultiply(d){
    const hi=d===1?5:d===2?8:11, a=nz(-hi,hi),b=nz(-hi,hi),c=nz(-hi,hi),e=nz(-hi,hi);
    return {q:`(${cplx(a,b)})(${cplx(c,e)}) =`, a:`<b>${cplx(a*c-b*e, a*e+b*c)}</b>`};
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
    return {q:`A = ${S(A)}, B = ${S(B)}. Find A ${op} B.`, a:`<b>${S(res)}</b>`};
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
    return {q:`${mat(A)}${sup('&minus;1')} =`, a:`<b>${mat([A[3]*det,-A[1]*det,-A[2]*det,A[0]*det])}</b>`};
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
    return {q:`Use Euler's method with h = ${h} (${steps} step${steps>1?'s':''}) on y&prime; = ${lead(a,'x')}${term(b,'y')}, y(${x0}) = ${y0}. Find y(${x}).`,
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
    return {q:`Solve y&prime; = ${rhs}, y(0) = ${y0}. Find y(${x1}).`, a:`<b>${sgn(c*x1**(p+1)+y0)}</b>`};
  },

  /* ---- Partial Differential Equations (MATH 315) ---- */
  pdeClassify(d){
    let A=nz(-5,5), B=R(-8,8), C=nz(-5,5);
    if(Math.random()<1/3){ const k=pick([1,-1,2]), s=R(1,3), t=R(1,3); A=k*s*s; C=k*t*t; B=2*k*s*t*pick([1,-1]); } // B² = 4AC
    const disc=B*B-4*A*C;
    return {q:`Classify the PDE ${lead(A,'u<sub>xx</sub>')}${term(B,'u<sub>xy</sub>')}${term(C,'u<sub>yy</sub>')} = 0.`,
            a:`<b>${disc>0?'Hyperbolic':disc===0?'Parabolic':'Elliptic'}</b>`};
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
    return {q:`Find the smallest x &ge; 0 with x &equiv; ${x%m1} (mod ${m1}) and x &equiv; ${x%m2} (mod ${m2}).`, a:`<b>x = ${x}</b>`};
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
    return {q:`Maximize Z = ${a}x + ${b}y subject to x + y &le; ${c}, x &le; ${p}, y &le; ${q}, x, y &ge; 0.`, a:`<b>max Z = ${best}</b>`};
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
    return {q:`Use one step of the improved Euler (Heun) method with h = ${h} on y&prime; = ${lead(a,'x')}${term(b,'y')}, y(${x0}) = ${y0}. Find y(${x0+h}).`,
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

  /* ---- Computational Methods for PDEs (MATH 442) ---- */
  ftcsHeatStep(d){
    const r=pick(d===1?[0.5]:[0.25,0.5]), hi=d===3?60:20, a=R(0,hi), b=R(0,hi), c=R(0,hi);
    return {q:`Explicit (FTCS) scheme for u<sub>t</sub> = u<sub>xx</sub> with r = ${r}: u<sub>i&minus;1</sub> = ${a}, u<sub>i</sub> = ${b}, u<sub>i+1</sub> = ${c}. Find u<sub>i</sub> at the next time step.`,
            a:`<b>${sgn(b+r*(c-2*b+a))}</b>`};
  },
  laplaceFivePoint(d){
    const hi=d===3?100:30, v=[R(0,hi),R(0,hi),R(0,hi),R(0,hi)];
    return {q:`Five-point scheme for Laplace's equation: the neighbours of P are ${v.join(', ')}. Estimate u(P).`, a:`<b>${v.reduce((s,x)=>s+x,0)/4}</b>`};
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

