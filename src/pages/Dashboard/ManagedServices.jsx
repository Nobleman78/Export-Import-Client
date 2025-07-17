import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseServices from '../../Utility/Hooks/UseServices';
import UseAxiosSecure from '../../Utility/Hooks/UseAxiosSecure';

const ManagedServices = () => {
    const axiosSecure = UseAxiosSecure()
    const [services, refetch] = UseServices();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleDelete = (id) => {
        axiosSecure.delete(`/services/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    alert('Service Successfully Deleted ')
                }
                else {
                    alert('Service Deleted Failed')
                }
            })
    }
    const filteredServices = services?.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-1 lg:p-4'>
            <h2 className='lg:text-2xl font-semibold mb-4 text-center'>Managed Services</h2>
            <div className='mb-6 text-center'>
                <input type='text' placeholder='Search by service name...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-full max-w-md px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300'
                />
            </div>
            <table className='w-full border border-gray-300 text-left'>
                <thead className='bg-gray-200'>
                    <tr className='text-sm'>
                        <th className="hidden lg:table-cell p-3 border">Image</th>
                        <th className='p-3 border'>Title</th>
                        <th className='p-3 border'>Description</th>
                        <th className='p-3 border'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredServices?.length > 0 ? (
                        filteredServices.map((service) => (
                            <tr key={service._id} className='hover:bg-gray-100 text-sm lg:text-lg'>
                                <td className='hidden lg:table-cell p-3 border'>
                                    <img src={service.image} alt={service.name} className='h-16 w-16 object-cover rounded' loading='lazy' />
                                </td>
                                <td className='p-3 border'>{service.title}</td>
                                <td className='p-3 border'>{service.description}</td>
                                <td className='p-3 border  gap-3'>
                                    <div className='flex flex-col lg:flex-row gap-3'>
                                        <button
                                            onClick={() => navigate(`/updateService/${service._id}`)}
                                            className='bg-blue-500 cursor-pointer text-white px-3 py-1 rounded mr-2 hover:bg-blue-600'>
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service._id)}
                                            className='bg-red-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-red-600'>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='5' className='text-center py-6 text-gray-500'>
                                No products found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManagedServices;
