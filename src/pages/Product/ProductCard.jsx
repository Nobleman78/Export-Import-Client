import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain p-4 bg-gray-50"
            />
            <div className="px-4 py-3 space-y-2">
                <h3 className="text-base font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.brand} | {product.quality}</p>
                <p className="text-[#1e928e] font-bold text-lg">${product.price}</p>
                <button onClick={() => { navigate(`/product/productDescription/${product._id}`, scrollTo(0, 0)) }} className="w-full bg-[#5cafac] hover:bg-[#176b68] cursor-pointer text-white py-2 rounded-lg text-sm font-medium transition">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
