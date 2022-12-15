const refs = {
  body: document.querySelector('body'),
  backdropTable: document.querySelector('[data-modal-table-in]'),
  modalTable: document.querySelector('.modal-table'),
  closeBtnTbl: document.querySelector('[data-modal-table-close]'),
  backdropRm: document.querySelector('[data-modal-room-in]'),
  closeBtnRm: document.querySelector('[data-modal-room-close]'),
  modalRoom: document.querySelector('.modal-room'),
};

const refsPrice = {
  backdropPrcL: document.querySelector('[data-modal-price-in-l]'),
  // backdropPrcD: document.querySelector('[data-modal-price-in-d]'),
  // backdropPrcT: document.querySelector('[data-modal-price-in-t]'),
  modalPrcL: document.querySelector('[data-modal-price-l]'),
  // modalPrcD: document.querySelector('[data-modal-price-d]'),
  // modalPrcT: document.querySelector('[data-modal-price-t]'),
  closeBtnPrcL: document.querySelector('[data-modal-price-close-l]'),
  // closeBtnPrcD: document.querySelector('[data-modal-price-close-d]'),
  // closeBtnPrcT: document.querySelector('[data-modal-price-close-t]'),
};

console.log(refsPrice.backdropPrcL);
console.log(refsPrice.modalPrcL);
console.log(refsPrice.closeBtnPrcL);

refs.body.addEventListener('click', showBackDrop);

function showBackDrop(e) {
  if (e.target.nodeName !== 'BUTTON') {
    console.log(e.target);
    console.log('ЙУХ');
    return;
  }
  if (e.target.nodeName === 'BUTTON') {
    console.log(e.target.dataset);
    console.log('GOOOD');
  }

  if (e.target.dataset.modalOpen === 'Table') {
    refs.backdropTable.classList.remove('is-hidden');
    refs.modalTable.classList.remove('is-hidden');
    return;
  }
  if (e.target.dataset.modalOpen === 'Room') {
    refs.backdropRm.classList.remove('is-hidden');
    refs.modalRoom.classList.remove('is-hidden');
    return;
  }
  if (e.target.dataset.modalOpen === 'Room-lux') {
    refsPrice.backdropPrcL.classList.remove('is-hidden');
    refsPrice.modalPrcL.classList.remove('is-hidden');
  }
}

if (refs.closeBtnTbl) {
  refs.closeBtnTbl.addEventListener('click', closeBackDropTable);
}
if (refs.closeBtnRm) {
  refs.closeBtnRm.addEventListener('click', closeBackDropRm);
}
if (refsPrice.closeBtnPrcL) {
  refsPrice.closeBtnPrcL.addEventListener('click', closeBackDropPrcL);
}

function closeBackDropTable(e) {
  refs.backdropTable.classList.add('is-hidden');
  refs.modalTable.classList.add('is-hidden');
}

function closeBackDropRm(e) {
  refs.backdropRm.classList.add('is-hidden');
  refs.modalRoom.classList.add('is-hidden');
}
function closeBackDropPrcL(e) {
  refsPrice.backdropPrcL.classList.add('is-hidden');
  refsPrice.modalPrcL.classList.add('is-hidden');
}

// if (refs.closeBtnPrcL) {
//   refs.closeBtnPrcL.addEventListener('click', closeBackDropPrcL);
// }

// console.log(
//   e.target.className === 'adult-third__button button' &&
//     e.target.textContent === 'Переглянути ціни'
// );

// if (
//   e.target.className === 'adult-third__button button' &&
//   e.target.textContent === 'Переглянути ціни'
// ) {
//   refs.backdropPrcL.classList.remove('is-hidden');
//   refs.modalPrcL.classList.remove('is-hidden');
//   return;
// }
