import API from "./config.js";
import displayInfo from "./dom.js";

const button = document.querySelector("#submit-search");
const inputField = document.querySelector("#cityName");

const getWeatherData = async () => {
  const theNameOfTheCity = inputField.value;
  if (theNameOfTheCity.trim()) {
    try {
      return fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=" +
          API.key +
          "&q=" +
          theNameOfTheCity +
          "&days=7&aqi=no&alerts=no"
      )
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } catch (error) {
      alert("Hey are you sure you are not holding up your map upside down?");
    }
  } else {
    alert("Please, fill the input field");
  }
};

const startWeatherApp = async () => {
  const weatherInfo = await getWeatherData(inputField.value);
  displayInfo(weatherInfo);
};

button.addEventListener("click", startWeatherApp);
inputField.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    startWeatherApp();
  }
});
