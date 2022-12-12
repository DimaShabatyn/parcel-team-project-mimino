// // const swiper1 = new Swiper('.swiper', {
// //   setWrapperSize: true,
// //   loop: true,
// //   width: 194,
// //   spaceBetween: 16,
// //   slidesPerView: 1,
// //   slidesPerGroup: 1,
// //   initialSlide: 0,
// //   freeMode: true,
// //   // slidesOffsetAfter: 0,
// //   // slidesOffsetBefore: 0,
// //   createElements: true,

// //   // breakpoints: {
// //   //   1024: {
// //   //     slidesPerView: 2,
// //   //   },
// //   // },

// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },

// //   scrollbar: {
// //     el: '.swiper-scrollbar',
// //     enabled: false,
// //   },
// // });

// const swiper1 = new Swiper('.swiper', {
//   // speed: 400,
//   initialSlide: 0,

//   centeredSlides: true,
//   spaceBetween: 16,
//   loop: true,
//   // slidesShadow: true,
//   // shadowOffset: 60,
//   // shadowScale: 2,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1.3,
//       spaceBetween: 16,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//   },
// });

const swiper1 = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  freeMode: true,
  slidesPerView: 1,
  initialSlide: 0,
  centeredSlides: false,
  spaceBetween: 16,
  width: 420,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
