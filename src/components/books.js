import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  const allBooks = useSelector((state) => state.books);

  return (
    <div className="booksContainer">
      <ul>
        {
          allBooks.map((book) => (
            <BookItem key={book.id} book={book} />
          ))
        }
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
