'use strict';
const APP_ID = '2901016cc32b8329b5b4027b31bf7777';
const outputElement = document.getElementById('jumbotronText');
const searchInputElement = document.getElementById('searchInput');
const formSubmitElement = document.getElementById('formSubmit');

formSubmitElement.addEventListener('submit', handleFormSubmit);

function handleFormSubmit($event) {
  $event.preventDefault();
  console.log('working');
  const searchTerm = searchInputElement.value;

  if (searchTerm) {
    searchWeather(searchTerm);
  }
}

function searchWeather(searchTerm) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${APP_ID}`;
  let data = new XMLHttpRequest();
  data.onreadystatechange = function() {
    if (data.readyState == 4 && data.status == 200) {
      const jsonData = JSON.parse(data.response);
      const cityStatus = jsonData.weather[0].main;
      const cityName = jsonData.name;
      const weather_description = jsonData.weather[0].description;
      const countryName = jsonData.sys.country;
      const tempMax = Math.floor(jsonData.main.temp_max) - 273;
      const countryData = fetchCountryData(countryName);
      const fullName = countryData.name;
      const country = 'Country: ' + fullName;
      const city = `City: ${cityName}`;
      const description = 'Weather Status: ' + weather_description;
      const temperature = 'Temperature: ' + tempMax;

      setBackgroundImage(cityStatus.toLowerCase());
      outputElement.innerHTML = [country, city, description, temperature].join(
        '<br />'
      );

      async function fetchCountryData(counrtyName) {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${counrtyName}`
        );
        return await response.json();
      }

      function setBackgroundImage(fileName) {
        document.body.style.backgroundImage = `url(./img/${fileName}.jpg)`;
      }
    }
  };
  data.open('GET', url, true);
  data.send();
}
