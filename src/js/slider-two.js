const swiper10 = new Swiper('.slider', {
  autoHeight: true,
  freeMode: true,
  slidesPerView: 2,
  spaceBetween: 16,
  initialSlide: 0,
  // slidesWidth: 194,
  loop: true,
  slideClass: 'slide',
  wrapperClass: 'slider-wrap',
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
      width: 404,
    },
    1024: {
      spaceBetween: 40,
      width: 428,
    },
    1280: {
      spaceBetween: 40,
      width: 548,
    },
  },
});

const swiper3 = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
  slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 16,
      width: 404,
    },
    // when window width is >= 480px
    1024: {
      spaceBetween: 40,
      width: 428,
    },
    1280: {
      spaceBetween: 40,
      width: 548,
    },
  },
});
