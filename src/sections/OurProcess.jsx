import React from 'react';
import processImageOne from '../assets/Process/process-image1.png';
import processImageTwo from '../assets/Process/process-image2.png';
import processImageThree from '../assets/Process/process-image3.png';
import processImageFour from '../assets/Process/process-image4.png';

const OurProcess = () => {
    const process = [
        { image: processImageOne, title: 'Request A Quote' },
        { image: processImageTwo, title: 'Call Back From Office' },
        { image: processImageThree, title: 'Port Delivery Available' },
        { image: processImageFour, title: 'Deliver Shipping' },
    ];

    const progressData = [
        { label: 'Air Freight', value: 95 },
        { label: 'Land Transport', value: 80 },
        { label: 'Ocean Freight', value: 90 },
    ];

    return (
        <div className='mt-40'>
            <main className='mx-6 md:mx-20 flex flex-col md:flex-row gap-12 md:gap-20'>
                {/* Left Section */}
                <section className='flex flex-col gap-10 w-full md:w-1/2'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-2xl font-semibold text-gray-700'>Our Process</h2>
                        <p className='text-4xl md:text-5xl font-bold text-gray-900'>Working Process</p>
                    </div>

                    <p style={{fontFamily:'Poppins'}} className='text-lg text-gray-800 text-justify max-w-xl leading-relaxed font-sans'>
                        Fusce lorem nunc, sollicitudin eget eaccumsan temp. Curabitu quis ullamcorper neque. Donec pulvinar arcu nec
                        lectus rhoncus. Praesent ut velit non augue ornare libero. Nulla venenatis enim, quis accumsan neque tortor
                        eu felis.
                    </p>

                    <hr className='border-gray-300 max-w-xl' />

                    <div className='space-y-8 max-w-md'>
                        {progressData.map(({ label, value }, i) => (
                            <div style={{fontFamily:'Poppins'}} key={i}>
                                <div className='flex justify-between mb-1'>
                                    <span className='text-lg font-medium '>{label}</span>
                                    <span className='font-semibold '>{value}%</span>
                                </div>
                                <div
                                    className='w-full bg-gray-200 rounded-full h-2'
                                    role='progressbar'
                                    aria-valuenow={value}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    <div className='bg-teal-500 h-2 rounded-full' style={{ width: `${value}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Right Section */}
                <section className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2'>
                    {process.map((proc, index) => (
                        <div
                            key={index}
                            className='rounded-2xl bg-gradient-to-b from-[#3EB492] to-[#15898D] flex flex-col items-center px-5 py-10 gap-6 shadow-lg'
                        >
                            <div className='bg-[#228b8b] p-8 rounded-full'>
                                <img
                                    src={proc.image}
                                    alt={proc.title}
                                    loading='lazy'
                                    className='w-12 h-12 object-contain'
                                />
                            </div>
                            <h3 className='text-2xl text-white font-semibold text-center'>{proc.title}</h3>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default OurProcess;
