import React from 'react';
import calltoaction from '../assets/CallToAction/import-export-services.png'

const CalltoAction = () => {
    return (
        <div className='bg-gray-50'>
            <main className='flex flex-col md:flex-row mt-20'> 
                {/* Left side section */}
                <section className='w-full lg:w-1/2 px-8 items-center md:items-start text-center md:text-start sm:px-20 py-20 space-y-10'>
                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold '>Looking for the best Import Export Transport Service?</h2>
                    <button className='bg-teal-500 px-10 py-5 text-lg cursor-pointer hover:bg-teal-800 text-white rounded-full'>Request A Quote</button>
                </section>
                {/* Right side section */}
                <section className='w-full lg:w-1/2'>
                    <img className='animate-fadey  md:h-full' src={calltoaction} loading='lazy' alt="call-to-action-image"/>
                </section>
            </main>
        </div>
    );
};

export default CalltoAction;