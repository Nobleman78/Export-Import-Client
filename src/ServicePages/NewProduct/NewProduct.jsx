import React, { useContext, useMemo } from 'react';
import NewProductCard from './NewProductCard';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../ContextApi/AuthContext';

const NewProduct = () => {
    const navigate = useNavigate();
    const { products } = useContext(AuthContext);
    const NewProducts = useMemo(() => products.filter(item => item.quality === 'New'),
        [products]);
    return (
        <div className='bg-gradient-to-br from-gray-50  to-gray-50 min-h-screen py-12 px-6 lg:px-20'>
            <div className='text-black text-md mb-6 bg-white px-5 rounded-xl border border-gray-300 py-3 w-[150px]'>
                <Link to='/' className='hover:underline'>Home</Link>
                <span className='mx-2'>/</span>
                <button onClick={() => navigate(-1)} className='hover:underline cursor-pointer'>
                    Back
                </button>
            </div>

            <Helmet>
                <title>NewProduct | Eximport</title>
            </Helmet>

            <main className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-12 text-black'>Latest Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {NewProducts?.length > 0 ? (
                        NewProducts.map(product => (
                            <NewProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className='text-center col-span-full text-gray-500'>No new products available.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default NewProduct;
