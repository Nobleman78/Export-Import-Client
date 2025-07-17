import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import UseAxiosSecure from '../../Utility/Hooks/UseAxiosSecure';
import UseAxiosPublic from '../../Utility/Hooks/UseAxiosPublic';

const UpdateService = () => {
    const { id } = useParams()
    const [service, Setservice] = useState({})
    const navigate = useNavigate()
    const axiosSecure = UseAxiosSecure()
    const axiosPublic = UseAxiosPublic()
    axiosPublic.get(`/services/${id}`)
        .then(res => Setservice(res.data))

    const handleForm = async e => {
        e.preventDefault();
        const form = e.target
        const Name = form.service.value;
        const ProductDetails = form.description.value;
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
                const serviceData = {
                    title: Name,
                    image: data.data.url,
                    description: ProductDetails,

                }
                const response = await axiosSecure.patch(`/services/${id}`, serviceData);
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
            <button className='bg-teal-500 px-2 py-1 text-white flex items-center gap-2 cursor-pointer rounded hover:bg-teal-700 mx-20 ' onClick={() => navigate('/dashboard/manageServices')}><IoIosArrowBack />Back</button>
            <h2 className='text-2xl sm:text-3xl text-center border-y-2 border-gray-300 w-fit mx-auto py-2 font-semibold'>UPDATE A SERVICE</h2>
            <form onSubmit={handleForm} className='bg-gray-100 w-full max-w-3xl mx-auto mt-10 px-5 py-6 flex flex-col gap-5 rounded-lg shadow-md' >
                <div className='flex flex-col gap-2'>
                    <label>Service Name</label>
                    <input type="text" name='service' defaultValue={service.title} required placeholder='Service Name' className='px-3 py-2 bg-white border-none outline-none rounded w-full' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label>Product Description</label>
                    <input type="text" defaultValue={service.description} name='description' required placeholder='Service Details' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div>
                    <input required type="file" name='photo' accept='image/*' className='mt-2 py-2 bg-gray-50 w-50 px-2 rounded cursor-pointer ' />
                </div>
                <button className='bg-gradient-to-r from-teal-500 to-teal-600 text-white cursor-pointer px-5 py-2 mt-2 rounded-xl w-40'>Update Service</button>
            </form>
        </div>
    );
};

export default UpdateService;