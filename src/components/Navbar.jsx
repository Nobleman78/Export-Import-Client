import { useState } from 'react';
import logo from '../assets/NavImages/logo.png';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from 'react-icons/hi';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceDropDown, setServiceDropDown] = useState(false)
    const [productDropDown, setProductDropDown] = useState(false)
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
                        {/* <img src={phoneIcon} className='w-10 h-10 object-cover' loading='lazy' alt="phone" /> */}
                        <div>
                            <h2 style={{ fontFamily: 'Roboto' }} className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                            <p className='text-lg font-bold'>123 456 7890</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:flex gap-10 text-lg font-semibold'>
                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/' className={navLinkClass}>Home</NavLink>
                    <NavLink onClick={() => window.scrollTo(0, 0)} to='/about' className={navLinkClass}>About</NavLink>

                    {/* Services */}
                    <div className='relative' onMouseEnter={() => setServiceDropDown(true)} onMouseLeave={() => setServiceDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setServiceDropDown(!serviceDropDown)}>
                            <NavLink to='/services' className={navLinkClass}>Services</NavLink>
                            <IoIosArrowDown className={`mt-1 transform transition-transform duration-300 ${serviceDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {/* Service Dropdown */}
                        {serviceDropDown && (
                            <div className='absolute left-0 top-full pt-7'>
                                <div className='w-48 bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 '>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/export' className='block hover:text-[#1e928e] text-black py-1'>Export</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Import</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/newProduct' className='block hover:text-[#1e928e] text-black py-1'>New Product Sell</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/usedProduct' className='block hover:text-[#1e928e] text-black py-1'>Used Product Sell</NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Product */}
                    <div className='relative' onMouseEnter={() => setProductDropDown(true)} onMouseLeave={() => setProductDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setProductDropDown(!productDropDown)}>
                            <NavLink to='/product' className={navLinkClass}>Product</NavLink>
                            <IoIosArrowDown className={`mt-1 transform transition-transform duration-300 ${productDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {/* Product DropDown */}
                        {productDropDown && <div className='absolute top-full  left-0 pt-7'>
                            <div className='bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800  w-50'>
                                <NavLink onClick={() => setProductDropDown(false)} to='/product/new' className='block hover:text-[#1e928e] text-black py-1'>New Product</NavLink>
                                <NavLink onClick={() => setProductDropDown(false)} to='/product/used' className='block hover:text-[#1e928e] text-black py-1'>Used Product</NavLink>
                            </div>
                        </div>}
                    </div>

                    <NavLink onClick={()=>scrollTo(0,0)} to='/contact' className={navLinkClass}>Contact</NavLink>
                    <NavLink onClick={()=>scrollTo(0,0)} to='/login' className={navLinkClass}>Login</NavLink>
                </div>

                {/* Phone section for desktop only */}
                <div className='hidden sm:flex items-center gap-3 cursor-pointer'>
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
                    <NavLink to='/' onClick={() => { window.scrollTo(0, 0), toggleMenu }} className={navLinkClass}>Home</NavLink>
                    <NavLink to='/about' onClick={toggleMenu} className={navLinkClass}>About</NavLink>
                    <NavLink to='/services' onClick={toggleMenu} className={navLinkClass}>Services</NavLink>
                    <NavLink to='/product' onClick={toggleMenu} className={navLinkClass}>Product</NavLink>
                    <NavLink to='/contact' onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>
                    <NavLink to='/login'onClick={toggleMenu} className={navLinkClass}>Login</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;
