(function() {
  // Submiting the Form

  const input = document.getElementById('input');
  const inputValue = input.value;
  console.log('here' + inputValue + 'nul');

  const submitHandler = event => {
    event.preventDefault();

    const inputValue = input.value;
    console.log(inputValue);

    fetching(inputValue);
  };

  const formSubmit = document.getElementById('form');
  formSubmit.addEventListener('submit', event => submitHandler(event));

  // Fetch the Background Picture according to the city Name.
  function fetching(formValue) {
    const backgroundImageUrl = fetchBackground(formValue);
    async function fetchBackground(formValue) {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${formValue}&client_id=[[[[[[[[]]]]]]]]`;
      const response = await fetch(url);
      const data = response.json();
      return data;
    }

    backgroundImageUrl.then(function(data) {
      const result = data.results[0].urls.full;
      const body = document.getElementsByTagName('body')[0];
      const main = document.getElementById('main-background');
      body.style.backgroundImage = `url(${result})`;
      main.style.backgroundImage = `url(${result})`;
    });
  }
  // Display the current date and time.
  // const currentDate = document.getElementsByTagName('date');
  // currentDate.innerHTML = 'Today Is Tuesday';
})();
