<<<<<<< HEAD































const swiper4 = new Swiper('.swiper', {
=======
const swiper3 = new Swiper('.swiper', {
>>>>>>> main
  // Default parameters
  loop: true,
  freeMode: true,
  // slidesPerView: 1,
  initialSlide: 0,
<<<<<<< HEAD
  // slidesPerView: 2,
=======
  slidesPerView: 2,
>>>>>>> main
  // centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
<<<<<<< HEAD
      spaceBetween: 25,
      slidesPerView: 1.315,
      // width: 533,
      width: 330,
=======
      spaceBetween: 16,
      width: 404,
>>>>>>> main
    },
    // when window width is >= 480px
    1024: {
      spaceBetween: 40,
<<<<<<< HEAD
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
=======
      width: 428,
    },
    1280: {
      spaceBetween: 40,
      width: 548,
    },
  },
>>>>>>> main
});
