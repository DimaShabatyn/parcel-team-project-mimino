const swiper = new Swiper('.slider', {
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  slideClass: 'slide',
  wrapperClass: 'slider-wrap',
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
