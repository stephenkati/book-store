import React from 'react';

const Books = () => (
  <div className="booksContainer">
    <ul>
      <li>
        Atomic Habits
        <span>James Clear</span>
      </li>
      <li>
        The Spooks secret
        <span>Joseph Delaney</span>
      </li>
      <li>
        Alice in wonderland
        <span>Lewis carrol</span>
      </li>
      <li>
        Pride and Prejudice
        <span>Jane Austen</span>
      </li>
    </ul>
    <form>
      <input type="text" placeholder="Book title..." />
      <input type="text" placeholder="Book Author" />
      <input type="submit" />
    </form>
  </div>
);

export default Books;
