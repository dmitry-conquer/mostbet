import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import { useSpoiler } from './modules/spoilers.js';
import { useSliders } from './modules/sliders.js';

function app() {
  useDynamicAdapt('max');
  useSliders();
  useSpoiler();

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
}

document.addEventListener('DOMContentLoaded', app);
