import React from 'react';
import processImageOne from '../assets/Process/process-image1.png'
import processImageTwo from '../assets/Process/process-image2.png'
import processImageThree from '../assets/Process/process-image3.png'
import processImageFour from '../assets/Process/process-image4.png'
const OurProcess = () => {
    const process = [
        {
            image: processImageOne,
            title: 'Request A Quote'
        },
        {
            image: processImageTwo,
            title: 'Call Back From Office'
        },
        {
            image: processImageThree,
            title: 'Port Delivery Available'
        },
        {
            image: processImageFour,
            title: 'Deliver Shipping'
        }
    ]
    return (
        <div className='mt-30 '>
            <main className='mx-20 flex gap-20'>
                {/* Left Section */}
                <section className='flex flex-col gap-10 w-1/2 '>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-2xl font-semibold'>Our Process</h2>
                        <p className='text-5xl font-semibold  '>Working Process</p>
                    </div>
                    <p style={{ fontFamily: 'Poppins, sans-serif' }} className='text-justify w-130 text-xl text-gray-800'>Fusce lorem nunc, sollicitudin eget eaccumsan temp Curabitu quis ullamcorper neque. Donec pullmassad arcu necfa lectus rhon. Praeset utvelinon augueining haselu ornare liberone acce volupat Nulla nvenenats enim, quis accumsan keque tortor eu felis.</p>
                    <hr className='text-gray-300 w-130' />

                    <div style={{ fontFamily: 'Poppins' }} className="space-y-4 max-w-md ">
                        {/* Air Freight */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold">Air Freight</span>
                                <span className="text-sm font-semibold">95%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-teal-500 h-2 rounded-full w-[95%]"></div>
                            </div>
                        </div>

                        {/* Land Transport */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold">Land Transport</span>
                                <span className="text-sm font-semibold">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-teal-500 h-2 rounded-full w-[80%]"></div>
                            </div>
                        </div>

                        {/* Ocean Freight */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold">Ocean Freight</span>
                                <span className="text-sm font-semibold">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-teal-500 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Right Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full md:w-1/2 mx-auto">
                    {process.map((proc, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-gradient-to-b from-[#3EB492] to-[#15898D] flex flex-col items-center px-5 py-10 gap-6 shadow-lg"
                        >
                            <div className="bg-[#228b8b] p-8 rounded-full">
                                <img
                                    src={proc.image}
                                    loading="lazy"
                                    alt="process-image"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <h2 className="text-2xl text-white font-semibold text-center">{proc.title}</h2>
                        </div>
                    ))}
                </section>

            </main>
        </div>
    );
};

export default OurProcess;