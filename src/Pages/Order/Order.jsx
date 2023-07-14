import React from 'react'
import Spinner from '../../Components/spinner';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Order = () => {
    const [axiosIs] = useAxios()

    const { data: order = [], refetch, isLoading } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await axiosIs(`order`)
            return res.data;
        },
    })

    return (
        <div className='custom-container my-4 lg:my-16'>
            {
                isLoading ?
                    <Spinner />
                    :

                    <div className="overflow-x-auto rounded-xl shadow-xl dark:shadow-white dark:shadow">
                        <table className="table bg-slate-100/50 dark:bg-transparent">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Estimate Delivery</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order.map(item =>
                                        <tr key={item._id}>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-circle w-12 h-12">
                                                        <img src={item.image} alt="Germany Food" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                    <div className="text-sm opacity-50">Germany Fav Food</div>
                                                </div>
                                            </td>
                                            <td className='opacity-80 tracking-wider ded w-5/12'>{item.description}</td>
                                            <td>
                                                {item.quantity}
                                            </td>
                                            <td className=''>$ {item.price * item.quantity}</td>
                                            <td>
                                                {item.deliveryTime} hrs
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default Order;