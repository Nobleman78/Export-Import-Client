import React from 'react';
import serviceImageOne from '../../assets/Services/solutions-image1.png'
import serviceImageTwo from '../../assets/Services/solutions-image2.png'
import serviceImageThree from '../../assets/Services/solutions-image3.png'
import serviceImageFour from '../../assets/Services/solutions-image4.png'
import serviceImageFive from '../../assets/Services/solutions-image5.png'
import serviceImageSix from '../../assets/Services/solutions-image6.png'
import ServiceCard from './ServiceCard';
const Service = () => {
    const services = [
        {
            image: serviceImageOne,
            title: 'Fruites and Vegetables',
            des: 'Life moves pretty fast. If you dont stop and look around once in a while, you could miss it. The sun sets, painting the sky with hues of orange and purple, a gentle reminder of natures endless beauty.'

        },
        {
            image: serviceImageTwo,
            title: 'Engineering Goods',
            des: 'Life moves pretty fast. If you dont stop and look around once in a while, you could miss it. The sun sets, painting the sky with hues of orange and purple, a gentle reminder of natures endless beauty.'

        },
        {
            image: serviceImageThree,
            title: 'Electronics Goods',
            des: 'Life moves pretty fast. If you dont stop and look around once in a while, you could miss it. The sun sets, painting the sky with hues of orange and purple, a gentle reminder of natures endless beauty.'
        },
        {
            image: serviceImageFour,
            title: 'Drug and Pharmaceuticals',
            des: 'Life moves pretty fast. If you dont stop and look around once in a while, you could miss it. The sun sets, painting the sky with hues of orange and purple, a gentle reminder of natures endless beauty.'

        },
        {
            image: serviceImageFive,
            title: 'Plastic and Linoleum',
            des: 'Life moves pretty fast. If you dont stop and look around once in a while, you could miss it. The sun sets, painting the sky with hues of orange and purple, a gentle reminder of natures endless beauty.'
        },
        {
            image: serviceImageSix,
            title: 'Agriculture Products',
            des: 'Life moves pretty fast. If you dont stop and look around once in a while, you could miss it. The sun sets, painting the sky with hues of orange and purple, a gentle reminder of natures endless beauty.'
        }
    ]
    return (
        <div>
            <main className='mt-10'>
                <div className='text-center flex flex-col gap-3 max-w-2xl mx-auto'>
                    <h2 className='text-md lg:text-2xl font-semibold'>What We Do</h2>
                    <p className='text-2xl lg:text-5xl font-semibold w-[350px] lg:w-auto lg:max-w-2xl mx-auto'>Providing Full Range of Import Export Solution</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-5 lg:px-20 gap-5'>
                    {services.map((service, index) => (<ServiceCard key={index} service={service}></ServiceCard>))}
                </div>
            </main>
        </div>
    );
};

export default Service;