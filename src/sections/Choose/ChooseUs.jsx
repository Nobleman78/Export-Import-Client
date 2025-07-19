import React from 'react';
import Chooseus from '../../assets/ChooseUs/choose-us-image.png'
import imageOne from '../../assets/ChooseUs/choose-us-image1.png'
import imageTwo from '../../assets/ChooseUs/choose-us-image2.png'
import imageThree from '../../assets/ChooseUs/choose-us-image3.png'
import imageFour from '../../assets/ChooseUs/choose-us-image4.png'
import ChooseUsCard from './ChooseUsCard';

const ChooseUs = () => {
    const services = [
        {
            image: imageOne,
            title: 'Secure Trade Process',
            des: 'We ensure every transaction is protected with verified documentation, transparent pricing, and compliance with international trade laws, giving you peace of mind throughout the process.'
        },
        {
            image: imageTwo,
            title: 'Buyer Protection System',
            des: 'Our buyer protection system guarantees product quality, shipment tracking, and dispute resolution to safeguard your investment from order to delivery.'
        },
        {
            image: imageThree,
            title: 'Buyer Protection System',
            des: 'We protect sellers with secure payment handling, fraud detection, and fair dispute resolution, ensuring trust and safety on every deal.'
        },
        {
            image: imageFour,
            title: '24/7 Quality',
            des: 'Our dedicated support team is available 24/7 to assist with logistics, customs, documentation, and any questions you may have—anywhere in the world.'
        }
    ]
    return (
        <div className='bg-gray-100'>
            <main className='flex flex-col gap-5 md:flex-row px-10 md:px-5 lg:px-20 mt-15 py-20 '>
                <div className='w-full sm:w-1/2 flex flex-col gap-10'>
                    <div className='flex flex-col gap-4 text-center md:text-start'>
                        <h2 className='text-lg md:text-xl lg:text-3xl'>Why Choose Us</h2>
                        <p className='text-2xl md:text-3xl lg:text-5xl font-bold sm:w-[500px]'>The Fastest Way To Send & Receive</p>

                    </div>
                    {
                        services.map((service, index) => (<ChooseUsCard key={index} service={service}></ChooseUsCard>))
                    }

                </div>
                <div className='w-full sm:w-1/2 '>
                    <img loading='lazy' className='animate-fadey' src={Chooseus} alt="choose-us" />
                </div>
            </main>
        </div>
    );
};

export default ChooseUs;