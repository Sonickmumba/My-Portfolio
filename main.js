const menuNavMobile = document.querySelector('.menu-nav-mobile');
const menuBar = document.querySelector('.menu-nav-mobile #menu');
const headline = document.querySelector('.headline-section');
const body = document.querySelector('body');

menuBar.addEventListener('click', () => {
  menuNavMobile.classList.toggle('show');
  body.classList.toggle('show');
  headline.classList.toggle('show');
  menuBar.classList.toggle('show');
});

const mobileLinks = document.querySelectorAll('.mobile-link a');
Array.from(mobileLinks).forEach((link) => {
  link.addEventListener('click', () => {
    menuNavMobile.classList.remove('show');
    body.classList.remove('show');
    headline.classList.remove('show');
    menuBar.classList.remove('show');
  });
});
