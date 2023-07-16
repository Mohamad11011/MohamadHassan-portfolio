/* START ON SCROLL ADD CLASS */
jQuery(window).scroll(function () {
 // var scroll = jQuery(window).scrollTop();

  // if (scroll >= 100) {
  //     jQuery("body").addClass("fixed");
  // } else {
  //     jQuery("body").removeClass("fixed");
  // }
});
/* END ON SCROLL ADD CLASS */

/* START GRADIENT TAB SLIDER SEC CODE */
var GredTabswiper = new Swiper(".news_tab_swiper", {
  loop: 'true',
  observer: true,
  pagination: {
      el: ".swiper-pagination-news",
      type: "progressbar",
  },

  navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news",
  },
  breakpoints: {
      0: {
          spaceBetween: 9,
          slidesPerView: 2,
      },
      768: {
          spaceBetween: 18,
          slidesPerView: 3,
      },
      980: {
          spaceBetween: 18,
          slidesPerView: 6,
      },
  },
});

/* BREAKING NEWS SWIPER */
var breakingSwiper = new Swiper(".breaking-swiper", {
  loop: true,
  grabCursor: true,
  preventClicksPropagation: false,
  breakpoints: {
      0: {
          slidesPerView: 1.2,
          spaceBetween: 10
      },
      480: {
          slidesPerView: 1.5,
          spaceBetween: 10
      },
      640: {
          slidesPerView: 2.5,
          spaceBetween: 10
      }
  },
  autoplay: {
      delay: 3000,
  },
  preventClicks: true,
  preventClicksPropagation: true,
  centeredSlides: false,
  watchSlidesVisibility: true,
  observer: true,
  loop: false,
  initialSlide: 0,
  preloadImages: false,
  touchMoveStopPropagation: false,
  lazy: true,
  slidesPerView: 'auto',
  on: {
      init: function () {
          console.log('swiper init');
      },
      click: function (swiper, e) {
          console.log('swiper click');
      },
      tap: function (swiper, e) {
          console.log('swiper tap');
      },
      touchStart: function (swiper, e) {
          console.log('swiper touchStart');
          e.preventDefault();
      },
      touchMove: function (swiper, e) {
          console.log('swiper touchMove');
      },
      touchEnd: function (swiper, e) {
          console.log('swiper touchEnd');
      },
      observerUpdate: function (swiper, e) {
          console.log('swiper observerUpdate');
      },
  }
});

var swiperCustom = new Swiper(".news_tab_swiper", {
    effect:"creative",
    creativeEffect:{
        prev:{
            shadow:true,
            translate:[0,0,-800],
            rotate:[180,0,0],
        },
        next:{
            shadow:true,
            translate:[0,0,-800],
            rotate:[-180,0,0],
        }
    },
    navigation: {
        nextEl: ".swiper-button-next-slide",
        prevEl: ".swiper-button-prev-slide",
    },
  });