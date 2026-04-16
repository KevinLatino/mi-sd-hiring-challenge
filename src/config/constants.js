import sunny from "../../img/sunny.png";
import snow from "../../img/snow.png";
import rain from "../../img/rain.png";
import cloudy from "../../img/cloudy.png";

export const GEO_BASE_URL = "https://se-weather-api.herokuapp.com/api/v1/geo";
export const FORECAST_BASE_URL = "https://se-weather-api.herokuapp.com/api/v1/forecast";

export const DEFAULT_ZIP_CODE = "77001";

export const WEATHER_ICONS = {
  sunny,
  snow,
  rain,
  cloudy,
};

export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const WEATHER_SUMMARY_BY_ICON = {
  sunny: "Clear",
  snow: "Snow",
  rain: "Rain",
  cloudy: "Partly Cloudy",
};
