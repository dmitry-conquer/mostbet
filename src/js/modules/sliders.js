import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function initSliders() {
  if (document.querySelector('.slider-hero')) {
    new Swiper('.slider-hero', {
      modules: [Pagination, Autoplay],
      wrapperClass: 'slider-hero__wrapper',
      slideClass: 'slide-hero',
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.slider-hero__pagination',
        clickable: true,
      },
    });
  }

  if (document.querySelector('.slider-games')) {
    new Swiper('.slider-games', {
      modules: [Navigation],
      wrapperClass: 'slider-games__wrapper',
      slideClass: 'slider-games__slide',
      slidesPerView: 6,
      spaceBetween: 20,
      speed: 1200,
      // loop: true,
      navigation: {},
    });
  }
}
