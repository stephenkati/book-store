import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/" className="link">Books</Link>
      </li>
      <li>
        <Link to="/categories" className="link"> Categories </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
