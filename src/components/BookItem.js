import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/BookSlice';

const BookItem = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  return (
    <li>
      <div className="book">
        <span className="title">{title}</span>
        <span className="author">{author}</span>
      </div>
      <button
        type="submit"
        className="removeBook"
        onClick={() => dispatch(removeBook(id))}
      >
        Remove
      </button>
    </li>
  );
};
BookItem.propTypes = {
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
