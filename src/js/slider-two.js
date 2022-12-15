const swiper3 = new Swiper('.adult-third__swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
  slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    nextEl: '.adult-third__button-next',
    prevEl: '.adult-third__button-prev',
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
// restaurant__swiper
const swiper4 = new Swiper('.restaurant__swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
  // slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    nextEl: '.restaurant__button-next',
    prevEl: '.restaurant__button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 25,
      slidesPerView: 1.315,
      // width: 533,
      width: 330,
    },
    // when window width is >= 480px
    1024: {
      spaceBetween: 40,
      slidesPerView: 2,
      width: 428,
    },
    // when window width is >= 480px
    1280: {
      spaceBetween: 40,
      width: 548,
      slidesPerView: 2,
    },
  },
});
// kitchen
const swiper11 = new Swiper('.kitchen__swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
  // slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    nextEl: '.kitchen__button-next',
    prevEl: '.kitchen__button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 25,
      slidesPerView: 1.315,
      // width: 533,
      width: 330,
    },
    // when window width is >= 480px
    1024: {
      spaceBetween: 40,
      slidesPerView: 2,
      width: 428,
    },
    // when window width is >= 480px
    1280: {
      spaceBetween: 40,
      width: 530,
      slidesPerView: 2,
    },
  },
});
// slider adult-lux
const swiper10 = new Swiper('.slider', {
  autoHeight: true,
  freeMode: true,
  slidesPerView: 2,
  spaceBetween: 16,
  initialSlide: 0,
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
