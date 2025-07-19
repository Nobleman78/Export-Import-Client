import React from 'react';
import { Helmet } from 'react-helmet';

const Notfound = () => {
    return (
        <div className='mt-10 mb-25'>
            <Helmet>
                <title>Not Found |NextEra Logistic</title>
            </Helmet>
            <h2 className='text-6xl text-center'>404 | Not Found</h2>
        </div>
    );
};

export default Notfound;