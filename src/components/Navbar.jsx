import { useContext, useEffect, useRef, useState } from 'react';
import logo from '../assets/NavImages/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import AuthContext from '../ContextApi/AuthContext';

const Navbar = () => {
    const { searchServices } = useContext(AuthContext);

    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceDropDown, setServiceDropDown] = useState(false);
    const [productDropDown, setProductDropDown] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredServices, setFilteredServices] = useState([]);
    const [notFoundBelow, setNotFoundBelow] = useState(false);

    const inputRef = useRef(null);
    const navigate = useNavigate();

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-[#1e928e]' : 'hover:text-[#1e928e] text-black';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Click outside closes search
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setOpenSearchBar(false);
                setSearchTerm('');
                setFilteredServices([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredServices([]);
            return;
        }
        const results = searchServices(searchTerm);
        setFilteredServices(results);
    }, [searchTerm, searchServices]);

    const handleSelectService = (title) => {
        const encodedTitle = encodeURIComponent(title);
        navigate(`/services/serviceDetail/${encodedTitle}`);
        setOpenSearchBar(false);
        setSearchTerm('');
        setFilteredServices([]);
        setNotFoundBelow(false);
    };

    return (
        <div className='sticky top-0 w-full z-50 bg-white shadow'>

            {/* NAVIGATION */}
            <nav className='flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-20 py-5 gap-4 sm:gap-0'>
                {/* Logo + Phone */}
                <div className='flex flex-col sm:flex-row sm:items-center gap-5'>
                    <img src={logo} className='cursor-pointer w-32 sm:w-auto' loading='lazy' alt='logo' />
                    <div className='flex sm:hidden items-start gap-3'>
                        <div>
                            <h2 className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                            <p className='text-lg font-bold'>+8801534589756</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className='hidden lg:flex gap-10 text-lg font-semibold'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>
                    <NavLink to='/about' className={navLinkClass}>About</NavLink>

                    {/* Services Dropdown */}
                    <div className='relative' onMouseEnter={() => setServiceDropDown(true)} onMouseLeave={() => setServiceDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setServiceDropDown(!serviceDropDown)}>
                            <NavLink to='/services' className={navLinkClass}>Services</NavLink>
                            <IoIosArrowDown className={`mt-1 transform transition-transform duration-300 ${serviceDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {serviceDropDown && (
                            <div className='absolute left-0 top-full pt-7'>
                                <div className='w-[500px] bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 grid grid-cols-3 gap-2'>
                                    <NavLink to='/services/export' className='hover:text-[#1e928e]'>Export</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Import</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Engineering Goods</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Electronics Goods</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Drugs and Pharmaseuticals</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Agriculture Goods</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Plastic and Linoleum</NavLink>
                                    <NavLink to='/services/import' className='hover:text-[#1e928e]'>Fruits and Vegetables</NavLink>
                                    <NavLink to='/services/blogs' className='hover:text-[#1e928e]'>Blogs and News</NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Product Dropdown */}
                    <div className='relative' onMouseEnter={() => setProductDropDown(true)} onMouseLeave={() => setProductDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setProductDropDown(!productDropDown)}>
                            <NavLink to='/product' className={navLinkClass}>Product</NavLink>
                            <IoIosArrowDown className={`mt-1 transform transition-transform duration-300 ${productDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {productDropDown && (
                            <div className='absolute top-full left-0 pt-7'>
                                <div className='bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 w-[200px] grid grid-cols-2 gap-3'>
                                    <NavLink to='/product/newProduct' className='hover:text-[#1e928e]'>New Product</NavLink>
                                    <NavLink to='/product/usedProduct' className='hover:text-[#1e928e]'>Used Product</NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
                    <NavLink to='/login' className={navLinkClass}>Login</NavLink>

                    {/* Search Icon */}
                    <NavLink className='flex items-center'>
                        <FiSearch onClick={() => setOpenSearchBar(!openSearchBar)} />
                    </NavLink>
                </div>

                {/* Desktop Phone */}
                <div className='hidden sm:flex items-center gap-3 cursor-pointer'>
                    <div>
                        <h2 className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                        <p className='text-lg font-bold'>+8801534589756</p>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className='lg:hidden text-3xl absolute top-6 right-4'>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* 🔍 Search Dropdown */}
            {openSearchBar && (
                <div className='absolute top-full left-0 w-full bg-white shadow-md px-4 sm:px-20 py-3 z-50'>
                    <div className='relative w-full sm:w-1/2 mx-auto' ref={inputRef}>
                        <input
                            type='text'
                            placeholder='Search services...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    if (filteredServices.length > 0) {
                                        handleSelectService(filteredServices[0].title);
                                    } else {
                                        setOpenSearchBar(false);
                                        setSearchTerm('');
                                        setFilteredServices([]);
                                        setNotFoundBelow(true);
                                        setTimeout(() => setNotFoundBelow(false), 3000); // Auto hide
                                    }
                                }
                            }}
                            className='w-full border-2 border-[#1e928e] rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#1e928e] transition duration-300'
                        />
                        <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1e928e] text-xl' />

                        {filteredServices.length > 0 && (
                            <ul className='absolute left-0 right-0 top-full mt-2 bg-white border rounded-md shadow-md z-50 max-h-60 overflow-auto'>
                                {filteredServices.map((service, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelectService(service.title)}
                                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm'
                                    >
                                        {service.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}

            {/*  Service Not Found Below Navbar */}
            {notFoundBelow && (
                <div className="px-4 py-2 text-center text-sm">
                    Service not found.
                </div>
            )}

            {/*  Mobile Nav Links */}
            {menuOpen && (
                <div className='lg:hidden bg-gray-200 py-5 flex flex-col gap-4 px-6 pb-4 text-base font-medium'>
                    <NavLink to='/' onClick={() => { toggleMenu(); window.scrollTo(0, 0); }} className={navLinkClass}>Home</NavLink>
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
