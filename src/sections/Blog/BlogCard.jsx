import React from 'react';

const BlogCard = ({ blog }) => {
    const { image, title, des, publised_Date } = blog
    return (
        <div className='bg-white rounded-2xl'>
            <img className='rounded-xl w-full' src={image} loading='lazy' alt="blog-image" />
            <div className='p-5 flex flex-col gap-5'>
                <h2 className='text-2xl cursor-pointer hover:text-teal-700'>{title}</h2>
                <span className='text-gray-800'>Published Date : {publised_Date}</span>
                <p style={{ fontFamily: 'Poppins' }} className='text-lg'>{des}</p>
                <button className='bg-teal-400 py-3 text-white rounded-3xl cursor-pointer hover:bg-teal-700 text-lg'>Read More+</button>
            </div>

        </div>
    );
};

export default BlogCard;