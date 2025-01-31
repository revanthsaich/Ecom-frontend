import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { slug } = useParams(); // Get slug from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ecommerce-backend-yv9f.onrender.com/api/products/${slug}/`) 
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching product details');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container pt-4 px-5 mb-5 bg-white">
      <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img src={product.image} alt={product.name} />
            </div>

            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1
                class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
              >
                {product.name}
              </h1>
              <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p
                  class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                >
                  ₹ {product.price}
                </p>

                <div class="flex items-center gap-2 mx-5 sm:mt-0">
                  <div class="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    
                  </div>
                  <div class="text-2m font-bold  sm:text-3xl dark:text-white">
                    {product.rating}
                  </div>
                </div>
              </div>

              <p class="text-gray-500 mt-10 dark:text-gray-400">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus ut curae quis integer; dictumst odio. Dis vestibulum praesent purus mattis lobortis ultrices. Conubia pulvinar adipiscing integer tincidunt neque ut risus sed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
