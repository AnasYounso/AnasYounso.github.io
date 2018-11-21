'use strict';
const APP_ID = '2901016cc32b8329b5b4027b31bf7777';
const outputElement = document.getElementById('jumbotronText');
const searchInputElement = document.getElementById('searchInput');
const formSubmitElement = document.getElementById('formSubmit');

formSubmitElement.addEventListener('submit', handleFormSubmit);

async function searchWeather(searchTerm) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${APP_ID}`
  );
  return await response.json();
}

function handleFormSubmit($event) {
  $event.preventDefault();
  const searchTerm = searchInputElement.value;

  if (searchTerm) {
    searchWeather(searchTerm).then(data => render(data));
  }
}

async function render(jsonData) {
  const cityStatus = jsonData.weather[0].main;
  const cityName = jsonData.name;
  const weather_description = jsonData.weather[0].description;
  const countryName = jsonData.sys.country;
  const tempMax = Math.floor(jsonData.main.temp_max) - 273;
  const countryData = await fetchCountryData(countryName);
  const fullName = countryData.name;
  const country = 'Country: ' + fullName;
  const city = `City: ${cityName}`;
  const description = 'Weather Status: ' + weather_description;
  const temperature = 'Temperature: ' + tempMax;

  setBackgroundImage(cityStatus.toLowerCase());
  outputElement.innerHTML = [country, city, description, temperature].join('<br />');
}

async function fetchCountryData(counrtyName) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${counrtyName}`
  );
  return await response.json();
}

function setBackgroundImage(fileName) {
  document.body.style.backgroundImage = `url(./img/${fileName}.jpg)`;
}


