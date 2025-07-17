import { useState } from 'react';
import UseProducts from '../../Utility/Hooks/UseProducts';
import { useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../Utility/Hooks/UseAxiosSecure';

const ManagedProducts = () => {
    const useAxios = UseAxiosSecure()
    const [products, refetch] = UseProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleDelete = (id) => {
        useAxios.delete(`/products/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    alert('Product Successfully Deleted ')
                }
                else {
                    alert('Product Deleted Failed')
                }
            })
    }
    const filteredProducts = products?.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-1 lg:p-4'>
            <h2 className='lg:text-2xl font-semibold mb-4 text-center'>Managed Products</h2>
            <div className='mb-6 text-center'>
                <input type='text' placeholder='Search by product name...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-full max-w-md px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300'
                />
            </div>
            <table className='w-full border border-gray-300 text-left'>
                <thead className='bg-gray-200'>
                    <tr className='text-sm'>
                        <th className="hidden lg:table-cell p-3 border">Image</th>
                        <th className='p-3 border'>Title</th>
                        <th className='hidden lg:table-cell p-3 border'>Price</th>
                        <th className='hidden lg:table-cell p-3 border'>Quality</th>
                        <th className='p-3 border'>Availability</th>
                        <th className='p-3 border'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts?.length > 0 ? (
                        filteredProducts.map((product) => (
                            <tr key={product._id} className='hover:bg-gray-100 text-sm lg:text-lg'>
                                <td className='hidden lg:table-cell p-3 border'>
                                    <img src={product.img} alt={product.name} className='h-16 w-16 object-cover rounded' loading='lazy' />
                                </td>
                                <td className='p-3 border'>{product.name}</td>
                                <td className='p-3 border hidden xl:table-cell'>${product.price}</td>
                                <td className='p-3 border'>{product.availability}</td>
                                <td className='p-3 border hidden xl:table-cell'>{product.quality}</td>
                                <td className='p-3 border  gap-3'>
                                    <div className='flex flex-col lg:flex-row gap-3'>
                                        <button
                                            onClick={() => navigate(`/updateProduct/${product._id}`)}
                                            className='bg-blue-500 cursor-pointer text-white px-3 py-1 rounded mr-2 hover:bg-blue-600'>
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product._id)}
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

export default ManagedProducts;
