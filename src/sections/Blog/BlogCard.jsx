import React from 'react';

const BlogCard = React.memo(({ blog: { image, title, des, published_Date } }) => {
    return (
        <div className='bg-white rounded-2xl shadow hover:shadow-lg transition-shadow'>
            <img className='rounded-xl w-full' src={image} loading='lazy' alt={title} />
            <div className='p-5 flex flex-col gap-4'>
                <h2 className='text-2xl cursor-pointer hover:text-teal-700'>{title}</h2>
                <span className='text-gray-800'>Published Date: {published_Date}</span>
                <p className='text-lg font-poppins line-clamp-3'>{des}</p>
                <button className='bg-teal-400 py-3 text-white rounded-3xl cursor-pointer hover:bg-teal-700 text-lg'>
                    Read More+
                </button>
            </div>
        </div>
    );
});

export default BlogCard;
