import { G } from './generators.js';
import { TOPIC_LABELS, TOPIC_LABELS_AR, TOPIC_TABLES, CURRICULUM, INDEX, courseAt } from './curriculum.js';
import { shuffled, strip, sup, groupItems } from './helpers.js';
import { zFullHTML, tFullHTML, fFullHTML } from './viz.js';
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
};
const LONG = ['rectangle','triangleArea','circle','pythagorean','slope','derivative',
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
              'gaussJordan','inverseSolve','intervalNotation'];

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
  for(let i=0;i<count;i++){ const it=gen(d); if(mc) it.choices=buildChoices(it.a, gen, d); items.push(it); }
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
const defaultCount = () => state.mode==='practice' ? 6 : 1;
function buildTopicList(keep){
  const box=el('topicList'), {c}=selectedCourse();
  const prev = keep ? readTopicRows() : {};
  if(!c||!c.topics.length){ box.innerHTML=`<div class="sections-empty" style="padding:10px">${T('noTopics')}</div>`; el('addSection').disabled=true; return; }
  el('addSection').disabled=false;
  box.innerHTML=`<div class="trow head"><input type="checkbox" id="tAll" title="${T('selectAll')}"><span>${T('topic')}</span><span>${T('essay')}</span><span>${T('mcShort')}</span></div>`+
    c.topics.map(t=>{ const p=prev[t]||{on:false,essay:defaultCount(),mc:0};
      return `<div class="trow${p.on?' on':''}" data-t="${t}"><input type="checkbox" class="tchk"${p.on?' checked':''}><span>${topicLabel(t)}</span>
        <input type="number" class="tess" min="0" max="40" value="${p.essay}" title="${T('essay')}">
        <input type="number" class="tmc" min="0" max="40" value="${p.mc}" title="${T('mcType')}"></div>`; }).join('');
  box.querySelectorAll('.tchk').forEach(ch=>ch.onchange=()=>ch.closest('.trow').classList.toggle('on',ch.checked));
  el('tAll').onchange=e=>box.querySelectorAll('.tchk').forEach(ch=>{ ch.checked=e.target.checked; ch.closest('.trow').classList.toggle('on',ch.checked); });
}
function readTopicRows(){
  const out={};
  el('topicList').querySelectorAll('.trow[data-t]').forEach(r=>{ out[r.dataset.t]={ on:r.querySelector('.tchk').checked,
    essay:Math.max(0,Math.min(40,parseInt(r.querySelector('.tess').value)||0)), mc:Math.max(0,Math.min(40,parseInt(r.querySelector('.tmc').value)||0)) }; });
  return out;
}
function checkedTopics(){ return Object.entries(readTopicRows()).filter(([,v])=>v.on&&v.essay+v.mc>0).map(([t,v])=>({topic:t, ...v})); }

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
  const gen=test.sections.filter(x=>!x.custom); if(!gen.length) return;
  let total=test.sections.reduce((k,x)=>k+x.items.length,0), i=0;
  while(total<n){ const sec=gen[i++%gen.length]; sec.items.push(...genItems(sec.topic,1,sec.diff,false)); sec.nEssay=nEss(sec)+1; sec.nMc=nMc(sec); sec.count++; total++; }
}
function setMode(mode){
  state.mode=mode; const m=MODES[mode];
  document.querySelectorAll('.mode').forEach(b=>b.classList.toggle('on', b.dataset.mode===mode));
  document.querySelectorAll('.exam-only').forEach(n=>n.hidden = mode==='practice');
  if(mode!=='practice'){
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
    const long=p.custom?false:LONG.includes(p.topic);
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
  const multi=state.sheets.length>1, draw=state.mode==='practice'?practiceHTML:examHTML;
  el('out').innerHTML=state.sheets.map((parts,v)=>
    draw(parts, multi?`${T('version')} ${String.fromCharCode(65+v)}`:'')).join('')+tablesPageHTML();
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
    const blob=await h2p().set({ margin:[10,10,12,10], image:{type:'jpeg',quality:0.96},
      html2canvas:{scale:2, useCORS:true, backgroundColor:'#ffffff'}, jsPDF:{unit:'mm', format:'a4', orientation:'portrait'},
      pagebreak:{mode:['css','legacy'], before:['.sheet + .sheet','.tables-page','.keywrap:not(.same)'], avoid:['.xq','ol.problems li','ol.sols>li','table','.plot']} })
      .from(el('out')).outputPdf('blob');
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
  document.querySelectorAll('.exam-only').forEach(n=>n.hidden = state.mode==='practice');
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
// start with a small sample so the page shows something
const first=el('topicList').querySelector('.tchk'); if(first){ first.checked=true; addSelected(false); }
applyLang();
}
