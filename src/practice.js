/* Interactive practice app for students: unlimited questions for the chosen topics, answered by multiple choice
   or by typing (checked by value, see answer.js), a hint and step-by-step solution, the topic overview, a timed
   quiz with a results page, a list of past mistakes to review, and progress per topic. Used in the builder's
   preview and, bundled into one HTML file, as a standalone app for students (works offline). */
import { G } from './generators.js';
import { INTRO } from './intros.js';
import { strip, shuffled } from './helpers.js';
import { L } from './viz.js';
import { answerSpec, checkAnswer } from './answer.js';

const TXT = {
  topic:['Topic','الموضوع'], mixed:['All topics (mixed)','كل المواضيع (مختلطة)'], level:['Level','المستوى'],
  easy:['Easy','سهل'], medium:['Medium','متوسط'], hard:['Hard','صعب'],
  question:['Question','سؤال'], choose:['Choose the correct answer:','اختر الإجابة الصحيحة:'],
  right:['Correct — well done!','إجابة صحيحة — أحسنت!'], wrong:['Not quite. The correct answer is highlighted; open the steps to see why.','إجابة غير صحيحة. الإجابة الصحيحة مظللة؛ افتح الخطوات لترى السبب.'],
  wrongT:['Not quite. Compare with the correct answer and open the steps to see why.','إجابة غير صحيحة. قارن بالإجابة الصحيحة وافتح الخطوات لترى السبب.'],
  step:['Show a step','أظهر خطوة'], next:['Next step','الخطوة التالية'], all:['All steps','كل الخطوات'], newq:['New question ›','سؤال جديد ›'],
  hint:['💡 Hint','💡 تلميح'],
  overview:['Overview','شرح مبسط'], score:['Score','النتيجة'], streak:['Streak','متتالية'], reset:['Reset','تصفير'],
  answer:['Answer','الإجابة'], show:['Show the answer','أظهر الإجابة'], self:['Did you get it right?','هل كانت إجابتك صحيحة؟'], yes:['Yes','نعم'], no:['No','لا'],
  solution:['Solution','الحل'],
  tPractice:['Practice','تدريب'], tQuiz:['Timed quiz','اختبار بوقت'], tReview:['My mistakes','أخطائي'], tProgress:['My progress','تقدمي'],
  ansMode:['Answer by','طريقة الإجابة'], mc:['Multiple choice','اختيار من متعدد'], typed:['Typing the answer','كتابة الإجابة'],
  typeHere:['Type your answer…','اكتب إجابتك…'], check:['Check','تحقق'],
  typeHelp:['Examples: 3/4 · 0.75 · 2√3 · 5π · x^2+3x · (1, 2) · {1, 2} · 2+3i · x >= 4 · yes','أمثلة: 3/4 · 0.75 · 2√3 · 5π · x^2+3x · (1, 2) · {1, 2} · 2+3i · x >= 4 · نعم'],
  yourAns:['Your answer','إجابتك'], selfOnly:['This answer is checked by you: show it and compare.','هذه الإجابة تقيّمها بنفسك: أظهرها وقارن.'],
  qCount:['Questions','عدد الأسئلة'], qTime:['Time','الوقت'], minutes:['min','دقيقة'], noLimit:['No limit','بدون وقت'],
  start:['Start the quiz ›','ابدأ الاختبار ›'], of:['of','من'], prev:['‹ Previous','‹ السابق'], nextQ:['Next ›','التالي ›'], finish:['Finish','إنهاء الاختبار'],
  timeUp:['Time is up!','انتهى الوقت!'], result:['Result','النتيجة'], timeUsed:['Time used','الوقت المستغرق'], again:['New quiz','اختبار جديد'],
  noAns:['(no answer)','(لم تُجب)'], showSol:['Solution','الحل'],
  g90:['Excellent!','ممتاز!'], g75:['Very good!','جيد جداً!'], g60:['Good — keep practising.','جيد — واصل التدريب.'], g0:['Review the mistakes and try again.','راجع أخطاءك وحاول مرة أخرى.'],
  noMistakes:['No mistakes saved yet. Wrong answers in practice and quizzes appear here so you can review them.','لا توجد أخطاء محفوظة بعد. الإجابات الخاطئة في التدريب والاختبارات تظهر هنا لتراجعها.'],
  similar:['Practise a similar question','تدرّب على سؤال مشابه'], remove:['Remove','حذف'], clearAll:['Clear all','مسح الكل'],
  attempts:['Attempts','المحاولات'], correct:['Correct','الصحيحة'], accuracy:['Accuracy','نسبة الإتقان'], bestStreak:['Best streak','أفضل متتالية'],
  mastered:['Mastered','متقن'], needs:['Needs practice','يحتاج تدريباً'], started:['In progress','قيد التدريب'], notYet:['Not started','لم يبدأ'],
  weakest:['Suggested next:','المقترح للتدريب:'], practiseIt:['Practise it','تدرّب عليه'], noProgress:['Answer a few questions and your progress per topic appears here.','أجب عن بعض الأسئلة وسيظهر تقدمك في كل موضوع هنا.'],
};
const DIFF=['easy','medium','hard'];
const keyOf = h => strip(h).replace(/\s+/g,' ').trim();
const inner = h => String(h).replace(/^\s*<b>([\s\S]*)<\/b>\s*$/,'$1');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const LS='mtb_practice_v1';
const load = () => { try{ return JSON.parse(localStorage.getItem(LS)||'{}'); }catch(e){ return {}; } };
const store = o => { try{ localStorage.setItem(LS, JSON.stringify(o)); }catch(e){} };
const MAX_MISTAKES=30;

/* cfg: { topics:[{t, en, ar, code}], title:[en, ar], lang:'en'|'ar'|'both', standalone:bool, key } */
export function mountPractice(root, cfg){
  const S = { lang:cfg.lang||'ar', tab:'practice', ti:cfg.topics.length>1?-1:0, d:2, ans:'mc', item:null, picked:-1, shown:0, intro:false,
    stats:{}, mistakes:[], best:0, qn:10, qmin:10, ...load()[cfg.key||'x'] };
  S.right ??= 0; S.total ??= 0; S.streak ??= 0;
  if(S.ti>=cfg.topics.length) S.ti=0;
  const topicIds=new Set(cfg.topics.map(o=>o.t));
  S.mistakes=(S.mistakes||[]).filter(m=>topicIds.has(m.t));
  let Q=null, timer=0, openSol=-1, openMis=-1;           // running quiz, its clock, the open solution on a results / review page
  const t = k => S.lang==='ar' ? TXT[k][1] : S.lang==='both' ? `${TXT[k][0]} · ${TXT[k][1]}` : TXT[k][0];
  const nm = o => S.lang==='ar' ? o.ar||o.en : S.lang==='both' ? `${o.en} · ${o.ar||o.en}` : o.en;
  const topicOf = id => cfg.topics.find(o=>o.t===id) || {t:id, en:id, ar:id};
  const save = () => { const all=load(); all[cfg.key||'x']={ti:S.ti, d:S.d, ans:S.ans, right:S.right, total:S.total, streak:S.streak, best:S.best,
    stats:S.stats, mistakes:S.mistakes, qn:S.qn, qmin:S.qmin}; store(all); };
  if(cfg.standalone) applyLang();

  // pure-math html (no bilingual text) always reads left to right, even on an Arabic page
  const ltr=h=>String(h).includes('class="i18n')?'':' dir="ltr"';
  function applyLang(){ const r=document.documentElement; r.dataset.lang=S.lang; r.lang=S.lang==='ar'?'ar':'en'; r.dir=S.lang==='ar'?'rtl':'ltr'; }

  /* one question: the item, its multiple-choice options and, when it can be checked, its typed-answer spec */
  function makeItem(topic, d){
    const gen=G[topic.t], it=gen(d), seen=new Set([keyOf(it.a)]), opts=[{html:inner(it.a), ok:true}];
    for(let k=0; k<60 && opts.length<4; k++){ const o=gen(d).a, key=keyOf(o); if(!seen.has(key)){ seen.add(key); opts.push({html:inner(o), ok:false}); } }
    return { topic, d, it, opts: opts.length>1 ? shuffled(opts) : null, spec:answerSpec(it.a), typed:'', selfShown:false, resp:null };
  }
  const pickTopic = () => S.ti<0 ? cfg.topics[Math.floor(Math.random()*cfg.topics.length)] : cfg.topics[S.ti];
  function record(item, ok){
    S.total++; if(ok){ S.right++; S.streak++; S.best=Math.max(S.best||0, S.streak); } else S.streak=0;
    const st=S.stats[item.topic.t] || (S.stats[item.topic.t]={n:0, ok:0}); st.n++; if(ok) st.ok++;
    if(!ok){ const s=item.it.s && item.it.s.length<40000 ? item.it.s : '';
      S.mistakes.unshift({t:item.topic.t, d:item.d, q:item.it.q, a:item.it.a, s, your:item.typed||'', at:Date.now()});
      S.mistakes=S.mistakes.slice(0, MAX_MISTAKES); }
  }

  /* ---------- practice ---------- */
  function newItem(){ S.item=makeItem(pickTopic(), S.d); S.picked=-1; S.shown=0; draw(); }
  function pick(i){ if(S.picked>=0) return; S.picked=i; record(S.item, S.item.opts[i].ok); save(); draw(); }
  function selfMark(ok){ if(S.picked>=0) return; S.picked=ok?1:0; record(S.item, ok); save(); draw(); }
  function checkTyped(){
    if(S.picked>=0 || !S.item.typed.trim()) return;
    const ok=checkAnswer(S.item.typed, S.item.spec); S.item.result=ok; S.picked=ok?1:0; record(S.item, ok); save(); draw();
  }
  function stepsBox(it, shown){
    const box=document.createElement('div'); box.innerHTML=it.s||''; const lis=[...box.querySelectorAll('ol.steps > li')];
    lis.forEach((li,i)=>{ if(i>=shown) li.style.display='none'; });
    return {box, n:lis.length};
  }
  const typeBox = (value, disabled) => `<input type="text" class="pr-input" dir="ltr" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${t('typeHere')}" value="${esc(value||'')}"${disabled?' disabled':''}>`;
  function answerArea(item, done){
    const {it, opts}=item;
    if(S.ans==='typed' && item.spec){
      const res = done ? `<div class="pr-feedback ${item.result?'ok':'bad'}">${t(item.result?'right':'wrongT')}</div>`+
        (item.result?'':`<div class="pr-ans"><b>${t('answer')}:</b> <span${ltr(it.a)}>${it.a}</span></div>`) : '';
      return `<form class="pr-type" data-act="typeform">${typeBox(item.typed, done)}${done?'':`<button type="submit">${t('check')}</button>`}</form>
        <div class="pr-help">${t('typeHelp')}</div>${res}`;
    }
    if(opts && S.ans==='mc')
      return `<div class="pr-hint">${t('choose')}</div><div class="pr-opts">${opts.map((o,i)=>`<button data-opt="${i}" class="pr-opt${done?(o.ok?' ok':i===S.picked?' bad':' dim'):''}"${done?' disabled':''}><span class="pr-letter">${'ABCD'[i]}</span><span${ltr(o.html)}>${o.html}</span></button>`).join('')}</div>`+
        (done?`<div class="pr-feedback ${opts[S.picked].ok?'ok':'bad'}">${t(opts[S.picked].ok?'right':'wrong')}</div>`:'');
    return `${S.ans==='typed'?`<div class="pr-help">${t('selfOnly')}</div>`:''}<div class="pr-self">${item.selfShown?`<div class="pr-ans"><b>${t('answer')}:</b> <span${ltr(it.a)}>${it.a}</span></div>${done?'':`<span>${t('self')}</span> <button data-act="yes">${t('yes')}</button> <button data-act="no">${t('no')}</button>`}`:`<button data-act="showans">${t('show')}</button>`}</div>`;
  }
  const pickers = withCount => `<div class="pr-controls">
      ${cfg.topics.length>1?`<label>${t('topic')} <select data-act="topic"><option value="-1">${t('mixed')}</option>${cfg.topics.map((o,i)=>`<option value="${i}"${S.ti===i?' selected':''}>${nm(o)}</option>`).join('')}</select></label>`:''}
      <label>${t('level')} <select data-act="diff">${DIFF.map((k,i)=>`<option value="${i+1}"${S.d===i+1?' selected':''}>${t(k)}</option>`).join('')}</select></label>
      ${withCount?`<label>${t('qCount')} <select data-act="qn">${[5,10,15,20].map(n=>`<option${S.qn===n?' selected':''}>${n}</option>`).join('')}</select></label>
      <label>${t('qTime')} <select data-act="qmin">${[5,10,15,20,30,0].map(n=>`<option value="${n}"${S.qmin===n?' selected':''}>${n?`${n} ${t('minutes')}`:t('noLimit')}</option>`).join('')}</select></label>`:''}
      <span class="pr-seg"><span>${t('ansMode')}:</span>${['mc','typed'].map(m=>`<button data-ans="${m}" class="${S.ans===m?'on':''}">${t(m)}</button>`).join('')}</span>
    </div>`;
  function practiceView(){
    const item=S.item, {topic, it}=item, done=S.picked>=0, {box, n}=stepsBox(it, S.shown);
    return `${pickers(false)}
      <div class="pr-card">
        <div class="pr-chip">${nm(topic)}${topic.code?` · ${topic.code}`:''}
          ${INTRO[topic.t]?`<button class="pr-link" data-act="intro">${t('overview')} ${S.intro?'▴':'▾'}</button>`:''}</div>
        ${S.intro&&INTRO[topic.t]?`<div class="bk-intro"><div class="bk-introp">${L(INTRO[topic.t][0], INTRO[topic.t][1])}</div></div>`:''}
        <div class="pr-q"${ltr(it.q)}>${it.q}</div>
        ${answerArea(item, done)}
        ${n?`<div class="pr-steps"><div class="pr-solh">${t('solution')}</div>${S.shown?box.innerHTML:''}
          <div class="pr-stepbar">${S.shown<n?`<button data-act="step">${!done&&!S.shown?t('hint'):`${t(S.shown?'next':'step')} (${S.shown}/${n})`}</button><button class="pr-link" data-act="all">${t('all')}</button>`:''}</div></div>`:''}
        <div class="pr-actions"><button class="pr-new" data-act="new">${t('newq')}</button></div>
      </div>`;
  }

  /* ---------- timed quiz ---------- */
  const fmtTime = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
  function startQuiz(){
    const items=[], seen=new Set();
    for(let k=0; items.length<S.qn && k<S.qn*20; k++){ const it=makeItem(pickTopic(), S.d); if(seen.has(it.it.q)) continue; seen.add(it.it.q);
      it.mode = S.ans==='typed' && it.spec ? 'typed' : it.opts ? 'mc' : 'typed'; items.push(it); }
    Q={ items, i:0, start:Date.now(), limit:S.qmin*60, done:false, timeUp:false };
    clearInterval(timer); timer=setInterval(tick, 1000); draw();
  }
  function tick(){
    if(!Q || Q.done || !root.isConnected){ clearInterval(timer); return; }
    const used=(Date.now()-Q.start)/1000, left=Q.limit ? Q.limit-used : used;
    const el=root.querySelector('.pr-timer'); if(el){ el.textContent=fmtTime(Math.max(0,left)); el.classList.toggle('low', !!Q.limit && left<60); }
    if(Q.limit && left<=0){ Q.timeUp=true; finishQuiz(); }
  }
  function saveTyped(){ const inp=root.querySelector('.pr-input'); if(inp && Q && !Q.done && S.tab==='quiz'){ const it=Q.items[Q.i]; it.typed=inp.value; it.resp=inp.value.trim()?inp.value:null; } }
  function finishQuiz(){
    if(!Q || Q.done) return;
    saveTyped(); Q.done=true; Q.used=Math.round((Date.now()-Q.start)/1000); clearInterval(timer);
    Q.items.forEach(it=>{
      it.ok = it.resp===null ? false : it.mode==='typed' ? !!it.spec && checkAnswer(it.resp, it.spec) : it.opts[it.resp].ok;
      record(it, it.ok);
    });
    openSol=-1; S.tab='quiz'; save(); draw();
  }
  function quizView(){
    if(!Q) return `${pickers(true)}<div class="pr-card pr-setup"><div class="pr-actions"><button class="pr-new" data-act="qstart">${t('start')}</button></div></div>`;
    if(Q.done) return resultsView();
    const it=Q.items[Q.i], N=Q.items.length, answered=Q.items.filter(x=>x.resp!==null).length;
    const body = it.mode==='typed'
      ? `<form class="pr-type" data-act="qtype">${typeBox(it.typed)}</form><div class="pr-help">${t('typeHelp')}</div>`
      : `<div class="pr-hint">${t('choose')}</div><div class="pr-opts">${it.opts.map((o,i)=>`<button data-qopt="${i}" class="pr-opt${it.resp===i?' sel':''}"><span class="pr-letter">${'ABCD'[i]}</span><span${ltr(o.html)}>${o.html}</span></button>`).join('')}</div>`;
    return `<div class="pr-qbar"><span><b>${t('question')} ${Q.i+1}</b> ${t('of')} ${N}</span><span class="pr-timer">${fmtTime(Q.limit||0)}</span></div>
      <div class="pr-progress"><span style="width:${100*answered/N}%"></span></div>
      <div class="pr-card"><div class="pr-chip">${nm(it.topic)}</div><div class="pr-q"${ltr(it.it.q)}>${it.it.q}</div>${body}
        <div class="pr-qnav"><button data-act="qprev"${Q.i?'':' disabled'}>${t('prev')}</button>
          <span class="pr-dots">${Q.items.map((x,i)=>`<button data-qgo="${i}" class="${i===Q.i?'cur':''}${x.resp!==null?' done':''}">${i+1}</button>`).join('')}</span>
          ${Q.i<N-1?`<button data-act="qnext">${t('nextQ')}</button>`:''}<button class="pr-finish" data-act="qfinish">${t('finish')}</button></div></div>`;
  }
  function resultsView(){
    const N=Q.items.length, R=Q.items.filter(x=>x.ok).length, pct=N?Math.round(100*R/N):0;
    const msg = pct>=90?'g90':pct>=75?'g75':pct>=60?'g60':'g0';
    const your = it => it.resp===null ? `<i>${t('noAns')}</i>` : it.mode==='typed' ? `<span dir="ltr">${esc(it.resp)}</span>` : `<span${ltr(it.opts[it.resp].html)}>${it.opts[it.resp].html}</span>`;
    return `<div class="pr-card pr-result">
        ${Q.timeUp?`<div class="pr-feedback bad">${t('timeUp')}</div>`:''}
        <div class="pr-big"><div class="pr-ring" style="--p:${pct}"><b>${pct}%</b></div>
          <div><div class="pr-title2">${t('result')}: ${R} / ${N}</div><div>${t(msg)}</div><div class="pr-muted">${t('timeUsed')}: ${fmtTime(Q.used)}</div></div></div>
        <ol class="pr-rlist">${Q.items.map((it,i)=>`<li class="${it.ok?'ok':'bad'}"><div class="pr-rq"><span class="pr-mark">${it.ok?'✓':'✗'}</span><div class="pr-q"${ltr(it.it.q)}>${it.it.q}</div></div>
          <div class="pr-rrow"><span><b>${t('yourAns')}:</b> ${your(it)}</span>${it.ok?'':`<span><b>${t('answer')}:</b> <span${ltr(it.it.a)}>${it.it.a}</span></span>`}
          ${it.it.s?`<button class="pr-link" data-sol="${i}">${t('showSol')} ${openSol===i?'▴':'▾'}</button>`:''}</div>
          ${openSol===i?`<div class="pr-steps">${it.it.s}</div>`:''}</li>`).join('')}</ol>
        <div class="pr-actions"><button class="pr-link" data-tab="review">${t('tReview')}</button>&nbsp;&nbsp;<button class="pr-new" data-act="qagain">${t('again')}</button></div></div>`;
  }

  /* ---------- mistakes and progress ---------- */
  function reviewView(){
    if(!S.mistakes.length) return `<div class="pr-card pr-empty">${t('noMistakes')}</div>`;
    return `<div class="pr-card"><ol class="pr-rlist">${S.mistakes.map((m,i)=>`<li class="bad"><div class="pr-chip">${nm(topicOf(m.t))} · ${t(DIFF[m.d-1]||'medium')}</div><div class="pr-q"${ltr(m.q)}>${m.q}</div>
        <div class="pr-rrow">${m.your?`<span><b>${t('yourAns')}:</b> <span dir="ltr">${esc(m.your)}</span></span>`:''}<span><b>${t('answer')}:</b> <span${ltr(m.a)}>${m.a}</span></span></div>
        <div class="pr-rrow">${m.s?`<button class="pr-link" data-msol="${i}">${t('showSol')} ${openMis===i?'▴':'▾'}</button>`:''}
          <button class="pr-link" data-sim="${i}">${t('similar')}</button><button class="pr-link" data-mdel="${i}">${t('remove')}</button></div>
        ${openMis===i&&m.s?`<div class="pr-steps">${m.s}</div>`:''}</li>`).join('')}</ol>
      <div class="pr-actions"><button class="pr-link" data-act="mclear">${t('clearAll')}</button></div></div>`;
  }
  function progressView(){
    const rows=cfg.topics.map((o,i)=>({o, i, st:S.stats[o.t]||{n:0, ok:0}}));
    if(!rows.some(r=>r.st.n)) return `<div class="pr-card pr-empty">${t('noProgress')}</div>`;
    const status = st => !st.n ? ['notYet','none'] : st.n>=5 && st.ok/st.n>=0.8 ? ['mastered','good'] : st.n>=3 && st.ok/st.n<0.6 ? ['needs','weak'] : ['started','mid'];
    const weak=rows.filter(r=>r.st.n).sort((a,b)=>a.st.ok/a.st.n-b.st.ok/b.st.n)[0];
    const pct=S.total?Math.round(100*S.right/S.total):0;
    return `<div class="pr-card">
      <div class="pr-stats"><div><b>${S.total}</b><span>${t('attempts')}</span></div><div><b>${S.right}</b><span>${t('correct')}</span></div>
        <div><b>${pct}%</b><span>${t('accuracy')}</span></div><div><b>${S.best||0}</b><span>${t('bestStreak')}</span></div></div>
      ${weak && weak.st.ok/weak.st.n<0.8 && cfg.topics.length>1?`<div class="pr-suggest">${t('weakest')} <b>${nm(weak.o)}</b> <button class="pr-link" data-go="${weak.i}">${t('practiseIt')}</button></div>`:''}
      <table class="pr-ptable">${rows.map(r=>{ const [k,c]=status(r.st), p=r.st.n?Math.round(100*r.st.ok/r.st.n):0;
        return `<tr><td>${nm(r.o)}</td><td class="pr-bar"><span class="${c}" style="width:${p}%"></span></td><td>${r.st.n?`${p}%`:'—'}</td><td class="pr-n">${r.st.ok}/${r.st.n}</td><td><span class="pr-badge ${c}">${t(k)}</span></td></tr>`; }).join('')}</table></div>`;
  }

  /* ---------- page ---------- */
  function draw(){
    const pct = S.total ? Math.round(100*S.right/S.total) : 0;
    const view = S.tab==='quiz' ? quizView() : S.tab==='review' ? reviewView() : S.tab==='progress' ? progressView() : practiceView();
    root.innerHTML=`<div class="pr-app">
      <div class="pr-top">
        <div><div class="pr-title">${S.lang==='ar'?cfg.title[1]:S.lang==='both'?cfg.title.join(' · '):cfg.title[0]}</div>
          <div class="pr-score"><b>${t('score')}:</b> ${S.right} / ${S.total}${S.total?` (${pct}%)`:''} &nbsp; <b>${t('streak')}:</b> ${S.streak} <button class="pr-link" data-act="reset">${t('reset')}</button></div></div>
        ${cfg.standalone?`<div class="pr-langs">${['ar','en','both'].map(l=>`<button data-lang="${l}" class="${S.lang===l?'on':''}">${l==='ar'?'عربي':l==='en'?'English':'EN + ع'}</button>`).join('')}</div>`:''}
      </div>
      <div class="pr-tabs">${[['practice','tPractice'],['quiz','tQuiz'],['review','tReview'],['progress','tProgress']].map(([k,l])=>
        `<button data-tab="${k}" class="${S.tab===k?'on':''}">${t(l)}${k==='review'&&S.mistakes.length?` <span class="pr-count">${S.mistakes.length}</span>`:''}</button>`).join('')}</div>
      ${view}</div>`;
    wire();
    if(S.tab==='quiz' && Q && !Q.done) tick();
  }
  function wire(){
    const all=(sel,fn)=>root.querySelectorAll(sel).forEach(b=>b.onclick=()=>fn(b));
    const on=(act,fn)=>{ const b=root.querySelector(`[data-act="${act}"]`); if(b) b[b.tagName==='SELECT'?'onchange':b.tagName==='FORM'?'onsubmit':'onclick']=fn; };
    const inp=root.querySelector('.pr-input');
    all('[data-opt]', b=>pick(+b.dataset.opt));
    all('[data-lang]', b=>{ S.lang=b.dataset.lang; applyLang(); draw(); });
    all('[data-tab]', b=>{ saveTyped(); S.tab=b.dataset.tab; openMis=-1; draw(); });
    all('[data-ans]', b=>{ S.ans=b.dataset.ans; save(); draw(); });
    on('reset',()=>{ S.right=S.total=S.streak=0; S.best=0; S.stats={}; save(); draw(); });
    on('topic',e=>{ S.ti=+e.target.value; save(); if(S.tab==='practice') newItem(); });
    on('diff',e=>{ S.d=+e.target.value; save(); if(S.tab==='practice') newItem(); });
    on('intro',()=>{ S.intro=!S.intro; draw(); });
    on('step',()=>{ S.shown++; draw(); });
    on('all',()=>{ S.shown=stepsBox(S.item.it,0).n; draw(); });
    on('showans',()=>{ S.item.selfShown=true; draw(); });
    on('yes',()=>selfMark(true)); on('no',()=>selfMark(false));
    on('new',newItem);
    on('typeform',e=>{ e.preventDefault(); checkTyped(); });
    if(inp && S.tab==='practice'){ inp.oninput=()=>{ S.item.typed=inp.value; }; if(S.picked<0) inp.focus({preventScroll:true}); }
    // quiz
    on('qn',e=>{ S.qn=+e.target.value; save(); }); on('qmin',e=>{ S.qmin=+e.target.value; save(); });
    on('qstart',startQuiz); on('qagain',()=>{ Q=null; draw(); });
    on('qtype',e=>{ e.preventDefault(); saveTyped(); if(Q.i<Q.items.length-1){ Q.i++; draw(); } });
    if(inp && S.tab==='quiz'){ inp.oninput=saveTyped; inp.focus({preventScroll:true}); }
    all('[data-qopt]', b=>{ Q.items[Q.i].resp=+b.dataset.qopt; draw(); });
    on('qprev',()=>{ saveTyped(); Q.i--; draw(); }); on('qnext',()=>{ saveTyped(); Q.i++; draw(); });
    all('[data-qgo]', b=>{ saveTyped(); Q.i=+b.dataset.qgo; draw(); });
    on('qfinish',finishQuiz);
    all('[data-sol]', b=>{ openSol = openSol===+b.dataset.sol ? -1 : +b.dataset.sol; draw(); });
    // mistakes, progress
    all('[data-msol]', b=>{ openMis = openMis===+b.dataset.msol ? -1 : +b.dataset.msol; draw(); });
    all('[data-mdel]', b=>{ S.mistakes.splice(+b.dataset.mdel,1); openMis=-1; save(); draw(); });
    on('mclear',()=>{ S.mistakes=[]; save(); draw(); });
    all('[data-sim]', b=>{ const m=S.mistakes[+b.dataset.sim], i=cfg.topics.findIndex(o=>o.t===m.t); if(i>=0) S.ti=i; S.d=m.d||S.d; S.tab='practice'; save(); newItem(); });
    all('[data-go]', b=>{ S.ti=+b.dataset.go; S.tab='practice'; save(); newItem(); });
  }
  newItem();
  return { setLang(l){ S.lang=l; draw(); } };
}
