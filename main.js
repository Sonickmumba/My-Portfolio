const menuNavMobile = document.querySelector('.menu-nav-mobile');
const menuBar = document.querySelector('.menu-nav-mobile #menu');
const headline = document.querySelector('.headline-section');
const body = document.querySelector('body');

menuBar.addEventListener('click', (e) => {
  e.preventDefault();
  menuNavMobile.classList.toggle('show');
  body.classList.toggle('show');
  headline.classList.toggle('show');
  menuBar.classList.toggle('show');
});

const mobileLinks = document.querySelectorAll('.mobile-link');
Array.from(mobileLinks).forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    menuNavMobile.classList.toggle('show');
    body.classList.toggle('show');
    headline.classList.toggle('show');
    menuBar.classList.toggle('show');
  });
});
