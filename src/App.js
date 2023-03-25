import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
          </Routes>
      </>
  );
}

export default App;
