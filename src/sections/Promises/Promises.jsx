import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const services = [
    'Warehousing and Distribution',
    'Freight Forwarding',
    'Supply Chain Management',
    'E-commerce Logistics',
    'Last Mile Delivery',
    'Cold Chain Logistics',
    'Reverse Logistics',
    'Project Cargo Heavy Haulage',
    'Dangerous Goods Handling'
];

const stats = [
    { value: '100%', label: 'On-Time Delivery' },
    { value: '85%', label: 'Global Network Coverage' },
    { value: '95%', label: 'Cross Border Efficiency' }
];

const chunkServices = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const Promises = () => {
    const columns = chunkServices(services, 3);

    return (
        <div>
            <main className='mt-20 w-full'>
                <h2 className='text-center text-2xl lg:text-5xl font-bold w-[250px] lg:w-auto lg:max-w-lg mx-auto '>
                    Delivering Possibilities On Time
                </h2>

                <div className='max-w-7xl mx-auto bg-white p-10 rounded-3xl shadow-2xl mt-10 px-20 '>
                    {/* Combined Columns and Stats Section */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {columns.map((col, colIndex) => (
                            <div key={colIndex}>
                                {/* Service List */}
                                <div className='mb-8'>
                                    {col.map((service, index) => (
                                        <div key={index} className='flex items-start gap-2 mb-3'>
                                            <IoIosArrowForward className='text-[#3EB492] mt-1' />
                                            <p
                                                style={{ fontFamily: 'roboto' }}
                                                className='font-semibold text-sm md:text-base'
                                            >
                                                {service}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Stat */}
                                {stats[colIndex] && (
                                    <div className='text-left'>
                                        <h3 className='text-[#3EB492] text-5xl md:text-6xl font-bold'>
                                            {stats[colIndex].value}
                                        </h3>
                                        <hr className='my-4 border-gray-300 w-4/5' />
                                        <p className='font-semibold text-lg'>{stats[colIndex].label}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            
            </main>
        </div>
    );
};

export default Promises;
