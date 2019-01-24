window.onscroll = function() {
  myFunction();
};

function myFunction() {
  const header = document.querySelector('.header');
  if (document.body.scrollTop > 150) {
    header.style.backgroundColor = 'rgba(143, 76, 76, 0.527)';
  } else {
    header.style.backgroundColor = 'rgba(143, 76, 76, 0)';
  }
}
