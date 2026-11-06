const form=document.getElementById('chat-form');
const input=document.getElementById('prompt');
const messages=document.getElementById('messages');
const send=document.getElementById('send');
const history=[];
function addMessage(text,kind){const el=document.createElement('div');el.className='message '+kind;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight;return el;}
async function ask(text){if(!text.trim()||send.disabled)return;addMessage(text,'user');history.push({role:'user',parts:[{text}]});input.value='';send.disabled=true;send.textContent='…';const pending=addMessage('Thinking…','assistant');try{const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:history.slice(-12)})});const data=await response.json();if(!response.ok)throw new Error(data.error||'The AI request failed.');const answer=data.text||'I could not create a reply.';pending.textContent=answer;history.push({role:'model',parts:[{text:answer}]});}catch(err){pending.textContent=err.message;pending.classList.add('error');history.pop();}finally{send.disabled=false;send.textContent='↑';input.focus();}}
form.addEventListener('submit',e=>{e.preventDefault();ask(input.value);});
document.querySelectorAll('[data-prompt]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.prompt;ask(input.value);}));
input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();form.requestSubmit();}});
