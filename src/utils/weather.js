import { WEATHER_ICONS, WEATHER_SUMMARY_BY_ICON } from "../config/constants";

export function getDailyForecast(forecastData, maxDays = 3) {
  return forecastData?.daily?.data?.slice(0, maxDays) ?? [];
}

export function buildWeatherLabel(icon, summary) {
  return WEATHER_SUMMARY_BY_ICON[icon] ?? summary ?? "Clear";
}

export function buildWeatherIcon(iconKey) {
  return WEATHER_ICONS[iconKey] ?? WEATHER_ICONS.sunny;
}

export function buildTempRange(highTemp, lowTemp) {
  return `${Math.round(highTemp)}° / ${Math.round(lowTemp)}° F`;
}
