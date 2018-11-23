const userNamePattern = /^[a-z\d]{3,20}$/i;
const passwordPattern = /^[\w@-]{6,20}$/;
const emailPattern = /^\w+@\w+\..{2,3}(.{2,3})?$/;
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');

// const userNameInputState = document
//   .getElementById('username')
//   .addEventListener('keyup', () => {
//     console.log(userNamePattern.test(username.value));
//   });

// const passwordInputState = document
//   .getElementById('password')
//   .addEventListener('keyup', () => {
//     console.log(passwordPattern.test(password.value));
//   });

// const emailInputState = document
//   .getElementById('email')
//   .addEventListener('keyup', () => {
//     console.log(emailPattern.test(email.value));
// });

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const userNameState = userNamePattern.test(username.value);
  const passwordState = passwordPattern.test(password.value);
  const emailState = emailPattern.test(email.value);

  const textElement = document.createElement('h3');

  document.body.appendChild(textElement);
  if (userNameState || passwordState || emailState === true) {
    textElement.innerHTML =
      'User Name is' +
      ' ' +
      userNameState +
      '<br/>' +
      ' ' +
      'Password is' +
      ' ' +
      passwordState +
      '<br/>' +
      ' ' +
      'Email is' +
      ' ' +
      emailState;
  } else {
    console.log('Something went Wrong');
  }
});
