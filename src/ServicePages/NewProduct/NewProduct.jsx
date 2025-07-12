import React from 'react';
import NewProductCard from './NewProductCard';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
const products = [
    {
        'id': 1,
        'name': 'Dell XPS 13',
        'img': 'https://m.media-amazon.com/images/I/71oKS0ZTTCL._AC_UY218_.jpg',
        'price': 1200,
        'brand': 'Dell',
        'quality': 'New',
        'description': 'Dell XPS 13 with Intel i7 and 16GB RAM.',
        'madeIn': 'USA',
        'availability': 'In Stock'
    },
    {
        'id': 2,
        'name': 'iPhone 14 Pro Max',
        'img': 'https://m.media-amazon.com/images/I/513FAMDqgXL._AC_UY218_.jpg',
        'price': 999,
        'brand': 'Apple',
        'quality': 'New',
        'description': '128GB storage, Midnight Black.',
        'madeIn': 'China',
        'availability': 'In Stock'
    },
    {
        'id': 3,
        'name': 'Samsung 970 EVO Plus SSD',
        'img': 'https://m.media-amazon.com/images/I/71OYNmVRFhL._AC_UY218_.jpg',
        'price': 150,
        'brand': 'Samsung',
        'quality': 'New',
        'description': 'NVMe M.2 SSD, 1TB.',
        'madeIn': 'South Korea',
        'availability': 'Limited Stock'
    },
    {
        'id': 4,
        'name': 'LG UHD 4K Monitor',
        'img': 'https://m.media-amazon.com/images/I/717BynQinOL._AC_UY218_.jpg',
        'price': 350,
        'brand': 'LG',
        'quality': 'New',
        'description': '27” IPS Display with HDR10.',
        'madeIn': 'Vietnam',
        'availability': 'In Stock'
    },
    {
        'id': 5,
        'name': 'Fossil Gen 6 Smartwatch',
        'img': 'https://m.media-amazon.com/images/I/71DP0v5VqhL._AC_UY218_.jpg',
        'price': 200,
        'brand': 'Fossil',
        'quality': 'New',
        'description': 'Smartwatch with AMOLED display.',
        'madeIn': 'India',
        'availability': 'In Stock'
    },
    {
        'id': 6,
        'name': 'Spigen Rugged Armor Case',
        'img': 'https://m.media-amazon.com/images/I/610V9tXzKuL._AC_UY218_.jpg',
        'price': 15,
        'brand': 'Spigen',
        'quality': 'New',
        'description': 'Case for iPhone 14.',
        'madeIn': 'China',
        'availability': 'In Stock'
    },
    {
        'id': 7,
        'name': 'Corsair Vengeance LPX RAM',
        'img': 'https://m.media-amazon.com/images/I/61wCOVcyvFL._AC_UY218_.jpghttps://example.com/ram1.jpg',
        'price': 90,
        'brand': 'Corsair',
        'quality': 'New',
        'description': '16GB (2x8GB) DDR4 3200MHz.',
        'madeIn': 'Taiwan',
        'availability': 'In Stock'
    },
    {
        'id': 8,
        'name': 'Samsung Galaxy A74 5G',
        'img': 'https://m.media-amazon.com/images/I/61s7W4UjnoL._AC_UY218_.jpg',
        'price': 599,
        'brand': 'Samsung',
        'quality': 'New',
        'description': '128GB, Prism Silver.',
        'madeIn': 'South Korea',
        'availability': 'Out of Stock'
    },
    {
        'id': 9,
        'name': 'HP Pavilion 15',
        'img': 'https://m.media-amazon.com/images/I/71aTEZOda0L._AC_UY218_.jpg',
        'price': 890,
        'brand': 'HP',
        'quality': 'New',
        'description': 'Ryzen 7, 512GB SSD.',
        'madeIn': 'China',
        'availability': 'In Stock'
    },
    {
        'id': 10,
        'name': 'Acer 144Hz Monitor',
        'img': 'https://m.media-amazon.com/images/I/71yo3bmyBnL._AC_UY218_.jpg',
        'price': 270,
        'brand': 'Acer',
        'quality': 'New',
        'description': '24” Full HD IPS, 144Hz refresh rate.',
        'madeIn': 'Malaysia',
        'availability': 'Limited Stock'
    },
    {
        'id': 11,
        'name': 'G.Skill Ripjaws V RAM',
        'img': 'https://m.media-amazon.com/images/I/618SEnJR1nL._AC_UY218_.jpg',
        'price': 70,
        'brand': 'G.Skill',
        'quality': 'New',
        'description': '16GB (2x8GB) DDR4 3000MHz.',
        'madeIn': 'Taiwan',
        'availability': 'In Stock'
    },
    {
        'id': 12,
        'name': 'WD Blue SATA SSD',
        'img': 'https://m.media-amazon.com/images/I/71DvBmAUduL._AC_UY218_.jpg',
        'price': 110,
        'brand': 'WD',
        'quality': 'New',
        'description': '1TB SATA SSD.',
        'madeIn': 'Thailand',
        'availability': 'In Stock'
    },
    {
        'id': 13,
        'name': 'OtterBox Commuter Case',
        'img': 'https://m.media-amazon.com/images/I/71Go+X-xMOL._AC_UY218_.jpg',
        'price': 10,
        'brand': 'OtterBox',
        'quality': 'New',
        'description': 'Case for Galaxy S21.',
        'madeIn': 'China',
        'availability': 'In Stock'
    },
    {
        'id': 14,
        'name': 'Garmin Venu Sq Music',
        'img': 'https://m.media-amazon.com/images/I/61e+g1OYkkL._AC_UY218_.jpg',
        'price': 299,
        'brand': 'Garmin',
        'quality': 'New',
        'description': 'GPS Smartwatch with music.',
        'madeIn': 'USA',
        'availability': 'In Stock'
    },
    {
        'id': 15,
        'name': 'MacBook Air M2',
        'img': 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg',
        'price': 1500,
        'brand': 'Apple',
        'quality': 'New',
        'description': '13” Retina Display, M2 chip.',
        'madeIn': 'China',
        'availability': 'Pre-Order'
    },
    {
        'id': 16,
        'name': 'Xiaomi Redmi Note 13 Pro',
        'img': 'https://m.media-amazon.com/images/I/51pk5PzpzZL._AC_UY218_.jpg',
        'price': 349,
        'brand': 'Xiaomi',
        'quality': 'New',
        'description': '256GB, Graphite Gray.',
        'madeIn': 'China',
        'availability': 'In Stock'
    },
    {
        'id': 17,
        'name': 'Crucial MX500 SSD',
        'img': 'https://m.media-amazon.com/images/I/51zhuXxYuRL._AC_UY218_.jpg',
        'price': 180,
        'brand': 'Crucial',
        'quality': 'New',
        'description': '2TB 3D NAND SATA SSD.',
        'madeIn': 'Singapore',
        'availability': 'In Stock'
    },
    {
        'id': 18,
        'name': 'Ringke Fusion-X Case',
        'img': 'https://m.media-amazon.com/images/I/71J03voAOtL._AC_UY218_.jpg',
        'price': 8,
        'brand': 'Ringke',
        'quality': 'New',
        'description': 'Case for Pixel 7.',
        'madeIn': 'China',
        'availability': 'In Stock'
    },
    {
        'id': 19,
        'name': 'Kingston Fury Beast RAM',
        'img': 'https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_UY218_.jpg',
        'price': 60,
        'brand': 'Kingston',
        'quality': 'New',
        'description': '8GB DDR4 3200MHz RAM.',
        'madeIn': 'USA',
        'availability': 'In Stock'
    },
    {
        'id': 20,
        'name': 'Amazfit GTR 4 Smartwatch',
        'img': 'https://m.media-amazon.com/images/I/61b-75iHbuL._AC_UY218_.jpg',
        'price': 250,
        'brand': 'Amazfit',
        'quality': 'New',
        'description': 'Smartwatch with Alexa and GPS.',
        'madeIn': 'China',
        'availability': 'In Stock'
    }
]
const NewProduct = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-gradient-to-br from-gray-100 to-white min-h-screen py-12 px-6 lg:px-20'>
            <div className='text-gray-600 text-md mb-6'>
                <Link to='/' className='text-[#1e928e] hover:underline'>Home</Link>
                <span className='mx-2 text-gray-400'>/</span>
                <button onClick={() => navigate(-1)} className='text-[#1e928e] hover:underline'>
                    Back
                </button>
            </div>
            <Helmet>
                <title>NewProduct | Eximport</title>
            </Helmet>
            <main className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-12 text-[#1e928e]'> Latest Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {products.map(product => (
                        <NewProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default NewProduct;