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
            des: 'Fusce lorem nunc sollicitudin eget eaccums temp.'
        },
        {
            image: imageTwo,
            title: 'Buyer Protection System',
            des: 'Fusce lorem nunc sollicitudin eget eaccums temp.'
        },
        {
            image: imageThree,
            title: 'Buyer Protection System',
            des: 'Fusce lorem nunc sollicitudin eget eaccums temp.'
        },
        {
            image: imageFour,
            title: '24/7 Quality',
            des: 'Fusce lorem nunc sollicitudin eget eaccums temp.'
        }
    ]
    return (
        <div className='bg-gray-100'>
            <main className='flex mx-20 mt-15 py-20 '>
                <div className='w-1/2 flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-3xl'>Why Choose Us</h2>
                        <p className='text-5xl font-bold w-[500px]'>The Fastest Way To Send & Receive</p>

                    </div>
                    {
                        services.map((service, index) => (<ChooseUsCard key={index} service={service}></ChooseUsCard>))
                    }

                </div>
                <div className='w-1/2'>
                    <img loading='lazy' className='animate-fadey' src={Chooseus} alt="choose-us" />
                </div>
            </main>
        </div>
    );
};

export default ChooseUs;