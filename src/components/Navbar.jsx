import { useEffect, useRef, useState } from 'react';
import logo from '../assets/NavImages/logo.png';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    // const { user, } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceDropDown, setServiceDropDown] = useState(false)
    const [productDropDown, setProductDropDown] = useState(false)
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const inputRef = useRef(null)

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-[#1e928e]' : 'hover:text-[#1e928e] text-black';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Handling clicking outiside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!inputRef.current.contains(event.target)) {
                setOpenSearchBar(false)
            }

        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className='sticky top-0 w-full z-50 bg-white shadow'>

            <nav className='flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-20 py-5 gap-4 sm:gap-0'>

                {/* Logo + Phone (stacked on mobile) */}
                <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
                    <img src={logo} className='cursor-pointer w-32 sm:w-auto' loading='lazy' alt='logo' />

                    {/* 'Have Any Question' moves below on small screens */}
                    <div className='flex sm:hidden items-start gap-3'>
                        {/* <img src={phoneIcon} className='w-10 h-10 object-cover' loading='lazy' alt='phone' /> */}
                        <div>
                            <h2 style={{ fontFamily: 'Roboto' }} className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                            <p className='text-lg font-bold'>+8801534589756</p>
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
                            <NavLink onClick={() => scrollTo(0, 0)} to='/services' className={navLinkClass}>Services</NavLink>
                            <IoIosArrowDown className={`mt-1 transform transition-transform duration-300 ${serviceDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {/* Service Dropdown */}
                        {serviceDropDown && (
                            <div className='absolute left-0 top-full pt-7'>
                                <div className='w-[500px] bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 grid grid-cols-3 gap-2'>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/export' className='block hover:text-[#1e928e] text-black py-1'>Export</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Import</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Engineering Goods</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Electronics Goods</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Drugs and Pharmaseuticals</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Agriculture Goods</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Plastic and Linoleum</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/import' className='block hover:text-[#1e928e] text-black py-1'>Fruits and Vegetables</NavLink>
                                    <NavLink onClick={() => setServiceDropDown(false)} to='/services/blogs' className='block hover:text-[#1e928e] text-black py-1'>Blogs and News</NavLink>

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
                            <div className='bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 w-[200px] grid grid-cols-2 gap-3'>
                                <NavLink onClick={() => setProductDropDown(false)} to='/product/newProduct' className='block hover:text-[#1e928e] text-black py-1'>New Product</NavLink>
                                <NavLink onClick={() => setProductDropDown(false)} to='/product/usedProduct' className='block hover:text-[#1e928e] text-black py-1'>Used Product</NavLink>
                            </div>
                        </div>}
                    </div>

                    <NavLink onClick={() => scrollTo(0, 0)} to='/contact' className={navLinkClass}>Contact</NavLink>
                    <div className='flex items-center'>

                        <NavLink to='/login' onClick={() => window.scrollTo(0, 0)} className={navLinkClass}>
                            Login
                        </NavLink>

                    </div>
                    <NavLink className='flex items-center' ><FiSearch onClick={() => setOpenSearchBar(!openSearchBar)} /></NavLink>
                </div>

                {/* Input searchbar */}
                {openSearchBar && (
                    <div className='absolute top-full left-0 w-full bg-white shadow-md  px-4 sm:px-20 py-3' >
                        <div className='relative w-full sm:w-1/2 mx-auto' ref={inputRef}>
                            <input
                                type='text'
                                placeholder='Search...'
                                className='w-full border-2 border-[#1e928e] rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#1e928e] transition duration-300'
                            />
                            <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1e928e] text-xl' />
                        </div>
                    </div>
                )}

                {/* Phone section for desktop only */}
                <div className='hidden sm:flex items-center gap-3 cursor-pointer'>
                    <div>
                        <h2 style={{ fontFamily: 'Roboto' }} className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                        <p className='text-lg font-bold'>+8801534589756</p>
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
                    <NavLink to='/' onClick={() => { window.scrollTo(0, 0), toggleMenu() }} className={navLinkClass}>Home</NavLink>
                    <NavLink to='/about' onClick={toggleMenu} className={navLinkClass}>About</NavLink>
                    <NavLink to='/services' onClick={toggleMenu} className={navLinkClass}>Services</NavLink>
                    <NavLink to='/product' onClick={toggleMenu} className={navLinkClass}>Product</NavLink>
                    <NavLink to='/contact' onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>
                    <NavLink to='/login' onClick={toggleMenu} className={navLinkClass}>Login</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;
