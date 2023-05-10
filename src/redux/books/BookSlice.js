import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
};
// Wu3sPWMP4XzcK2xgaVg7
// iGmxPYxDsVcn6P1TEnEu
const bookstoreApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'Wu3sPWMP4XzcK2xgaVg7';

const getBooks = createAsyncThunk('books/getBooks',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${bookstoreApiUrl}/${appId}/books`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed, Try again!');
    }
  });

const uploadBook = createAsyncThunk('books/uploadBooks',
  async (bookInfo, thunkAPI) => {
    try {
      const response = await axios.post(`${bookstoreApiUrl}/${appId}/books`, bookInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed, Try again!');
    }
  });

const deleteBook = createAsyncThunk('books/deleteBooks',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`${bookstoreApiUrl}/${appId}/books/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed, Try again!');
    }
  });

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
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const books = Object.keys(action.payload).map((key) => {
          const book = action.payload[key][0];

          return {
            id: key,
            ...book,
          };
        });
        return {
          ...state,
          books,
        };
      })
      .addCase(uploadBook.fulfilled, (state, action) => {
        const newBook = {
          id: action.meta.arg.item_id,
          title: action.meta.arg.title,
          author: action.meta.arg.author,
        };

        state.books.push(newBook);
        return state;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const newBooks = state.books.filter((book) => book.id !== action.meta.arg);

        return {
          ...state,
          books: newBooks,
        };
      });
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export {
  getBooks,
  uploadBook,
  deleteBook,
};
export default BooksSlice.reducer;
