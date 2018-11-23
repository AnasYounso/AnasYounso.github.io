const userNamePattern = /^[a-z\d]{3,20}$/i;
const emailPattern =/^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/;
const contentPattern = /^[a-z\d@-]{3,200}$/i;
const username = document.getElementById('fname');
const email = document.getElementById('email');
const title = document.getElementById('title');
const content = document.getElementById('content');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const userNameState = userNamePattern.test(username.value);
  const emailState = emailPattern.test(email.value);
  const titleStates = userNamePattern.test(title.value);
  const contentStates = contentPattern.test(content.value);

  if (userNameState === true) {
    username.className = 'valid';
    p1.className = 'valid';
  } else {
    username.className = 'invalid';
    p1.className = 'invalid';
  }
  if (emailState === true) {
    email.className = 'valid';
    p2.className = 'valid';
  } else {
    email.className = 'invalid';
    p2.className = 'invalid';
  }
  if (titleStates === true) {
    title.className = 'valid';
    p3.className = 'valid';
  } else {
    title.className = 'invalid';
    p3.className = 'invalid';
  }
  if (contentStates === true) {
    content.className = 'valid';
    p4.className = 'valid';
  } else {
    content.className = 'invalid';
    p4.className = 'invalid';
  }
});
