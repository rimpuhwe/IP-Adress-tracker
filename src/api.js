const API_KEY = '60f288361458402fbb118f785afa57c7';
const API_URL = 'https://api.ipgeolocation.io/ipgeo';
const getLocation = async (ip) => {
    try {
      const response = await fetch(`${API_URL}?apiKey=${API_KEY}&ip=${ip}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching location:', error);
      return null;
    }
  };

  export default getLocation;