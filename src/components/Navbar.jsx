import React, { useState } from 'react';
import logo from '../assets/NavImages/logo.png';
import phoneIcon from '../assets/NavImages/phoneicon.jpg';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-[#1e928e]' : 'hover:text-[#1e928e] text-black';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='sticky top-0 w-full z-50 bg-white shadow'>
            <nav className='flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-20 py-5 gap-4 sm:gap-0'>

                {/* Logo + Phone (stacked on mobile) */}
                <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
                    <img src={logo} className='cursor-pointer w-32 sm:w-auto' loading='lazy' alt="logo" />

                    {/* "Have Any Question" moves below on small screens */}
                    <div className='flex sm:hidden items-start gap-3'>
                        <img src={phoneIcon} className='w-10 h-10 object-cover' loading='lazy' alt="phone" />
                        <div>
                            <h2 style={{ fontFamily: 'Roboto' }} className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                            <p className='text-lg font-bold'>123 456 7890</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:flex gap-10 text-lg font-semibold'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>

                    {/* About with Dropdown - Fixed */}
                    <div className='relative group'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <NavLink to='/about' className={navLinkClass}>About</NavLink>
                            <IoIosArrowDown className='mt-1 transform transition-transform duration-300 group-hover:rotate-180' />
                        </div>
                        {/* Added invisible padding bridge and transition */}
                        <div className='absolute w-full text-sm top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'>
                            <div className='bg-white shadow-lg rounded-md py-2 px-4 z-50 border border-gray-100 w-50'>
                                <NavLink to='/about/team' className='block hover:text-[#1e928e] text-black py-1'>Our Team</NavLink>
                                <NavLink to='/about/history' className='block hover:text-[#1e928e] text-black py-1'>Our History</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <NavLink to='/services' className={navLinkClass}>Services</NavLink>
                            <IoIosArrowDown className='mt-1 transform transition-transform duration-300 group-hover:rotate-180' />
                        </div>
                        {/* Added invisible padding bridge and transition */}
                        <div className='absolute w-full top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'>
                            <div className='bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border border-gray-100 w-50'>
                                <NavLink to='/services/Export' className='block hover:text-[#1e928e] text-black py-1'>Export</NavLink>
                                <NavLink to='/services/Import' className='block hover:text-[#1e928e] text-black py-1'>Import</NavLink>
                                <NavLink to='/services/New Product Sell' className='block hover:text-[#1e928e] text-black py-1'>New Product Sell</NavLink>
                                <NavLink to='/services/Used Product Sell' className='block hover:text-[#1e928e] text-black py-1'>Used Product Sell</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* News with Dropdown - Fixed */}
                    <div className='relative group'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <NavLink to='/news' className={navLinkClass}>News</NavLink>
                            <IoIosArrowDown className='mt-1 transform transition-transform duration-300 group-hover:rotate-180' />
                        </div>
                        {/* Same fixed structure */}
                        <div className='absolute top-full text-sm left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out'>
                            <div className='bg-white shadow-lg rounded-md py-2 px-4 z-50 border border-gray-100 w-50'>
                                <NavLink to='/news/company' className='block hover:text-[#1e928e] text-black py-1'>Company News</NavLink>
                                <NavLink to='/news/industry' className='block hover:text-[#1e928e] text-black py-1'>Industry News</NavLink>
                            </div>
                        </div>
                    </div>

                    <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
                </div>


                {/* Phone section for desktop only */}
                <div className='hidden sm:flex items-center gap-3 cursor-pointer'>
                    <img src={phoneIcon} className='w-10 h-10 object-cover' loading='lazy' alt="phone" />
                    <div>
                        <h2 style={{ fontFamily: 'Roboto' }} className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                        <p className='text-lg font-bold'>123 456 7890</p>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className='lg:hidden text-3xl absolute top-6 right-4'>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className='lg:hidden bg-gray-200 py-5 flex flex-col gap-4 px-6 pb-4 text-base font-medium'>
                    <NavLink to='/' onClick={toggleMenu} className={navLinkClass}>Home</NavLink>
                    <NavLink to='/about' onClick={toggleMenu} className={navLinkClass}>About</NavLink>
                    <NavLink to='/services' onClick={toggleMenu} className={navLinkClass}>Services</NavLink>
                    <NavLink to='/news' onClick={toggleMenu} className={navLinkClass}>News</NavLink>
                    <NavLink to='/contact' onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;
