import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExportServiceRequest = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='bg-white p-8 sm:p-10 rounded-r-[1.9rem] flex flex-col justify-start lg:max-w-6xl mx-auto'>
                <button onClick={() => navigate(-1)} type="button" className="self-start cursor-pointer mb-6 inline-flex items-center gap-2 bg-[#2BA89C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#208a7e] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2BA89C] focus:ring-opacity-50"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                </svg>
                    Back
                </button>

                <p className='text-3xl font-semibold text-center text-gray-700 mb-10'>Fill Up The Form</p>
                <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Your Name' type='text' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Email Address' type='email' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Phone Number' type='tel' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Subject' type='text' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Pickup City' type='text' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Delivery City' type='text' />
                    <select className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200 appearance-none bg-white pr-8'>
                        <option>Freight Type</option>
                        <option>Air Freight</option>
                        <option>Sea Freight</option>
                        <option>Road Freight</option>
                    </select>
                    <select className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200 appearance-none bg-white pr-8'>
                        <option>Incoterms</option>
                        <option>EXW</option>
                        <option>FOB</option>
                        <option>CIF</option>
                    </select>
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Width (cm)' type='number' min='0' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Height (cm)' type='number' min='0' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Length (cm)' type='number' min='0' />
                    <input className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' placeholder='Weight (kg)' type='number' min='0' />
                    <textarea className='border border-gray-300 p-3 rounded-md col-span-1 sm:col-span-2 focus:ring-2 focus:ring-[#2BA89C] focus:border-transparent transition duration-200' rows='3' placeholder='Additional Notes'></textarea>
                    <button
                        type='submit'
                        className='col-span-1 sm:col-span-2 bg-[#2BA89C] text-white p-3 rounded-md font-bold text-lg hover:bg-[#208a7e] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2BA89C] focus:ring-opacity-50 cursor-pointer'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExportServiceRequest;