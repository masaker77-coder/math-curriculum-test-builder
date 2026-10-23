import { G } from './generators.js';
import { TOPIC_LABELS, TOPIC_LABELS_AR, CURRICULUM, INDEX, courseAt } from './curriculum.js';
import { shuffled, strip, sup } from './helpers.js';
import { LANGS, tr, pickLang } from './i18n.js';

/* ============================ UI WIRING (Test Builder) ============================ */
const el = id => document.getElementById(id);
const DIFF_KEY = ['', 'easy', 'medium', 'hard'];
let test  = { sections: [] };   // each: {course, topic, count, diff, mc, custom?, items:[...]}
let state = { sheets: [], showKey: false, lang: 'en' };
const SPACE = {1:30, 2:46, 3:72};
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
              'fdmOdeUxx','fdmOdeUtt','fdmAdvection','fdmFamous'];

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
  document.querySelectorAll('[data-i18n-title]').forEach(n=>{ n.title=T(n.dataset.i18nTitle); });
  const li=el('bLevel').value, ci=el('bCourse').value, tp=el('bTopic').value;
  buildLevelSelect(); el('bLevel').value=li||0; buildCourseSelect(); el('bCourse').value=ci||0; buildTopicSelect(); if(tp) el('bTopic').value=tp;
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
function genItems(topic, count, d, mc){
  const gen=G[topic]; const items=[];
  for(let i=0;i<count;i++){ const it=gen(d); if(mc) it.choices=buildChoices(it.a, gen, d); items.push(it); }
  return items;
}

/* --- Level / course / topic selectors --- */
function courseOptLabel(c){ return c.code+' · '+courseTitle(c)+(c.topics.length?'':' — '+T('empty')); }
function buildLevelSelect(){
  const s=el('bLevel'); s.innerHTML='';
  CURRICULUM.forEach((l,i)=>{ const o=document.createElement('option'); o.value=i; o.textContent=levelName(l); s.appendChild(o); });
}
function buildCourseSelect(){
  const s=el('bCourse'); s.innerHTML=''; const li=+el('bLevel').value;
  CURRICULUM[li].courses.forEach((c,i)=>{ const o=document.createElement('option'); o.value=i; o.textContent=courseOptLabel(c); s.appendChild(o); });
}
function buildTopicSelect(){
  const s=el('bTopic'); s.innerHTML=''; const c=courseAt(+el('bLevel').value,+el('bCourse').value);
  if(!c||!c.topics.length){
    const o=document.createElement('option'); o.value=''; o.textContent=T('noTopics'); s.appendChild(o);
    el('addSection').disabled=true; return;
  }
  el('addSection').disabled=false;
  c.topics.forEach(t=>{ const o=document.createElement('option'); o.value=t; o.textContent=topicLabel(t); s.appendChild(o); });
}

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
    el('bCourse').value=b.dataset.ci; buildTopicSelect();
    el('bTopic').value=b.dataset.t;
    el('bSearch').value=''; box.hidden=true; box.innerHTML='';
  });
}

/* --- Section (part) management --- */
function addSection(){
  const li=+el('bLevel').value, ci=+el('bCourse').value; const c=courseAt(li,ci); const topic=el('bTopic').value;
  if(!c||!topic) return;
  const d=parseInt(el('bDiff').value)||2;
  const count=Math.max(1,Math.min(40, parseInt(el('bCount').value)||10));
  const mc=el('bMc').checked;
  test.sections.push({ level:CURRICULUM[li].level, code:c.code, title:c.title, titleAr:c.ar, topic,
    label:TOPIC_LABELS[topic]||topic, count, diff:d, mc, items:genItems(topic,count,d,mc) });
  buildVersions(); renderSections(); render();
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
  s.items=genItems(s.topic, s.count, s.diff, s.mc);
  buildVersions(); render();
}
function moveSection(i,dir){
  const j=i+dir; if(j<0||j>=test.sections.length) return;
  [test.sections[i],test.sections[j]]=[test.sections[j],test.sections[i]];
  buildVersions(); renderSections(); render();
}
function dupSection(i){
  const s=test.sections[i];
  const copy = s.custom ? {...s, items:s.items.slice()} : {...s, items:genItems(s.topic,s.count,s.diff,s.mc)};
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
      : `${partCourse(s)} · ${s.count} · ${T(DIFF_KEY[s.diff])}${s.mc?' · MC':''}`;
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

/* --- Render the test --- */
function sheetHTML(parts, vLabel){
  const keyMode=el('keyMode').value, withSteps=el('solMode').value==='steps';
  const today=new Date().toLocaleDateString(state.lang==='ar'?'ar':undefined);
  const sp=SPACE[parseInt(el('spacing').value)||2];
  const total=parts.reduce((n,p)=>n+p.items.length,0);
  const title=(el('title').value||'').trim() || T('mathTest');
  const multiPart=parts.length>1;

  const partsHtml=parts.map((p,pi)=>{
    const long=p.custom?false:LONG.includes(p.topic);
    const L=String.fromCharCode(65+pi);
    const det=p.custom?T('customShort'):`${partCourse(p)}${p.diff?' · '+T(DIFF_KEY[p.diff]):''}`;
    const head=multiPart ? `<div class="part-head"><span class="plet">${T('part')} ${L}.</span> ${partLabel(p)}
      <span class="pdet">${det}</span></div>` : '';
    const lis=p.items.map(it=>{
      const ch = it.choices ? `<div class="choices">${it.choices.map((c,i)=>
        `<span class="opt">(${String.fromCharCode(65+i)}) ${c.html}</span>`).join('')}</div>` : '';
      return `<li style="min-height:${sp}px"><span class="qbody" dir="${dirFor(it.q)}">${it.q}${ch}</span></li>`;
    }).join('');
    return `<div class="part">${head}<ol class="problems ${long?'single':''}">${lis}</ol></div>`;
  }).join('');

  const flat=[]; parts.forEach(p=>p.items.forEach(it=>flat.push(it)));
  const ans=flat.map(it=>{
    if(it.choices){ const idx=it.choices.findIndex(c=>c.correct);
      return `<li><b>${String.fromCharCode(65+idx)}</b></li>`; }
    return `<li dir="${dirFor(it.a)}">${it.a}</li>`;
  }).join('');
  // worked solutions: every item that has steps, numbered as in the test
  const sols = withSteps ? flat.map((it,i)=>it.s ? `<li value="${i+1}" dir="${dirFor(it.s)}">
      <div class="solq">${it.q}</div><div class="sola">${it.a}</div>${it.s}</li>` : '').join('') : '';

  const sub = multiPart
    ? `${parts.length} ${T('parts')} &nbsp;·&nbsp; ${total} ${T('qs')}`
    : (parts[0] ? `${partCourse(parts[0])} &nbsp;·&nbsp; ${partLabel(parts[0])} &nbsp;·&nbsp; ${total} ${T('qs')}` : `0 ${T('qs')}`);

  return `<div class="sheet">
    <div class="sheet-head">
      <div>
        <h2 class="sheet-title">${title}</h2>
        <div class="sheet-sub">${sub}${vLabel?' &nbsp;·&nbsp; '+vLabel:''}</div>
      </div>
      <div class="meta">
        <div><b>${T('name')}</b> _______________</div>
        <div><b>${T('date')}</b> ${today} &nbsp; <b>${T('period')}</b> ___</div>
        <div class="score">${T('score')}: ____ / ${total}</div>
      </div>
    </div>
    <div class="problemset">${partsHtml}</div>
    ${(keyMode==='none'||!flat.length) ? '' : `<div class="keywrap ${keyMode==='same'?'same':''}" ${state.showKey?'':'hidden'}>
      <div class="key-head"><h3>${T('keyHead')}${vLabel?' &mdash; '+vLabel:''}</h3></div>
      <ol class="answers">${ans}</ol>
      ${sols?`<div class="key-head sol-head"><h3>${T('solHead')}</h3></div><ol class="sols">${sols}</ol>`:''}
    </div>`}
  </div>`;
}
function render(){
  if(!test.sections.length){
    el('out').innerHTML=`<div class="sheet"><div class="sheet-sub" style="text-align:center;padding:48px 0">${T('emptyTest')}</div></div>`;
    return;
  }
  const multi=state.sheets.length>1;
  el('out').innerHTML=state.sheets.map((parts,v)=>
    sheetHTML(parts, multi?`${T('version')} ${String.fromCharCode(65+v)}`:'')).join('');
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
function doSave(){
  const name=(el('saveName').value||'').trim(); if(!name){ el('saveName').focus(); return; }
  const o=loadStore();
  o[name]={ sections:test.sections, title:el('title').value, spacing:el('spacing').value,
    versions:el('versions').value, keyMode:el('keyMode').value, solMode:el('solMode').value,
    custom:el('custom').value, showKey:state.showKey };
  saveStore(o); refreshSaved(); el('saved').value=name; el('saveName').value='';
}
function doLoad(name){
  const s=loadStore()[name]; if(!s) return;
  test.sections=s.sections||[];
  el('title').value=s.title||''; el('spacing').value=s.spacing||'2';
  el('versions').value=s.versions||'1'; el('keyMode').value=s.keyMode||'separate'; el('solMode').value=s.solMode||'answers';
  el('custom').value=s.custom||''; state.showKey=!!s.showKey;
  buildVersions(); renderSections(); render();
}
function doDelete(){
  const name=el('saved').value; if(!name) return;
  const o=loadStore(); delete o[name]; saveStore(o); refreshSaved();
}
function testPayload(){
  return { sections:test.sections, title:el('title').value, spacing:el('spacing').value,
    versions:el('versions').value, keyMode:el('keyMode').value, solMode:el('solMode').value, custom:el('custom').value };
}
function applyPayload(s){
  test.sections=s.sections||[];
  el('title').value=s.title||''; el('spacing').value=s.spacing||'2';
  el('versions').value=s.versions||'1'; el('keyMode').value=s.keyMode||'separate'; el('solMode').value=s.solMode||'answers';
  el('custom').value=s.custom||''; state.showKey=false;
  buildVersions(); renderSections(); render();
}
function exportTest(){
  const blob=new Blob([JSON.stringify(testPayload(),null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob), a=document.createElement('a');
  a.href=url; a.download=((el('title').value||'math-test').trim().replace(/\s+/g,'-')||'math-test')+'.json';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function importTest(file){
  const reader=new FileReader();
  reader.onload=e=>{ try{ applyPayload(JSON.parse(e.target.result)); }
    catch(err){ el('sections').insertAdjacentHTML('beforeend',`<div class="sections-empty" style="color:#c0392b">${T('badFile')}</div>`); } };
  reader.readAsText(file);
}


/* ---------------- Init (call after DOM is ready) ---------------- */
export function init(){
el('lang').onchange=e=>setLang(e.target.value);
el('bLevel').onchange=()=>{ buildCourseSelect(); buildTopicSelect(); };
el('bCourse').onchange=buildTopicSelect;
el('bSearch').oninput=runSearch;
el('addSection').onclick=addSection;
el('addCustom').onclick=addCustomPart;
el('print').onclick=()=>window.print();
el('toggleKey').onclick=()=>{ state.showKey=!state.showKey; render(); };
el('versions').onchange=()=>{ buildVersions(); render(); };
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
buildLevelSelect(); buildCourseSelect(); buildTopicSelect();
addSection();   // start with one part so the page shows a sample test
applyLang();
}
