import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/BookSlice';

const BookItem = (props) => {
  const { id, title, author } = props;
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
        onClick={() => dispatch(deleteBook(id))}
      >
        Remove
      </button>
    </li>
  );
};
BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
