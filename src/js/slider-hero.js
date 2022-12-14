const swiper7 = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  freeMode: false,
  // slidesPerView: 1,
  initialSlide: 1.5,
  slidesPerView: 1,
  // centeredSlides: true,
  navigation: {
    nextEl: '.hero-room__swiper-button-next',
    prevEl: '.hero-room__swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 0,
      width: 0,
    },
    // when window width is >= 480px
    1280: {
      spaceBetween: 0,
      width: 0,
    },
  },
});
