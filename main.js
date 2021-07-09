/*  ***  TOGGLE PARA O MENU *** */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* *** ITENS DO MENU *** */
const links = document.querySelectorAll('#header nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Sombra no header da pagina ao dar scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight //quando esta em uma certa altura do header

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) { //se a janela for maior ou igual a altura do header 
    //maior
    header.classList.add('scroll')
    } else {
    //menor
    header.classList.remove('scroll')
    }
})