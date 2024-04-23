'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import WeatherChart from './components/WeatherChart';
import SearchInput from './components/SearchInput';
import { fetchWeather } from '@redux/weatherActions';


const Page = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    dispatch(fetchWeather(city));
    setCity('');
    setError(null);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput
        city={city}
        onCityChange={setCity}
        onSearch={handleSearch}
        error={error}
      />
      <WeatherChart />
    </div>
  );
};

const PageWithProvider = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default PageWithProvider;
