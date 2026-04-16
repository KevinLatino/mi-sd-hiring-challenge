import { buildDayLabel } from "../utils/date";
import { buildWeatherIcon, buildWeatherLabel } from "../utils/weather";

export function createForecastCard(day) {
  return `
    <div class="forecast-tile">
        <div class="tile-day-label">
            ${buildDayLabel(day.time)}
        </div>
        <div class="tile-body">
            <img class="tile-weather-icon" src="${buildWeatherIcon(
              day.icon
            )}" alt="${day.icon ?? "Weather icon"}"/>
            <div class="tile-details">
                <div class="tile-condition">${buildWeatherLabel(day.icon, day.summary)}</div>
                <div class="tile-temp-range">
                    <strong>${Math.round(day.temperatureHigh)}°</strong> / ${Math.round(day.temperatureLow)}° F
                </div>
            </div>
        </div>
    </div>
  `;
}
