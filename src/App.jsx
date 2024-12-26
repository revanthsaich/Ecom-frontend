import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import FooterBar from './components/Footerbar/FooterBar.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
// import Cart from './components/Cart/Cart.jsx';
import Products from './components/Products/Products.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* Add more routes as needed */}
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
