import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASEURL from '../../api/BASEURL';

export const getSingleCurrency = createAsyncThunk(
  'singlecurrency/get',
  async (param) => {
    try {
      const response = await fetch(
        `${BASEURL}/${param.date}/currencies/${param.code}.json`,
      );
      const data = await response.json();
      const currencyArray = Object.entries(Object.values(data)[1]).map(
        ([code, rate]) => ({
          code,
          rate,
        }),
      );
      return currencyArray;
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error.message
        : error.message;
      return errorMessage;
    }
  },
);

const initialState = {
  data: [],
  isFetching: true,
  isFetchError: null,
  isLoadingExhange: false,
};

const SingleCurrencySlice = createSlice({
  name: 'SingleCurrency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleCurrency.pending, (state) => ({
        ...state,
        isFetching: true,
      }))
      .addCase(getSingleCurrency.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
        isFetching: false,
        isFetchError: null,
      }))
      .addCase(getSingleCurrency.rejected, (state, action) => ({
        ...state,
        data: [],
        isFetching: false,
        isFetchError: action.payload,
      }));
  },
});

export const SinglecurrencyReducer = SingleCurrencySlice.reducer;
export const { reqLoadExchange, finishLoadExchange, clearAll } = SingleCurrencySlice.actions;
