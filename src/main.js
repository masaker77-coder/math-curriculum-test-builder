import { init } from './ui.js';
init();
window.__booted=true;                                    // the program started: the safety note in compat.js stays hidden

/* installable app (PWA): works offline once opened, only when served as a site of its own (not inside a frame) */
const isTop = (() => { try{ return window.self===window.top; }catch(e){ return false; } })();
if('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && isTop)
  navigator.serviceWorker.register('sw.js').catch(()=>{});
let installEvt=null;
window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); installEvt=e; const b=document.getElementById('installBtn'); if(b) b.hidden=false; });
const installBtn=document.getElementById('installBtn');
if(installBtn) installBtn.addEventListener('click', async ()=>{
  if(!installEvt) return; installEvt.prompt(); await installEvt.userChoice.catch(()=>{}); installEvt=null; document.getElementById('installBtn').hidden=true;
});
