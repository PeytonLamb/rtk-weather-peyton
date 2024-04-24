'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import WeatherChart from './components/WeatherChart';
import SearchInput from './components/SearchInput';


const Page = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput/>
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
