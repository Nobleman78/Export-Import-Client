import React from 'react';
import calltoaction from '../assets/CallToAction/import-export-services.png'

const CalltoAction = () => {
    return (
        <div className='bg-gray-50'>
            <main className='flex mt-20'> 
                {/* Left side section */}
                <section className='w-1/2 px-20 py-20 space-y-10'>
                    <h2 className='text-5xl font-semibold '>Looking for the best Import Export Transport Service?</h2>
                    <button className='bg-teal-500 px-10 py-5 text-lg cursor-pointer hover:bg-teal-800 text-white rounded-full'>Request A Quote</button>
                </section>
                {/* Right side section */}
                <section className='w-1/2'>
                    <img className='animate-fadey' src={calltoaction} loading='lazy' alt="call-to-action-image" />
                </section>
            </main>
        </div>
    );
};

export default CalltoAction;