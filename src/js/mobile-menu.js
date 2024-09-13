const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

function toggleMenu() {
  mobileMenu.classList.toggle('is-open');
}

function disableScroll() {
  document.body.classList.toggle('is-scroll-disabled');
}

// open mobile menu
menuBtnOpen.onclick = function() {
  toggleMenu()
  disableScroll()
}

// close mobile menu
menuBtnClose.onclick = function() {
  toggleMenu()
  disableScroll()
}
