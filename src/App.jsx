import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import FooterBar from './components/Footerbar/FooterBar.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import Products from './pages/Products.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to ="/"/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* Add more routes as needed */}
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
