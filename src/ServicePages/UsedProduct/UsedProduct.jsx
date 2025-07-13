import { useContext, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AuthContext from '../../ContextApi/AuthContext';
import UsedProductCard from './UsedProductCard';

const UsedProduct = () => {
    const { products } = useContext(AuthContext)
    const usedProducts = useMemo(
        () => products.filter(product => product.quality === 'Used'),
        [products]
    );
    return (
      <div className='bg-gradient-to-br from-gray-50  to-gray-50 min-h-screen py-12 px-6 lg:px-20'>
            <Helmet>
                <title>Used Product | Eximport</title>
            </Helmet>
            <div className='text-black text-md mb-6 w-[150px] px-5 py-3 border bg-white border-gray-300 rounded-xl'>
                <Link to='/' className=' hover:underline'>Home</Link>
                <span className='mx-2'>/</span>
                <button onClick={() => window.history.back()} className='hover:underline'>
                    Back
                </button>
            </div>

            {/* Main Section */}
            <main className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-12 text-black'> Used Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {
                        usedProducts?.length > 0 ? (
                            usedProducts.map(product => (
                                <UsedProductCard key={product.id} product={product} />
                            ))

                        ) :
                            (
                                <p className='text-center col-span-full text-gray-500'>No new products available.</p>

                            )}
                </div>
            </main>

        </div>
    );
};

export default UsedProduct;