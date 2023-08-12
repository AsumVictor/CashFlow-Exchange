import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASEURL from '../../api/BASEURL';

export const getCurrencies = createAsyncThunk('currency/get', async () => {
  try {
    const response = await fetch(`${BASEURL}/latest/currencies.json`);
    const data = await response.json();
    const currencyArray = Object.entries(data).map(([code, name]) => ({
      code,
      name,
    }));
    return currencyArray;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.error.message
      : error.message;
    return errorMessage;
  }
});

const initialState = {
  data: [],
  isFetching: true,
  isFetchError: null,
};

const CurrencySlice = createSlice({
  name: 'Currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isFetching = false;
        state.isFetchError = null;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.isFetching = false;
        state.isFetchError = action.payload;
      });
  },
});

export const currencyReducer = CurrencySlice.reducer;
