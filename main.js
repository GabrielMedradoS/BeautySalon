/*  ***  TOGGLE PARA O MENU *** */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* *** ITENS DO MENU *** */
const links = document.querySelectorAll("#header nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* Back to top  */
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* Sombra no header da pagina ao dar scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight; //quando esta em uma certa altura do header

  if (window.scrollY >= navHeight) {
    //se a janela for maior ou igual a altura do header
    //maior
    header.classList.add("scroll");
  } else {
    //menor
    header.classList.remove("scroll");
  }
}

/* Marcar o header ao scrollar a pagina */
const sections = document.querySelectorAll("main section[id]");
function activateAtCurrentSection() {
  // ir testando os melhores valores
  const checkpoint =
    window.pageYOffset +
    (window.innerHeight / 8) *
      4; /* separei a pagina em 8 parte e peguei 1/4 da pagina  */

  for (const section of sections) {
    /* DIFF DE ALTURA entre cada section  */
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  backToTop();
  changeHeaderWhenScroll();
  activateAtCurrentSection();
});

/* testimonials swiper */
const swiper = new Swiper(".swiper-container", {
  slidePerView: 1 /* exibi??ao de 1 slide */,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true /* roda do mouse */,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scrollreveal: Mostrar elementos na pagina
/* const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,  // milisegundos 
    reset: true // quando chegar no final da pagina a anima??ao volta
})
// nao pode ter virgula no testimonials 
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    #footer .brand, #footer .social`,
    { interval: 100 } 
) */
