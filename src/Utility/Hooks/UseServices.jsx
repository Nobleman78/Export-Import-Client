import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseServices = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        },
    });

    return [services, refetch];
};

export default UseServices;
