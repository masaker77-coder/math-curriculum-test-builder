/* Typed answers for the practice app. answerSpec(html) reads a generator's answer and works out what kind of
   answer it is (numbers, a point or interval, a set, a polynomial in x, a complex number, a matrix, yes / no …);
   checkAnswer(input, spec) then compares what the student typed by value, so 8/5, 1.6 and ١٫٦ are all accepted.
   Answers that cannot be compared this way (tables, sentences, hypothesis decisions) give spec = null and the
   app falls back to "show the answer — did you get it right?". Pure: no DOM. */

// drop the Arabic half of bilingual text (handles nested spans)
function enOnly(html){
  html=String(html); let out='', i=0;
  while(i<html.length){
    const j=html.indexOf('<span lang="ar"', i);
    if(j<0){ out+=html.slice(i); break; }
    out+=html.slice(i,j);
    let depth=0, k=j;
    do{ const o=html.indexOf('<span',k), c=html.indexOf('</span>',k); if(c<0) return out; if(o>=0&&o<c){ depth++; k=o+5; } else { depth--; k=c+7; } }while(depth>0);
    i=k;
  }
  return out;
}
const ENT={ minus:'-', pi:'π', Prime:"''", plusmn:'±', isin:'∈', sum:'∑', int:'∫', part:'∂', rArr:'⇒', mu:'μ', tau:'τ', sigma:'σ', alpha:'α', beta:'β', Delta:'Δ', nabla:'∇', Vert:'‖', radic:'√', deg:'°', le:'≤', ge:'≥', lt:'<', gt:'>', infin:'∞', cup:'∪', cap:'∩', lang:'(', rang:')',
  times:'×', middot:'·', asymp:'≈', lambda:'λ', kappa:'κ', chi:'χ', nbsp:' ', equiv:'≡', rarr:'→', prime:"'", amp:'&', theta:'θ', ne:'≠' };
export function answerText(html){
  let s=enOnly(html)
    .replace(/&radic;<span style="border-top[^"]*">([\s\S]*?)<\/span>/g, '√($1)')
    .replace(/<span class="frac"><span class="n">([\s\S]*?)<\/span><span class="d">([\s\S]*?)<\/span><\/span>/g, '($1)/($2)');
  // powers, innermost first: a single number or letter stays bare (x^2), anything longer gets brackets (e^(-3x))
  for(let k=0; k<5 && /<sup>/.test(s); k++) s=s.replace(/<sup>([^<]*)<\/sup>/g, (_, p)=>/^(\d+(\.\d+)?|[a-zA-Z])$/.test(p) ? '^'+p : `^(${p})`);
  return s
    .replace(/<\/?sub>/g, '').replace(/<[^>]+>/g, '')
    .replace(/&(#\d+|[a-zA-Z]+);/g, (m, e)=> e[0]==='#' ? String.fromCodePoint(+e.slice(1)) : ENT[e] ?? m)
    .replace(/[−–]/g, '-').replace(/\s+/g, ' ').trim();
}

/* what the student typed: Arabic digits and separators, ×/x between numbers, and so on */
function normInput(s){
  return String(s).replace(/[٠-٩]/g, d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/٫/g, '.').replace(/[،؛]/g, m=>m==='،'?',':';').replace(/[−–]/g, '-').replace(/(\d)\s*و\s*/g, '$1, ')
    .replace(/\bpi\b/gi, 'π').replace(/\bsqrt\b/gi, '√').replace(/\binf(inity)?\b/gi, '∞')
    .replace(/<=/g, '≤').replace(/>=/g, '≥').replace(/\s+/g, ' ').trim();
}

/* ---- a small, safe evaluator: numbers, π, √, + − × ÷ ^, brackets, implicit products, one variable ---- */
function tokenize(s, v){
  const out=[]; let i=0;
  while(i<s.length){
    const c=s[i];
    if(c===' '){ i++; continue; }
    const m=/^(\d+\.?\d*|\.\d+)/.exec(s.slice(i));
    if(m){ out.push({n:+m[1]}); i+=m[1].length; continue; }
    if(c==='π'){ out.push({n:Math.PI}); i++; continue; }
    const f=/^(sin|cos|tan|sec|csc|cot|ln|log|exp)/.exec(s.slice(i));
    if(f){ out.push({f:f[1]}); i+=f[1].length; continue; }
    if(v && c===v){ out.push({v:true}); i++; continue; }
    if(c==='e'){ out.push({n:Math.E}); i++; continue; }
    if('+-*/^()√'.includes(c)){ out.push({o:c}); i++; continue; }
    if('×·'.includes(c)){ out.push({o:'*'}); i++; continue; }
    if(c==='÷'){ out.push({o:'/'}); i++; continue; }
    if(c==='['||c==='{'){ out.push({o:'('}); i++; continue; }
    if(c===']'||c==='}'){ out.push({o:')'}); i++; continue; }
    return null;                                          // any other letter or sign: not a plain value
  }
  return out;
}
export function evaluate(s, val, v='x'){
  const t=tokenize(String(s), v); if(!t||!t.length) return NaN;
  let k=0;
  const peek=()=>t[k], isOp=(o)=>t[k]&&t[k].o===o;
  const starts=()=>{ const x=t[k]; return x && (x.n!==undefined || x.v || x.f || x.o==='(' || x.o==='√'); };
  const FN={ sin:Math.sin, cos:Math.cos, tan:Math.tan, sec:a=>1/Math.cos(a), csc:a=>1/Math.sin(a), cot:a=>1/Math.tan(a), ln:Math.log, log:Math.log10, exp:Math.exp };
  function expr(){ let a=term(); while(isOp('+')||isOp('-')){ const o=t[k++].o, b=term(); a = o==='+'?a+b:a-b; } return a; }
  function term(){ let a=unary();
    for(;;){ if(isOp('*')||isOp('/')){ const o=t[k++].o, b=unary(); a = o==='*'?a*b:a/b; } else if(starts()){ a*=power(); } else return a; } }
  function unary(){ if(isOp('-')){ k++; return -unary(); } if(isOp('+')){ k++; return unary(); } return power(); }
  function power(){ const b=atom(); if(isOp('^')){ k++; return b**unary(); } return b; }
  function atom(){
    const x=peek(); if(!x) throw 0;
    if(x.n!==undefined){ k++; return x.n; }
    if(x.v){ k++; return val; }
    if(x.o==='√'){ k++; return Math.sqrt(power()); }
    if(x.f){ k++; let p=1; if(isOp('^')){ k++; p=unary(); }                 // sin x, sin(2x), sec^2 x
      let a=power(); while(starts() && !t[k].f) a*=power(); return FN[x.f](a)**p; }
    if(x.o==='('){ k++; const a=expr(); if(!isOp(')')) throw 0; k++; return a; }
    throw 0;
  }
  try{ const r=expr(); return k===t.length ? r : NaN; }catch(e){ return NaN; }
}
const isNum = s => Number.isFinite(evaluate(s, 0, null));

// split on top-level separators (not inside brackets)
function splitTop(s, seps){
  const out=[]; let depth=0, cur='';
  for(const ch of s){
    if('([{'.includes(ch)) depth++; else if(')]}'.includes(ch)) depth--;
    if(depth===0 && seps.includes(ch)){ out.push(cur); cur=''; } else cur+=ch;
  }
  out.push(cur); return out.map(x=>x.trim()).filter(Boolean);
}
// the value part of "label = value" (also ≈ and ≡), without units, "(mod n)" or "+ C"
function rhs(seg){
  let d=0, cut=-1;
  for(let i=0;i<seg.length;i++){ const ch=seg[i]; if('([{'.includes(ch)) d++; else if(')]}'.includes(ch)) d--; else if(d===0 && '=≈≡'.includes(ch)) cut=i; }
  return seg.slice(cut+1).replace(/\(mod \d+\)/g,'').replace(/[$%°]/g,'').trim();
}
const decimals = s => { const m=/^-?\d*\.(\d+)$/.exec(s.trim()); return m ? m[1].length : /^-?\d+$/.test(s.trim()) ? 0 : Infinity; };

/* ---- answer kinds ---- */
export function answerSpec(html){
  html=String(html);
  const mm=/<span class="mat"[^>]*>((?:<span>[\s\S]*?<\/span>)+)<\/span>/.exec(enOnly(html));
  if(mm){ const cells=[...mm[1].matchAll(/<span>([\s\S]*?)<\/span>/g)].map(c=>answerText(c[1]));
    return cells.every(isNum) ? {kind:'list', vals:cells, ordered:true, matrix:true} : null; }
  const t=answerText(html);
  if(!t) return null;
  if(/^(yes|no)\b/i.test(t)) return {kind:'word', v:/^yes/i.test(t)?'yes':'no'};
  if(/^undefined$/i.test(t)) return {kind:'word', v:'undefined'};
  if(/^(converges|diverges)$/i.test(t)) return {kind:'word', v:t.toLowerCase()};
  if(/^[IVXLCDM]+$/.test(t)) return {kind:'word', v:t.toLowerCase()};             // a Roman numeral
  const eg=/^\((\d+)\)\/\((\d+)\) = ((?:\(1\)\/\(\d+\)(?: \+ )?)+)$/.exec(t);          // Egyptian fractions: a/b = 1/x + 1/y + …
  if(eg) return {kind:'unit', v:+eg[1]/+eg[2], dens:[...eg[3].matchAll(/\(1\)\/\((\d+)\)/g)].map(m=>+m[1])};
  if(t==='∅') return {kind:'word', v:'empty'};
  const dbl=/^(.*=\s*)?(\S+) \(double\)$/.exec(t);                                 // a repeated root: 9 or 9, 9
  if(dbl && isNum(dbl[2])) return {kind:'num', v:dbl[2], dbl:true};
  if(/^[TF]$/.test(t)) return {kind:'word', v:t==='T'?'true':'false'};
  if(/^(even|odd|neither)$/i.test(t)) return {kind:'word', v:t.toLowerCase()};
  if(/^(not independent|independent)$/i.test(t)) return {kind:'word', v:/^not/i.test(t)?'dependent':'independent'};
  const iq=/^x\s*([≤≥<>])\s*(.+)$/.exec(t);                                       // inequality: x ≥ −1
  if(iq) return isNum(iq[2]) ? {kind:'ineq', op:iq[1], v:iq[2]} : null;
  let body=rhs(t);
  if(/^\{.*\}$/.test(body)){ const els=splitTop(body.slice(1,-1), ','); return els.every(isNum) ? {kind:'list', vals:els, ordered:false, set:true} : null; }
  if(/^[(\[].*[)\]]$/.test(body) && (body.includes(',') || body.includes('∪'))){       // point, tuple, interval or union of intervals
    const parts=splitTop(body, '∪'), ivs=[];
    for(const p of parts){ const m=/^([(\[])(.*)([)\]])$/.exec(p); if(!m) return null;
      const ends=splitTop(m[2], ','); if(!ends.every(e=>isNum(e)||/^[+-]?∞$/.test(e))) return null;
      ivs.push({l:m[1], r:m[3], ends}); }
    return {kind:'tuple', ivs, brackets:/[\[\]∞∪]/.test(body)};
  }
  if(/^\d+ : \d+$/.test(t)) return {kind:'list', vals:t.split(' : '), ordered:true};
  if(/\di$|^-?i$|[+-] ?\d*i$/.test(body) && !/x/.test(body)){                        // complex number a + bi
    const re=evaluate(body,0,'i'), im=evaluate(body,1,'i')-re;
    return Number.isFinite(re)&&Number.isFinite(im) ? {kind:'cplx', re, im} : null;
  }
  const segs=splitTop(t, ',;').map(rhs);
  if(segs.length>1) return segs.every(isNum) ? {kind:'list', vals:segs, ordered:false} : null;
  body=segs[0]||'';
  const withC=/\+ ?C$/.test(body); if(withC) body=body.replace(/\+ ?C$/,'').trim();
  if(isNum(body)) return {kind:'num', v:body, form:/[·×]/.test(body)};         // 2 · 5² · 11 and 9 × 10² must be typed as products
  if(/x/.test(body) && Number.isFinite(evaluate(body, 1.3))) return {kind:'expr', v:body, withC, factored:/\)\s*\(|^-?\d+\s*\(/.test(body)};
  return null;
}

/* ---- comparing ---- */
function sameNum(us, es){
  const u=evaluate(us,0,null), v=evaluate(es,0,null);
  if(!Number.isFinite(u)||!Number.isFinite(v)) return false;
  if(Math.abs(u-v) <= 1e-9*Math.max(1,Math.abs(v))) return true;
  const kU=decimals(us), kE=decimals(es);
  if(kE===0) return false;                                                           // whole-number answers must be exact
  if(kU===Infinity) return kE!==Infinity && kE>0 && Math.abs(u-v) <= 0.6*10**-kE;   // a fraction for a rounded decimal
  if(kU < Math.min(kE, 2)) return false;                                             // not enough decimal places
  return Math.abs(u-v) <= 0.6*10**-Math.min(kU, kE) + 1e-12;
}
function sameList(us, es, ordered){
  if(us.length!==es.length) return false;
  if(ordered) return us.every((u,i)=>sameNum(u, es[i]));
  const used=new Set();
  return es.every(e=>{ const i=us.findIndex((u,j)=>!used.has(j)&&sameNum(u,e)); if(i<0) return false; used.add(i); return true; });
}
const WORDS={ yes:['yes','y','نعم','ن','اي','أي'], no:['no','n','لا'], true:['t','true','صح','صواب','ص','صحيح'], false:['f','false','خطأ','خطا','خ','خاطئ'],
  even:['even','زوجية','زوجي'], odd:['odd','فردية','فردي'], neither:['neither','ليست زوجية ولا فردية','لا زوجية ولا فردية','لا هذا ولا ذاك'],
  undefined:['undefined','غير معرفة','غير معرّفة','غير معرف','غير معرّف'], empty:['∅','{}','{ }','empty','phi','فارغة','خالية','المجموعة الخالية'],
  converges:['converges','convergent','converge','متقاربة','تتقارب','متقارب'], diverges:['diverges','divergent','diverge','متباعدة','تتباعد','متباعد'],
  independent:['independent','مستقلان','مستقل','مستقلة'], dependent:['dependent','not independent','غير مستقلين','غير مستقل','غير مستقلان','غير مستقلة'] };

/* true / false; spec must not be null */
export function checkAnswer(input, spec){
  let s=normInput(input); if(!s) return false;
  switch(spec.kind){
    case 'word': { const w=s.toLowerCase().replace(/[.!؟?]/g,'').trim(); return (WORDS[spec.v]||[spec.v]).some(x=>w===x || (spec.v.length<4 && w.split(/[\s(]/)[0]===x)); }
    case 'num': {
      if(spec.form && !/[·×*^]|\d\s*[xX]\s*\d/.test(s)) return false;
      if(spec.dbl){ const us=splitTop(s.replace(/\(?(double|مكرر[ةه]?)\)?/g,''), ',;').map(rhs); return us.length<=2 && us.every(u=>sameNum(u, spec.v)); }
      return sameNum(rhs(s.replace(/(\d)\s*[xX]\s*(\d)/g,'$1*$2')), spec.v);
    }
    case 'list': {
      if(spec.matrix){ const us=s.replace(/[\[\]{}()]/g,' ').split(/[\s,;|]+/).filter(Boolean); return sameList(us, spec.vals, true); }
      if(spec.set) s=rhs(s).replace(/^\{|\}$/g,'');
      const us=(spec.vals.length===2 && /^\d+\s*:\s*\d+$/.test(s)) ? s.split(':') : splitTop(s, ',;').map(rhs);
      return sameList(us.map(x=>x.trim()), spec.vals, spec.ordered);
    }
    case 'tuple': {
      s=rhs(s).replace(/\s[uU]\s/g, ' ∪ '); if(!/^[(\[]/.test(s)) s=`(${s})`;
      const parts=splitTop(s, '∪');
      if(parts.length!==spec.ivs.length) return false;
      return spec.ivs.every((iv,i)=>{ const m=/^([(\[])(.*)([)\]])$/.exec(parts[i].trim()); if(!m) return false;
        if((spec.brackets || /[\[\]]/.test(s)) && (m[1]!==iv.l || m[3]!==iv.r)) return false;
        const ends=splitTop(m[2], ','); if(ends.length!==iv.ends.length) return false;
        return ends.every((e,j)=>{ const x=iv.ends[j]; return /∞/.test(x) ? e.replace(/\+/,'')===x.replace(/\+/,'') : sameNum(e,x); }); });
    }
    case 'unit': {                                                                   // distinct unit fractions adding up to the value
      const terms=rhs(s).split('+').map(x=>x.trim()), dens=terms.map(x=>{ const m=/^\(?1\)?\s*\/\s*\(?(\d+)\)?$/.exec(x); return m ? +m[1] : NaN; });
      if(!dens.every(Number.isFinite) || new Set(dens).size!==dens.length) return false;
      return Math.abs(dens.reduce((a,x)=>a+1/x,0)-spec.v) < 1e-12;
    }
    case 'ineq': {
      let m=/^x\s*([≤≥<>])\s*(.+)$/.exec(s);
      if(!m){ const f=/^(.+?)\s*([≤≥<>])\s*x$/.exec(s); if(f) m=[0, {'≤':'≥','≥':'≤','<':'>','>':'<'}[f[2]], f[1]]; }
      return !!m && m[1]===spec.op && sameNum(m[2].trim(), spec.v);
    }
    case 'cplx': {
      const b=rhs(s), re=evaluate(b,0,'i'), im=evaluate(b,1,'i')-re;
      return Math.abs(re-spec.re)<1e-9 && Math.abs(im-spec.im)<1e-9;
    }
    case 'expr': {
      let b=rhs(s); const hasC=/\+ ?c$/i.test(b); b=b.replace(/\+ ?c$/i,'').trim();
      if(spec.withC && !hasC) return false;
      if(spec.factored && !b.includes('(')) return false;
      if(!spec.factored && /\)\s*\(/.test(b)) return false;                        // "expand" answers must be expanded
      const xs=[-1.7,-0.6,0.45,1.3,2.2], d=xs.map(x=>evaluate(b,x)-evaluate(spec.v,x));
      if(!d.every(Number.isFinite)) return false;
      const off=spec.withC ? d[0] : 0;
      return d.every((x,i)=>Math.abs(x-off) <= 1e-7*Math.max(1,Math.abs(evaluate(spec.v,xs[i]))));
    }
  }
  return false;
}
