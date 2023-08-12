import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';
import { SinglecurrencyReducer } from './currency/singleCurrency';

const store = configureStore({
  reducer: {
    allCurrencies: currencyReducer,
    currency: SinglecurrencyReducer,
  },
});

export default store;
