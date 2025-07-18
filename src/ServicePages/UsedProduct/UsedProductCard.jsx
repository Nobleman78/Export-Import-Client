import { useNavigate } from 'react-router-dom';

const UsedProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden'>
                <img src={product.img} alt={product.name} className='w-full h-52 object-contain bg-gray-200 p-4' loading='lazy' />
                <div className='p-5 flex flex-col gap-3 flex-1'>
                    <h2 className='text-lg font-semibold text-gray-800'>{product.name}</h2>
                    <p className='text-sm text-gray-500 font-medium'>{product.brand}</p>
                    <p className='text-xl font-bold text-[#1e928e]'>${product.price}</p>
                    <p className='text-sm text-gray-600'>{product.description}</p>
                    <div className='flex flex-wrap items-center gap-2 text-sm mt-auto'>
                        <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full'>
                            {product.availability}
                        </span>
                        <span className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full'>
                            {product.quality}
                        </span>
                        <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full'>
                            Made in {product.madeIn}
                        </span>
                    </div>
                    <button onClick={() => { navigate(`/product/productDescription/${product._id}`, scrollTo(0, 0)) }} className='mt-4 cursor-pointer bg-[#1e928e] hover:bg-[#15726f] text-white py-2 rounded-lg font-medium transition'>
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UsedProductCard;