import React, { useEffect, useState } from 'react';
import avatar from '../assets/Testimonial/testimonial-image1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Crystal Brooks',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Eximport made the entire importing process seamless. From documentation to delivery, everything was handled with professionalism and efficiency. Highly recommended for global trade services!',
    },
    {
        name: 'Shirley Harris',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'We’ve partnered with several logistics firms before, but none offered the level of transparency and support we got from Eximport. Their real-time tracking system is a game changer.',
    },
    {
        name: 'Max Devi',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'As a first-time exporter, I was nervous about customs and compliance. The Eximport team guided me every step of the way. Their expertise made the entire experience stress-free.',
    },
    {
        name: 'Alex Mars',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'What stood out most was their communication. I always knew where my shipment was and what to expect next. Reliable, fast, and cost-effective!',
    },
    {
        name: 'Magnus Carlsen',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Eximport helped us expand our business to new markets without the usual complications. Their warehousing and logistics services are top-notch.',
    },
    {
        name: 'Jotis Chopra',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Thanks to Eximport, we saved both time and money on our last international shipment. Their support team is responsive and very knowledgeable.',
    },
];


const Testimonial = () => {
    const [groupedTestimonials, setGroupedTestimonials] = useState([]);

    const groupTestimonials = () => {
        const screenWidth = window.innerWidth;
        const itemsPerGroup = screenWidth >= 1024 ? 2 : 1;
        const newGroups = [];

        for (let i = 0; i < testimonials.length; i += itemsPerGroup) {
            newGroups.push(testimonials.slice(i, i + itemsPerGroup));
        }

        setGroupedTestimonials(newGroups);
    };

    useEffect(() => {
        groupTestimonials(); // initial group
        window.addEventListener('resize', groupTestimonials);
        return () => window.removeEventListener('resize', groupTestimonials);
    }, []);

    return (
        <div className='bg-gray-100'>
            <main className='mt-10 py-20 relative'>
                <div className='text-center flex flex-col gap-3'>
                    <h2 className='text-md lg:text-2xl'>Testimonials</h2>
                    <p className='w-[250px] lg:w-auto lg:max-w-xl mx-auto text-2xl lg:text-5xl font-semibold'>
                        What Our Customers Say About Import Export
                    </p>

                </div>

                <div className='px-6 sm:px-10 lg:px-20'>
                    <div className='bg-white rounded-2xl py-20 mt-10 border border-gray-300 shadow-2xl'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className='mySwiper'
                        >
                            {groupedTestimonials.map((group, groupIndex) => (
                                <SwiperSlide key={groupIndex}>
                                    <div style={{ fontFamily: 'Poppins, sans-serif' }} className='flex flex-col lg:flex-row'>
                                        {group.map((testimonial, index) => (
                                            <div key={index} className={`w-full lg:w-1/2 p-8 flex flex-col justify-between ${index === 0 && group.length > 1 ? 'border-b lg:border-r lg:border-b-0 border-gray-200' : ''}`}>
                                                <div className='flex items-center justify-between mb-4'>
                                                    <div className='flex items-center gap-4'>
                                                        <div className='bg-gray-200 px-5 py-3 rounded-full'>
                                                            <img
                                                                src={testimonial.image}
                                                                alt='testimonial'
                                                                className='w-12 h-12 rounded-full object-cover'
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className='font-bold text-xl'>{testimonial.name}</h3>
                                                            <p className='text-lg'>{testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                    <div className='text-4xl text-gray-400'>
                                                        <FaQuoteRight />
                                                    </div>
                                                </div>
                                                <p className='text-lg leading-relaxed'>
                                                    {testimonial.feedback}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Testimonial;
