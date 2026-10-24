(function(){
var m=document.querySelector('.menu'),n=document.getElementById('links');
m.addEventListener('click',function(){var o=m.getAttribute('aria-expanded')==='true';m.setAttribute('aria-expanded',!o);n.classList.toggle('open',!o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){m.setAttribute('aria-expanded','false');n.classList.remove('open')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){m.setAttribute('aria-expanded','false');n.classList.remove('open')}});
document.getElementById('y').textContent=new Date().getFullYear();
})();
