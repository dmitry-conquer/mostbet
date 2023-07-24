import { useSpoiler } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
import { useSliders } from './modules/sliders.js';
import { sorting } from './modules/sorting.js';
import { useDynamicAdapt } from './modules/dynamicAdapt.js';

function app() {
  useDynamicAdapt('max');
  useSliders();
  useSpoiler();
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
