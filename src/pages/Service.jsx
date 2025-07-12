import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Outlet } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Export',
        description: 'Sell your products to global markets with complete support for documentation, logistics, and compliance.',
        icon: '🌍',
        route: '/services/export',
    },
    {
        id: 2,
        title: 'Import',
        description: 'Source goods from international suppliers with customs, tracking, and delivery handled for you.',
        icon: '📦',
        route: '/services/import',
    },
    {
        id: 3,
        title: 'New Product Sell',
        description: 'List brand-new items for sale locally or internationally and attract potential buyers easily.',
        icon: '🆕',
        route: '/services/newProduct',
    },
    {
        id: 4,
        title: 'Used Product Sell',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        icon: '♻️',
        route: '/services/usedProduct',
    },
];


const Service = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-gray-50 min-h-screen py-10 px-6 lg:px-20'>
            <Helmet>
                <title>Service | Eximport</title>
            </Helmet>
            <div className='max-w-7xl mx-auto text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-800 mb-4'>Our Services</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Choose the service you need to manage your international trade with confidence and ease.
                </p>
            </div>

            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {services.map((service) => (
                    <div key={service.id} className='bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center justify-between text-center '>
                        <div className='text-5xl mb-4'>{service.icon}</div>
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{service.title}</h3>
                        <p className='text-gray-600 mb-4'>{service.description}</p>
                        <button
                            className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition cursor-pointer'
                            onClick={() => navigate(service.route)}>
                            Show More+
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
