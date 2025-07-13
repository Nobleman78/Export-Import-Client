import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import AuthContext from '../../ContextApi/AuthContext';
import ProductCard from './ProductCard';

const Product = () => {
    const { products } = useContext(AuthContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedQuality, setSelectedQuality] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
    const [showFilter, setShowFilter] = useState(false);

    const uniqueBrands = useMemo(() => {
        const brands = products.map(p => p.brand);
        return [...new Set(brands)];
    }, [products]);

    useEffect(() => {
        let result = [...products];
        if (selectedQuality) result = result.filter(p => p.quality === selectedQuality);
        if (selectedBrand) result = result.filter(p => p.brand === selectedBrand);
        result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
        setFilteredProducts(result);
    }, [products, selectedQuality, selectedBrand, priceRange]);

    return (
        <div className='bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] min-h-screen py-12 px-6 lg:px-20'>
            <Helmet><title>Products | Eximport</title></Helmet>

            <div className='max-w-7xl mx-auto'>

                {/* Mobile Filter Button */}
                <div className='lg:hidden mb-6'>
                    <button
                        onClick={() => setShowFilter(prev => !prev)}
                        className='bg-[#1e928e] text-white px-4 py-2 rounded-lg font-semibold'>
                        {showFilter ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>

                <div className='flex flex-col lg:flex-row gap-10'>
                    {/* Filters */}
                    <aside className={`bg-white p-6 rounded-xl shadow-md w-full lg:w-1/4 h-100 ${showFilter ? 'block' : 'hidden'} lg:block`}>
                        <h2 className='text-xl font-bold text-[#1e928e] mb-4'>Filter Products</h2>

                        {/* Quality */}
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Quality</label>
                            <select
                                value={selectedQuality}
                                onChange={e => setSelectedQuality(e.target.value)}
                                className='w-full p-2 border rounded-md'>
                                <option value=''>All</option>
                                <option value='New'>New</option>
                                <option value='Used'>Used</option>
                            </select>
                        </div>

                        {/* Brand */}
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Brand</label>
                            <select
                                value={selectedBrand}
                                onChange={e => setSelectedBrand(e.target.value)}
                                className='w-full p-2 border rounded-md'>
                                <option value=''>All</option>
                                {uniqueBrands.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* Price */}
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Price Range</label>
                            <div className='flex gap-2'>
                                <input type='number'
                                    value={priceRange.min}
                                    onChange={e => setPriceRange(prev => ({ ...prev, min: +e.target.value }))}
                                    placeholder='Min'
                                    className='w-1/2 p-2 border rounded-md'/>
                                <input type='number'
                                    value={priceRange.max}
                                    onChange={e => setPriceRange(prev => ({ ...prev, max: +e.target.value }))}
                                    placeholder='Max'
                                    className='w-1/2 p-2 border rounded-md'
                                />
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => {
                                setSelectedQuality('');
                                setSelectedBrand('');
                                setPriceRange({ min: 0, max: 2000 });
                            }}
                            className='w-full mt-4 bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg font-medium' >
                            Reset Filters
                        </button>
                    </aside>

                    {/* Products */}
                    <main className='w-full lg:w-3/4'>
                        <h1 className='text-3xl font-bold text-[#1e928e] mb-8'>All Products</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <p className='text-center col-span-full text-gray-500'>
                                    No products match the selected filters.
                                </p>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Product;
