window.onload = windowLoading();
function windowLoading() {
  const input = document.querySelector('#input');
  const inputValue = input.value;
  background(inputValue);
  weather(inputValue);
  weatherFiveDays(inputValue);
  //handle the Submit
  input.value = '';
  const submitHandler = $event => {
    $event.preventDefault();
    const inputValue = input.value;
    background(inputValue);
    weather(inputValue);
    weatherFiveDays(inputValue);
  };
  //Event listener onSubmit
  const formSubmit = document.getElementById('form');
  formSubmit.addEventListener('submit', event => submitHandler(event));

  //Fetching the Temperature 5 days three hours
  function weather(searchTerm) {
    const resultFromWeatherApi = fetchWeather(searchTerm);
    async function fetchWeather(searchTerm) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=2901016cc32b8329b5b4027b31bf7777`;
      const response = await fetch(weatherUrl);
      const result = response.json();
      return result;
    }
    resultFromWeatherApi.then(function(result) {
      //change the weather Icon
      const weatherStatus = result.weather[0].main;
      console.log(weatherStatus);
      setBackgroundImage(weatherStatus.toLowerCase());
      function setBackgroundImage(fileName) {
        const bigIcon = document.querySelector('#mainIcon');
        bigIcon.src = `./assets/weather_icons/${fileName}.svg`;
        countryShortName = result.sys.country;
        console.log(countryShortName);
        twoLettersName(countryShortName);
      }
      //change the city Name and the city Temp
      const cityElement = document.querySelector('.city__name');
      const tempTitle = document.querySelector('.temp__caption');
      const description = document.querySelector('.description');
      const tempByCelsius = Math.floor(result.main.temp_max) - 273;
      const weatherDescription = result.weather[0].description;
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      description.innerHTML = capitalizeFirstLetter(weatherDescription);
      tempTitle.innerHTML = tempByCelsius + '&#7506';
      cityElement.innerHTML = result.name;
    });
  }
  // Fetching the Background Picture according to the city Name.
  function background(formValue) {
    const backgroundImageUrl = fetchBackground(formValue);
    async function fetchBackground(formValue) {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${formValue}&client_id=01dfa4883346b1741c6bfea6ad8db74a8932c0b60907b4f23dd89c464ffca2d6`;
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

  // fetching country full name

  function twoLettersName(twoLetter) {
    const promises = fetchTheCountryName(twoLetter);
    async function fetchTheCountryName(twoLetter) {
      const url = `https://restcountries.eu/rest/v2/alpha/${twoLetter}`;
      const response = await fetch(url);
      const result = response.json();
      return result;
    }

    promises.then(function(result) {
      const countryElement = document.querySelector('.city__country');
      console.log(result.a2Code);
      if (result.alpha2Code === 'GB') {
        countryElement.innerHTML = 'Great Britain';
      } else countryElement.innerHTML = result.name;
      console.log(result.alpha2Code);
    });
  }

  const weekday = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday'
  };
  const monthes = {
    '0': 'January',
    '1': 'February',
    '2': 'March',
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
    '11': 'December'
  };

  function callTime() {
    const d = new Date();
    const day = weekday[d.getDay()] + ', ';
    const month = monthes[d.getMonth()] + ' ';
    const currentDay = document.querySelector('#date');
    const currentTime = document.querySelector('#time');
    currentDay.innerHTML = day + month + d.getDate() + 'th';
    currentTime.innerHTML = d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  callTime();
  setInterval(callTime, 1000);

  // Set the 5 days weather Api

  function weatherFiveDays(term) {
    const resultFiveDaysApi = fetchWeather(term);
    async function fetchWeather(term) {
      const weatherFiveDaysUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${term}&APPID=2901016cc32b8329b5b4027b31bf7777`;
      const response = await fetch(weatherFiveDaysUrl);
      const result = response.json();
      return result;
    }
    resultFiveDaysApi.then(function(data) {
      const arrayList = data.list;
      arrayList.slice(0, 1).map(x => {
        const dateArray = x.dt_txt;
        const dataArr = dateArray.slice(11, 16);
        const weatherStatus = x.weather[0].main.toLowerCase();
        firstIconStatus(weatherStatus);
        const temp = Math.floor(x.main.temp_max) - 273;
        const firstDegree = document.querySelector('.first__list__degree');
        const firstDate = document.querySelector('.time__list__first');
        firstDegree.innerHTML = temp + ' &#7506';
        firstDate.innerHTML = dataArr;
      });
      arrayList.slice(1, 2).map(x => {
        const dateArray = x.dt_txt;
        const dataArr = dateArray.slice(11, 16);
        const weatherStatus = x.weather[0].main.toLowerCase();
        secondIconStatus(weatherStatus);
        const temp = Math.floor(x.main.temp_max) - 273;
        const firstDegree = document.querySelector('.second__list__degree');
        const secondDate = document.querySelector('.time__list__second');
        firstDegree.innerHTML = temp + ' &#7506';
        secondDate.innerHTML = dataArr;
      });
      arrayList.slice(2, 3).map(x => {
        const dateArray = x.dt_txt;
        const dataArr = dateArray.slice(11, 16);
        const weatherStatus = x.weather[0].main.toLowerCase();
        thirdIconStatus(weatherStatus);
        const temp = Math.floor(x.main.temp_max) - 273;
        const firstDegree = document.querySelector('.third__list__degree');
        const secondDate = document.querySelector('.time__list__third');
        firstDegree.innerHTML = temp + ' &#7506';
        secondDate.innerHTML = dataArr;
      });
      arrayList.slice(3, 4).map(x => {
        const dateArray = x.dt_txt;
        const dataArr = dateArray.slice(11, 16);
        const weatherStatus = x.weather[0].main.toLowerCase();
        fourthIconStatus(weatherStatus);
        const temp = Math.floor(x.main.temp_max) - 273;
        const firstDegree = document.querySelector('.fourth__list__degree');
        const secondDate = document.querySelector('.time__list__fourth');
        firstDegree.innerHTML = temp + ' &#7506';
        secondDate.innerHTML = dataArr;
      });

      function firstIconStatus(svgFile) {
        const firstIcon = document.querySelector('.first__icon');
        firstIcon.src = `./assets/weather_icons/${svgFile}.svg`;
      }
      function secondIconStatus(svgFile) {
        const secondIcon = document.querySelector('.second__icon');
        secondIcon.src = `./assets/weather_icons/${svgFile}.svg`;
      }
      function thirdIconStatus(svgFile) {
        const thirdIcon = document.querySelector('.third__icon');
        thirdIcon.src = `./assets/weather_icons/${svgFile}.svg`;
      }
      function fourthIconStatus(svgFile) {
        const fourthIcon = document.querySelector('.fourth__icon');
        fourthIcon.src = `./assets/weather_icons/${svgFile}.svg`;
      }
    });
  }
}
