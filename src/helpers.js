export const R = (min,max)=>Math.floor(Math.random()*(max-min+1))+min;
export const pick = arr => arr[Math.floor(Math.random()*arr.length)];
export const nz = (min,max)=>{let v=0;while(v===0)v=R(min,max);return v;};
export const gcd = (a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b];}return a||1;};

/* formatting helpers (return HTML) */
export const sup = p => `<sup>${p}</sup>`;
export function frac(n,d){ return `<span class="frac"><span class="n">${n}</span><span class="d">${d}</span></span>`; }
export const sq = n => `&radic;<span style="border-top:1.2px solid currentColor;padding:0 2px">${n}</span>`;
export function reduceFrac(n,d){ const g=gcd(n,d); n/=g; d/=g; if(d<0){n=-n;d=-d;} return [n,d]; }
export function fracStr(n,d){ [n,d]=reduceFrac(n,d); if(d===1) return `${n}`; return (n<0?'-':'')+''+frac(Math.abs(n),d); }
// signed term like " + 3x" / " - x" / " - 7"
export function term(coef, varPart){
  if(coef===0) return '';
  const sign = coef<0 ? ' &minus; ' : ' + ';
  let mag = Math.abs(coef);
  let body = varPart ? ((mag===1?'':mag)+varPart) : ''+mag;
  return sign+body;
}
// leading term (no leading +)
export function lead(coef, varPart){
  if(coef===0) return '0';
  const sign = coef<0 ? '&minus;' : '';
  let mag=Math.abs(coef);
  return sign + (varPart ? ((mag===1?'':mag)+varPart) : ''+mag);
}
// extra helpers for university-level topics
export function factorial(n){ let r=1; for(let i=2;i<=n;i++) r*=i; return r; }
export const sgn = v => v<0 ? '&minus;'+Math.abs(v) : ''+v;   // signed number
export function cplx(re,im){                                   // a + bi, signed
  const iAbs = Math.abs(im)===1 ? '' : Math.abs(im);
  return `${sgn(re)}${im<0?' &minus; ':' + '}${iAbs}i`;
}
export function mat(v, cols=2){ return `<span class="mat"${cols===2?'':` style="grid-template-columns:repeat(${cols},auto)"`}>${v.map(x=>`<span>${x<0?'&minus;'+Math.abs(x):x}</span>`).join('')}</span>`; }

/* exact special-angle values (degrees -> sin, cos, tan) */
export const TRIG = {
  0:   {s:'0',            c:'1',               t:'0'},
  30:  {s:frac(1,2),      c:frac(sq(3),2),     t:frac(sq(3),3)},
  45:  {s:frac(sq(2),2),  c:frac(sq(2),2),     t:'1'},
  60:  {s:frac(sq(3),2),  c:frac(1,2),         t:sq(3)},
  90:  {s:'1',            c:'0',               t:'undefined'},
  120: {s:frac(sq(3),2),  c:'&minus;'+frac(1,2),     t:'&minus;'+sq(3)},
  135: {s:frac(sq(2),2),  c:'&minus;'+frac(sq(2),2), t:'&minus;1'},
  150: {s:frac(1,2),      c:'&minus;'+frac(sq(3),2), t:'&minus;'+frac(sq(3),3)},
  180: {s:'0',            c:'&minus;1',        t:'0'},
};

export function shuffled(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
export const strip = h => String(h).replace(/<\/?b>/g, "");

// number-theory / vector helpers for the Mathematics track
export const lcm = (a,b)=>Math.abs(a*b)/gcd(a,b);
export function totient(n){ let phi=n, m=n; for(let p=2;p*p<=m;p++) if(m%p===0){ while(m%p===0) m/=p; phi-=phi/p; } if(m>1) phi-=phi/m; return phi; }
export function powMod(a,b,m){ let r=1, base=a%m; while(b>0){ if(b&1) r=r*base%m; base=base*base%m; b>>=1; } return r%m; }
export function isPrimeN(n){ if(n<2) return false; for(let i=2;i*i<=n;i++) if(n%i===0) return false; return true; }
export const vec = v => `&lang;${v.map(sgn).join(', ')}&rang;`;            // <a, b, c>
