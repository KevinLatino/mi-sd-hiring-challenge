import { getGeolocation, getForecast } from "./api/weatherApi";
import { DEFAULT_ZIP_CODE } from "./config/constants";
import { formatCurrentDate } from "./utils/date";
import { validateZipCode } from "./utils/validation";
import { showLoading, showError } from "./ui/messages";
import { renderForecast } from "./ui/renderer";

async function loadForecastData(zipCode) {
  const geolocation = await getGeolocation(zipCode);
  const forecast = await getForecast(
    geolocation.latitude,
    geolocation.longitude,
    formatCurrentDate()
  );
  return { geolocation, forecast };
}

(async () => {
  showLoading("Loading Forecast....", "forecast-body");
  if (!validateZipCode(DEFAULT_ZIP_CODE)) {
    showError(`Invalid ZIP code: ${DEFAULT_ZIP_CODE}`, "forecast-body");
    return;
  }
  try {
    const { geolocation, forecast } = await loadForecastData(DEFAULT_ZIP_CODE);
    renderForecast(geolocation, forecast);
  } catch (error) {
    showError(error.message || "Something went wrong", "forecast-body");
  }
})();
