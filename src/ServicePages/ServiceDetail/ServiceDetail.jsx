import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../ContextApi/AuthContext';

const ServiceDetail = () => {
    const { title } = useParams();
    const { services } = useContext(AuthContext);
    const navigate = useNavigate()
    const filterData = services.find(
        (service) => service.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
    );

    if (!filterData) {
        return (
            <div className='flex items-center justify-center h-[60vh]'>
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold text-red-600'>Service Not Found</h2>
                    <p className='text-gray-600 mt-2'>We couldn’t find the service you’re looking for.</p>
                </div>
            </div>
        );
    }
    return (
        <div className='max-w-7xl mx-auto px-6 py-10'>
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row gap-8 p-6'>
                <div className='lg:w-1/2'>
                    <img src={filterData.image} loading='lazy' alt={filterData.title} className='w-full h-full object-cover rounded-lg' />
                </div>

                <div className='lg:w-1/2 flex flex-col gap-5'>
                    <div>
                        <h1 className='text-3xl font-bold text-teal-700'>{filterData.title}</h1>
                        <p className='text-gray-700 leading-relaxed text-lg'></p>
                    </div>
                    {filterData.description}

                    <button onClick={() => navigate('/services/request')} className='bg-teal-400 px-5 py-3 text-white cursor-pointer rounded hover:bg-teal-700'>Call Us to Take Service</button>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetail;
