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
console.log(refsPrice.closeBtnPrcL);
console.log(refsPrice.modalPrcL);

refs.body.addEventListener('click', showBackDrop);

function showBackDrop(e) {
  if (e.target.nodeName !== 'BUTTON') {
    console.log(e.target);
    console.log('ЙУХ');
    return;
  }
  if (e.target.nodeName === 'BUTTON') {
    const comper = e.target.dataset.price === 'L';
    console.log(comper);
    console.log('GOOOD');
  }

  if (e.target.textContent === 'Забронювати столик') {
    refs.backdropTable.classList.remove('is-hidden');
    refs.modalTable.classList.remove('is-hidden');
    return;
  }
  if (
    e.target.textContent === 'Забронювати номер' ||
    e.target.textContent === 'Оформити бронювання'
  ) {
    refs.backdropRm.classList.remove('is-hidden');
    refs.modalRoom.classList.remove('is-hidden');
    return;
  }
  if (e.target.dataset.price === 'L') {
    console.log('URA');
  }
}

if (refs.closeBtnTbl) {
  refs.closeBtnTbl.addEventListener('click', closeBackDropTable);
}
if (refs.closeBtnRm) {
  refs.closeBtnRm.addEventListener('click', closeBackDropRm);
}

function closeBackDropRm(e) {
  refs.backdropRm.classList.add('is-hidden');
  refs.modalRoom.classList.add('is-hidden');
}

function closeBackDropTable(e) {
  refs.backdropTable.classList.add('is-hidden');
  refs.modalTable.classList.add('is-hidden');
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
