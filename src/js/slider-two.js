const swiper = new Swiper('.swiper', {
  loop: true,
  width: 194,
  spaceBetween: 16,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  freeMode: true,
  // slidesOffsetAfter: 0,
  // slidesOffsetBefore: 0,
  createElements: true,

  // breakpoints: {
  //   1024: {
  //     slidesPerView: 2,
  //   },
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    enabled: false,
  },
});
