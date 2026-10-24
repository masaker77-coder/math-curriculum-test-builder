/* Interactive practice app: unlimited questions for the chosen topics, multiple-choice checking,
   step-by-step hints, the topic overview, and a running score. Used in the builder's preview and,
   bundled into one HTML file, as a standalone app for students (works offline). */
import { G } from './generators.js';
import { INTRO } from './intros.js';
import { strip, shuffled } from './helpers.js';
import { L } from './viz.js';

const TXT = {
  topic:['Topic','الموضوع'], mixed:['All topics (mixed)','كل المواضيع (مختلطة)'], level:['Level','المستوى'],
  easy:['Easy','سهل'], medium:['Medium','متوسط'], hard:['Hard','صعب'],
  question:['Question','سؤال'], choose:['Choose the correct answer:','اختر الإجابة الصحيحة:'],
  right:['Correct — well done!','إجابة صحيحة — أحسنت!'], wrong:['Not quite. The correct answer is highlighted; open the steps to see why.','إجابة غير صحيحة. الإجابة الصحيحة مظللة؛ افتح الخطوات لترى السبب.'],
  step:['Show a step','أظهر خطوة'], next:['Next step','الخطوة التالية'], all:['All steps','كل الخطوات'], newq:['New question ›','سؤال جديد ›'],
  overview:['Overview','شرح مبسط'], score:['Score','النتيجة'], streak:['Streak','متتالية'], reset:['Reset','تصفير'],
  answer:['Answer','الإجابة'], show:['Show the answer','أظهر الإجابة'], self:['Did you get it right?','هل كانت إجابتك صحيحة؟'], yes:['Yes','نعم'], no:['No','لا'],
  solution:['Solution','الحل'],
};
const DIFF=['easy','medium','hard'];
const keyOf = h => strip(h).replace(/\s+/g,' ').trim();
const inner = h => String(h).replace(/^\s*<b>([\s\S]*)<\/b>\s*$/,'$1');
const LS='mtb_practice_v1';
const load = () => { try{ return JSON.parse(localStorage.getItem(LS)||'{}'); }catch(e){ return {}; } };
const store = o => { try{ localStorage.setItem(LS, JSON.stringify(o)); }catch(e){} };

/* cfg: { topics:[{t, en, ar, code}], title:[en, ar], lang:'en'|'ar'|'both', standalone:bool } */
export function mountPractice(root, cfg){
  const S = { lang:cfg.lang||'ar', ti:cfg.topics.length>1?-1:0, d:2, item:null, picked:-1, shown:0, intro:false, ...load()[cfg.key||'x'] };
  S.right ??= 0; S.total ??= 0; S.streak ??= 0;
  if(S.ti>=cfg.topics.length) S.ti=0;
  const t = k => S.lang==='ar' ? TXT[k][1] : S.lang==='both' ? `${TXT[k][0]} · ${TXT[k][1]}` : TXT[k][0];
  const nm = o => S.lang==='ar' ? o.ar||o.en : S.lang==='both' ? `${o.en} · ${o.ar||o.en}` : o.en;
  const save = () => { const all=load(); all[cfg.key||'x']={ti:S.ti, d:S.d, right:S.right, total:S.total, streak:S.streak}; store(all); };
  if(cfg.standalone) applyLang();

  function applyLang(){ const r=document.documentElement; r.dataset.lang=S.lang; r.lang=S.lang==='ar'?'ar':'en'; r.dir=S.lang==='ar'?'rtl':'ltr'; }
  function newItem(){
    const topic = S.ti<0 ? cfg.topics[Math.floor(Math.random()*cfg.topics.length)] : cfg.topics[S.ti];
    const gen=G[topic.t], it=gen(S.d), seen=new Set([keyOf(it.a)]), opts=[{html:inner(it.a), ok:true}];
    for(let k=0; k<60 && opts.length<4; k++){ const o=gen(S.d).a, key=keyOf(o); if(!seen.has(key)){ seen.add(key); opts.push({html:inner(o), ok:false}); } }
    S.item={ topic, it, opts: opts.length>1 ? shuffled(opts) : null, selfShown:false };
    S.picked=-1; S.shown=0; draw();
  }
  function pick(i){
    if(S.picked>=0) return;
    S.picked=i; S.total++;
    if(S.item.opts[i].ok){ S.right++; S.streak++; } else S.streak=0;
    save(); draw();
  }
  function selfMark(ok){ if(S.picked>=0) return; S.picked=ok?1:0; S.total++; if(ok){ S.right++; S.streak++; } else S.streak=0; save(); draw(); }

  function draw(){
    const {topic, it, opts}=S.item, done=S.picked>=0;
    const box=document.createElement('div'); box.innerHTML=it.s||''; const lis=[...box.querySelectorAll('ol.steps > li')];
    lis.forEach((li,i)=>{ if(i>=S.shown) li.style.display='none'; });
    const pct = S.total ? Math.round(100*S.right/S.total) : 0;
    root.innerHTML=`<div class="pr-app">
      <div class="pr-top">
        <div><div class="pr-title">${S.lang==='ar'?cfg.title[1]:S.lang==='both'?cfg.title.join(' · '):cfg.title[0]}</div>
          <div class="pr-score"><b>${t('score')}:</b> ${S.right} / ${S.total}${S.total?` (${pct}%)`:''} &nbsp; <b>${t('streak')}:</b> ${S.streak} <button class="pr-link" data-act="reset">${t('reset')}</button></div></div>
        ${cfg.standalone?`<div class="pr-langs">${['ar','en','both'].map(l=>`<button data-lang="${l}" class="${S.lang===l?'on':''}">${l==='ar'?'عربي':l==='en'?'English':'EN + ع'}</button>`).join('')}</div>`:''}
      </div>
      <div class="pr-controls">
        ${cfg.topics.length>1?`<label>${t('topic')} <select data-act="topic"><option value="-1">${t('mixed')}</option>${cfg.topics.map((o,i)=>`<option value="${i}"${S.ti===i?' selected':''}>${nm(o)}</option>`).join('')}</select></label>`:''}
        <label>${t('level')} <select data-act="diff">${DIFF.map((k,i)=>`<option value="${i+1}"${S.d===i+1?' selected':''}>${t(k)}</option>`).join('')}</select></label>
      </div>
      <div class="pr-card">
        <div class="pr-chip">${nm(topic)}${topic.code?` · ${topic.code}`:''}
          ${INTRO[topic.t]?`<button class="pr-link" data-act="intro">${t('overview')} ${S.intro?'▴':'▾'}</button>`:''}</div>
        ${S.intro&&INTRO[topic.t]?`<div class="bk-intro"><div class="bk-introp">${L(INTRO[topic.t][0], INTRO[topic.t][1])}</div></div>`:''}
        <div class="pr-q">${it.q}</div>
        ${opts ? `<div class="pr-hint">${t('choose')}</div><div class="pr-opts">${opts.map((o,i)=>`<button data-opt="${i}" class="pr-opt${done?(o.ok?' ok':i===S.picked?' bad':' dim'):''}"${done?' disabled':''}><span class="pr-letter">${'ABCD'[i]}</span><span>${o.html}</span></button>`).join('')}</div>`
               : `<div class="pr-self">${S.item.selfShown?`<div class="pr-ans"><b>${t('answer')}:</b> ${it.a}</div>${done?'':`<span>${t('self')}</span> <button data-act="yes">${t('yes')}</button> <button data-act="no">${t('no')}</button>`}`:`<button data-act="showans">${t('show')}</button>`}</div>`}
        ${done&&opts?`<div class="pr-feedback ${opts[S.picked].ok?'ok':'bad'}">${t(opts[S.picked].ok?'right':'wrong')}</div>`:''}
        ${lis.length?`<div class="pr-steps"><div class="pr-solh">${t('solution')}</div>${S.shown?box.innerHTML:''}
          <div class="pr-stepbar">${S.shown<lis.length?`<button data-act="step">${t(S.shown?'next':'step')} (${S.shown}/${lis.length})</button><button class="pr-link" data-act="all">${t('all')}</button>`:''}</div></div>`:''}
        <div class="pr-actions"><button class="pr-new" data-act="new">${t('newq')}</button></div>
      </div></div>`;
    root.querySelectorAll('[data-opt]').forEach(b=>b.onclick=()=>pick(+b.dataset.opt));
    root.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{ S.lang=b.dataset.lang; applyLang(); draw(); });
    const on=(act,fn)=>{ const b=root.querySelector(`[data-act="${act}"]`); if(b) b[b.tagName==='SELECT'?'onchange':'onclick']=fn; };
    on('reset',()=>{ S.right=S.total=S.streak=0; save(); draw(); });
    on('topic',e=>{ S.ti=+e.target.value; save(); newItem(); });
    on('diff',e=>{ S.d=+e.target.value; save(); newItem(); });
    on('intro',()=>{ S.intro=!S.intro; draw(); });
    on('step',()=>{ S.shown++; draw(); });
    on('all',()=>{ S.shown=lis.length; draw(); });
    on('showans',()=>{ S.item.selfShown=true; draw(); });
    on('yes',()=>selfMark(true)); on('no',()=>selfMark(false));
    on('new',newItem);
  }
  newItem();
  return { setLang(l){ S.lang=l; draw(); } };
}
