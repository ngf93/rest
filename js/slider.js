const swiper1 = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

const swiper2 = new Swiper('.swiper-2', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});