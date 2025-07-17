import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseProducts = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: products = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        },
    });

    return [products, refetch, loading];
};

export default UseProducts;
