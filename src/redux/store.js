import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './book/bookSlice';
import { categoriesReducer } from './category/categorySlice';

const store = configureStore({
  reducer: {
  },
});

export default store;
