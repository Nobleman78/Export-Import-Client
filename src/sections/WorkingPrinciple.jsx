import React from 'react';
import workImageOne from '../assets/WorkingPrinciple/work-image1.jpg';
import workImageTwo from '../assets/WorkingPrinciple/work-image2.jpg';
import workIconOne from '../assets/WorkingPrinciple/work-icon1.jpg'
import workIconTwo from '../assets/WorkingPrinciple/work-icon2.jpg'
import workContact from '../assets/WorkingPrinciple/work-contact-icon.jpg'
import { IoIosArrowForward } from "react-icons/io";

const images = [
    { src: workImageOne, alt: 'work-image-one' },
    { src: workImageTwo, alt: 'work-image-two' },
];


const WorkingPrinciple = () => {
    return (
        <div>
            <main className='mt-20 flex flex-col lg:flex-row gap-20 px-5 lg:px-20'>
                <div className='flex flex-col md:flex-row gap-5 md:gap-10 md:px-10 w-full lg:w-1/2 h-full '>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className='rounded-2xl'
                            src={image.src}
                            loading='lazy'
                            alt={image.alt}
                        />
                    ))}
                </div>
                <div className='w-full lg:w-1/2 sm:px-10 flex flex-col gap-8  '>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-md lg:text-3xl'>How It Works</h2>
                        <p className='text-2xl lg:text-5xl font-semibold'>We Provide Timely and Cost Effective.</p>
                    </div>
                    <p style={{fontFamily:'roboto'}} className='text-xl'>From placing your order to final delivery, our process is designed for speed, accuracy, and transparency. We handle everything—from product sourcing and customs documentation to warehousing, inventory management, and transportation—ensuring your goods move efficiently across borders.</p>
                    {/* Middle Part */}
                    <div className='flex flex-col md:flex-row gap-6 sm:gap-4 '>
                        <div className='flex items-center gap-3 w-full sm:w-1/2'>
                            <img className='border-2 border-gray-200 p-1 rounded-xl' src={workIconOne} alt="work-icon-one" />
                            <div className='flex lg:flex-col font-semibold text-lg text-gray-800 gap-2'>
                                <h2>General Air Freight</h2>
                                <p>Products</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 w-full sm:w-1/2'>
                            <img className='border-2 border-gray-200 p-1 rounded-xl' src={workIconTwo} alt="work-icon-two" />
                            <div className='flex lg:flex-col  text-lg font-semibold text-gray-800 gap-2'>
                                <h2>Less Container</h2>
                                <p>Loading</p>
                            </div>
                        </div>
                    </div>
                    {/* End Part */}
                    <div className='flex flex-col md:flex-row gap-3'>
                        <div className='flex flex-col gap-4 w-full sm:w-1/2 text-lg text-gray-800 font-semibold'>
                            <div className='flex items-center gap-2'>
                                <IoIosArrowForward  className='text-[#15898D]'/>
                                <h2>Managing logistics for world</h2>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoIosArrowForward className='text-[#15898D]' />
                                <h2>We Guarantee Service</h2>
                            </div>
                        </div>
                        <div className='flex gap-7 w-full sm:w-1/2'>
                            <img className='w-10 h-10' src={workContact} alt="work-contact-image" />
                            <div className=''>
                                <h2 className='text-2xl'>123 456 789</h2>
                                <p style={{fontFamily:'roboto'}} className='text-[#15898D]'>Have Any Question</p>
                            </div>
                        </div>
                        
                    </div>
                   <button className='bg-gradient-to-b from-[#15898D] to-[#106b6e] px-5 py-4 cursor-pointer rounded-full w-50 text-lg text-white hover:text-black hover:bg-gradient-to-t hover:from-[#15898D] hover:to-[#0c494b]'>Have Any Quote</button>
                </div>
            </main>
        </div>
    );
};

export default WorkingPrinciple;
