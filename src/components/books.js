import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => (
  <div className="booksContainer">
    <ul>
      <BookItem />
    </ul>
    <AddBook />
  </div>
);

export default Books;
