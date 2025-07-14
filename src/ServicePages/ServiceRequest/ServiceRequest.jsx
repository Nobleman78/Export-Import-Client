import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExportServiceRequest = () => {
    const navigate = useNavigate();

    const handleForm = (event) => {
        event.preventDefault(); 
        const form = event.target;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            subject: form.subject.value,
            pickupCity: form.pickupcity.value,
            deliveryCity: form.delivercity.value,
            freightType: form.type.value,
            incoterms: form.incoterms?.value || '', 
            width: form.width?.value,
            height: form.height?.value,
            length: form.length?.value,
            weight: form.weight?.value,
            notes: form.notes?.value,
        };

        console.log('Submitted Data:', formData);
        form.reset();
        alert('Form submitted successfully!');
    };

    return (
        <div>
            <div className='bg-white p-8 sm:p-10 rounded-r-[1.9rem] flex flex-col justify-start lg:max-w-6xl mx-auto'>
                <button
                    onClick={() => navigate(-1)}
                    type="button"
                    className="self-start cursor-pointer mb-6 inline-flex items-center gap-2 bg-[#2BA89C] text-white px-4 py-2 rounded-md font-medium hover:bg-[#208a7e] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2BA89C] focus:ring-opacity-50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                </button>

                <p className='text-3xl font-semibold text-center text-gray-700 mb-10'>Fill Up The Form</p>

                <form onSubmit={handleForm} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <input name='name' type='text' placeholder='Your Name' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' required />
                    <input name='email' type='email' placeholder='Email Address' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' required />
                    <input name='phone' type='tel' placeholder='Phone Number' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' required />
                    <input name='subject' type='text' placeholder='Subject' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />
                    <input name='pickupcity' type='text' placeholder='Pickup City' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />
                    <input name='delivercity' type='text' placeholder='Delivery City' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />

                    <select name='type' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] bg-white pr-8' required>
                        <option value='' disabled selected>Freight Type</option>
                        <option>Air Freight</option>
                        <option>Sea Freight</option>
                        <option>Road Freight</option>
                    </select>

                    <select name='incoterms' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C] bg-white pr-8'>
                        <option value='' disabled selected>Incoterms</option>
                        <option>EXW</option>
                        <option>FOB</option>
                        <option>CIF</option>
                    </select>

                    <input name='width' type='number' min='0' placeholder='Width (cm)' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />
                    <input name='height' type='number' min='0' placeholder='Height (cm)' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />
                    <input name='length' type='number' min='0' placeholder='Length (cm)' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />
                    <input name='weight' type='number' min='0' placeholder='Weight (kg)' className='border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#2BA89C]' />

                    <textarea name='notes' rows='3' placeholder='Additional Notes' className='border border-gray-300 p-3 rounded-md col-span-1 sm:col-span-2 focus:ring-2 focus:ring-[#2BA89C]'></textarea>
                    <button
                        type='submit'
                        className='col-span-1 sm:col-span-2 bg-[#2BA89C] text-white p-3 rounded-md font-bold text-lg hover:bg-[#208a7e] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2BA89C] focus:ring-opacity-50'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExportServiceRequest;
