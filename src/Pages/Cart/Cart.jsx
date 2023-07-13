import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import { FaMinusSquare, FaPlusCircle } from 'react-icons/fa';
import Spinner from '../../Components/spinner';
import Swal from 'sweetalert2';

const Cart = () => {
    const [axiosIs] = useAxios();

    const { data: cart = [], isLoading, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosIs.get('cart');
            return res.data;
        }
    })

    const handleDecrease = (id) => {
        axiosIs.patch(`cart/decrease-quantity/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                }
            })
    }

    const handleIncrease = (id) => {
        axiosIs.patch(`cart/increase-quantity/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                }
            })
    }

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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item =>
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
                                            <td className='opacity-80 tracking-wider ded w-7/12'>{item.description}</td>
                                            <td className='flex items-center gap-1'>
                                                <button onClick={() => handleDecrease(item._id)}>
                                                    <FaMinusSquare
                                                        className='text-2xl cursor-pointer hover:text-blue-400 duration-300'
                                                    />
                                                </button>
                                                <p className='text-2xl text-slate-700 dark:text-slate-300'>
                                                    {item.quantity}
                                                </p>
                                                <div onClick={() => handleIncrease(item._id)}>
                                                    <FaPlusCircle
                                                        className='text-2xl cursor-pointer hover:text-blue-400 duration-300'
                                                    />
                                                </div>
                                            </td>
                                            <td className='text-2xl'>$ {item.price * item.quantity}</td>
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

export default Cart;