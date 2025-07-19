import { useEffect, useRef, useState, useCallback, useContext } from 'react';
import logo from '../assets/NavImages/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import UseServices from '../Utility/Hooks/UseServices';
import AuthContext from '../ContextApi/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceDropDown, setServiceDropDown] = useState(false);
    const [productDropDown, setProductDropDown] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredServices, setFilteredServices] = useState([]);
    const [notFoundBelow, setNotFoundBelow] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [services] = UseServices();
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-[#1e928e]' : 'hover:text-[#1e928e] text-black';

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogout = async () => {
        try {
            await signOutUser();
            setUserDropdownOpen(false);
            navigate('/login');
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    const searchServices = useCallback((term) => {
        if (!term || term.trim() === '') return [];
        return services.filter(service =>
            service.title.toLowerCase().includes(term.toLowerCase())
        );
    }, [services]);

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
        const results = searchTerm.trim() === '' ? [] : searchServices(searchTerm);
        setFilteredServices(results);
    }, [searchTerm, searchServices]);

    useEffect(() => {
        const handleClickOutsideDropdown = (event) => {
            if (!event.target.closest('#user-dropdown')) {
                setUserDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideDropdown);
        return () => document.removeEventListener('mousedown', handleClickOutsideDropdown);
    }, []);

    const handleSelectService = (title) => {
        const encodedTitle = encodeURIComponent(title);
        navigate(`/serviceDetail/${encodedTitle}`);
        setOpenSearchBar(false);
        setSearchTerm('');
        setFilteredServices([]);
        setNotFoundBelow(false);
    };

    return (
        <div className='sticky top-0 w-full z-50 bg-white shadow'>
            <nav className='flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 md:px-10 lg:px-20 py-5 gap-4 sm:gap-0'>
                {/* Logo & Mobile Search */}
                <div className='flex flex-col lg:flex-row lg:items-center gap-5 w-4/5 lg:w-auto'>
                    <div className='flex items-center justify-between'>
                        <img onClick={() => { navigate('/').scrollTo(0, 0) }} src={logo} className='cursor-pointer w-20 h-17 sm:w-auto' alt='logo' />
                        <NavLink className='flex items-center lg:hidden'>
                            <FiSearch className='text-2xl' onClick={() => setOpenSearchBar(!openSearchBar)} />
                        </NavLink>
                    </div>
                    <div className='flex lg:hidden items-start gap-3'>
                        <div>
                            <h2 className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                            <p className='text-lg font-bold'>+8801610881122</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <div className='hidden lg:flex gap-10 text-lg font-semibold items-center'>
                    <NavLink to='/' onClick={() => scrollTo(0, 0)} className={navLinkClass}>Home</NavLink>
                    <NavLink to='/about' onClick={() => scrollTo(0, 0)} className={navLinkClass}>About</NavLink>

                    {/* Services Dropdown */}
                    <div className='relative' onMouseEnter={() => setServiceDropDown(true)} onMouseLeave={() => setServiceDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setServiceDropDown(!serviceDropDown)}>
                            <NavLink to='/services' onClick={() => scrollTo(0, 0)} className={navLinkClass}>Services</NavLink>
                            <IoIosArrowDown className={`mt-1 transition-transform duration-300 ${serviceDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {serviceDropDown && (
                            <div className='absolute left-0 top-full pt-7'>
                                <div className='w-[500px] bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 grid grid-cols-3 gap-2'>
                                    {services.map((service, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/serviceDetail/${encodeURIComponent(service.title)}`}
                                            onClick={() => setServiceDropDown(false)}
                                            className='hover:text-[#1e928e]'
                                        >
                                            {service.title}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Product Dropdown */}
                    <div className='relative' onMouseEnter={() => setProductDropDown(true)} onMouseLeave={() => setProductDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer' onClick={() => setProductDropDown(!productDropDown)}>
                            <NavLink to='/product' onClick={() => scrollTo(0, 0)} className={navLinkClass}>Product</NavLink>
                            <IoIosArrowDown className={`mt-1 transition-transform duration-300 ${productDropDown ? 'rotate-180' : ''}`} />
                        </div>
                        {productDropDown && (
                            <div className='absolute top-full left-0 pt-7'>
                                <div className='bg-white shadow-lg text-sm rounded-md py-2 px-4 z-50 border-t-4 border-teal-800 w-[200px] grid grid-cols-2 gap-3'>
                                    <NavLink to='/product/newProduct' onClick={() => setProductDropDown(false)} className='hover:text-[#1e928e]'>New Product</NavLink>
                                    <NavLink to='/product/usedProduct' onClick={() => setProductDropDown(false)} className='hover:text-[#1e928e]'>Used Product</NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to='/contact' onClick={() => scrollTo(0, 0)} className={navLinkClass}>Contact</NavLink>

                    <FiSearch className='cursor-pointer' onClick={() => { setOpenSearchBar(!openSearchBar); scrollTo(0, 0); }} />

                    {/* 👤 User Icon / Login */}
                    <div className="relative" id="user-dropdown">
                        {user ? (
                            <div className="relative">
                                <FaUserCircle
                                    className="text-2xl text-[#1e928e] cursor-pointer"
                                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                />
                                {userDropdownOpen && (
                                    <ul className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md text-sm w-48">
                                        <li className="px-4 py-2 text-gray-700 border-b">
                                            {user.displayName || user.email}
                                        </li>
                                        <li
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <NavLink to='/login' className={navLinkClass}>Login</NavLink>
                        )}
                    </div>
                </div>

                {/* Desktop Contact */}
                <div className='hidden lg:flex items-center gap-3'>
                    <div>
                        <h2 className='text-[#1e928e] font-semibold'>Have Any Question</h2>
                        <p className='text-lg font-bold'>+8801610881122</p>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className='lg:hidden text-3xl absolute top-6 right-4'>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* 🔍 Search Bar */}
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
                                    setMenuOpen(false);
                                    if (filteredServices.length > 0) {
                                        handleSelectService(filteredServices[0].title);
                                    } else {
                                        setOpenSearchBar(false);
                                        setSearchTerm('');
                                        setFilteredServices([]);
                                        setNotFoundBelow(true);
                                        setTimeout(() => setNotFoundBelow(false), 3000);
                                    }
                                }
                            }}
                            className='w-full border-2 border-[#1e928e] rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#1e928e]'
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

            {notFoundBelow && (
                <div className="px-4 py-2 text-center text-sm">Service not found.</div>
            )}

            {/* Mobile Nav */}
            {menuOpen && (
                <div className='lg:hidden bg-gray-200 py-5 flex flex-col gap-4 px-6 pb-4 text-base font-medium'>
                    <NavLink to='/' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>Home</NavLink>
                    <NavLink to='/about' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>About</NavLink>
                    <NavLink to='/services' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>Services</NavLink>
                    <NavLink to='/product' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>Product</NavLink>
                    <NavLink to='/contact' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>Contact</NavLink>
                    <NavLink to='/dashboard' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>Dashboard</NavLink>

                    {user ? (
                        <button onClick={() => { handleLogout(); toggleMenu(); }} className='text-left'>Logout</button>
                    ) : (
                        <NavLink to='/login' onClick={() => { toggleMenu(); scrollTo(0, 0); }} className={navLinkClass}>Login</NavLink>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
