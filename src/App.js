import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />


          </Routes>
      </>
  );
}

export default App;
