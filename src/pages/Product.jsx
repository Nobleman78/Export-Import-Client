import React from 'react';
import { Helmet } from 'react-helmet';

const Product = () => {
    return (
        <div>
            <main className='lg:max-w-7xl mx-auto px-10 py-10'>
                <Helmet>
                    <title>Products | Eximport</title>
                </Helmet>
                <h2>Welcome to product page</h2>
            </main>
        </div>
    );
};

export default Product;