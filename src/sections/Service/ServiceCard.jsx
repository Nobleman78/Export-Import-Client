import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { image, title, des } = service
    console.log(image, title, des)
    return (
        <div>
            <Link to={`${title}`}> <main className='mt-10 px-10 text-white py-10 rounded-3xl bg-gradient-to-b from-[#3eb492] to-[#168a8d] flex flex-col gap-5 items-center'>
                <img className='cursor-pointer transform transition duration-300 hover:scale-110' src={image} alt="service-image" />
                <h2 className='text-2xl font-semibold hover:text-black'>{title}</h2>
                <p style={{ fontFamily: 'roboto' }} className='text-lg text-center'>{des}</p>
            </main></Link>
        </div>
    );
};

export default ServiceCard;