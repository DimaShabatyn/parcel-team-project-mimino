const swiper7 = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  freeMode: false,
  initialSlide: 0,
  slidesPerView: auto,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.hero-room__swiper-button-next',
    prevEl: '.hero-room__swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 0,
      width: 414,
    },
    1024: {
      spaceBetween: 0,
      width: 1024,
    },
    // when window width is >= 480px
    1280: {
      spaceBetween: 0,
      width: 1280,
    },
  },
});
