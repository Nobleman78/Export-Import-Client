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
        <footer className='mt-15 flex flex-col md:flex-row items-start md:items-center justify-between px-15 py-10 bg-gray-50'>
            {/* Logo and Description */}
            <div className='mb-8 md:mb-0'>
                <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                    <img src={logo} loading='lazy' alt='Company Logo' className='w-40 cursor-pointer' />
                </Link>
                <p className='mt-3 max-w-xs text-gray-600'>
                    We provide comprehensive import-export solutions tailored to your business needs.
                </p>
            </div>

            {/* Dynamic Sections */}
            <div className='flex flex-wrap gap-20 text-lg text-gray-800'>
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h3 className='font-semibold mb-3 cursor-default'>{section.title}</h3>
                        <ul className='space-y-2'>
                            {section.items.map((item, i) => (
                                <li key={i} className='flex items-center gap-2 transition hover:translate-x-4 duration-600 cursor-pointer'>
                                    <MdOutlineDoubleArrow />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
