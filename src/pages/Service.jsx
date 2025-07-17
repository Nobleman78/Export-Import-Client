import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import UseServices from '../Utility/Hooks/UseServices';

const Service = () => {
    const navigate = useNavigate()
    const [services] = UseServices()

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
                        <img src={service.image} className='w-full rounded-xl' loading='lazy' alt={service.title} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{service.title}</h3>
                        <p className='text-gray-600 mb-4'>{service.description}</p>

                        <div className='flex gap-2'>
                            <button onClick={() => { navigate('/services/request'), scrollTo(0, 0) }} className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition cursor-pointer'>
                                Take Service
                            </button>
                            <button onClick={() => { navigate(`/serviceDetail/${service.title}`), scrollTo(0, 0) }} className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition cursor-pointer'>
                                See Details
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
