import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import UseAxiosSecure from '../../Utility/Hooks/UseAxiosSecure';
import UseAxiosPublic from '../../Utility/Hooks/UseAxiosPublic';

const UpdateProduct = () => {
    const axiosSecure = UseAxiosSecure()
    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [quality, setQuality] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axiosPublic.get(`/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setQuality(res.data.quality)
            })

    }, [axiosPublic, id])
    const handleForm = async e => {
        e.preventDefault();
        const form = e.target
        const Name = form.product.value;
        const Price = form.price.value;
        const Brand = form.brand.value;
        const Quality = form.quality.value;
        const ProductDetails = form.description.value;
        const Availability = form.availability.value;
        const MadeIn = form.madeIn.value;
        const file = form.photo.files[0];

        if (!file) {
            return
        }
        // Called an api to store the image
        const apiKey = 'f8cf886adccf621e8ecb1769bea18337';
        // Keeping the image data in a formdata
        const formData = new FormData()
        formData.append("image", file)
        try {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json()
            if (data.success) {
                const productData = {
                    name: Name,
                    img: data.data.url,
                    price: Price,
                    brand: Brand,
                    quality: Quality,
                    description: ProductDetails,
                    madeIn: MadeIn,
                    availability: Availability
                }
                const response = await axiosSecure.patch(`/products/${id}`, productData);
                if (response.data.modifiedCount > 0) {
                    alert('Product updated successfully');

                } else {
                    alert('No changes were made or update failed');
                }

            }
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='w-full px-2 sm:px-6 md:px-10 py-10'>
            <button className='bg-teal-500 px-2 py-1 text-white flex items-center gap-2 cursor-pointer rounded hover:bg-teal-700 mx-20 ' onClick={() => navigate('/dashboard/manageProducts')}><IoIosArrowBack />Back</button>
            <h2 className='text-2xl sm:text-3xl text-center border-y-2 border-gray-300 w-fit mx-auto py-2 font-semibold'>UPDATE A PRODUCT</h2>
            <form onSubmit={handleForm} className='bg-gray-100 w-full max-w-3xl mx-auto mt-10 px-5 py-6 flex flex-col gap-5 rounded-lg shadow-md' >
                <div className='flex flex-col gap-2'>
                    <label>Product Name</label>
                    <input type="text" name='product' defaultValue={product.name} required placeholder='Product Name' className='px-3 py-2 bg-white border-none outline-none rounded w-full' />
                </div>
                <div className='flex flex-col sm:flex-row justify-between w-full gap-4'>
                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <label>Quality</label>
                        <select name='quality' required value={quality} onChange={(e) => setQuality(e.target.value)} className="px-3 py-2 bg-white border border-gray-300 outline-none rounded w-full"
                        >
                            <option value="" disabled>Select a Quality</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </select>

                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <h2>Price</h2>
                        <input type="number" defaultValue={product.price} required name='price' placeholder='Price' className='px-3 py-2 bg-white border border-gray-300 outline-none rounded w-full' />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Product Description</label>
                    <input type="text" defaultValue={product.description} name='description' required placeholder='Product Details' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Brand</label>
                    <input type="text" defaultValue={product.brand} name='brand' required placeholder='Product Brand' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Availability</label>
                    <select name='availability' required className="px-3 py-2 bg-white border border-gray-300 outline-none rounded w-full" defaultValue={product.availability}>
                        <option value="" disabled>Select Availability</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Stock Out">Stock Out</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label>madeIn</label>
                    <input type="text" name='madeIn' defaultValue={product.madeIn} required placeholder='Madein ' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div>
                    <input required type="file" name='photo' accept='image/*' className='mt-2 py-2 bg-gray-50 w-50 px-2 rounded cursor-pointer ' />
                </div>
                <button className='bg-gradient-to-r from-teal-500 to-teal-600 text-white cursor-pointer px-5 py-2 mt-2 rounded-xl w-40'>Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;