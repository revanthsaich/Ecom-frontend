import React, { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(4);
    const [isProductsPage, setIsProductsPage] = useState(false);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get('https://ecommerce-backend-yv9f.onrender.com/api/products/featured/');
                setData(response.data.featured_products);
            } catch (error) {
                console.error('Error fetching featured products:', error);
                setError('Error fetching featured products.');
            }
        };

        fetchFeaturedProducts();
    }, []);

    const handleMoreItemsClick = () => {
        if (data.length === 4) {
            navigate('/products');
        } else {
            if (visibleItems === 4) {
                setVisibleItems(8);
                setTimeout(() => {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
                }, 100);
            } else {
                setIsProductsPage(true);
            }
        }
    };

    if (isProductsPage) {
        navigate('/products');
        console.log("Navigating to ProductsPage");
    }
    
    
    return (
        <div>
            <section className="flex flex-col align-center items-center py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
                        <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                            Our most featured items to buy online. Discover the best products from our store.
                        </p>
                    </div>
            {error && (
                <div className="container bg-white">{error}</div>
            )}

                    <div className="prods grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                        {data.slice(0, visibleItems).map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                    <img
                                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 product-image"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="flex items-start justify-between mt-4 space-x-4">
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <Link to={`/products/${item.slug}`}>
                                            <a href="#" name={item.name}>
                                                {item.name}
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </Link>
                                        </h3>
                                        <div className="flex items-center mt-2.5 space-x-px">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-3 h-3 sm:w-4 sm:h-4 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="mt-4 inline-flex items-center justify-center px-3 py-3 text-sm font-semibold leading-5 text-indigo-600 transition-all duration-200 bg-transparent border-2 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-gray-100"
                    onClick={handleMoreItemsClick}
                >
                    <KeyboardArrowDownIcon />
                    More Items
                </button>
            </section>
        </div>
    );
};

export default FeaturedProducts;