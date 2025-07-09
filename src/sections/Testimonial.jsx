import React from 'react';
import workImageThree from '../assets/WorkingPrinciple/work-image3.jpg';
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

    const groupedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += 2) {
        groupedTestimonials.push(testimonials.slice(i, i + 2));
    }

    return (
        <div className='bg-gray-100 h-[750px]'>
            <main className='mt-20 py-45 relative'>
                <img className='absolute top-[-7rem] left-20 rounded-2xl' src={workImageThree} alt='Decorative' />
                <div className='text-center  flex flex-col gap-3'>
                    <h2 className='text-2xl'>Testimonials</h2>
                    <p className='text-5xl max-w-xl mx-auto font-semibold'>
                        What Our Customers Say About Import Export
                    </p>
                </div>

                <div className='px-20 '>
                    <div className='bg-white rounded-2xl py-20 mt-10 border border-gray-300 shadow-2xl'>
                        <Swiper
                            slidesPerView={1}
                            effect='fade'
                            navigation={true}
                            speed={2000}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className='mySwiper'>
                            {groupedTestimonials.map((group, groupIndex) => (
                                <SwiperSlide key={groupIndex}>
                                    <div style={{ fontFamily: 'Poppins, sans-serif' }}
                                        className='flex'>
                                        {group.map((testimonial, index) => (
                                            <div key={index}
                                                className={`w-1/2  p-8  flex flex-col justify-between ${index === 0 ? 'border-r-2 h-65 border-gray-200 ' : ''
                                                    }`}>
                                                <div className='flex items-center gap-4 mb-4 justify-between'>
                                                    <div className='flex items-center gap-4 '>
                                                        <div className='bg-gray-200 px-5 py-3 rounded-full'>
                                                            <img src={testimonial.image}
                                                                alt='testimonial-image'
                                                                loading='lazy'
                                                                className='w-12 h-15 rounded-full' />
                                                        </div>
                                                        <div >
                                                            <h3 className='font-bold text-xl'>{testimonial.name}</h3>
                                                            <p className='text-lg '>{testimonial.role}</p>
                                                        </div>
                                                    </div>

                                                    <div className='text-right text-5xl '>
                                                        <FaQuoteRight />
                                                    </div>
                                                </div>
                                                <p className='mb-4 text-lg leading-relaxed'>
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
