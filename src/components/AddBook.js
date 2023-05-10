import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { uploadBook } from '../redux/books/BookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    const bookInfo = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(uploadBook(bookInfo));
    setTitle('');
    setAuthor('');
  };

  return (
    <form id="form">
      <input
        type="text"
        placeholder="Book title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="submit"
        value="ADD BOOK"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
};

export default AddBook;
