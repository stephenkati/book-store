import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/BookSlice';

const BookItem = (props) => {
  const {
    id,
    title,
    author,
  } = props;

  const dispatch = useDispatch();
  const [progress, setProgress] = useState(50);

  const handlePercentage = () => {
    let percentage = progress;
    if (percentage < 100) {
      setProgress(percentage += 1);
    }
  };

  return (
    <li className="book">
      <div className="detail-actions">
        <div className="bookDetails">
          <span className="category">Fiction</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="actions">
          <button type="button" className="comment actionBtn">Comments</button>
          <button
            type="submit"
            className="removeBook actionBtn"
            onClick={() => dispatch(deleteBook(id))}
          >
            Remove
          </button>
          <button type="button" className="actionBtn">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <CircularProgressbar
          value={progress}
          className="progressBar"
        />
        <div className="numberPercentage">
          <span>
            {progress}
            %
          </span>
          <p>Completed</p>
        </div>
      </div>
      <div className="progressSection">
        <h2 className="currentChapter">CURRENT CHAPTER</h2>
        <p className="chapter">Chapter 5</p>
        <button
          type="button"
          onClick={handlePercentage}
          className="updateProgress"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};
BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
