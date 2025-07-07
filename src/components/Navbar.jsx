import React from 'react';
import logo from '../assets/NavImages/logo.png'
import phoneIcon from '../assets/NavImages/phoneicon.jpg'
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const navLinkClass = ({ isActive }) => isActive ? 'text-[#1e928e]' : ' hover:text-[#1e928e] text-black';

    return (

        /*Sticky Navbar make the navbar locked to the top when scrolling */
        <div className='sticky top-0 w-full z-50 bg-white shadow'>
            <nav className='flex items-center justify-between px-20 py-5'>
                <img src={logo} className='cursor-pointer ' loading='lazy' alt="" />
                <div className='flex gap-10 text-xl  font-semibold'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>
                    <div className='flex items-center gap-1'>
                        <NavLink to='/about' className={navLinkClass}>About</NavLink>
                        <IoIosArrowDown className='mt-1' />
                    </div>
                    <NavLink to='/services' className={navLinkClass}>Services</NavLink>
                    <div className='flex items-center gap-1'>
                        <NavLink to='/news' className={navLinkClass}>News</NavLink>
                        <IoIosArrowDown className='mt-1' />
                    </div>
                    <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img src={phoneIcon} loading='lazy' alt="" />
                    <div>
                        <h2 className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                        <p className='text-xl font-bold'>123 456 7890</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;