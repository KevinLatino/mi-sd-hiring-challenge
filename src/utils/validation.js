export function validateZipCode(zipCode) {
  if (zipCode == null) return false;
  return /^\d{5}$/.test(String(zipCode).trim());
}
