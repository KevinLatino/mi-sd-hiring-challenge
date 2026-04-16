export function buildLocationLabel(geolocation) {
  const { city, regionCode, region } = geolocation ?? {};
  const stateOrRegion = regionCode || region;

  if (!city) return "Unknown location";
  if (stateOrRegion) {
    return `${city}, ${stateOrRegion}`;
  }

  return city;
}
