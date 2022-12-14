const swiper5 = new Swiper('.restaurant-detailes__swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  spaceBetween: 20,
  initialSlide: 0,
  slidesPerView: 3,
  // slidePerGroup: 3,
  // width: 881,
  centeredSlides: true,
  centeredSlidesBounds: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    //   // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      width: 374,
    },
    //   // when window width is >= 480px
    1024: {
      slidesPerView: 2.6,
      spaceBetween: 34,
      width: 662,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.6,
      spaceBetween: 86,
      width: 875,
    },
  },
});
