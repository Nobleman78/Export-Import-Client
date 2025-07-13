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
            'Aaoreet vestibulum metus. Intege volutpaty nunc augue, sit amet auctor magna blandit eget. Maecenas consequat tortor ac vulpu nunc augue, sit amet auctor magna blandit ate fringilla. In facilisis volutpat.',
    },
    {
        name: 'Shirley Harris',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Aaoreet vestibulum metus. Intege volutpaty nunc augue, sit amet auctor magna blandit eget. Maecenas consequat tortor ac vulpu nunc augue, sit amet auctor magna blandit ate fringilla. In facilisis volutpat.',
    },
    {
        name: 'Max Devi',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Aaoreet vestibulum metus. Intege volutpaty nunc augue, sit amet auctor magna blandit eget. Maecenas consequat tortor ac vulpu nunc augue, sit amet auctor magna blandit ate fringilla. In facilisis volutpat.',
    },
    {
        name: 'Alex Mars',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Aaoreet vestibulum metus. Intege volutpaty nunc augue, sit amet auctor magna blandit eget. Maecenas consequat tortor ac vulpu nunc augue, sit amet auctor magna blandit ate fringilla. In facilisis volutpat.',
    },
    {
        name: 'Magnus Carlsen',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Aaoreet vestibulum metus. Intege volutpaty nunc augue, sit amet auctor magna blandit eget. Maecenas consequat tortor ac vulpu nunc augue, sit amet auctor magna blandit ate fringilla. In facilisis volutpat.',
    },
    {
        name: 'Jotis Chopra',
        role: 'Happy Customer',
        image: avatar,
        feedback:
            'Aaoreet vestibulum metus. Intege volutpaty nunc augue, sit amet auctor magna blandit eget. Maecenas consequat tortor ac vulpu nunc augue, sit amet auctor magna blandit ate fringilla. In facilisis volutpat.',
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
