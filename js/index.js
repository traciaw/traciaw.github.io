const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav = document.getElementById('nav-link')
//show when burger clicked
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
//close when X clicked
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}