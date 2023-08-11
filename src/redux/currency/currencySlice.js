import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BASEURL from "../../../BASEURL";

export const getCurrencies = createAsyncThunk("currency/get", async () => {
  try {
    const response = await fetch(`${BASEURL}/latest/currencies.json`);
    const data = response.json();
    return data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.error.message
      : error.message;
    return errorMessage;
  }
});

const initialState = {
  data: {},
  isFetching: false,
  isFetchError: null,
};

const CurrencySlice = createSlice({
  name: "Currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        data = {};
        isFetching = true;
        isFetchError = null;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        data = action.payload;
        isFetching = false;
        isFetchError = null;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        isFetching = false;
        isFetchError = action.payload;
      });
  },
});

export const currencyReducer = createSlice.reducer