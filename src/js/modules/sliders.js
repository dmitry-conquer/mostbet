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

  const cardsSliders = document.querySelectorAll('.slider-card');
  if (document.querySelector('.slider-card')) {
    cardsSliders.forEach(slider => {
      new Swiper(slider, {
        modules: [Navigation],
        wrapperClass: 'slider-card__wrapper',
        slideClass: 'slider-card__slide',
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed: 1200,
        loop: true,
        navigation: {
          prevEl: slider.querySelector('.slider-button_prev'),
          nextEl: slider.querySelector('.slider-button_next'),
        },
        breakpoints: {
          557: {
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
          },
          1350: {
            slidesPerView: 3,
          },
        },
      });
    });
  }

  const groupSliders = document.querySelectorAll('.slider-group');
  if (document.querySelector('.slider-group')) {
    groupSliders.forEach(slider => {
      new Swiper(slider, {
        modules: [Navigation],
        wrapperClass: 'slider-group__wrapper',
        slideClass: 'slider-group__slide',
        slidesPerView: 1.2,
        spaceBetween: 10,
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
          630: {
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

  if (document.querySelector('.slider-single')) {
    new Swiper('.slider-single', {
      modules: [Navigation],
      wrapperClass: 'slider-single__wrapper',
      slideClass: 'slider-games__slide',
      slidesPerView: 1.2,
      spaceBetween: 10,
      speed: 1200,
      // loop: true,
      navigation: {
        prevEl: '.slider-button_prev',
        nextEl: '.slider-button_next',
      },
      breakpoints: {
        420: {
          slidesPerView: 2,
        },
        630: {
          slidesPerView: 3,
        },
        1115: {
          slidesPerView: 4,
        },
        1320: {
          slidesPerView: 5,
        },
      },
    });
  }
}
