import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/BookSlice';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const allBooks = useSelector((state) => state.books.books);

  return (
    <div className="booksContainer">
      <ul>
        {
          allBooks.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.author}
              id={book.id}
            />
          ))
        }
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
