const mobileBtn = document.querySelector('.header__mobile-btn');
const mobileNav = document.querySelector('.header__mobile-nav');
const body = document.body;

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('nav-open');
});