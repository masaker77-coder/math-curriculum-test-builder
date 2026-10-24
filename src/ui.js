import { G } from './generators.js';
import { TOPIC_LABELS, TOPIC_LABELS_AR, TOPIC_TABLES, CURRICULUM, INDEX, courseAt } from './curriculum.js';
import { shuffled, strip, sup, groupItems } from './helpers.js';
import { zFullHTML, tFullHTML, fFullHTML, L } from './viz.js';
import { INTRO } from './intros.js';
import { coverArt } from './cover.js';
import { mountPractice } from './practice.js';
import { bundle } from './bundle.js';
import { LANGS, tr, pickLang } from './i18n.js';

/* ============================ UI WIRING (Test Builder) ============================ */
const el = id => document.getElementById(id);
const DIFF_KEY = ['', 'easy', 'medium', 'hard'];
let test  = { sections: [] };   // each: {topic, code, title, titleAr, count, diff, mc, custom?, items:[...]}
let state = { sheets: [], showKey: false, lang: 'en', mode: 'practice' };
const SPACE = {1:30, 2:46, 3:72};
/* assessment presets: number of questions and marks per question */
const MODES = {
  practice: {},
  hw:    { nQ:5, marks:0.4, title:'titleHw' },      // 5 questions, 2 marks in total
  mid:   { nQ:3, marks:5,   title:'titleMid' },     // 3 questions × 5 marks
  final: { nQ:5, marks:10,  title:'titleFinal' },   // 5 questions × 10 marks
  examples: { book:true, count:5, title:'titleEx' },   // worked examples: each question followed by its solution
  booklet:  { book:true, count:3, title:'titleBook' }, // study booklet: 3 worked examples per topic, a topic per page
  app:      { app:true, count:1, title:'titleApp' },   // interactive practice app (preview + standalone download)
};
const isBook = () => !!MODES[state.mode].book;
const isProof = t => String(t).startsWith('proof_');   // a proof is always one essay question, whatever count is entered
const LONG = ['lpFormulate','lpGraphical','simplexMethod','decisionCriteria','decisionTree','transportNW','transportLeastCost','transportVogel','transportCompare','assignmentHungarian','rectangle','triangleArea','circle','pythagorean','slope','derivative',
              'systems','proportions','integral','defIntegral','trigRatios',
              'rounding','percentOf','fracToDecimal','gcfLcm','evalExpr','inequalities','midpoint',
              'polyMultiply','vertex','parallelogram','trapezoid','volumeBox','volumeCylinder',
              'triangleAngles','radToDeg','referenceAngle','limitPoly','secondDerivative','tangentSlope',
              'scientificNotation','meanMedianMode','probability','arithmeticSeq','geometricSeq',
              'polygonAngles','distanceFormula','avgRateOfChange',
              'determinant3','transpose','newtonSqrt','linearInterp','completeGraphEdges','degreeSum',
              'setUnion','riemannSum','avgValue','derivChainAt','derivProductAt','criticalPoints','setOps','cartesianSize',
              'logicEval','functionCount','eigenvalues2','bisectionStep','trapezoidRule','eulerStep','absoluteError',
              'charRoots','expGrowth','ivpPolynomial','pdeClassify','waveSpeed','laplacianPoly','heatSeparation',
              'divergence','gradientAt','geometricSeries','epsilonN','eulerCharacteristic','surfaceGenus','topologyOpenSets',
              'circleCurvature','parabolaCurvature','helixArcLength','helixCurvature','groupGenerators','permutationOrder',
              'groupOrder','lagrangeIndex','modInverse','zeroDivisors','polyEvalModP','complexArgument','linearCongruence',
              'crt','primeFactorization','treeEdges','bipartiteEdges','eulerCircuit','chromaticNumber','vectorNorms',
              'operatorNormDiag','l2InnerProduct','matVec',
              'binomialProb','expectedValue','varianceDiscrete','lpCornerPoint','effectiveRate','annuityFV',
              'improvedEuler','fredholmSeparable',
              'linearEquation','inequalityGraph','linearSystem2','quadraticEquation','logExp',
              'ciMeanZ','ciMeanS','ciMeanT','ciProportion','sampleSizeMean','sampleSizeProp',
              'testMeanZ','testMeanS','testMeanT','testProportion','anovaTable',
              'fdSchemeClassify','fdFirstX','fdFirstT','fdSecondX','fdSecondT','fdmOdeUx','fdmOdeUt',
              'fdmOdeUxx','fdmOdeUtt','fdmAdvection','fdmFamous',
              'numberSets','breakEven','absEquation','absInequality','functionDomain','funcOps','evenOdd','inverseFunction',
              'gaussJordan','inverseSolve','intervalNotation',
              'jointConstant','jointProb','marginalDist','conditionalProb','jointMoments','correlationCoef','independenceCheck',
              'sumOfRV','bivariateNormal','multinomialProb'];

/* --- language --- */
const T = key => tr(key, state.lang);
const topicLabel = t => pickLang(TOPIC_LABELS[t]||t, TOPIC_LABELS_AR[t], state.lang);
const courseTitle = c => pickLang(c.title, c.ar, state.lang);
const levelName = l => pickLang(l.level, l.ar, state.lang);
const isBilingual = html => String(html).includes('class="i18n"');
// generated text with Arabic in it reads right-to-left in Arabic mode; plain math stays left-to-right
const dirFor = html => state.lang==='ar' && isBilingual(html) ? 'rtl' : 'ltr';
const LANG_KEY='mtb_lang';
function applyLang(){
  const root=document.documentElement;
  root.dataset.lang=state.lang;
  root.lang = state.lang==='ar' ? 'ar' : 'en';
  root.dir  = state.lang==='ar' ? 'rtl' : 'ltr';
  document.title=T('appTitle');
  document.querySelectorAll('[data-i18n]').forEach(n=>{ n.textContent=T(n.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(n=>{ n.placeholder=T(n.dataset.i18nPh); });
  const lv=el('bLevel').value, cv=el('bCourse').value;
  buildLevelSelect(); el('bLevel').value=lv||'all'; buildCourseSelect(); if(cv) el('bCourse').value=cv; buildTopicList(true);
  refreshSaved(); runSearch(); renderSections(); render();
}
function setLang(l){
  state.lang = LANGS.includes(l) ? l : 'en';
  try{ localStorage.setItem(LANG_KEY, state.lang); }catch(e){}
  el('lang').value=state.lang; applyLang();
}

function buildChoices(correctHtml, gen, d){
  const correct = strip(correctHtml);
  const seen = new Set([correct]); const distract=[];
  for(let t=0; t<50 && distract.length<3; t++){
    const o = strip(gen(d).a);
    if(!seen.has(o)){ seen.add(o); distract.push(o); }
  }
  const opts = [{html:correct, correct:true}, ...distract.map(x=>({html:x, correct:false}))];
  return shuffled(opts);
}
function fmtCustom(s){ return s.replace(/\^(-?\d+)/g, (m,p)=>sup(p)); }
function parseCustom(){
  const raw=(el('custom').value||'').trim(); if(!raw) return [];
  return raw.split('\n').map(l=>l.trim()).filter(Boolean).map(line=>{
    const i=line.indexOf('|');
    const q=fmtCustom((i<0?line:line.slice(0,i)).trim());
    const a=i<0 ? '<b>&mdash;</b>' : `<b>${fmtCustom(line.slice(i+1).trim())}</b>`;
    return {q, a, custom:true};
  });
}
/* generate the items for one section */
/* a topic's items: its essay questions first, then its multiple-choice ones */
const nEss = s => s.nEssay ?? (s.mc ? 0 : s.count);
const nMc  = s => s.nMc ?? (s.mc ? s.count : 0);
const sectionItems = s => [...genItems(s.topic, nEss(s), s.diff, false), ...genItems(s.topic, nMc(s), s.diff, true)];
function genItems(topic, count, d, mc){
  const gen=G[topic]; const items=[];
  const seen=new Set();
  for(let i=0;i<count;i++){
    let it=gen(d); for(let k=0; k<20 && seen.has(it.q); k++) it=gen(d);   // avoid repeating a question (topics with few variants, e.g. proofs)
    seen.add(it.q); if(mc) it.choices=buildChoices(it.a, gen, d); items.push(it);
  }
  return items;
}

/* --- Level (or all courses) / course / topic picker --- */
function buildLevelSelect(){
  const s=el('bLevel'); s.innerHTML=`<option value="all">${T('allCourses')}</option>`;
  CURRICULUM.forEach((l,i)=>{ const o=document.createElement('option'); o.value=i; o.textContent=levelName(l); s.appendChild(o); });
}
function buildCourseSelect(){
  const s=el('bCourse'); s.innerHTML=''; const lv=el('bLevel').value;
  CURRICULUM.forEach((l,li)=>{ if(lv!=='all' && +lv!==li) return;
    l.courses.forEach((c,ci)=>{ const o=document.createElement('option'); o.value=`${li}:${ci}`;
      o.textContent=c.code+' · '+courseTitle(c)+(lv==='all'?` (${levelName(l)})`:'')+(c.topics.length?'':' — '+T('empty'));
      s.appendChild(o); }); });
}
function selectedCourse(){
  const [li,ci]=(el('bCourse').value||'').split(':').map(Number);
  return { li, ci, c:courseAt(li,ci) };
}
const defaultCount = () => MODES[state.mode].count || 1;
function buildTopicList(keep, resetCounts){
  const box=el('topicList'), {c}=selectedCourse();
  const prev = keep ? readTopicRows() : {};
  if(resetCounts) for(const t in prev) prev[t]={on:prev[t].on, essay:defaultCount(), mc:isBook()?0:1};
  if(!c||!c.topics.length){ box.innerHTML=`<div class="sections-empty" style="padding:10px">${T('noTopics')}</div>`; el('addSection').disabled=true; return; }
  el('addSection').disabled=false;
  box.classList.toggle('book', isBook());
  box.classList.toggle('app', !!MODES[state.mode].app);
  box.innerHTML=`<div class="trow head"><input type="checkbox" id="tAll" title="${T('selectAll')}"><span>${T('topic')}</span><span>${T(isBook()?'examplesCol':'essay')}</span><span>${T('mcShort')}</span></div>`+
    c.topics.map(t=>{ const p=prev[t]||{on:false,essay:defaultCount(),mc:isBook()?0:1};
      return `<div class="trow${p.on?' on':''}" data-t="${t}"><input type="checkbox" class="tchk"${p.on?' checked':''}><span>${topicLabel(t)}</span>
        <input type="number" class="tess" min="0" max="40" value="${isProof(t)?1:p.essay}" title="${T('essay')}"${isProof(t)?' disabled':''}>
        <input type="number" class="tmc" min="0" max="40" value="${isProof(t)?0:p.mc}" title="${T('mcType')}"${isProof(t)?' disabled':''}></div>`; }).join('');
  box.querySelectorAll('.tchk').forEach(ch=>ch.onchange=()=>ch.closest('.trow').classList.toggle('on',ch.checked));
  el('tAll').onchange=e=>box.querySelectorAll('.tchk').forEach(ch=>{ ch.checked=e.target.checked; ch.closest('.trow').classList.toggle('on',ch.checked); });
}
function readTopicRows(){
  const out={};
  el('topicList').querySelectorAll('.trow[data-t]').forEach(r=>{ out[r.dataset.t]={ on:r.querySelector('.tchk').checked,
    essay:Math.max(0,Math.min(40,parseInt(r.querySelector('.tess').value)||0)), mc:Math.max(0,Math.min(40,parseInt(r.querySelector('.tmc').value)||0)) }; });
  return out;
}
function checkedTopics(){ return Object.entries(readTopicRows()).map(([t,v])=>isProof(t)?{topic:t, on:v.on, essay:1, mc:0}:({topic:t, ...v, mc:isBook()?0:v.mc})).filter(v=>v.on&&v.essay+v.mc>0); }

/* --- Search by topic / course code / course title / level (English or Arabic) --- */
function runSearch(){
  const q=(el('bSearch').value||'').trim().toLowerCase(); const box=el('searchResults');
  if(!q){ box.hidden=true; box.innerHTML=''; return; }
  const has=s=>(s||'').toLowerCase().includes(q);
  const hits=INDEX.filter(x=> has(x.label) || has(x.labelAr) || has(x.code) || has(x.ctitle) || has(x.ctitleAr) || has(x.level) || has(x.levelAr)).slice(0,24);
  box.hidden=false;
  box.innerHTML = hits.length ? hits.map(h=>
    `<button class="sr" data-li="${h.li}" data-ci="${h.ci}" data-t="${h.topic}"><b>${topicLabel(h.topic)}</b><span>${h.code} · ${pickLang(h.ctitle,h.ctitleAr,state.lang)} · ${pickLang(h.level,h.levelAr,state.lang)}</span></button>`).join('')
    : `<div class="sections-empty">${T('noMatch')}</div>`;
  box.querySelectorAll('button.sr').forEach(b=>b.onclick=()=>{
    el('bLevel').value=b.dataset.li; buildCourseSelect();
    el('bCourse').value=`${b.dataset.li}:${b.dataset.ci}`; buildTopicList(false);
    const row=el('topicList').querySelector(`.trow[data-t="${b.dataset.t}"]`);
    if(row){ row.querySelector('.tchk').checked=true; row.classList.add('on'); row.scrollIntoView({block:'nearest'}); }
    el('bSearch').value=''; box.hidden=true; box.innerHTML='';
  });
}

/* --- Sections (topics in the test) --- */
function sectionFor(topic, nEssay, nMcq){
  const {li,c}=selectedCourse(), d=parseInt(el('bDiff').value)||2;
  return { level:CURRICULUM[li].level, code:c.code, title:c.title, titleAr:c.ar, topic,
    label:TOPIC_LABELS[topic]||topic, count:nEssay+nMcq, nEssay, nMc:nMcq, diff:d,
    items:[...genItems(topic,nEssay,d,false), ...genItems(topic,nMcq,d,true)] };
}
function addSelected(replace){
  const picks=checkedTopics();
  if(!picks.length){ el('sections').innerHTML=`<div class="sections-empty" style="color:#c0392b">${T('tickTopic')}</div>`; setTimeout(renderSections,1800); return false; }
  if(replace) test.sections=[];
  picks.forEach(p=>test.sections.push(sectionFor(p.topic, p.essay, p.mc)));
  el('topicList').querySelectorAll('.tchk').forEach(ch=>{ ch.checked=false; ch.closest('.trow').classList.remove('on'); });
  buildVersions(); renderSections(); render(); return true;
}
/* nothing picked yet: fill the assessment with different topics of the current course, one item each */
function autoPick(n){
  const {c}=selectedCourse(); if(!c||!c.topics.length) return;
  const pool=shuffled(c.topics);
  for(let i=0;i<n;i++) test.sections.push(sectionFor(pool[i%pool.length], 1, 0));
}
/* fewer items than the preset number of questions: add items to the chosen topics in turn until it is reached */
function topUp(n){
  const gen=test.sections.filter(x=>!x.custom&&!isProof(x.topic)); if(!gen.length) return;
  let total=test.sections.reduce((k,x)=>k+x.items.length,0), i=0;
  while(total<n){ const sec=gen[i++%gen.length]; sec.items.push(...genItems(sec.topic,1,sec.diff,false)); sec.nEssay=nEss(sec)+1; sec.nMc=nMc(sec); sec.count++; total++; }
}
function setMode(mode){
  const wasBook=isBook(); state.mode=mode; const m=MODES[mode];
  document.querySelectorAll('.mode').forEach(b=>b.classList.toggle('on', b.dataset.mode===mode));
  document.querySelectorAll('.exam-only').forEach(n=>n.hidden = !m.nQ);
  document.querySelectorAll('.book-only').forEach(n=>n.hidden = mode!=='booklet');
  buildTopicList(true, wasBook!==!!m.book);           // entering / leaving the booklet modes resets the counts
  if(m.app){ if(checkedTopics().length) addSelected(true); }
  else if(m.book){                                      // the same topics become worked examples (essay only)
    if(checkedTopics().length) addSelected(true);
    else test.sections.forEach(s=>{ if(s.custom) return; const k=isProof(s.topic)?1:m.count; s.nEssay=k; s.nMc=0; s.count=k; s.items=sectionItems(s); });
  }
  else if(m.nQ){
    el('nQ').value=m.nQ; el('marks').value=m.marks;
    if(checkedTopics().length) addSelected(true);
    else if(!test.sections.length) autoPick(m.nQ);
    topUp(m.nQ);
  }
  buildTopicList(true); buildVersions(); renderSections(); render();
}
function addCustomPart(){
  const items=parseCustom();
  if(!items.length){ const d=el('custom').closest('details'); if(d) d.open=true; el('custom').focus(); return; }
  test.sections.push({custom:true, label:'Custom questions', count:items.length, items});
  buildVersions(); renderSections(); render();
}
function removeSection(i){ test.sections.splice(i,1); buildVersions(); renderSections(); render(); }
function regenSection(i){
  const s=test.sections[i]; if(s.custom) return;
  s.items=sectionItems(s);
  buildVersions(); render();
}
function moveSection(i,dir){
  const j=i+dir; if(j<0||j>=test.sections.length) return;
  [test.sections[i],test.sections[j]]=[test.sections[j],test.sections[i]];
  buildVersions(); renderSections(); render();
}
function dupSection(i){
  const s=test.sections[i];
  const copy = s.custom ? {...s, items:s.items.slice()} : {...s, items:sectionItems(s)};
  test.sections.splice(i+1,0,copy); buildVersions(); renderSections(); render();
}
const partLabel = s => s.custom ? T('customPart') : topicLabel(s.topic);
const partCourse = s => s.custom ? T('customShort') : (s.code&&s.code!=='(prep)'?s.code+' · ':'')+pickLang(s.title, s.titleAr, state.lang);
function renderSections(){
  const box=el('sections');
  if(!test.sections.length){
    box.innerHTML=`<div class="sections-empty">${T('noParts')}</div>`; return;
  }
  const last=test.sections.length-1;
  box.innerHTML=test.sections.map((s,i)=>{
    const L=String.fromCharCode(65+i);
    const meta = s.custom ? `${T('customShort')} · ${s.count}`
      : `${partCourse(s)} · ${T(DIFF_KEY[s.diff])} · ${T('essay')} ${nEss(s)} · ${T('mcShort')} ${nMc(s)}`;
    return `<span class="section-pill">
      <span class="part-letter">${L}</span>
      <span class="pl">${partLabel(s)}</span>
      <span class="meta2">${meta}</span>
      <button data-u="${i}" title="${T('moveUp')}"${i===0?' disabled':''}>&#8593;</button>
      <button data-dn="${i}" title="${T('moveDown')}"${i===last?' disabled':''}>&#8595;</button>
      <button data-dup="${i}" title="${T('dup')}">&#10697;</button>
      ${s.custom?'':`<button data-r="${i}" title="${T('regen')}">&#8635;</button>`}
      <button data-x="${i}" title="${T('remove')}">&times;</button>
    </span>`;
  }).join('');
  box.querySelectorAll('button[data-x]').forEach(b=>b.onclick=()=>removeSection(+b.dataset.x));
  box.querySelectorAll('button[data-r]').forEach(b=>b.onclick=()=>regenSection(+b.dataset.r));
  box.querySelectorAll('button[data-u]').forEach(b=>b.onclick=()=>moveSection(+b.dataset.u,-1));
  box.querySelectorAll('button[data-dn]').forEach(b=>b.onclick=()=>moveSection(+b.dataset.dn,1));
  box.querySelectorAll('button[data-dup]').forEach(b=>b.onclick=()=>dupSection(+b.dataset.dup));
}

/* --- Build versions (scramble questions within each part) --- */
function buildVersions(){
  const nV=Math.max(1,Math.min(6, parseInt(el('versions').value)||1));
  state.sheets=[];
  for(let v=0;v<nV;v++){
    state.sheets.push(test.sections.map(s=>({ ...s, items: v===0 ? s.items : shuffled(s.items) })));
  }
}

/* --- shared rendering pieces --- */
const choicesHTML = it => it.choices ? `<div class="choices">${it.choices.map((c,i)=>
  `<span class="opt">(${String.fromCharCode(65+i)}) ${c.html}</span>`).join('')}</div>` : '';
const keyText = it => it.choices ? `<b>${String.fromCharCode(65+it.choices.findIndex(c=>c.correct))}</b>` : it.a;
const fmtMarks = v => +(+v).toFixed(2);
function headerHTML(title, sub, total, vLabel){
  const today=new Date().toLocaleDateString(state.lang==='ar'?'ar':undefined);
  return `<div class="sheet-head">
      <div>
        <h2 class="sheet-title">${title}</h2>
        <div class="sheet-sub">${sub}${vLabel?' &nbsp;·&nbsp; '+vLabel:''}</div>
      </div>
      <div class="meta">
        <div><b>${T('name')}</b> _______________</div>
        <div><b>${T('date')}</b> ${today} &nbsp; <b>${T('period')}</b> ___</div>
        <div class="score">${T('score')}: ____ / ${total}</div>
      </div>
    </div>`;
}
function keyHTML(entries, vLabel, labeled){
  const keyMode=el('keyMode').value, withSteps=el('solMode').value==='steps';
  if(keyMode==='none'||!entries.length) return '';
  const ans=entries.map(e=>`<li dir="${dirFor(e.it.a)}">${labeled?`<span class="kl">${e.label}</span>`:''}${keyText(e.it)}</li>`).join('');
  const sols=withSteps ? entries.map((e,i)=>e.it.s ? `<li${labeled?'':` value="${i+1}"`} dir="${dirFor(e.it.s)}">${labeled?`<span class="kl">${e.label}</span>`:''}
      <div class="solq" dir="${dirFor(e.it.q)}">${e.it.q}</div><div class="sola" dir="${dirFor(e.it.a)}">${e.it.a}</div>${e.it.s}</li>` : '').join('') : '';
  return `<div class="keywrap ${keyMode==='same'?'same':''}" ${state.showKey?'':'hidden'}>
      <div class="key-head"><h3>${T('keyHead')}${vLabel?' &mdash; '+vLabel:''}</h3></div>
      <ol class="answers${labeled?' labeled':''}">${ans}</ol>
      ${sols?`<div class="key-head sol-head"><h3>${T('solHead')}</h3></div><ol class="sols${labeled?' labeled':''}">${sols}</ol>`:''}
    </div>`;
}
function courseSuffix(parts){
  const codes=[...new Set(parts.filter(p=>!p.custom).map(p=>p.code))];
  if(codes.length!==1) return '';
  const p=parts.find(x=>x.code===codes[0]); return ` — ${p.code} ${pickLang(p.title,p.titleAr,state.lang)}`;
}

/* --- practice sheet: one part per topic --- */
function practiceHTML(parts, vLabel){
  const sp=SPACE[parseInt(el('spacing').value)||2];
  const total=parts.reduce((n,p)=>n+p.items.length,0);
  const title=(el('title').value||'').trim() || T('mathTest');
  const multiPart=parts.length>1;
  const entries=[];
  const partsHtml=parts.map((p,pi)=>{
    const long=p.custom?false:(LONG.includes(p.topic)||p.topic.startsWith('proof_'));
    const lis=p.items.map((it,ii)=>{ const lbl=qLabel(pi, p.items.length>1?ii:-1); entries.push({it, label:lbl});
      return `<li style="min-height:${sp}px"><span class="ql">${lbl}</span><span class="qbody" dir="${dirFor(it.q)}">${it.q}${choicesHTML(it)}</span></li>`; }).join('');
    return `<div class="part"><ol class="problems labeled ${long?'single':''}">${lis}</ol></div>`;
  }).join('');
  const sub = multiPart
    ? `${parts.length} ${T('qs')}`
    : (parts[0] ? `${partCourse(parts[0])} &nbsp;·&nbsp; ${partLabel(parts[0])} &nbsp;·&nbsp; ${total} ${T('qs')}` : `0 ${T('qs')}`);
  return `<div class="sheet">${headerHTML(title, sub, total, vLabel)}
    <div class="problemset">${partsHtml}</div>${keyHTML(entries, vLabel, true)}</div>`;
}

/* --- homework / midterm / final: N questions, each split into parts when there are more items --- */
/* question labels: Q1, Q1: A, Q1: B … (Arabic: س1، س1: أ …) */
const AR_LETTERS='أبجدهوزحطيكلمنسعفصقرشتثخذضظغ';
const partLetter = i => state.lang==='ar' ? AR_LETTERS[i] || i+1 : String.fromCharCode(65+i);
const qLabel = (q, part) => `${state.lang==='ar'?'س':'Q'}${q+1}${part>=0?': '+partLetter(part):''}`;
function examHTML(parts, vLabel){
  const sp=SPACE[parseInt(el('spacing').value)||2], m=MODES[state.mode];
  const flat=[]; parts.forEach(p=>p.items.forEach(it=>flat.push(it)));
  const groups=groupItems(flat, Math.max(1,parseInt(el('nQ').value)||1));
  const marks=Math.max(0,parseFloat(el('marks').value)||0), total=fmtMarks(marks*groups.length);
  const title=(el('title').value||'').trim() || T(m.title)+courseSuffix(parts);
  const entries=[];
  const qs=groups.map((g,qi)=>{
    const pm=fmtMarks(marks/g.length);
    const lis=g.map((it,pi)=>{
      const lbl = qLabel(qi, g.length>1 ? pi : -1);
      entries.push({it, label:lbl});
      return `<li style="min-height:${sp}px"><span class="pl">${lbl}</span><span class="qbody" dir="${dirFor(it.q)}">${it.q}${choicesHTML(it)}</span>${g.length>1?`<span class="pm">(${pm})</span>`:''}</li>`;
    }).join('');
    return `<div class="xq"><div class="xq-head"><span>${qLabel(qi,-1)}</span><span class="mk">(${fmtMarks(marks)} ${T('marksW')})</span></div><ol class="xparts">${lis}</ol></div>`;
  }).join('');
  const sub=`${groups.length} ${T('qs')} &nbsp;·&nbsp; ${T('total')}: ${total} ${T('marksW')}`;
  return `<div class="sheet">${headerHTML(title, sub, total, vLabel)}<div class="exam">${qs}</div>${keyHTML(entries, vLabel, true)}</div>`;
}

/* --- worked examples / study booklet: every question followed by its worked solution --- */
const introHTML = t => INTRO[t] ? `<div class="bk-intro"><div class="bk-introh">${T('overview')}</div><div class="bk-introp">${L(INTRO[t][0], INTRO[t][1])}</div></div>` : '';
const exampleHTML = (it, ii) => `<div class="bk-ex bk-block" data-ii="${ii}">
    <div class="bk-exh">${T('example')} ${ii+1}</div>
    <div class="bk-q" dir="${dirFor(it.q)}">${it.q}${choicesHTML(it)}</div>
    ${it.s?`<div class="bk-solh">${T('solution')}</div><div class="bk-steps" dir="${dirFor(it.s)}">${it.s}</div>`:''}
    <div class="bk-ans" dir="${dirFor(it.a)}"><span class="bk-al">${T('answer')}:</span> ${keyText(it)}</div>
  </div>`;
function bookHTML(parts){
  if(state.mode==='booklet') return bookletHTML(parts);
  const m=MODES[state.mode];
  const title=(el('title').value||'').trim() || T(m.title)+courseSuffix(parts);
  const n=parts.reduce((k,p)=>k+p.items.length,0);
  const body=parts.map((p,pi)=>`<section class="bk-topic">
      <h3 class="bk-h"><span class="bk-n">${pi+1}</span> ${partLabel(p)}<span class="bk-course">${partCourse(p)}</span></h3>
      ${p.custom?'':introHTML(p.topic)}${p.items.map(exampleHTML).join('')}
    </section>`).join('');
  return `<div class="sheet book"><div class="sheet-head"><div><h2 class="sheet-title">${title}</h2>
    <div class="sheet-sub">${parts.length} ${T('topicsW')} &nbsp;·&nbsp; ${n} ${T('examplesW')}</div></div></div>${body}</div>`;
}

/* --- study booklet: cover page, index page, then each topic (overview + worked examples) on A4 pages --- */
function courseInfo(parts){
  const codes=[...new Set(parts.filter(p=>!p.custom).map(p=>p.code))];
  if(codes.length!==1) return { code:codes.join(' · '), title:'', level:'' };
  const p=parts.find(x=>x.code===codes[0]), lv=CURRICULUM.find(l=>l.courses.some(c=>c.code===codes[0]));
  return { code:p.code, title:pickLang(p.title, p.titleAr, state.lang), level:lv?pickLang(lv.level, lv.ar, state.lang):'' };
}
const blank = v => (v||'').trim() || '<span class="cv-blank"></span>';
function bookletHTML(parts){
  const info=courseInfo(parts), n=parts.reduce((k,p)=>k+p.items.length,0);
  const title=(el('title').value||'').trim() || info.title || T('titleBook');
  const topics=parts.filter(p=>!p.custom).map(p=>p.topic);
  const cover=`<section class="bk-page bk-cover">
      <div class="cv-band"><div class="cv-uni">${blank(el('bkUni').value)}</div><div class="cv-kicker">${T('titleBook')}</div></div>
      <h1 class="cv-title">${title}</h1>
      <div class="cv-code">${[info.code, info.level].filter(Boolean).join(' &nbsp;·&nbsp; ')}</div>
      <div class="cv-art">${coverArt(topics.length?topics:['linearEquation'])}</div>
      <div class="cv-chips">${parts.slice(0,14).map(p=>`<span>${partLabel(p)}</span>`).join('')}${parts.length>14?'<span>…</span>':''}</div>
      <div class="cv-desc">${T('bkTagline')}</div>
      <table class="cv-info">
        <tr><th>${T('bkBy')}</th><td>${blank(el('bkBy').value)}</td></tr>
        <tr><th>${T('bkTerm')}</th><td>${blank(el('bkTerm').value)}</td></tr>
        <tr><th>${T('bkContent')}</th><td>${parts.length} ${T('topicsW')} &nbsp;·&nbsp; ${n} ${T('examplesW')}</td></tr>
      </table>
    </section>`;
  const index=`<section class="bk-page bk-index"><div class="bk-body">
      <h2 class="ix-h">${T('index')}</h2>
      <table class="ix"><tr><th>#</th><th>${T('topic')}</th><th>${T('examplesCol')}</th><th>${T('page')}</th></tr>
      ${parts.map((p,i)=>`<tr><td class="ix-n">${i+1}</td><td class="ix-t"><span>${partLabel(p)}</span>${p.custom?'':`<small>${p.code}</small>`}</td><td class="ix-c">${p.items.length}</td><td class="ix-pg"></td></tr>`).join('')}
      </table></div><div class="bk-foot"></div></section>`;
  const flows=parts.map((p,pi)=>`<div class="bk-flow" data-pi="${pi}">
      <div class="bk-block bk-start"><div class="bk-th"><span class="bk-n">${pi+1}</span><div><div class="bk-tt">${partLabel(p)}</div><div class="bk-tc">${partCourse(p)}</div></div></div>
        ${p.custom?'':introHTML(p.topic)}</div>
      ${p.items.map(exampleHTML).join('')}</div>`).join('');
  return `<div class="booklet-doc"><div class="bk-scale" data-run="${[info.code, info.title||title].filter(Boolean).join(' — ').replace(/"/g,'&quot;')}">${cover}${index}${flows}</div></div>`;
}
/* split each topic's blocks over A4 pages (measured in the real layout), number the pages and fill the index */
function paginateBook(){
  const sc=el('out').querySelector('.bk-scale'); if(!sc) return;
  const run=sc.dataset.run; let no=1+fitIndex(sc), grew=false;
  const newPage=before=>{ const pg=document.createElement('section'); pg.className='bk-page';
    pg.innerHTML=`<div class="bk-run">${run}</div><div class="bk-body"></div><div class="bk-foot">${++no}</div>`; sc.insertBefore(pg, before); return pg.querySelector('.bk-body'); };
  sc.querySelectorAll('.bk-index .bk-foot').forEach((f,i)=>f.textContent=2+i);
  const starts=[];
  const over=body=>body.scrollHeight>body.clientHeight+1;
  sc.querySelectorAll('.bk-flow').forEach(flow=>{
    const pi=+flow.dataset.pi, p=state.sheets[0][pi], sec=test.sections[pi];
    const canFill=!!(p && !p.custom && G[p.topic] && !isProof(p.topic));
    const out=[], els=[];                                   // the topic's examples in page order, with their blocks
    let body=newPage(flow), added=0; starts.push(no);
    /* room left on a page: try new examples of the same topic that fit in it */
    const fillGap=bd=>{
      let misses=0;
      while(canFill && misses<3 && added<6){
        const it=G[p.topic](p.diff);
        if(out.some(x=>x.q===it.q) || p.items.some(x=>x.q===it.q)){ misses++; continue; }
        const tmp=document.createElement('div'); tmp.innerHTML=exampleHTML(it, 0); const b=tmp.firstElementChild;
        bd.appendChild(b);
        if(over(bd)){ bd.removeChild(b); misses++; continue; }
        out.push(it); els.push(b); added++;
      }
    };
    [...flow.children].forEach(b=>{
      const it = b.dataset.ii!==undefined && p ? p.items[+b.dataset.ii] : null;
      body.appendChild(b);
      if(over(body) && body.children.length>1){ body.removeChild(b); fillGap(body); body=newPage(flow); body.appendChild(b); }
      if(it){ out.push(it); els.push(b); }
    });
    fillGap(body);
    if(p && added){                                          // keep the added examples in the test, in page order
      p.items.splice(0, p.items.length, ...out); grew=true;
      if(sec && sec.items===p.items){ sec.nEssay=p.items.length; sec.nMc=0; sec.count=p.items.length; }
    }
    els.forEach((b,k)=>{ const h=b.querySelector('.bk-exh'); if(h) h.textContent=`${T('example')} ${k+1}`; });
    flow.remove();
  });
  sc.querySelectorAll('.ix-pg').forEach((c,i)=>c.textContent=starts[i]||'');
  sc.querySelectorAll('.ix-c').forEach((c,i)=>{ const p=state.sheets[0][i]; if(p) c.textContent=p.items.length; });
  if(grew) renderSections();
  fitBook();
}
/* keep the index on one page: shrink its font, then a denser layout; only a very long list continues on more pages */
function fitIndex(sc){
  const first=sc.querySelector('.bk-index'), fits=pg=>{ const b=pg.querySelector('.bk-body'); return b.scrollHeight<=b.clientHeight+1; };
  const tbl=first.querySelector('table.ix');
  for(const dense of [false,true]){ tbl.classList.toggle('dense',dense);
    for(const fs of [14,13,12,11,10,9]){ tbl.style.setProperty('--ixf', fs+'px'); if(fits(first)) return 1; } }
  let pages=1, cur=first;
  while(!fits(cur)){
    const next=cur.cloneNode(true), rows=[...cur.querySelectorAll('table.ix tr')].slice(1), nt=next.querySelector('table.ix');
    [...nt.querySelectorAll('tr')].slice(1).forEach(r=>r.remove());
    cur.after(next); pages++;
    for(let i=rows.length-1; i>0 && !fits(cur); i--) nt.insertBefore(rows[i], nt.rows[1]||null);   // move rows from the end
    cur=next;
  }
  return pages;
}
/* scale the A4 pages down to the width of the preview column (the print layout is unscaled) */
function fitBook(){
  const doc=el('out').querySelector('.booklet-doc'), sc=doc&&doc.querySelector('.bk-scale'); if(!sc) return;
  sc.style.transform=''; const k=Math.min(1, doc.clientWidth/sc.offsetWidth);
  sc.style.transformOrigin = document.documentElement.dir==='rtl' ? 'top right' : 'top left';
  sc.style.transform=`scale(${k})`; doc.style.height=Math.ceil(sc.offsetHeight*k)+'px';
}

/* --- optional page with the full statistical tables used by the test --- */
const FULL={};
function tablesPageHTML(){
  if(!el('fullTables').checked) return '';
  const need=new Set(); test.sections.forEach(s=>(TOPIC_TABLES[s.topic]||[]).forEach(t=>need.add(t)));
  if(!need.size) return '';
  const html=['z','t','f'].filter(t=>need.has(t)).map(t=>FULL[t] ||= ({z:zFullHTML, t:tFullHTML, f:fFullHTML})[t]()).join('');
  return `<div class="sheet tables-page"><h2>${T('tablesHead')}</h2>${html}</div>`;
}
function updateTotal(){
  const n=test.sections.reduce((k,s)=>k+s.items.length,0), q=Math.min(Math.max(1,parseInt(el('nQ').value)||1), n||1);
  el('totalMarks').textContent=fmtMarks((parseFloat(el('marks').value)||0)*q);
}
function render(){
  updateTotal();
  if(!test.sections.length){
    el('out').innerHTML=`<div class="sheet"><div class="sheet-sub" style="text-align:center;padding:48px 0">${T('emptyTest')}</div></div>`;
    return;
  }
  if(isBook()){ el('out').innerHTML=bookHTML(state.sheets[0])+tablesPageHTML(); paginateBook(); return; }
  if(MODES[state.mode].app){ appView(); return; }
  const multi=state.sheets.length>1, draw=state.mode==='practice'?practiceHTML:examHTML;
  el('out').innerHTML=state.sheets.map((parts,v)=>
    draw(parts, multi?`${T('version')} ${String.fromCharCode(65+v)}`:'')).join('')+tablesPageHTML();
}

/* ---------------- Interactive practice app ---------------- */
function appConfig(){
  const secs=test.sections.filter(s=>!s.custom), seen=new Set(), topics=[];
  secs.forEach(s=>{ if(seen.has(s.topic)) return; seen.add(s.topic); topics.push({t:s.topic, en:TOPIC_LABELS[s.topic]||s.topic, ar:TOPIC_LABELS_AR[s.topic]||'', code:s.code}); });
  const codes=[...new Set(secs.map(s=>s.code))], one=codes.length===1 ? secs.find(s=>s.code===codes[0]) : null;
  const custom=(el('title').value||'').trim();
  const title = custom ? [custom, custom] : one ? [`${one.code} · ${one.title}`, `${one.code} · ${one.titleAr||one.title}`] : [tr('titleApp','en'), tr('titleApp','ar')];
  return { topics, title, lang:state.lang, key:topics.map(o=>o.t).join(',') };
}
function appView(){
  const cfg=appConfig();
  if(!cfg.topics.length){ el('out').innerHTML=`<div class="sheet"><div class="sheet-sub" style="text-align:center;padding:48px 0">${T('emptyTest')}</div></div>`; return; }
  el('out').innerHTML=`<div class="app-bar"><div><b>${T('appReady')}</b><div class="hint">${T('appHint')}</div></div>
      <button class="btn primary" id="appDl">${T('appDownload')}</button></div><div id="appMount" class="app-preview"></div>`;
  el('appDl').onclick=downloadApp;
  mountPractice(el('appMount'), cfg);
}
/* one self-contained HTML file: the page styles, the needed modules bundled, and the chosen topics */
async function downloadApp(){
  const btn=el('appDl'), label=btn.textContent; btn.disabled=true; btn.textContent='…';
  try{
    const names=['helpers','viz','proofs','intros','generators','practice'], src={};
    await Promise.all(names.map(async n=>{ const r=await fetch(new URL(`./${n}.js`, import.meta.url)); if(!r.ok) throw new Error(n); src[n]=await r.text(); }));
    const css=[...document.styleSheets].map(ss=>{ try{ return [...ss.cssRules].map(r=>r.cssText).join('\n'); }catch(e){ return ''; } }).join('\n');
    const cfg={...appConfig(), lang:state.lang==='en'?'en':'ar', standalone:true}, ar=cfg.lang==='ar';
    const html=`<!doctype html><html lang="${ar?'ar':'en'}" dir="${ar?'rtl':'ltr'}" data-lang="${cfg.lang}"><head><meta charset="utf-8">`+
      `<meta name="viewport" content="width=device-width, initial-scale=1"><title>${(ar?cfg.title[1]:cfg.title[0]).replace(/</g,'&lt;')}</title>`+
      `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,600;1,400&display=swap">`+
      `<style>${css.replace(/<\/style/gi,'<\\/style')}</style></head><body class="pr-standalone"><div id="app"></div>`+
      `<script>${bundle(src, names)}\n__m.practice.mountPractice(document.getElementById('app'), ${JSON.stringify(cfg).replace(/</g,'\\u003c')});<\/script></body></html>`;
    await saveFile(((el('title').value||'').trim()||'practice-app').replace(/[\\/:*?"<>|]+/g,'').replace(/\s+/g,'-')+'.html', html);
  }catch(e){ if(!(e && e.code==='declined')) flashNote(T('appFailed')); }
  finally{ btn.disabled=false; btn.textContent=label; }
}

/* ---------------- Presentation mode (whole test, flattened) ---------------- */
let pIdx=0, pShow=false, pItems=[];
function flatItems(){ const f=[]; (state.sheets[0]||[]).forEach(p=>p.items.forEach(it=>f.push(it))); return f; }
function openPresent(){
  pItems=flatItems(); if(!pItems.length) return;
  pIdx=0; pShow=false; el('present').classList.add('on'); drawPresent();
}
function closePresent(){ el('present').classList.remove('on'); }
function drawPresent(){
  const it=pItems[pIdx];
  const ch = it.choices ? `<div class="pchoices">${it.choices.map((c,i)=>
    `<span>(${String.fromCharCode(65+i)}) ${c.html}</span>`).join('')}</div>` : '';
  const ansTxt = it.choices
    ? String.fromCharCode(65+it.choices.findIndex(c=>c.correct)) : strip(it.a);
  el('present').innerHTML=`
    <div class="pnum">${T('question')} ${pIdx+1} / ${pItems.length}</div>
    <div class="pbody">
      <div class="pq" dir="${dirFor(it.q)}">${it.q}</div>${ch}
      <div class="pans" dir="${dirFor(it.a)}">${pShow?ansTxt:''}</div>
      ${pShow&&it.s?`<div class="psteps" dir="${dirFor(it.s)}">${it.s}</div>`:''}
    </div>
    <div class="pbar">
      <button class="btn" id="pPrev">${T('prev')}</button>
      <button class="btn primary" id="pReveal">${pShow?T('hideAns'):T('showAns')}</button>
      <button class="btn" id="pNext">${T('next')}</button>
      <button class="btn" id="pClose">${T('close')}</button>
    </div>`;
  el('pPrev').onclick=()=>{ if(pIdx>0){pIdx--;pShow=false;drawPresent();} };
  el('pNext').onclick=()=>{ if(pIdx<pItems.length-1){pIdx++;pShow=false;drawPresent();} };
  el('pReveal').onclick=()=>{ pShow=!pShow; drawPresent(); };
  el('pClose').onclick=closePresent;
}
document.addEventListener('keydown',e=>{
  if(!el('present').classList.contains('on')) return;
  if(e.key==='ArrowLeft') el('pPrev')&&el('pPrev').click();
  else if(e.key==='ArrowRight') el('pNext')&&el('pNext').click();
  else if(e.key===' '){ e.preventDefault(); el('pReveal')&&el('pReveal').click(); }
  else if(e.key==='Escape') closePresent();
});

/* ---------------- Print / PDF ----------------
   Inside claude.ai the page runs in a frame that cannot open the print dialog, so it builds a PDF instead and
   offers it through the `downloads` capability; opened on its own, the browser's print dialog is used.
   The PDF library draws text itself and garbles right-to-left text, so with Arabic on the page the
   download is a print-ready HTML file that opens the browser's print dialog (Save as PDF keeps Arabic right). */
const PDF_LIB='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
let pdfLib=null;
function loadPdfLib(){
  return pdfLib ||= new Promise((res,rej)=>{
    if(window.html2pdf) return res(window.html2pdf);
    const sc=document.createElement('script'); sc.src=PDF_LIB;
    sc.onload=()=>res(window.html2pdf); sc.onerror=()=>{ pdfLib=null; rej(new Error('pdf library did not load')); };
    document.head.appendChild(sc);
  });
}
async function saveFile(filename, data){
  let dl=null; try{ dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null; }catch(e){ dl=null; }
  if(dl){ await dl.save({filename, data}); return; }
  const blob = data instanceof Blob ? data : new Blob([data], {type: filename.endsWith('.html') ? 'text/html' : 'application/octet-stream'});
  const url=URL.createObjectURL(blob), a=document.createElement('a');
  a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000);
}
const fileBase = () => (((el('title').value||'').trim() || (document.querySelector('.sheet-title')||{}).textContent || 'math-test')
  .replace(/[\\/:*?"<>|]+/g,'').replace(/\s+/g,'-').slice(0,80) || 'math-test');
function printableHTML(){
  const css=[...document.styleSheets].map(ss=>{ try{ return [...ss.cssRules].map(r=>r.cssText).join('\n'); }catch(e){ return ''; } }).join('\n');
  const root=document.documentElement;
  return `<!doctype html><html lang="${root.lang}" dir="${root.dir}" data-lang="${state.lang}"><head><meta charset="utf-8"><title>${fileBase()}</title>`+
    `<style>${css}</style><style>body{display:block!important;height:auto!important;overflow:visible!important}.wrap{height:auto!important;overflow:visible!important}</style></head>`+
    `<body><div class="wrap">${el('out').innerHTML}</div><script>window.onload=function(){setTimeout(function(){window.print()},300)}<\/script></body></html>`;
}
function flashNote(msg){ el('sections').insertAdjacentHTML('afterbegin',`<div class="sections-empty note" style="color:#c0392b">${msg}</div>`); setTimeout(renderSections,6000); }
async function exportPDF(){
  const btn=el('pdfBtn'), label=btn.textContent; btn.disabled=true; btn.textContent=T('makingPdf');
  if(state.lang!=='en'){
    try{ await saveFile(fileBase()+'.html', printableHTML()); flashNote(T('printNote')); }
    catch(e){ if(!(e && e.code==='declined')) flashNote(T('pdfFailed')); }
    finally{ btn.disabled=false; btn.textContent=label; }
    return;
  }
  try{
    const h2p=await loadPdfLib();
    document.body.classList.add('pdf-export');
    const book=el('out').querySelector('.bk-scale');
    const blob=await (book ? h2p().set({ margin:0, image:{type:'jpeg',quality:0.96}, html2canvas:{scale:2, useCORS:true, backgroundColor:'#ffffff'},
        jsPDF:{unit:'mm', format:'a4', orientation:'portrait'}, pagebreak:{mode:['css'], before:['.bk-page + .bk-page']} }).from(book).outputPdf('blob')
      : h2p().set({ margin:[10,10,12,10], image:{type:'jpeg',quality:0.96},
      html2canvas:{scale:2, useCORS:true, backgroundColor:'#ffffff'}, jsPDF:{unit:'mm', format:'a4', orientation:'portrait'},
      pagebreak:{mode:['css','legacy'], before:['.sheet + .sheet','.tables-page','.keywrap:not(.same)'], avoid:['.xq','ol.problems li','ol.sols>li','table','.plot']} })
      .from(el('out')).outputPdf('blob'));
    document.body.classList.remove('pdf-export');
    await saveFile(fileBase()+'.pdf', blob);
  }catch(e){
    document.body.classList.remove('pdf-export');
    if(!(e && e.code==='declined')){ try{ await saveFile(fileBase()+'.html', printableHTML()); }catch(_){} flashNote(T('pdfFailed')); }
  }finally{ btn.disabled=false; btn.textContent=label; }
}
const inFrame = () => { try{ return window.self!==window.top; }catch(e){ return true; } };

/* ---------------- Save / load whole tests (localStorage) ---------------- */
const LS='mwg_tests_v1';
function loadStore(){ try{ return JSON.parse(localStorage.getItem(LS)||'{}'); }catch(e){ return {}; } }
function saveStore(o){ try{ localStorage.setItem(LS, JSON.stringify(o)); }catch(e){} }
function refreshSaved(){
  const o=loadStore(); const names=Object.keys(o).sort(), cur=el('saved').value;
  el('saved').innerHTML=`<option value="">${T('loadSaved')}</option>`+
    names.map(k=>`<option value="${k.replace(/"/g,'&quot;')}">${k}</option>`).join('');
  el('saved').value=cur;
}
function testPayload(){
  return { sections:test.sections, title:el('title').value, spacing:el('spacing').value,
    versions:el('versions').value, keyMode:el('keyMode').value, solMode:el('solMode').value, custom:el('custom').value,
    mode:state.mode, nQ:el('nQ').value, marks:el('marks').value, fullTables:el('fullTables').checked };
}
function applyPayload(s, showKey){
  test.sections=s.sections||[];
  el('title').value=s.title||''; el('spacing').value=s.spacing||'2';
  el('versions').value=s.versions||'1'; el('keyMode').value=s.keyMode||'separate'; el('solMode').value=s.solMode||'answers';
  el('custom').value=s.custom||''; state.showKey=!!showKey; el('fullTables').checked=s.fullTables!==false;
  state.mode=MODES[s.mode]?s.mode:'practice';
  document.querySelectorAll('.mode').forEach(b=>b.classList.toggle('on', b.dataset.mode===state.mode));
  document.querySelectorAll('.exam-only').forEach(n=>n.hidden = !MODES[state.mode].nQ);
  document.querySelectorAll('.book-only').forEach(n=>n.hidden = state.mode!=='booklet');
  if(s.nQ) el('nQ').value=s.nQ; if(s.marks) el('marks').value=s.marks;
  buildVersions(); renderSections(); render();
}
function doSave(){
  const name=(el('saveName').value||'').trim(); if(!name){ el('saveName').focus(); return; }
  const o=loadStore(); o[name]={ ...testPayload(), showKey:state.showKey };
  saveStore(o); refreshSaved(); el('saved').value=name; el('saveName').value='';
}
function doLoad(name){ const s=loadStore()[name]; if(s) applyPayload(s, s.showKey); }
function doDelete(){
  const name=el('saved').value; if(!name) return;
  const o=loadStore(); delete o[name]; saveStore(o); refreshSaved();
}
function exportTest(){
  const blob=new Blob([JSON.stringify(testPayload(),null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob), a=document.createElement('a');
  a.href=url; a.download=((el('title').value||'math-test').trim().replace(/\s+/g,'-')||'math-test')+'.json';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function importTest(file){
  const reader=new FileReader();
  reader.onload=e=>{ try{ applyPayload(JSON.parse(e.target.result), false); }
    catch(err){ el('sections').insertAdjacentHTML('beforeend',`<div class="sections-empty" style="color:#c0392b">${T('badFile')}</div>`); } };
  reader.readAsText(file);
}


/* ---------------- Init (call after DOM is ready) ---------------- */
export function init(){
el('lang').onchange=e=>setLang(e.target.value);
document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
el('bLevel').onchange=()=>{ buildCourseSelect(); buildTopicList(false); };
el('bCourse').onchange=()=>buildTopicList(false);
el('bSearch').oninput=runSearch;
el('addSection').onclick=()=>addSelected(false);
el('clearSections').onclick=()=>{ test.sections=[]; buildVersions(); renderSections(); render(); };
el('addCustom').onclick=addCustomPart;
el('print').onclick=()=>{ if(inFrame()) exportPDF(); else window.print(); };
el('pdfBtn').onclick=exportPDF;
el('toggleKey').onclick=()=>{ state.showKey=!state.showKey; render(); };
el('versions').onchange=()=>{ buildVersions(); render(); };
el('nQ').oninput=render;
el('marks').oninput=render;
el('fullTables').onchange=render;
el('spacing').onchange=render;
el('keyMode').onchange=render;
el('solMode').onchange=()=>{ if(el('solMode').value==='steps') state.showKey=true; render(); };
el('title').oninput=render;
['bkUni','bkBy','bkTerm'].forEach(id=>el(id).oninput=render);
window.addEventListener('resize', fitBook);
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ if(isBook()) render(); });   // re-measure the pages with the real fonts
el('presentBtn').onclick=openPresent;
el('save').onclick=doSave;
el('del').onclick=doDelete;
el('saved').onchange=e=>{ if(e.target.value) doLoad(e.target.value); };
el('exportBtn').onclick=exportTest;
el('importBtn').onclick=()=>el('importFile').click();
el('importFile').onchange=e=>{ if(e.target.files[0]){ importTest(e.target.files[0]); e.target.value=''; } };

let saved='en'; try{ saved=localStorage.getItem(LANG_KEY)||'en'; }catch(e){}
state.lang = LANGS.includes(saved) ? saved : 'en'; el('lang').value=state.lang;
buildLevelSelect(); el('bLevel').value='all'; buildCourseSelect(); buildTopicList(false);
document.querySelectorAll('.mode').forEach(b=>b.classList.toggle('on', b.dataset.mode==='practice'));
document.querySelectorAll('.exam-only').forEach(n=>n.hidden=true);
document.querySelectorAll('.book-only').forEach(n=>n.hidden=true);
// start with a small sample so the page shows something
const first=el('topicList').querySelector('.tchk'); if(first){ first.checked=true; addSelected(false); }
applyLang();
}
