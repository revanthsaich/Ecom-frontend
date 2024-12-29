import React from 'react';
import './Home.css';  // Import the CSS file for Home
import Slider from '../Slider/Slider.jsx';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <Slider />
      <FeaturedProducts/>
    </div>
  );
}

export default Home;
