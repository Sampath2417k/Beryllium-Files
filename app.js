(function(){
"use strict";
var S=window.SITE,app=document.getElementById("app"),tabs=document.getElementById("tabs"),q=document.getElementById("q"),th=document.getElementById("theme");
var NAV=[["roms","ROMs"],["kernels","Kernels"],["recovery","Recovery"],["root","Root"],["firmware","Firmware"],["guides","Guides"]];
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function safe(u){return /^https?:\/\//i.test(u||"")?u:""}
function host(u){try{return new URL(u).hostname.replace(/^www\./,"")}catch(e){return""}}
function list(a,cls){return a&&a.length?"<ul class='"+(cls||"")+"'>"+a.map(function(x){return"<li>"+esc(x)+"</li>"}).join("")+"</ul>":""}
function row(i){
  var u=safe(i.url),d=[i.date,i.android&&"Android "+i.android,i.size,i.by&&"by "+i.by].filter(Boolean).map(esc).join(" · ");
  var more=(i.changelog&&i.changelog.length)||(i.bugs&&i.bugs.length)||(i.fixed&&i.fixed.length)||i.sha256;
  return"<article class='row'><div><h3>"+esc(i.name)+" "+(i.status?"<span class='tag'>"+esc(i.status)+"</span>":"")+"</h3><div class='meta'>"+d+"</div>"+(i.note?"<div>"+esc(i.note)+"</div>":"")+"</div>"+
  "<div class='act'>"+(u?"<a class='btn' href='"+esc(u)+"' target='_blank' rel='noopener noreferrer'>Download</a><span class='tag'>"+esc(host(u))+"</span>":"<span class='btn soon'>Soon</span>")+
  (i.guide?"<a class='btn ghost' href='#/guides/"+esc(i.guide)+"'>Guide</a>":"")+"</div>"+
  (more?"<details><summary>Details</summary>"+(i.changelog&&i.changelog.length?"<b>Changelog</b>"+list(i.changelog):"")+(i.fixed&&i.fixed.length?"<b>Fixed</b>"+list(i.fixed,"fix"):"")+(i.bugs&&i.bugs.length?"<b>Known bugs</b>"+list(i.bugs,"bug"):"")+(i.sha256?"<div><b>SHA256</b> <code>"+esc(i.sha256)+"</code> <button class='btn ghost' data-copy='"+esc(i.sha256)+"'>Copy</button></div>":"")+"</details>":"")+"</article>";
}
function groups(key){
  var out=(S[key]||[]).map(function(g){
    var it=(g.items||[]).slice().sort(function(a,b){return String(b.date||"").localeCompare(String(a.date||""))});
    return"<h2>"+esc(g.title)+"</h2>"+(it.length?it.map(row).join(""):"<p class='empty'>Nothing here yet.</p>");
  });
  return out.join("");
}
function home(){
  var latest=[];NAV.slice(0,5).forEach(function(n){(S[n[0]]||[]).forEach(function(g){(g.items||[]).forEach(function(i){latest.push(i)})})});
  latest.sort(function(a,b){return String(b.date||"").localeCompare(String(a.date||""))});
  return"<section class='hero'><h1>beryllium</h1><p>"+esc(S.intro)+"</p><div class='chips'>"+S.specs.map(function(x){return"<span>"+esc(x)+"</span>"}).join("")+"</div></section>"+
  "<div class='warn'>"+esc(S.disclaimer)+"</div><h2>Latest uploads</h2>"+latest.slice(0,6).map(row).join("");
}
function guide(slug){
  var g=(S.guides||[]).filter(function(x){return x.slug===slug})[0];
  if(!g)return"<p class='empty'>Guide not found. <a href='#/guides'>All guides</a></p>";
  var n=0;
  return"<article class='guide'><p><a href='#/guides'>All guides</a></p><h2>"+esc(g.title)+"</h2>"+(g.warning?"<div class='warn'>"+esc(g.warning)+"</div>":"")+
  "<ol>"+g.steps.map(function(s){
    if(typeof s==="string")return"<li>"+esc(s)+"</li>";
    if(s.code)return"</ol><pre><code>"+esc(s.code)+"</code></pre><button class='btn ghost' data-copy='"+esc(s.code)+"'>Copy</button><ol start='"+(++n+1)+"'>";
    if(s.note)return"</ol><div class='note'>"+esc(s.note)+"</div><ol>";
    return"";}).join("")+"</ol></article>";
}
function search(t){
  t=t.toLowerCase();var h="";
  NAV.slice(0,5).forEach(function(n){(S[n[0]]||[]).forEach(function(g){(g.items||[]).forEach(function(i){
    if(JSON.stringify(i).toLowerCase().indexOf(t)>-1)h+=row(i)})})});
  (S.guides||[]).forEach(function(g){if(JSON.stringify(g).toLowerCase().indexOf(t)>-1)h+="<article class='row'><div><h3>"+esc(g.title)+"</h3><div class='meta'>Guide</div></div><div class='act'><a class='btn ghost' href='#/guides/"+esc(g.slug)+"'>Open</a></div></article>"});
  return"<h2>Results for “"+esc(t)+"”</h2>"+(h||"<p class='empty'>No matches. Try a shorter word.</p>");
}
function render(){
  var p=location.hash.replace(/^#\/?/,"").split("/"),k=p[0]||"",t=q.value.trim();
  tabs.innerHTML=NAV.map(function(n){return"<a href='#/"+n[0]+"'"+(n[0]===k?" aria-current='page'":"")+">"+n[1]+"</a>"}).join("");
  if(t){app.innerHTML=search(t);return}
  if(!k)app.innerHTML=home();
  else if(k==="guides"&&p[1])app.innerHTML=guide(p[1]);
  else if(k==="guides")app.innerHTML="<h2>Guides</h2>"+(S.guides||[]).map(function(g){return"<article class='row'><div><h3>"+esc(g.title)+"</h3></div><div class='act'><a class='btn ghost' href='#/guides/"+esc(g.slug)+"'>Open</a></div></article>"}).join("");
  else if(S[k])app.innerHTML=groups(k);
  else app.innerHTML="<p class='empty'>Page not found. <a href='#/'>Home</a></p>";
  document.title=S.title;
}
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-copy]");if(!b)return;
  var v=b.getAttribute("data-copy"),o=b.textContent;
  (navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(function(){b.textContent="Copied"},function(){b.textContent="Copy failed"});
  setTimeout(function(){b.textContent=o},1200);
});
document.addEventListener("keydown",function(e){if(e.key==="/"&&document.activeElement!==q){e.preventDefault();q.focus()}});
q.addEventListener("input",render);window.addEventListener("hashchange",function(){q.value="";render()});
th.value=document.documentElement.dataset.theme;
th.addEventListener("change",function(){document.documentElement.dataset.theme=th.value;try{localStorage.setItem("bf-theme",th.value)}catch(e){}});
document.getElementById("foot").innerHTML="Unofficial community project, not affiliated with Xiaomi or POCO. <a href='"+esc(S.github)+"' rel='noopener noreferrer'>GitHub</a>";
render();
})();
