const initialState = {
    weatherData: null,
    loading: false,
    error: null
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_WEATHER_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_WEATHER_SUCCESS':
        return { ...state, loading: false, weatherData: action.payload, error: null };
      case 'FETCH_WEATHER_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default weatherReducer;