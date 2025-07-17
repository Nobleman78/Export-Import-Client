import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { FaCalendarAlt, FaListUl } from 'react-icons/fa';
import UseAdmin from '../../Utility/Hooks/UseAdmin';
import { useEffect } from 'react';

const Dashboard = () => {
    const [isAdmin] = UseAdmin();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isAdmin === false) {
            navigate('/login');
        }
    }, [isAdmin, navigate]);

    const getNavLinkClass = ({ isActive }) =>
        `flex items-center justify-center md:justify-start py-2 px-2 md:px-4 rounded-lg transition-all duration-300 text-sm font-medium ${isActive
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 shadow-md'
            : 'bg-blue-800/30 text-white hover:bg-blue-700/50 hover:shadow-lg'
        }`;
    if (!isAdmin) {
        return null;
    }
    return (
        <div className="flex lg:gap-10 min-h-screen bg-gradient-to-br from-blue-900/5 to-blue-900/20">
            <div className="w-16 md:w-72 p-4 md:p-6 bg-gradient-to-b from-teal-400 to-teal-800 shadow-2xl">
                <nav className="flex flex-col gap-5">
                    <NavLink to="/dashboard/adminHome" className={getNavLinkClass}>
                        <IoHomeOutline className="mr-0 md:mr-3 " />
                        <span className="hidden md:inline">Admin Home</span>
                    </NavLink>
                    <NavLink to="/dashboard/allusers" className={getNavLinkClass}>
                        <IoHomeOutline className="mr-0 md:mr-3 " />
                        <span className="hidden md:inline">Users</span>
                    </NavLink>
                    <NavLink to="/dashboard/addProducts" className={getNavLinkClass}>
                        <FaCalendarAlt className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">Add Products</span>
                    </NavLink>
                    <NavLink to="/dashboard/addServices" className={getNavLinkClass}>
                        <FaCalendarAlt className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">Add Services</span>
                    </NavLink>
                    <NavLink to="/dashboard/manageProducts" className={getNavLinkClass}>
                        <FaListUl className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">Manage Products</span>
                    </NavLink>
                    <NavLink to="/dashboard/manageServices" className={getNavLinkClass}>
                        <FaListUl className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">Manage Services</span>
                    </NavLink>
                    <NavLink to="/dashboard/contactData" className={getNavLinkClass}>
                        <FaListUl className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">Contact Data</span>
                    </NavLink>
                    <NavLink to="/dashboard/requestServiceData" className={getNavLinkClass}>
                        <FaListUl className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">Request Service Data</span>
                    </NavLink>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-2 md:p-5 lg:p-10">
                <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-1 md:p-2 lg:p-8">
                    {location.pathname === '/dashboard' && (
                        <h1 className="text-lg md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">
                            Welcome to Dashboard
                        </h1>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
