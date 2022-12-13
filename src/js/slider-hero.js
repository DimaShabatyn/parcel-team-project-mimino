const swiper7 = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  freeMode: false,
  // slidesPerView: 1,
  initialSlide: 0,
  slidesPerView: 1,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 0,
      width: 1024,
    },
    // when window width is >= 480px
    1024: {
      spaceBetween: 0,
      width: 1024,
    },
  },
});
