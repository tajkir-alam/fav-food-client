import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCart = () => {
    const [axiosIs] = useAxios()

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosIs(`cart`) 
            return res.data;
        },
    })
    return [cart, refetch]
}

export default useCart;