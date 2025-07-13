import React from 'react';
import blogOne from '../../assets/Blog/blog-image1.jpg'
import blogTwo from '../../assets/Blog/blog-image2.jpg'
import blogThree from '../../assets/Blog/blog-image3.jpg'
import BlogCard from './BlogCard';
const Blog = () => {
    const blog = [
        {
            image: blogOne,
            title: 'When an unknown printer took a galley scrambled',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum…',
            publised_Date: '10-1-2024'

        },
        {
            image: blogTwo,
            title: 'It is a long established fact that a reader',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum…',
            publised_Date: '10-1-2024'
        },
        {
            image: blogThree,
            title: 'Sollicitudin, tortor augue efficitur esteing',
            des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum…',
            publised_Date: '10-1-2024'
        },
    ]
    return (
        <div className='bg-gray-200  '>
            <main className='mt-20 py-20'>
                <div className='flex flex-col text-center gap-3'>
                    <h2 className='text-md lg:text-2xl font-semibold'>From the blog</h2>
                    <p className='text-2xl lg:text-5xl max-w-5xl mx-auto font-bold'>Check Our Latest News & Articles</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-20 mt-20 gap-8'>
                    {
                        blog.map((blog, index) => (<BlogCard key={index} blog={blog}></BlogCard>))
                    }
                </div>
            </main>
        </div>
    );
};

export default Blog;