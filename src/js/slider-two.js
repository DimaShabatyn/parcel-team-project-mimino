
const swiper4 = new Swiper('.restaurant-about__swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
  slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    nextEl: '.restaurant-about__btn-prev',
    prevEl: '.restaurant-about__btn-nex',
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
