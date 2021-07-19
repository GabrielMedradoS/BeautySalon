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

/* testimonials swiper */
const swiper = new Swiper('.swiper-container', {
    slidePerView: 1, /* exibiçao de 1 slide */ 
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true, /* roda do mouse */
    keyboard: true
})

/* Scrollreveal: Mostrar elementos na pagina */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,  /* milisegundos */
    reset: true /* quando chegar no final da pagina a animaçao volta */
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links`,
    { interval: 100 } 
)