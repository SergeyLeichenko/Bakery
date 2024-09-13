const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

function toggleModal() {
  modal.classList.toggle('is-hidden')
}

// open modal
modalBtnOpen.forEach((el) => {
  el.addEventListener('click', function() {
    toggleModal()
  })
})

// close modal
modalBtnClose.onclick = function() {
  toggleModal()
}
