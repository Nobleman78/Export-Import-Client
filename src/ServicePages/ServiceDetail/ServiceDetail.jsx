import { Link, useNavigate, useParams } from 'react-router-dom';
import UseServices from '../../Utility/Hooks/UseServices';
import { IoIosArrowForward } from "react-icons/io";

const ServiceDetail = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const [services] = UseServices()
    const navigate = useNavigate()
    const filterData = services.find(
        (service) => service.title.toLowerCase() === decodedTitle.toLowerCase()
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
        <div>
            <div className='bg-gray-100 py-3 px-20 mb-5 flex gap-1'>
                <Link  className='flex items-center cursor-pointer' to='/services'>Service<IoIosArrowForward /></Link>
                <span className='flex items-center'>Service Detail <IoIosArrowForward/></span>
                <span>{title}</span>
            </div>
            <main className='max-w-7xl mx-auto px-6 py-10'>
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

                        <div className='flex gap-3'>
                            <button onClick={() => { navigate('/services/request', scrollTo(0, 0)) }} className='bg-teal-400 px-5 py-3 text-white cursor-pointer rounded hover:bg-teal-700'>Take Service</button>
                            <div className="relative group">
                                <button className='bg-teal-400 px-5 py-3 text-white cursor-pointer rounded hover:bg-teal-700'>
                                    Call Us
                                </button>

                                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                    +8801401791719
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
};

export default ServiceDetail;
