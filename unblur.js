const nominee = document.getElementById('blur-image');

document.querySelectorAll('.nominee').forEach((nominee) => {
  nominee.addEventListener('click', () => {
    nominee.classList.toggle('unblur');
  });
});
