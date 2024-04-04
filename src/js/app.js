const btn = document.querySelector('.btn');
const collapseMessage = document.querySelector('.collapse-message');

btn.addEventListener('click', () => {
  if (collapseMessage.classList.contains('hidden')) {
    collapseMessage.classList.remove('hidden');
    setTimeout(() => {
      collapseMessage.classList.remove('visuallyhidden');
    }, 20);
  } else {
    collapseMessage.classList.add('visuallyhidden');
    collapseMessage.addEventListener(
      'transitionend',
      () => {
        collapseMessage.classList.add('hidden');
      },
      {
        capture: false,
        once: true,
        passive: false,
      },
    );
  }
});
