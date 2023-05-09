const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header__box');
const logotextEl = document.querySelector('.logo__text');
const toggleEl = document.querySelector('#toggle');
const registrEl=document.querySelector('.register')
toggleEl.addEventListener('click', onclickToggleEl);

function onclickToggleEl(event) {
    console.log(event.currentTarget)
    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logotextEl.classList.toggle('dark__icon')
    registrEl.classList.toggle('dark-theme');
}
