const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';navigation.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
const applications = {
knowledge:{number:'01',title:'Make knowledge<br>easier to find.',text:'Explore an assistant that helps people navigate approved internal documents, with source references and clear access boundaries.',flow:['Your knowledge','AI assistance','Human insight'],guardrail:'access control, source quality and human review'},
workflows:{number:'02',title:'Make room for<br>higher-value work.',text:'Explore AI-assisted document triage, summarisation and draft preparation, with people reviewing outputs before action is taken.',flow:['Incoming work','AI preparation','Human approval'],guardrail:'clear permissions, exception handling and review checkpoints'},
decisions:{number:'03',title:'Bring context<br>to the conversation.',text:'Explore ways to summarise information and highlight patterns, helping people investigate options before making a decision.',flow:['Relevant data','AI synthesis','Human decision'],guardrail:'data quality, uncertainty and accountable decisions'}
};
document.querySelectorAll('.ai-option').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.ai-option').forEach(item=>{const selected=item===button;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected));});const data=applications[button.dataset.ai];document.querySelector('#ai-content').innerHTML=`<span class="mini-label">ILLUSTRATIVE APPLICATION / ${data.number}</span><h3>${data.title}</h3><p>${data.text}</p><div class="flow">${data.flow.map(label=>`<span>${label}</span>`).join('<b aria-hidden="true">→</b>')}</div><p class="guardrail">Designed around: ${data.guardrail}.</p>`;}));
document.querySelector('#year').textContent=new Date().getFullYear();
// Hide the fallback navigation only after its controls have been wired up.
document.documentElement.classList.add('navigation-ready');
