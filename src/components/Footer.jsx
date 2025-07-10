import React from 'react';
import logo from '../assets/NavImages/logo.png';
import { Link } from 'react-router-dom';
import { MdOutlineDoubleArrow } from "react-icons/md";

const Footer = () => {
    const footerLinks = [
        {
            title: 'Services',
            items: ['Import Solutions', 'Export Solutions', 'Customs Brokerage', 'Freight Forwarding'],
        },
        {
            title: 'Company',
            items: ['About Us', 'Careers', 'Press', 'Blog'],
        },
        {
            title: 'Contact Us',
            items: [
                'Phone: +1 234 567 890',
                'Email: info@company.com',
                'Address: 123 Export St, Business City',
            ],
        },
        {
            title: 'Connect With Us',
            items: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'],
        }
    ];

    return (
        <footer className='bg-gray-50 px-10 py-10 mt-10 text-gray-800'>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>
                {/* Logo and Description */}
                <div className='max-w-sm'>
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} loading='lazy' alt='Company Logo' className='w-40 cursor-pointer' />
                    </Link>
                    <p className='mt-4 text-gray-600'>
                        We provide comprehensive import-export solutions tailored to your business needs.
                    </p>
                </div>

                {/* Dynamic Sections */}
                <div className='flex flex-wrap gap-10'>
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className='font-semibold mb-3'>{section.title}</h3>
                            <ul className='space-y-2'>
                                {section.items.map((item, i) => (
                                    <li key={i} className='flex items-center gap-2 hover:translate-x-2 transition-transform duration-300 cursor-pointer'>
                                        <MdOutlineDoubleArrow className='text-teal-600' />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Developer Credit */}
            <div className='text-center mt-10 text-sm text-gray-500'>
                Design and Developed by{' '}
                <a
                    href="https://www.nextitbd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-600 hover:underline'
                >
                    Next IT BD
                </a>
            </div>
        </footer>
    );
};

export default Footer;
