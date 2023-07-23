export function sorting() {
   const sortTrigger = document.querySelector('.sort__trigger');
   const dropDown = sortTrigger.nextElementSibling;
   sortTrigger.addEventListener('click', () => {
      dropDown.classList.toggle('_visible')
      sortTrigger.classList.toggle('_active')
   })
}