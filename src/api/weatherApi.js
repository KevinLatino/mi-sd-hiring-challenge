import { GEOLOCATION_API_URL, FORECAST_API_URL } from "../config/constants";

async function fetchJson(url, msg) {
  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    throw new Error(`Network error — ${msg}`, { cause: err });
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} error fetching ${msg}`);
  }

  return response.json();
}

export async function getGeolocation(zipCode) {
  const params = new URLSearchParams({ zip_code: String(zipCode).trim() });
  return fetchJson(`${GEOLOCATION_API_URL}?${params}`, `geolocation (${zipCode})`);
}

export async function getForecast(latitude, longitude, date) {
  const params = new URLSearchParams({ latitude, longitude, date });
  return fetchJson(
    `${FORECAST_API_URL}?${params}`,
    `forecast (${latitude}, ${longitude})`
  );
}
