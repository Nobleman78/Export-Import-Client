import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../ContextApi/AuthContext';
import UseProducts from '../../Utility/Hooks/UseProducts';
import UseServices from '../../Utility/Hooks/UseServices';

const AdminHome = () => {
    const [products] = UseProducts()
    const [services] = UseServices()
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className='text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400'>
                Hi Welcome Back, {user?.displayName || user?.email}
            </h2>
            <div className='mt-5 rounded-xl bg-gradient-to-r from-teal-400 via-blue-300 to-teal-600'>
                <div className='lg:text-4xl flex p-10 gap-5 text-white'>
                    <p className='bg-blue-500 px-5 py-5 rounded-3xl'> Products : {products.length}</p>
                    <p className='bg-blue-500 px-5 py-5 rounded-3xl'> Services : {services.length}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;