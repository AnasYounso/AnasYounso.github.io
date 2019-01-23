window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (pageYOffset >= 150) {
    header.style.backgroundColor = 'rgba(143, 76, 76, 0.527)';
  } else {
    header.style.backgroundColor = 'none';
  }
});
