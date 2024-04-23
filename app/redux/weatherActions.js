import { fetchWeatherData } from './weatherService';

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });

    try {
      const data = await fetchWeatherData(city);
      dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
  };
};