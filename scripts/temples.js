const mainnav = document.querySelector('.links');
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})
const localtime = document.querySelector('#localtime');
const localdate = document.querySelector('#localdate');
let now = new Date();
localtime.innerText = now.toLocaleTimeString();
localdate.innerText = now.toLocaleDateString();