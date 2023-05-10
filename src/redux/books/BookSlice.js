import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
