const API_KEY = "60f288361458402fbb118f785afa57c7";
const API_URL = "https://api.ipgeolocation.io/ipgeo";

export const fetchIpLocation = async (ip: string) => {
  const response = await fetch(`${API_URL}?apiKey=${API_KEY}&ip=${ip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch location");
  }
  const data = await response.json();
  return {
    lat: data.latitude,
    lng: data.longitude,
    ip: data.ip,
    country_name: data.country_name,
    city: data.city,
    time_zone: data.time_zone,
  };
};
