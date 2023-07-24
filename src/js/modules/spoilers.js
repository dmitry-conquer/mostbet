const spoilers = {
  spoiler() {
    document.addEventListener('click', function (e) {
      const spoilerTrigger = e.target.closest('[data-spoiler]');
      if (spoilerTrigger) {
        const spoilerData = spoilerTrigger.dataset.spoiler;
        if (!spoilerData || window.innerWidth <= spoilerData) {
          spoilers.openSpoiler(spoilerTrigger);
        }
      }
    });
  },
  openSpoiler(spoilerTrigger) {
    spoilerTrigger.classList.toggle('_active-spoiler');
    const spoilerContent = spoilerTrigger.nextElementSibling;
    spoilerContent.classList.toggle('_active-spoiler-content');
  },
};

export const useSpoiler = spoilers.spoiler;
