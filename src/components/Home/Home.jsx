import React from 'react';
import './Home.css';  // Import the CSS file for Home
import Slider from '../Slider/Slider.jsx';
import Products from '../FeaturedProducts/FeaturedProducts.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <Slider />
      <Products/>
    </div>
  );
}

export default Home;
