export function initHeader() {
  const headerOpenButton = document.querySelector('.header__menu-icon');
  const headerCloseButton = document.querySelector('.nav-header__close');
  const headerNavigation = document.querySelector('.nav-header');
  headerOpenButton.addEventListener('click', () => {
    headerNavigation.classList.toggle('_active');
  });
  headerCloseButton.addEventListener('click', () => {
    headerNavigation.classList.remove('_active');
  });
}
