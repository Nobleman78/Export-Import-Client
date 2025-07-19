import { Link, useParams } from 'react-router-dom';
import UseProducts from '../../Utility/Hooks/UseProducts';
import { IoIosArrowForward } from "react-icons/io";

const ProductDescription = () => {
    const { id } = useParams();
    const [products] = UseProducts();
    const product = products.find(p => p._id === id);

    if (!product) {
        return (
            <div className='flex justify-center items-center h-screen text-gray-600'>
                Loading product...
            </div>
        );
    }

    return (
        <div className='bg-gray-100 min-h-screen py-10'>
            <div className='bg-white mb-5 px-4 lg:px-10 py-3 flex items-center gap-3 text-sm lg:text-md'>
                <Link to='/product' className='flex items-center gap-1 cursor-pointer'>Products <IoIosArrowForward/></Link>
                <span className='flex items-center gap-1'>Product Detailes <IoIosArrowForward/></span>
                <span>{product.name}</span>
            </div>
            <main className=' lg:max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-10 grid md:grid-cols-2 gap-10'>
                <div className='flex justify-center items-center bg-gray-50 p-6 rounded-lg'>
                    <img src={product.img} alt={product.name} className='w-full max-h-96 object-contain' />
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold text-gray-800'>{product.name}</h2>
                    <p className='text-gray-700 text-lg'>{product.description}</p>

                    <div className='text-xl font-semibold text-indigo-600'>${product.price}</div>

                    <ul className='space-y-1 mt-4 text-gray-600'>
                        <li><span className='font-medium text-gray-800'>Brand:</span> {product.brand}</li>
                        <li><span className='font-medium text-gray-800'>Made In:</span> {product.madeIn}</li>
                        <li><span className='font-medium text-gray-800'>Availability:</span> {product.availability}</li>
                        <li><span className='font-medium text-gray-800'>Quality:</span> {product.quality}</li>
                    </ul>

                    <button className='mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg cursor-pointer hover:bg-teal-700 transition'>
                        Call Us or Come to Our Office
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ProductDescription;
