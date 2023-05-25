import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
