import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// Slider init function
export function initSliders() {
  //  Sliders list
  if (document.querySelector('.slider-hero')) {
    new Swiper('.slider-hero', {
      // Сonnect modules (P.S dont forget !import scss styles)
      modules: [Pagination, Autoplay],

      // Custom classes
      wrapperClass: 'slider-hero__wrapper',
      slideClass: 'slide-hero',

      // Common settings
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      // centeredSlides: true,
      // watchOverflow: false,
      //autoHeight: true,
      // watchSlidesProgress: true,

      // Effects
      autoplay: {
        delay: 3000,
      },

      // Pagination
      pagination: {
         el: '.slider-hero__pagination',
         clickable: true,
      },

      // Events
      /*
         on: {
            // - - - - - - - [custom fraction] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            init: function (swiper) {
              const allSliders = document.querySelector('.slider__all');
              allSliders.innerHTML = swiper.slides.length;
              console.log(allSliders.innerHTML);
            },
            slideChange: function (swiper) {
              const currentSlide = document.querySelector('.slider__current');
              currentSlide.innerHTML = swiper.realIndex + 1;
              console.log(currentSlide.innerHTML);
            },
         },
            */
    });

    // stop slider on mouseenter
    // defaultSlider.el.addEventListener('mouseenter', () => {
    //    defaultSlider.autoplay.stop();
    // });
    // defaultSlider.el.addEventListener('mouseleave', () => {
    //    defaultSlider.autoplay.start();
    // });
  }
}
