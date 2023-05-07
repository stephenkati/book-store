import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((item) => item.id !== itemId);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
