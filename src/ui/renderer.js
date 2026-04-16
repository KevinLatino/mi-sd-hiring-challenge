import { getDailyForecast } from "../utils/weather";
import { buildLocationLabel } from "../utils/geolocation";
import { createForecastCard } from "./forecastCard";
import { showError } from "./messages";

export function renderForecast(geolocation, forecast) {
  const titleElement = document.getElementById("location-heading");
  const contentElement = document.getElementById("forecast-body");
  const days = getDailyForecast(forecast, 3);

  titleElement.textContent = `WEATHER FORECAST FOR ${buildLocationLabel(geolocation).toUpperCase()}`;

  if (days.length === 0) {
    showError("No forecast data available", "forecast-body");
    return;
  }

  const forecastMarkup = days.map(createForecastCard).join("");

  contentElement.innerHTML = `
    <div class="tiles-row">
        ${forecastMarkup}
    </div>`;
}
