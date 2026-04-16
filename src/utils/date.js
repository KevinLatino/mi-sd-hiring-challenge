import { DAY_NAMES } from "../config/constants";

export function convertDate(time) {
  return time * 1000;
}

export function formatCurrentDate() {
  const today = new Date();
  const dayOfMonth = String(today.getDate()).padStart(2, "0");
  const monthNumber = String(today.getMonth() + 1).padStart(2, "0");
  const fullYear = today.getFullYear();

  return `${monthNumber}/${dayOfMonth}/${fullYear}`;
}

export function buildDayLabel(timestamp) {
  const forecastDate = new Date(convertDate(timestamp));
  const currentDate = new Date();

  const isSameDay = forecastDate.toDateString() === currentDate.toDateString();

  if (isSameDay) {
    return "Today: ";
  }

  return `${DAY_NAMES[forecastDate.getDay()]}: `;
}
