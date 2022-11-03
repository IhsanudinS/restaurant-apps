/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const menu = document.querySelector('.nav__list');
const menuItems = document.querySelectorAll('.nav__item');
const hamburger = document.querySelector('.header__menu');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.fa');

toggleMenu = () => {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
};

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  humbergerClose = (nav__item) => {
    nav__item.addEventListener('click', () => {
      menu.classList.remove('showMenu');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    });
  },
);
