import React from 'react';

const ChooseUsCard = ({ service }) => {
    const { image, title, des } = service
    return (
        <div className='flex flex-col md:flex-row items-center md:items-start gap-5 '>
            <img className='bg-gradient-to-b from-[#3eb492] to-[#168a8d] px-5 py-5 w-20 rounded-full' src={image} alt="" />
            <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-start'>
                <h2 className='text-2xl'>{title}</h2>
                <p style={{fontFamily:'roboto'}}>{des}</p>
            </div>
        </div>
    );
};

export default ChooseUsCard;