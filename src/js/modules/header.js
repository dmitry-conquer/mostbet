export function initHeader() {
  const headerIcon = document.querySelector('.header__menu-icon');
  const headerNavigation = document.querySelector('.nav-header');
  headerIcon.addEventListener('click', () => {
   console.log('sdsad');
    headerNavigation.classList.toggle('_active');
  });
}
