import React from 'react';
import imageOne from '../../assets/Features/feature-image1.png'
import imageTwo from '../../assets/Features/feature-image2.png'
import imageThree from '../../assets/Features/feature-image3.png'
import imageFour from '../../assets/Features/feature-image4.png'

const Features = () => {
    const features = [
        {
            image: imageOne,
            title: 'Order Placement',
            des: 'Seamlessly place international or domestic orders through our intuitive platform. We streamline the order process to ensure accuracy, speed, and transparency from the start.'

        },
        {
            image: imageTwo,
            title: 'Inventory Management',
            des: 'Our smart inventory system helps you monitor stock levels in real time, reduce overstocking or shortages, and manage products efficiently across multiple locations.'
        },
        {
            image: imageThree,
            title: 'Warehousing and Storage',
            des: 'We offer secure, climate-controlled warehousing solutions for short- and long-term storage. Our facilities are optimized for safety, accessibility, and fast dispatch.'
        },
        {
            image: imageFour,
            title: 'Transportation',
            des: 'Benefit from a global transportation network that ensures timely delivery by air, sea, or land. We handle route optimization, customs clearance, and real-time tracking for complete reliability.'
        }
    ]
    return (
        <div className='bg-[#006364]'>
            <main className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center px-10 sm:px-20 py-15 gap-5'>
                {
                    features.map((feature, index) => (
                        <div key={index} className='flex flex-col  items-center gap-5 bg-[#286d6e] py-10 px-5 rounded-2xl text-white'>
                            <div className='bg-[#2c888a] p-10 rounded-full transform hover:scale-110 transition duration-300 inline-block'>
                                <img
                                    className='w-16 h-16 object-contain'
                                    src={feature.image}
                                    loading='lazy'
                                    alt='feature-image'
                                />
                            </div>

                            <h2 className='text-2xl'>{feature.title}</h2>
                            <p className='text-center text-xl ' style={{ fontFamily: 'roboto' }}>{feature.des}</p>
                        </div>
                    ))
                }
            </main>
        </div>
    );
};

export default Features;