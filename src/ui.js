import { G } from './generators.js';
import { TOPIC_LABELS, CURRICULUM, INDEX, courseAt } from './curriculum.js';
import { shuffled, strip, sup } from './helpers.js';

/* ============================ UI WIRING (Test Builder) ============================ */
const el = id => document.getElementById(id);
const DIFF_NAME = ['', 'Easy', 'Medium', 'Hard'];
let test  = { sections: [] };   // each: {course, topic, label, count, diff, mc, custom?, items:[...]}
let state = { sheets: [], showKey: false };
const SPACE = {1:30, 2:46, 3:72};
const LONG = ['rectangle','triangleArea','circle','pythagorean','slope','derivative',
              'systems','proportions','integral','defIntegral','trigRatios',
              'rounding','percentOf','fracToDecimal','gcfLcm','evalExpr','inequalities','midpoint',
              'polyMultiply','vertex','parallelogram','trapezoid','volumeBox','volumeCylinder',
              'triangleAngles','radToDeg','referenceAngle','limitPoly','secondDerivative','tangentSlope',
              'scientificNotation','meanMedianMode','probability','arithmeticSeq','geometricSeq',
              'polygonAngles','distanceFormula','avgRateOfChange'];

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

/* --- Major / course / topic selectors --- */
function courseOptLabel(c){ return (c.code&&c.code!=='(prep)'?c.code+' · ':'')+c.title+(c.topics.length?'':' — (empty)'); }
function buildMajorSelect(){
  const s=el('bMajor'); s.innerHTML='';
  CURRICULUM.forEach((m,i)=>{ const o=document.createElement('option'); o.value=i; o.textContent=m.major; s.appendChild(o); });
}
function buildCourseSelect(){
  const s=el('bCourse'); s.innerHTML=''; const mi=+el('bMajor').value;
  CURRICULUM[mi].courses.forEach((c,i)=>{ const o=document.createElement('option'); o.value=i; o.textContent=courseOptLabel(c); s.appendChild(o); });
}
function buildTopicSelect(){
  const s=el('bTopic'); s.innerHTML=''; const c=courseAt(+el('bMajor').value,+el('bCourse').value);
  if(!c||!c.topics.length){
    const o=document.createElement('option'); o.value=''; o.textContent='— no auto-generated topics yet —'; s.appendChild(o);
    el('addSection').disabled=true; return;
  }
  el('addSection').disabled=false;
  c.topics.forEach(t=>{ const o=document.createElement('option'); o.value=t; o.textContent=TOPIC_LABELS[t]||t; s.appendChild(o); });
}

/* --- Search by topic / course code / course title / major --- */
function runSearch(){
  const q=(el('bSearch').value||'').trim().toLowerCase(); const box=el('searchResults');
  if(!q){ box.hidden=true; box.innerHTML=''; return; }
  const hits=INDEX.filter(x=> x.label.toLowerCase().includes(q) || x.code.toLowerCase().includes(q)
    || x.ctitle.toLowerCase().includes(q) || x.major.toLowerCase().includes(q)).slice(0,24);
  box.hidden=false;
  box.innerHTML = hits.length ? hits.map(h=>
    `<button class="sr" data-mi="${h.mi}" data-ci="${h.ci}" data-t="${h.topic}"><b>${h.label}</b><span>${h.code&&h.code!=='(prep)'?h.code+' · ':''}${h.ctitle} · ${h.major}</span></button>`).join('')
    : '<div class="sections-empty">No matching topics. (Theory-only courses have no auto-generated problems.)</div>';
  box.querySelectorAll('button.sr').forEach(b=>b.onclick=()=>{
    el('bMajor').value=b.dataset.mi; buildCourseSelect();
    el('bCourse').value=b.dataset.ci; buildTopicSelect();
    el('bTopic').value=b.dataset.t;
    el('bSearch').value=''; box.hidden=true; box.innerHTML='';
  });
}

/* --- Section (part) management --- */
function addSection(){
  const mi=+el('bMajor').value, ci=+el('bCourse').value; const c=courseAt(mi,ci); const topic=el('bTopic').value;
  if(!c||!topic) return;
  const d=parseInt(el('bDiff').value)||2;
  const count=Math.max(1,Math.min(40, parseInt(el('bCount').value)||10));
  const mc=el('bMc').checked;
  test.sections.push({ major:CURRICULUM[mi].major, code:c.code, title:c.title, topic,
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
function renderSections(){
  const box=el('sections');
  if(!test.sections.length){
    box.innerHTML='<div class="sections-empty">No parts yet — pick a branch and topic above, then “Add to test”.</div>'; return;
  }
  const last=test.sections.length-1;
  box.innerHTML=test.sections.map((s,i)=>{
    const L=String.fromCharCode(65+i);
    const meta = s.custom ? 'Custom · '+s.count+' Q'
      : `${s.code&&s.code!=='(prep)'?s.code+' · ':''}${s.title} · ${s.count} Q · ${DIFF_NAME[s.diff]}${s.mc?' · MC':''}`;
    return `<span class="section-pill">
      <span class="part-letter">${L}</span>
      <span class="pl">${s.label}</span>
      <span class="meta2">${meta}</span>
      <button data-u="${i}" title="Move up"${i===0?' disabled':''}>&#8593;</button>
      <button data-dn="${i}" title="Move down"${i===last?' disabled':''}>&#8595;</button>
      <button data-dup="${i}" title="Duplicate this part">&#10697;</button>
      ${s.custom?'':`<button data-r="${i}" title="Regenerate this part">&#8635;</button>`}
      <button data-x="${i}" title="Remove this part">&times;</button>
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
function partCourseName(p){ return p.custom ? 'Custom' : (p.code&&p.code!=='(prep)'?p.code+' — ':'')+p.title; }
function sheetHTML(parts, vLabel){
  const keyMode=el('keyMode').value;
  const today=new Date().toLocaleDateString();
  const sp=SPACE[parseInt(el('spacing').value)||2];
  const total=parts.reduce((n,p)=>n+p.items.length,0);
  const title=(el('title').value||'').trim() || 'Math Test';
  const multiPart=parts.length>1;

  const partsHtml=parts.map((p,pi)=>{
    const long=p.custom?false:LONG.includes(p.topic);
    const L=String.fromCharCode(65+pi);
    const det=p.custom?'Custom':`${partCourseName(p)}${p.diff?' · '+DIFF_NAME[p.diff]:''}`;
    const head=multiPart ? `<div class="part-head"><span class="plet">Part ${L}.</span> ${p.label}
      <span class="pdet">${det}</span></div>` : '';
    const lis=p.items.map(it=>{
      const ch = it.choices ? `<div class="choices">${it.choices.map((c,i)=>
        `<span class="opt">(${String.fromCharCode(65+i)}) ${c.html}</span>`).join('')}</div>` : '';
      return `<li style="min-height:${sp}px"><span class="qbody">${it.q}${ch}</span></li>`;
    }).join('');
    return `<div class="part">${head}<ol class="problems ${long?'single':''}">${lis}</ol></div>`;
  }).join('');

  const flat=[]; parts.forEach(p=>p.items.forEach(it=>flat.push(it)));
  const ans=flat.map(it=>{
    if(it.choices){ const idx=it.choices.findIndex(c=>c.correct);
      return `<li><b>${String.fromCharCode(65+idx)}</b></li>`; }
    return `<li>${it.a}</li>`;
  }).join('');

  const sub = multiPart
    ? `${parts.length} parts &nbsp;·&nbsp; ${total} questions`
    : (parts[0] ? `${partCourseName(parts[0])} &nbsp;·&nbsp; ${parts[0].label} &nbsp;·&nbsp; ${total} questions` : '0 questions');

  return `<div class="sheet">
    <div class="sheet-head">
      <div>
        <h2 class="sheet-title">${title}</h2>
        <div class="sheet-sub">${sub}${vLabel?' &nbsp;·&nbsp; '+vLabel:''}</div>
      </div>
      <div class="meta">
        <div><b>Name</b> _______________</div>
        <div><b>Date</b> ${today} &nbsp; <b>Period</b> ___</div>
        <div class="score">Score: ____ / ${total}</div>
      </div>
    </div>
    <div class="problemset">${partsHtml}</div>
    ${(keyMode==='none'||!flat.length) ? '' : `<div class="keywrap ${keyMode==='same'?'same':''}" ${state.showKey?'':'hidden'}>
      <div class="key-head"><h3>Answer Key${vLabel?' &mdash; '+vLabel:''}</h3></div>
      <ol class="answers">${ans}</ol>
    </div>`}
  </div>`;
}
function render(){
  if(!test.sections.length){
    el('out').innerHTML='<div class="sheet"><div class="sheet-sub" style="text-align:center;padding:48px 0">Your test is empty. Add a topic above to begin building.</div></div>';
    return;
  }
  const multi=state.sheets.length>1;
  el('out').innerHTML=state.sheets.map((parts,v)=>
    sheetHTML(parts, multi?`Version ${String.fromCharCode(65+v)}`:'')).join('');
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
    <div class="pnum">Question ${pIdx+1} / ${pItems.length}</div>
    <div class="pbody">
      <div class="pq">${it.q}</div>${ch}
      <div class="pans">${pShow?ansTxt:''}</div>
    </div>
    <div class="pbar">
      <button class="btn" id="pPrev">&lsaquo; Prev</button>
      <button class="btn primary" id="pReveal">${pShow?'Hide':'Show'} answer</button>
      <button class="btn" id="pNext">Next &rsaquo;</button>
      <button class="btn" id="pClose">Close (Esc)</button>
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
  const o=loadStore(); const names=Object.keys(o).sort();
  el('saved').innerHTML='<option value="">— load a saved test —</option>'+
    names.map(k=>`<option value="${k.replace(/"/g,'&quot;')}">${k}</option>`).join('');
}
function doSave(){
  const name=(el('saveName').value||'').trim(); if(!name){ el('saveName').focus(); return; }
  const o=loadStore();
  o[name]={ sections:test.sections, title:el('title').value, spacing:el('spacing').value,
    versions:el('versions').value, keyMode:el('keyMode').value,
    custom:el('custom').value, showKey:state.showKey };
  saveStore(o); refreshSaved(); el('saved').value=name; el('saveName').value='';
}
function doLoad(name){
  const s=loadStore()[name]; if(!s) return;
  test.sections=s.sections||[];
  el('title').value=s.title||''; el('spacing').value=s.spacing||'2';
  el('versions').value=s.versions||'1'; el('keyMode').value=s.keyMode||'separate';
  el('custom').value=s.custom||''; state.showKey=!!s.showKey;
  buildVersions(); renderSections(); render();
}
function doDelete(){
  const name=el('saved').value; if(!name) return;
  const o=loadStore(); delete o[name]; saveStore(o); refreshSaved();
}
function testPayload(){
  return { sections:test.sections, title:el('title').value, spacing:el('spacing').value,
    versions:el('versions').value, keyMode:el('keyMode').value, custom:el('custom').value };
}
function applyPayload(s){
  test.sections=s.sections||[];
  el('title').value=s.title||''; el('spacing').value=s.spacing||'2';
  el('versions').value=s.versions||'1'; el('keyMode').value=s.keyMode||'separate';
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
    catch(err){ el('sections').insertAdjacentHTML('beforeend','<div class="sections-empty" style="color:#c0392b">Could not read that file.</div>'); } };
  reader.readAsText(file);
}


/* ---------------- Init (call after DOM is ready) ---------------- */
export function init(){
el('bMajor').onchange=()=>{ buildCourseSelect(); buildTopicSelect(); };
el('bCourse').onchange=buildTopicSelect;
el('bSearch').oninput=runSearch;
el('addSection').onclick=addSection;
el('addCustom').onclick=addCustomPart;
el('print').onclick=()=>window.print();
el('toggleKey').onclick=()=>{ state.showKey=!state.showKey; render(); };
el('versions').onchange=()=>{ buildVersions(); render(); };
el('spacing').onchange=render;
el('keyMode').onchange=render;
el('title').oninput=render;
el('presentBtn').onclick=openPresent;
el('save').onclick=doSave;
el('del').onclick=doDelete;
el('saved').onchange=e=>{ if(e.target.value) doLoad(e.target.value); };
el('exportBtn').onclick=exportTest;
el('importBtn').onclick=()=>el('importFile').click();
el('importFile').onchange=e=>{ if(e.target.files[0]){ importTest(e.target.files[0]); e.target.value=''; } };

buildMajorSelect(); buildCourseSelect(); buildTopicSelect(); refreshSaved();
addSection();   // start with one part so the page shows a sample test
}
