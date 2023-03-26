import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

          </Routes>
          <Footer/>
      </>
  );
}

export default App;
