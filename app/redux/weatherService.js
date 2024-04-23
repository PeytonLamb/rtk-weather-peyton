export const fetchWeatherData = async (city) => {
    const API_KEY = 'your_api_key';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4d2230e28dd5ff342317c6687cd2d078`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Weather data not available for this city');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };