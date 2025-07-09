import React, { useState } from 'react';

const faqs = [
    {
        question: 'How to send my parcel?',
        answer: 'Sending your parcel with Transico is easy! Simply create an account, enter your parcel details (dimensions, weight, destination), choose your preferred shipping method, and schedule a pickup or drop-off. We handle the rest, ensuring secure and timely delivery.'
    },
    {
        question: 'What is the best way to use Transico?',
        answer: 'The best way to use Transico is to leverage our intuitive dashboard for tracking, managing multiple shipments, and generating reports. For businesses, integrating our API can streamline your logistics operations significantly. Always check our latest service updates for new features!'
    },
    {
        question: 'Why Transico is very popular?',
        answer: 'Transico is popular due to its commitment to reliability, competitive pricing, and exceptional customer service. Our advanced tracking system, wide network, and user-friendly platform make us a preferred choice for both individual and business shipping needs.'
    },
    {
        question: 'How to receive my parcel?',
        answer: 'Receiving your parcel is straightforward. Once your parcel is out for delivery, you will receive notifications. Ensure someone is available at the delivery address to sign for the package. You can also track its real-time progress via our app or website.'
    }
];

const FAQQuoteSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
       
        <section className='grid grid-cols-1 md:grid-cols-2 border-2 mt-20 border-[#2BA89C] rounded-[2rem] overflow-hidden shadow-lg max-w-6xl mx-auto my-8 font-inter'>
            <div className='bg-[#2BA89C] text-white p-8 sm:p-10 rounded-l-[1.9rem] flex flex-col justify-start gap-6'>
                <div className='flex-shrink-0'> 
                    <p className='text-lg font-semibold'>Frequently Asked Questions</p>
                    <h2 className='text-3xl sm:text-4xl font-bold leading-tight mt-2'>
                        Get the Best Import <br /> Export Service
                    </h2>
                </div>

                {/* FAQ items container */}
                <div className='space-y-4 flex-grow'> 
                    {faqs.map((faq, index) => (
                        <div key={index} className='border-b border-white border-opacity-50 pb-3'>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className='flex justify-between w-full items-center text-left text-lg sm:text-xl font-medium py-2 focus:outline-none'
                            >
                                <span>{faq.question}</span>
                                <span className='text-3xl transition-transform duration-300 transform'>
                                    {activeIndex === index ? '−' : '+'} {/* Using unicode minus for better visual */}
                                </span>
                            </button>
                           
                            {activeIndex === index && (
                                <p style={{fontFamily:'roboto'}} className='mt-2 text-white text-sm sm:text-base leading-relaxed animate-fade-in'>
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            <div className='bg-white p-8 sm:p-10 rounded-r-[1.9rem] flex flex-col justify-start'>
                <p className='text-lg font-semibold text-gray-700'>Know the Price</p>
                <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-gray-900'>Get A Free Quote</h2>

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
                        className='col-span-1 sm:col-span-2 bg-[#2BA89C] text-white p-3 rounded-md font-bold text-lg hover:bg-[#208a7e] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2BA89C] focus:ring-opacity-50'
                    >
                        Get Quote
                    </button>
                </form>
            </div>

    
        
        </section>
    );
};

export default FAQQuoteSection;
