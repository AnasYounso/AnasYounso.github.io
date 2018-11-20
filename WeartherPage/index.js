let appid = '2901016cc32b8329b5b4027b31bf7777';
var searchTerm;
var output = document.getElementById('jumbotronText');
const searchInputElement = document.getElementById('searchInput');

async function searchWeather(searchTerm) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appid}`
  );
  return await response.json();
}

document
  .getElementById('formSubmit')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    searchTerm = searchInputElement.value;

    if (searchTerm) {
      searchWeather(searchTerm).then(data => render(data));
    }
  });

async function render(jsonData) {
  const cityStatus = jsonData.weather[0].main;
  const weather_description = jsonData.weather[0].description;
  const countryName = jsonData.sys.country;
  const TempMax = Math.floor(jsonData.main.temp_max) - 273;

  fullName = await countryFullName(countryName);
  searchTerm = firstLetter(searchTerm);
  country = 'Country: ' + fullName;
  city = `City: ${searchTerm}`;
  description = 'Weather Status: ' + weather_description;
  Temperature = 'Temperature: ' + TempMax;
  output.innerHTML =
    country + '<br>' + city + '<br>' + description + '<br>' + Temperature;

  setBackgroundImage(cityStatus.toLowerCase());
}

async function countryFullName(counrtyName) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${counrtyName}`
  );
  const data = await response.json();
  return data && data.name;
}

function setBackgroundImage(fileName) {
  document.body.style.backgroundImage = `url(./Bilder/${fileName}.jpg)`;
}

function firstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
