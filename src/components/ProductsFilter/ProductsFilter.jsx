import React, { useState, useEffect } from 'react';

const ProductsFilter = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        // Fetch products from an API or database
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePriceRangeChange = (e) => {
        setPriceRange(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (priceRange === '' || product.price <= parseFloat(priceRange)) &&
            (category === '' || product.category === category)
        );
    });

    return (
        <div>
            <h3>Filter</h3>

            {/* Filter Options */}
            <div className="filter-section bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
                <input
                    className='mr-2 my-1'
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <select className='mx-2 my-1' value={priceRange} onChange={handlePriceRangeChange}>
                    <option value="">All Prices</option>
                    <option value="50">Under $50</option>
                    <option value="100">Under $100</option>
                    <option value="200">Under $200</option>
                </select>

                <select className='mx-2 my-1' value={category} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="electronics">Category1</option>
                    <option value="fashion">Category2</option>
                    <option value="home">Category3</option>
                </select>
            </div>

            {/* Product List */}
            {/* <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default ProductsFilter;
