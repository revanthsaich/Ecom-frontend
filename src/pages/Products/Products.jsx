import React from 'react'
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import './Products.css'
const Products = () => {
  const data = [
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
      title: "Beoplay M5 Bluetooth Speaker",
      rating: 4,
      price: "$99.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
      title: "Apple Smart Watch 6 - Special Edition",
      rating: 5,
      price: "$299.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
      title: "Beylob 90 Speaker",
      rating: 2,
      price: "$199.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
      title: "Sony ZX Wireless Headphones",
      rating: 4,
      price: "$150.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
      title: "Beoplay M5 Bluetooth Speaker",
      rating: 4,
      price: "$99.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
      title: "Apple Smart Watch 6 - Special Edition",
      rating: 5,
      price: "$299.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
      title: "Beylob 90 Speaker",
      rating: 2,
      price: "$199.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
      title: "Sony ZX Wireless Headphones",
      rating: 4,
      price: "$150.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
      title: "Beoplay M5 Bluetooth Speaker",
      rating: 4,
      price: "$99.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
      title: "Apple Smart Watch 6 - Special Edition",
      rating: 5,
      price: "$299.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
      title: "Beylob 90 Speaker",
      rating: 2,
      price: "$199.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
      title: "Sony ZX Wireless Headphones",
      rating: 4,
      price: "$150.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
      title: "Beoplay M5 Bluetooth Speaker",
      rating: 4,
      price: "$99.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
      title: "Apple Smart Watch 6 - Special Edition",
      rating: 5,
      price: "$299.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
      title: "Beylob 90 Speaker",
      rating: 2,
      price: "$199.00",
    },
    {
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
      title: "Sony ZX Wireless Headphones",
      rating: 4,
      price: "$150.00",
    },
  ];
  
  
  
  return (
    <div className="container pt-4 px-5 mb-5 bg-white ">

      <ProductsFilter className="filter"/>
      <div className="prods mb-5 grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="relative group">
            <div className="overflow-hidden aspect-w-1 aspect-h-1 bg-white">
              <img
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex items-start justify-between mt-4 space-x-4">
              <div>
                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                  <a href="#" title={item.title}>
                    {item.title}
                    <span className="absolute inset-0" aria-hidden="true"></span>
                  </a>
                </h3>
                <div className="flex items-center mt-2.5 space-x-px">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
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
                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                  {item.price}
                </p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Products