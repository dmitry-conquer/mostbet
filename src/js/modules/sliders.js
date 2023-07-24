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
        slidesPerView: 1.3,
        spaceBetween: 20,
        speed: 1200,
        // loop: true,
        navigation: {
          prevEl: slider.querySelector('.slider-button_prev'),
          nextEl: slider.querySelector('.slider-button_next'),
        },
        breakpoints: {
          420: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.8,
          },
          876: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
          1350: {
            slidesPerView: 5,
          },
          1530: {
            slidesPerView: 6,
          },
        },
      });
    });
  }
}
