
      var swiper2 = new Swiper(".mySwiper", {
     loop: true,
  // slidesPerView: 3,
  //         spaceBetween: 20,

        navigation: {
          nextEl: ".hotel-button-next",
          prevEl: ".hotel-button-prev",
         
        },

        breakpoints: {
            414: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 34,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 86,
            },
        },
      });
