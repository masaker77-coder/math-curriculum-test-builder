/* Loaded first, as a plain script written for old browsers (ES5): small polyfills for the few newer built-ins the
   program uses, and a safety net — if the program cannot start (an old browser, or a viewer such as WhatsApp's
   preview or Android's “HTML Viewer” that does not run programs), a note explains how to open the file properly. */
(function(){
  if(!Array.prototype.flat) Array.prototype.flat=function(depth){ var d=depth===undefined?1:depth, out=[];
    (function f(a,k){ for(var i=0;i<a.length;i++){ if(Array.isArray(a[i])&&k>0) f(a[i],k-1); else out.push(a[i]); } })(this,d); return out; };
  if(!Array.prototype.flatMap) Array.prototype.flatMap=function(fn,self){ return Array.prototype.map.call(this,fn,self).flat(1); };
  if(!Object.fromEntries) Object.fromEntries=function(it){ var o={}; Array.from(it).forEach(function(p){ o[p[0]]=p[1]; }); return o; };
  if(!String.prototype.matchAll) String.prototype.matchAll=function(re){
    var r=new RegExp(re.source, re.flags.indexOf('g')<0?re.flags+'g':re.flags), s=String(this), out=[], m;
    while((m=r.exec(s))!==null){ out.push(m); if(m[0]==='') r.lastIndex++; } return out[Symbol.iterator](); };
  window.__booted=false;
  function showNote(msg){
    var n=document.getElementById('bootNote'); if(!n){ document.addEventListener('DOMContentLoaded', function(){ showNote(msg); }); return; }
    n.hidden=false; var e=n.querySelector('.boot-err'); if(e && msg) e.textContent=msg;
  }
  window.addEventListener('error', function(ev){ if(!window.__booted) showNote(ev && ev.message ? ev.message : ''); });
  window.__bootFail=showNote;
})();
