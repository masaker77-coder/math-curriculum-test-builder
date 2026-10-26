/* Exports: Word (a .doc file in MHTML form, which Word opens and edits, graphs included), Moodle XML and a
   Blackboard question file. Browser only: the HTML is laid out in a hidden box so the page styles can be
   read, then made portable — fractions, matrices and aligned equations become plain markup or tables,
   graphs become PNG images, and the styles that matter are written inline. */
import { answerSpec, evaluate } from './answer.js';

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const cdata = s => `<![CDATA[${String(s).replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
const px2pt = v => `${+(parseFloat(v)*0.75).toFixed(1)}pt`;
const markup = h => h.innerHTML.replace(/ data-src="/g, ' src="');     // images get their src only once out of the page (no stray requests)

function host(html, cls=''){
  const h=document.createElement('div');
  h.className=cls; h.style.cssText='position:absolute;left:-14000px;top:0;width:680px;visibility:hidden';   // ≈ the text width of an A4 page
  h.innerHTML=html; document.body.appendChild(h); return h;
}

/* ---- graphs → PNG ---- */
const SVG_PROPS=['fill','stroke','stroke-width','stroke-dasharray','stroke-linecap','stroke-linejoin','opacity','fill-opacity','stroke-opacity',
  'font-size','font-family','font-weight','font-style','text-anchor','dominant-baseline'];
async function svgToPng(svg){
  const r=svg.getBoundingClientRect(), w=Math.max(1,Math.round(r.width||+svg.getAttribute('width')||320)), h=Math.max(1,Math.round(r.height||+svg.getAttribute('height')||200));
  const clone=svg.cloneNode(true), src=[svg, ...svg.querySelectorAll('*')], dst=[clone, ...clone.querySelectorAll('*')];
  src.forEach((n,i)=>{ const cs=getComputedStyle(n); dst[i].setAttribute('style', SVG_PROPS.map(p=>`${p}:${cs.getPropertyValue(p)}`).join(';')); });
  clone.setAttribute('xmlns','http://www.w3.org/2000/svg'); clone.setAttribute('width',w); clone.setAttribute('height',h);
  const url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(new XMLSerializer().serializeToString(clone));
  const img=await new Promise((ok,bad)=>{ const im=new Image(); im.onload=()=>ok(im); im.onerror=bad; im.src=url; });
  const c=document.createElement('canvas'), k=2; c.width=w*k; c.height=h*k;
  const g=c.getContext('2d'); g.fillStyle='#fff'; g.fillRect(0,0,c.width,c.height); g.drawImage(img,0,0,c.width,c.height);
  return { data:c.toDataURL('image/png'), w, h };
}

/* ---- structures → portable markup ---- */
const el = (tag, style, html) => { const n=document.createElement(tag); if(style) n.setAttribute('style', style); if(html!==undefined) n.innerHTML=html; return n; };
function fracOf(n, word){
  const a=n.querySelector(':scope>.n'), b=n.querySelector(':scope>.d'); if(!a||!b) return;
  if(word){ const s=el('span'); s.append(el('sup', '', a.innerHTML), '⁄', el('sub', '', b.innerHTML)); n.replaceWith(s); return; }
  const s=el('span','display:inline-block;vertical-align:middle;text-align:center;margin:0 2px');
  s.append(el('span','display:block;border-bottom:1px solid;padding:0 3px;line-height:1.15', a.innerHTML), el('span','display:block;padding:0 3px;line-height:1.15', b.innerHTML));
  n.replaceWith(s);
}
function matOf(n){
  const cols=+n.dataset.cols||2, cells=[...n.children];
  const t=el('table','display:inline-table;border-collapse:collapse;vertical-align:middle;margin:0 3px;border-left:1.5px solid #000;border-right:1.5px solid #000');
  for(let i=0;i<cells.length;i+=cols){ const tr=el('tr'); cells.slice(i,i+cols).forEach(c=>{
      tr.append(el('td', `padding:1px 7px;text-align:center${c.classList.contains('ab')?';border-left:1px solid #000':''}`, c.innerHTML)); }); t.append(tr); }
  n.replaceWith(t);
}
function eqsOf(n){
  const t=el('table',`display:inline-table;border-collapse:collapse;vertical-align:middle;margin:3px 0${n.classList.contains('brace')?';border-left:2px solid #000':''}`);
  t.setAttribute('dir','ltr');
  let tr=null;
  [...n.children].forEach(c=>{
    c.querySelectorAll('.sep').forEach(s=>s.remove());
    if(c.classList.contains('w')){ const r=el('tr'); r.append(el('td','padding:0 4px', c.innerHTML)); r.firstChild.colSpan=3; t.append(r); return; }
    if(c.classList.contains('l')){ tr=el('tr'); t.append(tr); }
    if(tr) tr.append(el('td', `padding:0 3px;text-align:${c.classList.contains('l')?'right':c.classList.contains('r')?'center':'left'}`, c.innerHTML));
  });
  n.replaceWith(t);
}
function choicesOf(n){                                    // (A) (B) (C) (D) in a two-column table
  const opts=[...n.querySelectorAll('.opt')], t=el('table','border-collapse:collapse;margin:4px 0');
  t.setAttribute('dir','ltr');
  for(let i=0;i<opts.length;i+=2){ const tr=el('tr'); opts.slice(i,i+2).forEach(o=>tr.append(el('td','padding:2px 26px 2px 0', o.innerHTML))); t.append(tr); }
  n.replaceWith(t);
}

const BOX=['border-top','border-right','border-bottom','border-left'];
/* write the visible styles inline; Word ignores flex / grid, so layout comes from the structures above */
function inlineStyles(root, word){
  root.querySelectorAll('.mat').forEach(n=>{ const m=/repeat\((\d+)/.exec(n.getAttribute('style')||''); n.dataset.cols=m?m[1]:2; });
  const all=[...root.querySelectorAll('*')].filter(n=>!n.closest('svg'));
  const css=all.map(n=>getComputedStyle(n));
  all.forEach((n,i)=>{
    const cs=css[i], st=[], tag=n.tagName;
    if(n.classList.contains('sheet') || n.classList.contains('bk-page')) return;
    const pcs=n.parentElement ? getComputedStyle(n.parentElement) : null;
    if(!pcs || cs.fontSize!==pcs.fontSize) st.push(`font-size:${word?px2pt(cs.fontSize):cs.fontSize}`);
    if(+cs.fontWeight>=600 && (!pcs || +pcs.fontWeight<600)) st.push('font-weight:bold');
    if(cs.fontStyle==='italic' && (!pcs || pcs.fontStyle!=='italic')) st.push('font-style:italic');
    if(!pcs || cs.color!==pcs.color) st.push(`color:${cs.color}`);
    const block=/^(block|list-item|table|flex|grid)$/.test(cs.display) || /^(TD|TH|TABLE|DIV|P|LI|H\d|OL|UL)$/.test(tag);
    if(block){
      if(cs.textAlign && !/^(start|left)$/.test(cs.textAlign)) st.push(`text-align:${cs.textAlign==='end'?(cs.direction==='rtl'?'left':'right'):cs.textAlign}`);
      if(cs.backgroundColor && !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor) && cs.backgroundColor!=='rgb(255, 255, 255)') st.push(`background:${cs.backgroundColor}`);
      BOX.forEach(b=>{ const w=parseFloat(cs.getPropertyValue(`${b}-width`)); if(w>0 && cs.getPropertyValue(`${b}-style`)!=='none') st.push(`${b}:${w}px ${cs.getPropertyValue(`${b}-style`)} ${cs.getPropertyValue(`${b}-color`)}`); });
      if(/^(TD|TH)$/.test(tag)) st.push(`padding:${cs.padding}`, `vertical-align:${cs.verticalAlign}`);
      if(tag==='TABLE'){ st.push('border-collapse:collapse');
        const pw=n.parentElement ? n.parentElement.getBoundingClientRect().width : 0, tw=n.getBoundingClientRect().width;
        if(pw && tw>=0.9*pw){ n.setAttribute('width','100%'); n.dataset.full='1'; } }
      if(/^(TD|TH)$/.test(tag)){ const t=n.closest('table'); if(t && t.dataset.full) n.setAttribute('width', Math.round(100*n.getBoundingClientRect().width/t.getBoundingClientRect().width)+'%'); }
      if(/^(OL|UL)$/.test(tag) && cs.listStyleType==='none'){ st.push('list-style:none', 'margin-left:0', 'padding-left:0'); n.dataset.nolist='1'; }
      if(tag==='TH' || (tag==='TD' && n.textContent.trim().length<=12)) n.setAttribute('nowrap','');
      if(!word && cs.display==='none') st.push('display:none');
    }
    const own=(n.getAttribute('style')||'').replace(/(^|;)\s*(--[\w-]+|grid-template-columns)\s*:[^;]*/g,'').replace(/^;+/,'');
    if(st.length||own) n.setAttribute('style', [own, ...st].filter(Boolean).join(';')); else n.removeAttribute('style');
  });
}

/* make the content of a laid-out box portable; addImage(png) stores a graph and returns the src to use */
async function portable(root, word, addImage){
  root.querySelectorAll('.noprint,button,script,template').forEach(n=>n.remove());
  [...root.querySelectorAll('*')].forEach(n=>{ if(n.isConnected && !n.closest('svg') && getComputedStyle(n).display==='none') n.remove(); });
  root.querySelectorAll('input,textarea').forEach(n=>n.replaceWith(document.createTextNode(n.value||'')));
  if(word) [...root.querySelectorAll('*')].forEach(n=>{                          // Word has no flex / grid gaps: put spaces between the parts
    if(n.closest('svg') || n.matches('.frac,.mat,.eqs,.choices')) return;
    if(/flex|grid/.test(getComputedStyle(n).display)) [...n.children].slice(1).forEach(c=>c.before(' \u00a0'));
  });
  for(const svg of [...root.querySelectorAll('svg')]){
    try{ const p=await svgToPng(svg), img=el('img'); img.setAttribute('data-src', addImage(p.data)); img.width=p.w; img.height=p.h; img.alt=''; svg.replaceWith(img); }
    catch(e){ svg.remove(); }
  }
  if(word) root.querySelectorAll('.sheet + .sheet, .keywrap:not(.same), .bubble-sheet, .tables-page, .bk-page + .bk-page')
    .forEach(n=>n.before(el('br','page-break-before:always;mso-break-type:page-break')));
  inlineStyles(root, word);
  if(word){
    root.querySelectorAll('.choices').forEach(choicesOf);
    root.querySelectorAll('ol[data-nolist],ul[data-nolist]').forEach(l=>{       // lists without numbers on screen: plain paragraphs
      const d=el('div', l.getAttribute('style')); [...l.children].forEach(li=>{ const x=el('div', li.getAttribute('style'), li.innerHTML); if(li.getAttribute('dir')) x.setAttribute('dir', li.getAttribute('dir')); d.append(x); });
      if(l.getAttribute('dir')) d.setAttribute('dir', l.getAttribute('dir')); l.replaceWith(d); });
    root.querySelectorAll('.bub').forEach(b=>b.replaceWith(b.classList.contains('on') ? '● ' : String.fromCodePoint(0x24B6+b.textContent.trim().charCodeAt(0)-65)+' '));
  }
  root.querySelectorAll('.eqs').forEach(eqsOf);
  root.querySelectorAll('.mat').forEach(matOf);
  root.querySelectorAll('.frac').forEach(n=>fracOf(n, word));
  root.querySelectorAll('bdi').forEach(b=>{ const s=el('span'); s.setAttribute('dir','ltr'); s.append(...b.childNodes); b.replaceWith(s); });
  root.querySelectorAll('[class]').forEach(n=>n.removeAttribute('class'));
  root.querySelectorAll('[data-swap],[data-clo],[data-ii],[data-cols],[data-full],[data-nolist]').forEach(n=>['data-swap','data-clo','data-ii','data-cols','data-full','data-nolist'].forEach(a=>n.removeAttribute(a)));
}

/* ---------------- Word ---------------- */
export async function wordDoc(outEl, {title, lang}){
  const h=host(outEl.innerHTML), imgs=[];
  let body='';
  try{ await portable(h, true, png=>{ const name=`image${imgs.length+1}.png`; imgs.push({name, b64:png.split(',')[1]}); return name; }); body=markup(h); }
  finally{ h.remove(); }
  const rtl=lang==='ar', d=rtl?' dir="rtl"':'';
  const html=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"${d}>`+
    `<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>${esc(title)}</title>`+
    `<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom><w:DoNotOptimizeForBrowser/></w:WordDocument></xml><![endif]-->`+
    `<style>@page Section1{size:21.0cm 29.7cm;margin:1.7cm 1.6cm 1.7cm 1.6cm} div.Section1{page:Section1} body{font-family:"Times New Roman",serif;font-size:12pt}`+
    ` table{border-collapse:collapse} td,th{vertical-align:top} h2{font-size:16pt;margin:4pt 0} h3{font-size:13pt;margin:8pt 0 4pt} li{margin:3pt 0}</style></head>`+
    `<body${d}><div class="Section1"${d}>${body}</div></body></html>`;
  const B='----=_NextPart_MTB_'+Date.now().toString(36);
  const parts=[`MIME-Version: 1.0\r\nContent-Type: multipart/related; boundary="${B}"; type="text/html"\r\n\r\n`,
    `--${B}\r\nContent-Type: text/html; charset="utf-8"\r\nContent-Location: file:///C:/mtb/doc.htm\r\n\r\n${html}\r\n\r\n`];
  imgs.forEach(im=>parts.push(`--${B}\r\nContent-Location: file:///C:/mtb/${im.name}\r\nContent-Type: image/png\r\nContent-Transfer-Encoding: base64\r\n\r\n${im.b64.replace(/.{76}/g,'$&\r\n')}\r\n\r\n`));
  parts.push(`--${B}--\r\n`);
  return parts.join('');
}

/* ---------------- question banks (Moodle, Blackboard) ---------------- */
/* items: [{name, it:{q,a,s,choices?}, marks}] */
const rtlWrap = h => h && document.documentElement.dir==='rtl' ? `<div dir="rtl" style="text-align:right">${h}</div>` : h;
async function fields(item, images){
  const out={};
  for(const [k,html] of [['q',item.it.q], ['a',item.it.a], ['s',item.it.s||'']]){
    const h=host(html), files=[];
    try{ await portable(h, false, png=>{ const name=`img${images.n++}.png`; files.push({name, b64:png.split(',')[1], data:png}); return images.src(name, png); }); out[k]={html:rtlWrap(markup(h).trim()), files}; }
    finally{ h.remove(); }
  }
  out.choices=[];
  for(const c of item.it.choices||[]){ const h=host(c.html); try{ await portable(h, false, png=>images.src('', png)); out.choices.push({html:markup(h).trim(), ok:c.correct}); } finally{ h.remove(); } }
  return out;
}
// a single number that a numerical question can grade (with a tolerance from the shown precision)
function numericAnswer(aHtml){
  const sp=answerSpec(aHtml); if(!sp || sp.kind!=='num' || sp.form || sp.dbl) return null;
  const v=evaluate(sp.v,0,null); if(!Number.isFinite(v)) return null;
  const m=/^-?\d*\.(\d+)$/.exec(sp.v.trim()), exact=/^-?\d+$/.test(sp.v.trim());
  return { v:+v.toFixed(6), tol: exact ? 0 : m ? 0.5*10**-m[1].length : 0.01 };
}
const fileTags = files => files.map(f=>`<file name="${f.name}" path="/" encoding="base64">${f.b64}</file>`).join('');

export async function moodleXML(items, {category}){
  const images={n:1, src:name=>`@@PLUGINFILE@@/${name}`}, out=['<?xml version="1.0" encoding="UTF-8"?>','<quiz>',
    `<question type="category"><category><text>$course$/top/${esc(category)}</text></category></question>`];
  for(const item of items){
    const f=await fields(item, images), name=`<name><text>${esc(item.name)}</text></name>`;
    const qt=`<questiontext format="html"><text>${cdata(f.q.html)}</text>${fileTags(f.q.files)}</questiontext>`;
    const fb=`<generalfeedback format="html"><text>${cdata(f.a.html+(f.s.html?'<br>'+f.s.html:''))}</text>${fileTags([...f.a.files, ...f.s.files])}</generalfeedback>`;
    const grade=`<defaultgrade>${+(+item.marks||1).toFixed(3)}</defaultgrade><penalty>0</penalty><hidden>0</hidden>`;
    if(f.choices.length){
      out.push(`<question type="multichoice">${name}${qt}${fb}${grade}<single>true</single><shuffleanswers>true</shuffleanswers><answernumbering>ABCD</answernumbering>`+
        f.choices.map(c=>`<answer fraction="${c.ok?100:0}" format="html"><text>${cdata(c.html)}</text></answer>`).join('')+'</question>');
      continue;
    }
    const num=numericAnswer(item.it.a);
    if(num){ out.push(`<question type="numerical">${name}${qt}${fb}${grade}<answer fraction="100"><text>${num.v}</text><tolerance>${num.tol}</tolerance></answer></question>`); continue; }
    out.push(`<question type="essay">${name}${qt}${fb}${grade}<responseformat>editor</responseformat><responserequired>1</responserequired><responsefieldlines>10</responsefieldlines>`+
      `<graderinfo format="html"><text>${cdata(f.a.html+(f.s.html?'<br>'+f.s.html:''))}</text>${fileTags([...f.a.files, ...f.s.files])}</graderinfo></question>`);
  }
  out.push('</quiz>');
  return out.join('\n');
}

export async function blackboardTXT(items){
  const images={n:1, src:(name, png)=>png}, flat=s=>String(s).replace(/[\t\r\n]+/g,' ').trim(), rows=[];
  for(const item of items){
    const f=await fields(item, images);
    if(f.choices.length){ rows.push(['MC', f.q.html, ...f.choices.flatMap(c=>[c.html, c.ok?'correct':'incorrect'])].map(flat).join('\t')); continue; }
    const num=numericAnswer(item.it.a);
    if(num){ rows.push(['NUM', f.q.html, num.v, num.tol||''].map(flat).join('\t')); continue; }
    rows.push(['ESS', f.q.html, f.a.html+(f.s.html?' '+f.s.html:'')].map(flat).join('\t'));
  }
  return rows.join('\r\n')+'\r\n';
}
