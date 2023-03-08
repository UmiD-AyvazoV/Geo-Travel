const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const close = document.querySelector('.nth3');
const firstLine = document.querySelector('.firstLine');
const lastLine = document.querySelector('.lastLine');
const contact = document.querySelector('.contact');
const header = document.querySelector('.header');
const az = document.querySelector('.box1');
const tr = document.querySelector('.box2');
const azUl = document.querySelector('.azUl');
const trUl = document.querySelector('.trUl');
const s1p1 = document.querySelector('.s1p1');
const s1p2 = document.querySelector('.s1p2');
const s2p1 = document.querySelector('.s2p1');
const s2p2 = document.querySelector('.s2p2');
const s2p3 = document.querySelector('.s2p3');
const img2 = document.querySelector('.img2');
const img1 = document.querySelector('.img1');
const img2Text = document.querySelector('.img2 .text');
const img1Text = document.querySelector('.img1 .text');
const left = document.querySelector('.img1 .img');
const right = document.querySelector('.img2 .img');

menu.addEventListener('click', () => {
    nav.classList.toggle('zIndex');
    logo.classList.toggle('fill');
    menu.classList.toggle('on');
    nav.classList.toggle('fixed');
    body.classList.toggle('oh');
    header.classList.toggle('del');
});

menu.addEventListener('mouseover', () => {
  if( !menu.classList.contains('on') ){
    firstLine.classList.add('tlY1');
    lastLine.classList.add('tlY2');
  }
} );

menu.addEventListener('mouseout', () => {
  if( !menu.classList.contains('on') ){
    firstLine.classList.remove('tlY1');
    lastLine.classList.remove('tlY2');
  }
} );

contact.addEventListener('click', () => {
    nav.classList.remove('zIndex');
    logo.classList.remove('fill');
    menu.classList.remove('on');
    nav.classList.remove('fixed');
    body.classList.remove('oh');
    header.classList.toggle('del');
});

const scrollHeader = () => {
      this.scrollY >= 50 ? header.classList.add('bg') : header.classList.remove('bg');
};

window.addEventListener('scroll', scrollHeader);

var swiper = new Swiper(".reference", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    930: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1260: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  loop: true,
  spaceBetween: 30,
});

az.addEventListener('click', () => {
  azUl.classList.toggle('of');
  trUl.classList.toggle('of');
  s1p1.classList.toggle('off');
  s1p2.classList.toggle('off');
  s2p1.classList.toggle('off');
  s2p2.classList.toggle('off');
  s2p3.classList.toggle('off');
  az.classList.toggle('azOf');
  tr.classList.toggle('trOn');
  left.classList.toggle('rotate180');
  right.classList.toggle('rotate180');
  img1.classList.toggle('width230');
  img2.classList.toggle('width230');
  img1Text.classList.toggle('rotate');
  img2.classList.toggle('width400');
  img1.classList.toggle('width400');
  img2Text.classList.toggle('img2Click');
});

tr.addEventListener('click', () => {
  azUl.classList.toggle('of');
  trUl.classList.toggle('of');
  s1p1.classList.toggle('off');
  s1p2.classList.toggle('off');
  s2p1.classList.toggle('off');
  s2p2.classList.toggle('off');
  s2p3.classList.toggle('off');
  az.classList.toggle('azOf');
  tr.classList.toggle('trOn');
  left.classList.toggle('rotate180');
  right.classList.toggle('rotate180');
  img1.classList.toggle('width230');
  img2.classList.toggle('width230');
  img1Text.classList.toggle('rotate');
  img2.classList.toggle('width400');
  img1.classList.toggle('width400');
  img2Text.classList.toggle('img2Click');
});

img2.addEventListener('click', () => {
  azUl.classList.add('of');
  trUl.classList.remove('of');
  s1p1.classList.add('off');
  s1p2.classList.remove('off');
  s2p1.classList.add('off');
  s2p2.classList.add('off');
  s2p3.classList.remove('off');
  az.classList.add('azOf');
  tr.classList.add('trOn');
  img2.classList.add('width400');
  img1.classList.remove('width400');
  img2Text.classList.add('img2Click');
  img1.classList.add('width230');
  img2.classList.remove('width230');
  img1Text.classList.add('rotate');
  left.classList.add('rotate180');
  right.classList.add('rotate180');
});

img1.addEventListener('click', () => {
  azUl.classList.remove('of');
  trUl.classList.add('of');
  s1p1.classList.remove('off');
  s1p2.classList.add('off');
  s2p1.classList.remove('off');
  s2p2.classList.remove('off');
  s2p3.classList.add('off');
  az.classList.remove('azOf');
  tr.classList.remove('trOn');
  img1.classList.add('width400');
  img1.classList.remove('width230');
  img1Text.classList.remove('rotate');
  img2.classList.add('width230');
  img2.classList.remove('width400');
  img2Text.classList.remove('img2Click');
  left.classList.remove('rotate180');
  right.classList.remove('rotate180');
});

$('[data-fancybox]').fancybox({
  loop: true,
});