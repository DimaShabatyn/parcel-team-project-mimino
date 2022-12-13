const refs = {
  body: document.querySelector('body'),
  backdropTable: document.querySelector('[data-modal-table-in]'),
  backdropRm: document.querySelector('[data-modal-room-in]'),
  modalTable: document.querySelector('.modal-table'),
  modalRoom: document.querySelector('.modal-room'),
  closeBtnTbl: document.querySelector('[data-modal-table-close]'),
  closeBtnRm: document.querySelector('[data-modal-room-close]'),
};
console.log(refs.closeBtnTbl, refs.closeBtnRm);

refs.body.addEventListener('click', showBackDrop);
function showBackDrop(e) {
  if (e.target.nodeName !== 'BUTTON') {
    console.log(e.target.nodeName);
    console.log('bad day');

    return;
  }
  if (e.target.textContent === 'Забронювати столик') {
    refs.backdropTable.classList.remove('is-hidden');
    refs.modalTable.classList.remove('is-hidden');
  }
  if (e.target.textContent === 'Забронювати номер') {
    refs.backdropRm.classList.remove('is-hidden');
    refs.modalRoom.classList.remove('is-hidden');
  }
}

if (refs.closeBtnTbl) {
  refs.closeBtnTbl.addEventListener('click', closeBackDropTable);
}
if (refs.closeBtnRm) {
  refs.closeBtnRm.addEventListener('click', closeBackDropRm);
}

function closeBackDropTable(e) {
  refs.backdropTable.classList.add('is-hidden');
  refs.modalTable.classList.add('is-hidden');
}

function closeBackDropRm(e) {
  refs.backdropRm.classList.add('is-hidden');
  refs.modalRoom.classList.add('is-hidden');
}
