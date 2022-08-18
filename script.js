'use strict';

const Modal = document.querySelectorAll('.show-modal');
const modalHidden = document.querySelector('.modal');
const overlayHidden = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');
//console.log(Modal);

const openModal = function () {
  modalHidden.classList.remove('hidden');
  overlayHidden.classList.remove('hidden');
  console.log('Hello');
};
const closeModal = function () {
  modalHidden.classList.add('hidden');
  overlayHidden.classList.add('hidden');
};
for (let i = 0; i < Modal.length; i++) {
  //console.log(i);
  Modal[i].addEventListener('click', openModal);
}
closebtn.addEventListener('click', closeModal);

overlayHidden.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modalHidden.classList.contains('hidden')) {
    closeModal();
  }
});
