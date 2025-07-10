import React from 'react';
import welcomeImage from '../assets/Performances/welcome-image.png'
import welcomeSmallImage from '../assets/Performances/welcome-small-image.jpg'

const Performance = () => {
    return (
        <div>
            <main className='mt-20 bg-gray-100 flex flex-col sm:flex-row gap-10 sm:py-20 px-5 lg:px-15 pb-10 '>
                <div className='w-full sm:w-1/2'>
                    <img className='animate-fadey' src={welcomeImage} loading='lazy' alt="welcome-image" />
                </div>
                <div className='sm:w-1/2 flex flex-col gap-10 lg:px-10'>
                    <div className='flex flex-col gap-5 text-center sm:text-start'>
                        <h2 className='text-2xl sm:text-xl font-semibold'>Welcome to</h2>
                        <h2 className=' text-3xl sm:text-5xl font-semibold'>World Class Logistic and Transpotation Service</h2>
                    </div>
                    <p style={{ fontFamily: 'roboto' }} className='text-xl text-justify'>Fusce lorem nunc, sollicitudin eget eaccumsan temp Curabitu quis ullamcorper neque. Donec pullmassad arcu necfa lectus rhon. Praeset utvelinon augueining haselu ornare liberone acce volupat Nulla nvenenats enim, quis accumsan keque tortor eu felis.</p>
                    <div className='relative w-full'>
                        <img src={welcomeSmallImage} loading='lazy' alt="welcome-small-image" className='rounded-xl relative w-full' />
                        <div className='absolute top-10 left-10 lg:left-20  w-70 flex flex-col gap-5'>
                            <h2 className='text-white text-2xl lg:text-4xl'>Successful Delivery We Have Done</h2>
                            <p className='bg-white  lg:px-5 py-1 lg:py-3 w-30 sm:w-50 text-center text-xl lg:text-3xl font-bold rounded-full'>1600+</p>
                        </div>
                    </div>
                </div>
            </main>/
        </div>
    );
};

export default Performance;