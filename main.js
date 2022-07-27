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

mobileLinks = document.querySelectorAll(".mobile-link");
Array.from(mobileLinks).forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault();
    menuNavMobile.classList.toggle("show");
    body.classList.toggle('show');
    headline.classList.toggle('show');
    menuBar.classList.toggle('show');
  });
});``
