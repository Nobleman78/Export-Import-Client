import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiHome, FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { FaSearch, FaStar, FaCheck } from 'react-icons/fa';
import NewProductCard from './NewProductCard';
import UseProducts from '../../Utility/Hooks/UseProducts';

const NewProduct = () => {
    const [products] = UseProducts()
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState('featured');

    // Extract all unique categories from products
    const categories = useMemo(() => {
        const allCategories = products.flatMap(product => product.categories || []);
        return [...new Set(allCategories)];
    }, [products]);

    const newProducts = useMemo(() => {
        let filtered = products.filter(product => product.quality === 'New');

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply price filter
        filtered = filtered.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        // Apply category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                product.categories?.some(cat => selectedCategories.includes(cat))
            );
        }

        // Apply sorting
        switch (sortOption) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case 'newest':
                filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            default:
                // Featured (default sorting)
                break;
        }

        return filtered;
    }, [products, searchTerm, priceRange, selectedCategories, sortOption]);

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const resetFilters = () => {
        setSearchTerm('');
        setPriceRange([0, 10000]);
        setSelectedCategories([]);
        setSortOption('featured');
    };

    return (
        <div className='min-h-screen ]'>


            <Helmet>
                <title> New Products | Eximport</title>
            </Helmet>


            {/* Main Content */}
            <div className='relative py-12 px-6 lg:px-20 max-w-7xl mx-auto'>
                {/* Luxury Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center text-[#888] text-sm mb-8 font-medium'
                >
                    <Link to='/' className='flex items-center hover:text-teal-500 transition-colors'>
                        <FiHome className='mr-2' />
                        Home
                    </Link>
                    <span className='mx-2'><IoIosArrowForward/></span>
                    <Link className='flex items-center gap-2' to='/product'> Products <IoIosArrowForward className='mr-2'/></Link>
                    <span className='text-teal-500'> New Products</span>
                </motion.div>

                {/* Premium Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='mb-12 text-center'
                >
                    <h1 className='text-4xl md:text-5xl font-serif font-light text-[#333] mb-4'>
                        <span className='font-medium'>New</span> Products
                    </h1>
                    <p className='text-[#666] max-w-2xl mx-auto text-lg'>
                        Discover authenticated premium goods with exceptional value and quality assurance.
                    </p>
                </motion.div>

                {/* Luxury Control Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='flex flex-col md:flex-row gap-4 items-center justify-between mb-12'
                >
                    <div className='relative w-full md:w-96'>
                        <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#999]' />
                        <input
                            type='text'
                            placeholder='Search our collection...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full pl-12 pr-4 py-3 border-2 bg-white focus:outline-none   rounded-full'
                        />
                    </div>

                    <div className='flex items-center gap-4 w-full md:w-auto'>
                        <div className='relative group'>
                            <button
                                className='flex items-center gap-2 px-4 py-3 border border-[#ddd] text-[#555] hover:border-[#b78d65] transition-colors'
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <FiFilter />
                                Filters
                                {selectedCategories.length > 0 || priceRange[1] < 10000 ? (
                                    <span className='bg-[#b78d65] text-white text-xs px-2 py-1 rounded-full'>
                                        {selectedCategories.length + (priceRange[1] < 10000 ? 1 : 0)}
                                    </span>
                                ) : null}
                            </button>

                            <AnimatePresence>
                                {showFilters && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className='absolute right-0 mt-2 w-72 bg-white shadow-xl z-10 border border-[#eee] p-6'
                                    >
                                        <div className='flex justify-between items-center mb-4'>
                                            <h3 className='text-lg font-medium text-[#333]'>Refine Selection</h3>
                                            <div className='flex gap-2'>
                                                <button
                                                    onClick={resetFilters}
                                                    className='text-sm text-[#b78d65] hover:underline'
                                                >
                                                    Reset
                                                </button>
                                                <button
                                                    onClick={() => setShowFilters(false)}
                                                    className='text-[#999] hover:text-[#333]'
                                                >
                                                    <FiX size={20} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className='space-y-6'>
                                            {/* Price Range Filter */}
                                            <div>
                                                <h4 className='font-medium mb-3 text-[#555]'>Price Range</h4>
                                                <div className='space-y-4'>
                                                    <input
                                                        type='range'
                                                        min="0"
                                                        max="10000"
                                                        step="100"
                                                        value={priceRange[1]}
                                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                        className='w-full accent-[#b78d65]'
                                                    />
                                                    <div className='flex justify-between text-sm text-[#666]'>
                                                        <span>${priceRange[0]}</span>
                                                        <span>${priceRange[1]}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Category Filter */}
                                            <div>
                                                <h4 className='font-medium mb-3 text-[#555]'>Categories</h4>
                                                <div className='space-y-2'>
                                                    {categories.map(category => (
                                                        <button
                                                            key={category}
                                                            onClick={() => toggleCategory(category)}
                                                            className={`flex items-center w-full text-left px-3 py-2 text-sm transition-colors ${selectedCategories.includes(category)
                                                                ? 'text-[#b78d65] font-medium'
                                                                : 'text-[#666] hover:text-[#333]'
                                                                }`}
                                                        >
                                                            {selectedCategories.includes(category) && (
                                                                <FaCheck className='mr-2 text-[#b78d65]' size={12} />
                                                            )}
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className='relative group flex-1 md:flex-none'>
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className='appearance-none pl-4 pr-10 py-3 border border-[#ddd] text-[#555] hover:border-[#b78d65] transition-colors bg-white w-full'
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest Arrivals</option>
                            </select>
                            <FiChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#999] pointer-events-none' />
                        </div>
                    </div>
                </motion.div>

                {/* Luxury Products Grid */}
                {newProducts?.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                    >
                        {newProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ y: -5 }}
                            >
                                <NewProductCard product={product} premium={true} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='text-center col-span-full py-16'
                    >
                        <div className='inline-block p-8 bg-white border border-[#eee]'>
                            <FaStar className='mx-auto text-4xl text-[#ddd] mb-4' />
                            <h3 className='text-xl font-medium text-[#333] mb-2'>No matching products found</h3>
                            <p className='text-[#666] mb-6 max-w-md mx-auto'>
                                {searchTerm || selectedCategories.length > 0 || priceRange[1] < 10000
                                    ? 'Your search criteria did not match any of our curated pre-owned items.'
                                    : 'Our collection of pre-owned luxury items is currently being updated.'}
                            </p>
                            {(searchTerm || selectedCategories.length > 0 || priceRange[1] < 10000) && (
                                <button
                                    onClick={resetFilters}
                                    className='px-6 py-3 bg-teal-500 text-white hover:bg-[#a57d55] transition-colors'
                                >
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default NewProduct;