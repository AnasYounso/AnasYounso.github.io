// const inputs = document.querySelectorAll('input');

// const patterns = {
//   telephone: /^\d{12}$/
// };

// function valid(field, regex) {
//   console.log(regex.test(field.value));
// }

// inputs.forEach(input => {
//   input.addEventListener('keyup', e => {
//     valid(e.target, patterns[e.target.name]);
//   });
// });

window.onload = function() {
  var val = {
    name: 'someone',
    count(n) {
      window.setInterval(() => {
        if (n > 0) {
          console.log(this.name + " name's is counting down");
          n--;
        }
      }, 1000);
    }
  };
  val.count(11);
};
