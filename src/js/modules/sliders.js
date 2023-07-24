import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function useSliders() {
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
 

  const gamesSliders = document.querySelectorAll('.slider-games');
  if (document.querySelector('.slider-games')) {
    gamesSliders.forEach(slider => {
      new Swiper(slider, {
        modules: [Navigation],
        wrapperClass: 'slider-games__wrapper',
        slideClass: 'slider-games__slide',
        slidesPerView: 2.3,
        spaceBetween: 10,
        speed: 1200,
        // loop: true,
        navigation: {
          prevEl: slider.querySelector('.slider-button_prev'),
          nextEl: slider.querySelector('.slider-button_next'),
        },
        breakpoints: {
          420: {
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1115: {
            slidesPerView: 4,
          },
          1320: {
            slidesPerView: 5,
          },
          1535: {
            slidesPerView: 6,
          },
          1742: {
            slidesPerView: 7,
          },
        },
      });
    });
  }
}
