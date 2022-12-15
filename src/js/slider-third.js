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
    nextEl: '.restaurant-detailes__swiper-button-next',
    prevEl: '.restaurant-detailes__swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      width: 375,
    },
      // when window width is >= 480px
    1024: {
      slidesPerView: 2.6,
      spaceBetween: 34,
      width: 662,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.6,
      spaceBetween: 86,
      width: 874,
    },
  },
});
const swiper12 = new Swiper('.hotel-details__swiper', {
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
    nextEl: '.hotel-details__swiper-button-next',
    prevEl: '.hotel-details__swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      width: 374,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2.6,
      spaceBetween: 34,
      width: 662,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.6,
      spaceBetween: 86,
      width: 874,
    },
  },
});





