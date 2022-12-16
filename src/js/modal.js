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
  backdropPrcT: document.querySelector('[data-modal-price-in-t]'),
  backdropPrcD: document.querySelector('[data-modal-price-in-d]'),
  modalPrcL: document.querySelector('[data-modal-price-l]'),
  modalPrcT: document.querySelector('[data-modal-price-t]'),
  modalPrcD: document.querySelector('[data-modal-price-d]'),
  closeBtnPrcL: document.querySelector('[data-modal-price-close-l]'),
  closeBtnPrcT: document.querySelector('[data-modal-price-close-t]'),
  closeBtnPrcD: document.querySelector('[data-modal-price-close-d]'),
};

refs.body.addEventListener('click', showBackDrop);

function showBackDrop(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.nodeName === 'BUTTON') {
    console.log(e.target);
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
  if (e.target.dataset.modalOpen === 'Room-triple') {
    refsPrice.backdropPrcT.classList.remove('is-hidden');
    refsPrice.modalPrcT.classList.remove('is-hidden');
  }
  if (e.target.dataset.modalOpen === 'Room-double') {
    refsPrice.backdropPrcD.classList.remove('is-hidden');
    refsPrice.modalPrcD.classList.remove('is-hidden');
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
if (refsPrice.closeBtnPrcT) {
  refsPrice.closeBtnPrcT.addEventListener('click', closeBackDropPrcT);
}
if (refsPrice.closeBtnPrcD) {
  refsPrice.closeBtnPrcD.addEventListener('click', closeBackDropPrcD);
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
function closeBackDropPrcT(e) {
  refsPrice.backdropPrcT.classList.add('is-hidden');
  refsPrice.modalPrcT.classList.add('is-hidden');
}
function closeBackDropPrcD(e) {
  refsPrice.backdropPrcD.classList.add('is-hidden');
  refsPrice.modalPrcD.classList.add('is-hidden');
}
