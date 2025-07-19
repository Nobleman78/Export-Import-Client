import React from 'react';
import blogOne from '../../assets/Blog/blog-image1.jpg'
import blogTwo from '../../assets/Blog/blog-image2.jpg'
import blogThree from '../../assets/Blog/blog-image3.jpg'
import BlogCard from './BlogCard';
const Blog = () => {
    const blog = [
        {
            image: blogOne,
            title: '5 Common Challenges in International Shipping and How to Overcome Them',
            des: 'Discover the top hurdles businesses face in global logistics and learn practical strategies to avoid delays, minimize costs, and stay compliant.',
            publised_Date:'10-1-2024'
        },
        {
            image: blogTwo,
            title: 'Understanding Incoterms: A Guide for Exporters and Importers',
            des: 'Get a clear breakdown of Incoterms like FOB, CIF, and EXW. Learn how they impact cost, risk, and responsibility in global trade agreements.',
            publised_Date: '10-1-2024'
        },
        {
            image: blogThree,
            title: 'How Technology is Transforming the Export-Import Industry',
            des: 'From AI to real-time tracking, explore how digital solutions are making international trade faster, smarter, and more transparent.',
            publised_Date: '10-1-2024'
        },
    ];

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