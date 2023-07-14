import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useCart = () => {
    const [axiosIs] = useAxios();
    const { data: cart = [], isLoading, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosIs.get('cart');
            refetch();
            return res.data;
        }
    })

    return [cart, isLoading, refetch];
};

export default useCart;