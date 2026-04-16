import { GEO_BASE_URL, FORECAST_BASE_URL } from "../config/constants";

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
  return fetchJson(`${GEO_BASE_URL}?${params}`, `geolocation (${zipCode})`);
}

export async function getForecast(latitude, longitude, date) {
  const params = new URLSearchParams({ latitude, longitude, date });
  return fetchJson(
    `${FORECAST_BASE_URL}?${params}`,
    `forecast (${latitude}, ${longitude})`
  );
}
