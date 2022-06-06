const mobileNav = document.querySelector("#mobile_Nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener('click', ()=>{
    mobileNav.classList.add('show');
    close.classList.add('active');
    open.classList.remove('active')
})

close.addEventListener('click', ()=>{
    mobileNav.classList.remove('show')
    close.classList.remove('active')
    open.classList.add('active')
})