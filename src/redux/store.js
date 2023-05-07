import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/BookSlice';
import CategoriesReducer from './categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: BookReducer,
    categories: CategoriesReducer,
  },
});

export default store;
