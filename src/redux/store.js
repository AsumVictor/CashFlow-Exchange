import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';

const store = configureStore({
  reducer: {
    allCurrencies: currencyReducer,
  },
});

export default store;
