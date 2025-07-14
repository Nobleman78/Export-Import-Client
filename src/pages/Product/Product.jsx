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
    const [sortOption, setSortOption] = useState('');
    const [itemsToShow, setItemsToShow] = useState(20);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);

    const uniqueBrands = useMemo(() => [...new Set(products.map(p => p.brand))], [products]);

    // Filter and sort products (without slicing)
    const filteredSortedProducts = useMemo(() => {
        let result = [...products];

        if (selectedQuality) result = result.filter(p => p.quality === selectedQuality);
        if (selectedBrand) result = result.filter(p => p.brand === selectedBrand);
        result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

        if (sortOption === 'lowToHigh') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'highToLow') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, selectedQuality, selectedBrand, priceRange, sortOption]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredSortedProducts.length / itemsToShow);

    // Get products for current page
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsToShow;
        const endIndex = startIndex + itemsToShow;
        setFilteredProducts(filteredSortedProducts.slice(startIndex, endIndex));
    }, [filteredSortedProducts, currentPage, itemsToShow]);

    // Reset to page 1 if filters, sorting, or itemsToShow changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedQuality, selectedBrand, priceRange, sortOption, itemsToShow]);

    // Pagination controls
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className='bg-[#f5f6fa] min-h-screen py-8 px-4 lg:px-20'>
            <Helmet><title>Products | Eximport</title></Helmet>

            <div className='max-w-7xl mx-auto'>
                {/* Mobile Filter Button */}
                <div className='lg:hidden mb-6 text-center'>
                    <button
                        onClick={() => setShowFilter(prev => !prev)}
                        className='bg-[#1e928e] hover:bg-[#176b68] transition-all duration-300 text-white px-6 py-2.5 rounded-xl shadow font-semibold text-lg'>
                        {showFilter ? 'Hide Filters' : 'Show Filters'}
                    </button>
                </div>

                <div className='flex flex-col lg:flex-row gap-6'>
                    {/* Filter Sidebar */}
                    <aside className={`bg-white border border-gray-200 rounded-xl h-[500px] shadow-sm px-6 py-6 w-full lg:w-1/4 space-y-6 ${showFilter ? 'block' : 'hidden'} lg:block`}>
                        <h2 className='text-xl font-bold text-[#1e928e]'>Filter Products</h2>

                        {/* Quality */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Quality</label>
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
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Brand</label>
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

                        {/* Price Range */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Price Range</label>
                            <div className='flex gap-2'>
                                <input
                                    type='number'
                                    value={priceRange.min}
                                    onChange={e => setPriceRange(prev => ({ ...prev, min: +e.target.value }))}
                                    placeholder='Min'
                                    className='w-1/2 p-2 border rounded-md' />
                                <input
                                    type='number'
                                    value={priceRange.max}
                                    onChange={e => setPriceRange(prev => ({ ...prev, max: +e.target.value }))}
                                    placeholder='Max'
                                    className='w-1/2 p-2 border rounded-md' />
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => {
                                setSelectedQuality('');
                                setSelectedBrand('');
                                setPriceRange({ min: 0, max: 2000 });
                            }}
                            className='w-full cursor-pointer mt-4 bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition'>
                            Reset Filters
                        </button>
                    </aside>

                    {/* Product Listing */}
                    <main className='w-full lg:w-3/4'>
                        {/* Sort/Show Top Bar */}
                        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 bg-white py-3 px-4 rounded'>
                            <h1 className='text-2xl font-bold text-[#1e928e]'>All Products</h1>
                            <div className='flex gap-4'>
                                <select
                                    value={itemsToShow}
                                    onChange={(e) => setItemsToShow(+e.target.value)}
                                    className='border rounded px-4 py-1 text-sm'>
                                    <option value={10}>Show: 10</option>
                                    <option value={20}>Show: 20</option>
                                    <option value={30}>Show: 30</option>
                                </select>
                                <select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className='border rounded px-4 py-1 text-sm'>
                                    <option value=''>Sort By</option>
                                    <option value='lowToHigh'>Price: Low to High</option>
                                    <option value='highToLow'>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <p className='text-center col-span-full text-gray-500 text-lg'>
                                    No products found.
                                </p>
                            )}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className='flex justify-center mt-8 space-x-2'>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className='px-3 py-1 border rounded disabled:opacity-50'>
                                    Prev
                                </button>

                                {/* Show page numbers */}
                                {[...Array(totalPages)].map((_, idx) => {
                                    const page = idx + 1;
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`px-3 py-1 border rounded ${page === currentPage ? 'bg-[#1e928e] text-white' : 'hover:bg-gray-200'}`}>
                                            {page}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className='px-3 py-1 border rounded disabled:opacity-50'>
                                    Next
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Product;
