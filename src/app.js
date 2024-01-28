function refreshWeather(response) {
  let tempVal = document.querySelector(".temp");
  let temperature = response.data.temperature.current;
  tempVal.innerHTML = Math.round(temperature);

  let moistureVal = document.querySelector("#humidity");
  let humidVal = response.data.temperature.humidity;
  moistureVal.innerHTML = Math.round(humidVal);

  let speedVal = document.querySelector("#windSpeed");
  let windSpeedVal = response.data.wind.speed;
  speedVal.innerHTML = Math.round(windSpeedVal, 2);

  let weatherVal = document.querySelector(".weather");
  let weatherstyle = response.data.condition.description;
  weatherVal.innerHTML = weatherstyle;

  //let timeVal = document.querySelector(".time");
  //let date = new Date(response.data.time * 1000);
  //console.log(date);

  //let dayVal = document.querySelector(".dayName");
}

function searchCity(city) {
  let apiKey = "aa56bt976def310e73o04395caed4d33";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function buttonClick(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let cityNameInput = document.querySelector(".cityName");
  cityNameInput.innerHTML = capitalizeFirstLetter(searchInput.value);
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", buttonClick);
