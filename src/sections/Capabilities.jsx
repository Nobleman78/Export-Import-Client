import React from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import image1 from '../assets/CapabilitiesImages/capabilities-image1.png';
import image2 from '../assets/CapabilitiesImages/capabilities-image2.png';
import image3 from '../assets/CapabilitiesImages/capabilities-image3.png';
import image4 from '../assets/CapabilitiesImages/capabilities-image4.png';

const Capabilities = () => {
    const capabilities = [
        {
            image: image1,
            title: 'Ocean Freight',
            des: 'Lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        },
        {
            image: image2,
            title: 'Air Freight',
            des: 'Lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        },
        {
            image: image3,
            title: 'Land Freight',
            des: 'Lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        },
        {
            image: image4,
            title: 'Rail Freight',
            des: 'Lacinia tincidla apteaciti sociosqu altora torquen massa placduis.'
        }
    ];

    return (
        <div className='bg-[#299792] sm:bg-white pb-5'>
            {/* Top Section */}
            <main className='flex flex-col sm:flex-row sm:h-[500px]'>
                <div className='w-full sm:w-1/2 bg-[#299792]'>
                    <div className='text-4xl md:text-5xl lg:text-6xl font-bold px-5 py-10 sm:px-20 sm:py-20 text-white leading-tight'>
                        <h2>
                            Import Export <span className='inline-flex items-center gap-2'>Capabilities <MdOutlineDoubleArrow /></span>
                        </h2>
                    </div>
                </div>

                <div className='w-full sm:w-1/2 p-5 sm:px-20 sm:py-20 text-lg text-white sm:text-black'>
                    <p className='text-justify' style={{ fontFamily: 'Roboto, sans-serif' }}>
                        "We offer end-to-end import and export solutions designed to streamline global trade. From sourcing and compliance to logistics and delivery, our expertise ensures your goods move efficiently and securely across borders."
                    </p>
                </div>
            </main>

            {/* Capabilities Cards Section */}
            <div className='relative z-10 mt-10 sm:-mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg-white shadow-xl mx-5 sm:mx-20 px-6 sm:px-12 py-16 rounded-2xl'>
                {capabilities.map((capa, index) => (
                    <div key={index} className='flex flex-col items-center text-center gap-5'>
                        <div className='relative w-24 h-24'>
                            <span className='bg-gray-100 rounded-full absolute top-[-10px] left-[-10px] w-full h-full z-0'></span>
                            <img
                                src={capa.image}
                                alt={capa.title}
                                className='relative z-10 w-20 h-full object-contain animate-fadey '
                                loading='lazy'
                            />
                        </div>
                        <h2 className='text-xl font-semibold'>{capa.title}</h2>
                        <p className='text-sm sm:text-base text-gray-600 px-2'>{capa.des}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Capabilities;
