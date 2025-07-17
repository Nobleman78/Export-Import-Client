import UseAxiosSecure from "../../Utility/Hooks/UseAxiosSecure";

const AddProducts = () => {
    const axiosSecure = UseAxiosSecure()
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
                const response = await axiosSecure.post('/products', productData);
                if (response.data.insertedId) {
                    alert('Data sent to the server successfully');
                    form.reset()
                } else {
                    alert('Failed to send data to the server');
                }

            }
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='w-full px-2 sm:px-6 md:px-10  py-10'>
            <h2 className='text-2xl sm:text-3xl text-center border-y-2 border-gray-300 w-fit mx-auto py-2 font-semibold'>ADD A PRODUCT</h2>
            <form onSubmit={handleForm} className='bg-gray-100 w-full max-w-3xl mx-auto mt-10 px-5 py-6 flex flex-col gap-5 rounded-lg shadow-md' >
                <div className='flex flex-col gap-2'>
                    <label>Product Name</label>
                    <input type="text" name='product' required placeholder='Product Name' className='px-3 py-2 bg-white border-none outline-none rounded w-full' />
                </div>
                <div className='flex flex-col sm:flex-row justify-between w-full gap-4'>
                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <label>Quality</label>
                        <select name='quality' required className="px-3 py-2 bg-white border border-gray-300 outline-none rounded w-full" defaultValue=""
                        >
                            <option value="" disabled>Select a Quality</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>

                        </select>
                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col gap-2'>
                        <h2>Price</h2>
                        <input type="number" required name='price' placeholder='Price' className='px-3 py-2 bg-white border border-gray-300 outline-none rounded w-full' />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Product Description</label>
                    <input type="text" name='description' required placeholder='Product Details' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Brand</label>
                    <input type="text" name='brand' required placeholder='Product Brand' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Availability</label>
                    <input type="text" name='availability' required placeholder='Product Availbility' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>madeIn</label>
                    <input type="text" name='madeIn' required placeholder='Madein ' className='py-3 px-3 w-full  bg-white border-none  outline-none rounded' />
                </div>
                <div>
                    <input required type="file" name='photo' accept='image/*' className='mt-2 py-2 bg-gray-50 w-50 px-2 rounded cursor-pointer ' />
                </div>
                <button className='bg-gradient-to-r from-teal-500 to-teal-600 text-white cursor-pointer px-5 py-2 mt-2 rounded-xl w-30'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;