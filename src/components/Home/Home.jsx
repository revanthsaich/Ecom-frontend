import React from 'react';
import './Home.css';  // Import the CSS file for Home
import Slider from '../Slider/Slider.jsx';
 import { useEffect } from'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.jsx';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();  
  const token = localStorage.getItem("authToken"); 
  useEffect(() => {
    if (!token) {
      navigate("/signin"); 
    }
  }, [token, navigate]);

  if (!token) {
    return null;  
  }
  return (
    <div className="home-container">
      <Slider />
      <FeaturedProducts/>
    </div>
  );
}

export default Home;
