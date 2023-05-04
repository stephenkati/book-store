import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/books';
import Categories from './components/categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
