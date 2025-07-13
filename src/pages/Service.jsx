import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import vegetable from '../assets/Services/vegetable.png'
import plastic from '../assets/Services/water-bottle.png'
import medicine from '../assets/Services/pharmacy.png'
import electronics from '../assets/Services/electronic-devices.png'
import engineeringoods from '../assets/Services/business.png'
import agricultre from '../assets/Services/commodity.png'
import air from '../assets/Services/cargo-plane.png'
import truck from '../assets/Services/delivery-truck.png'
import ship from '../assets/Services/freight.png'


const services = [
    {
        id: 1,
        title: 'Vegetable',
        description: 'Sell your products to global markets with complete support for documentation, logistics, and compliance.',
        image: vegetable,

    },
    {
        id: 2,
        title: 'Plastic',
        description: 'Source goods from international suppliers with customs, tracking, and delivery handled for you.',
        image: plastic,

    },
    {
        id: 3,
        title: 'Drugs and Pharmaseuticals',
        description: 'List brand-new items for sale locally or internationally and attract potential buyers easily.',
        image: medicine,

    },
    {
        id: 4,
        title: 'Electronics',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        image: electronics,

    },
    {
        id: 5,
        title: 'Engineering Goods',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        image: engineeringoods,

    },
    {
        id: 6,
        title: 'Agricultures',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        image: agricultre,

    },
    {
        id: 7,
        title: 'Air',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        image: air,
        
    },
    {
        id: 8,
        title: 'Land',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        image: truck,

    },
    {
        id: 9,
        title: 'Ocean',
        description: 'Sell used or refurbished products with condition tags and secure buyer verification.',
        image: ship,

    },
];


const Service = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Helmet>
                <title>Service | Eximport</title>
            </Helmet>
            <div className='relative '>
                <img src='https://www.solidtheme.org/themes/export004/img/ser-3.jpg'
                    loading='lazy' alt='about-image' className='w-full h-100 z-10 ' />
                <div className='absolute inset-0 bg-black/35'></div>
                <h2 className='absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-bold  bg-opacity-40 z-30'>
                    Services
                </h2>
            </div>

            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20 bg-gray-50 py-20'>
                {services.map((service) => (
                    <div key={service.id} className='bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center justify-between text-center border border-gray-300'>
                        <img src={service.image} className='h-20 w-20' loading='lazy' alt={service.title} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{service.title}</h3>
                        <p className='text-gray-600 mb-4'>{service.description}</p>

                        <button onClick={() => { navigate('/services/request'), scrollTo(0, 0) }} className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition cursor-pointer'>
                            Take Service
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
