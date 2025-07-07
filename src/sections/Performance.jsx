import React from 'react';
import welcomeImage from '../assets/Performances/welcome-image.png'
import welcomeSmallImage from '../assets/Performances/welcome-small-image.jpg'

const Performance = () => {
    return (
        <div>
            <main className='mt-30 bg-gray-100 flex gap-10 py-20 px-15'>
                <div className='w-1/2'>
                    <img className='animate-fadey' src={welcomeImage} loading='lazy' alt="welcome-image" />
                </div>
                <div className='w-1/2 flex flex-col gap-10 px-10'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xl font-semibold'>Welcome to</h2>
                        <h2 className='text-5xl font-semibold'>World Class Logistic and Transpotation Service</h2>
                    </div>
                    <p style={{ fontFamily: 'roboto' }} className='text-xl text-justify'>Fusce lorem nunc, sollicitudin eget eaccumsan temp Curabitu quis ullamcorper neque. Donec pullmassad arcu necfa lectus rhon. Praeset utvelinon augueining haselu ornare liberone acce volupat Nulla nvenenats enim, quis accumsan keque tortor eu felis.</p>
                    <div className='relative'>
                        <img src={welcomeSmallImage} loading='lazy' alt="welcome-small-image" className='rounded-xl relative' />
                        <div className='absolute top-10 left-10  w-60 flex flex-col gap-5'>
                            <h2 className='text-white text-3xl'>Successful Delivery We Have Done</h2>
                            <p className='bg-white px-5 py-2 w-25 text-xl rounded-full'>1600+</p>
                        </div>
                    </div>
                </div>
            </main>/
        </div>
    );
};

export default Performance;