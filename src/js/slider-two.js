
const swiper4 = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
  slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 25,
      width: 330,
    },
    // when window width is >= 480px
    1024: {
      spaceBetween: 40,
      width: 548,
    },
  },
});
