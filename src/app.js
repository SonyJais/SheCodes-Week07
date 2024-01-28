function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function buttonClick(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let cityNameInput = document.querySelector(".cityName");
  cityNameInput.innerHTML = capitalizeFirstLetter(searchInput.value);
  console.log(cityNameInput);
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", buttonClick);
