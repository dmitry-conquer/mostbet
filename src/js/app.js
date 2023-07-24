// import { consoleInfo, isWebp() } from './config/functions.js';
// import { hasErrors } from './modules/forms.js';
// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
import { initSliders } from './modules/sliders.js';
import { sorting } from './modules/sorting.js';
// import { initModals, openModalIf } from './modules/modals.js';
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import AOS from 'aos';
// import Rellax from "rellax";
// import fslightbox from 'fslightbox';
// import Ellipsis from 'ellipsis.js';
// import Choices from 'choices.js';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import noUiSlider from 'nouislider';
// import MicroModal from 'micromodal';

function app() {
  useDynamicAdapt('max');
  initSliders();
  sorting();

  /*
    header
  */

  const headerOpenButton = document.querySelector('.header__menu-icon');
  const headerCloseButton = document.querySelector('.nav-header__close');
  const headerNavigation = document.querySelector('.nav-header');
  if (headerOpenButton) {
    headerOpenButton.addEventListener('click', () => {
      headerNavigation.classList.toggle('_active');
      document.body.classList.toggle('_lock');
    });
  }
  if (headerCloseButton) {
    headerCloseButton.addEventListener('click', () => {
      headerNavigation.classList.remove('_active');
      document.body.classList.remove('_lock');
    });
  }

  /*
    sidebar
  */

  // const sidebarOpenButton = document.querySelector('.sort__open-bar');
  // const sidebarCloseButton = document.querySelector('.sidebar__close');
  // const sidebar = document.querySelector('.sidebar');
  // sidebarOpenButton.addEventListener('click', () => {
  //   sidebar.classList.toggle('_active');
  // });
  // sidebarCloseButton.addEventListener('click', () => {
  //   sidebar.classList.remove('_active');
  // });
}

document.addEventListener('DOMContentLoaded', app);
