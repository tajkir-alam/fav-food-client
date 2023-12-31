import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { FaMinusSquare, FaPlusCircle } from 'react-icons/fa';
import Spinner from '../../Components/spinner';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const Cart = () => {
    const [axiosIs] = useAxios();
    const [cart, refetch, isLoading] = useCart();

    const handleDecrease = (id, quantity) => {
        if (quantity > 1) {
            axiosIs.patch(`cart/decrease-quantity/${id}`)
                .then(data => {
                    if (data.data.modifiedCount > 0) {
                        refetch();
                    }
                })
        }
    }

    const handleIncrease = (id, price) => {
        axiosIs.patch(`cart/increase-quantity/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                }
            })
    }

    const handleOrderNow = (item) => {
        const { _id, name, image, description, price, deliveryTime, quantity, itemId } = item;
        const ordered = {
            itemId: _id,
            name,
            image,
            description,
            price,
            deliveryTime,
            quantity
        }

        axiosIs.post('order', ordered)
            .then(data => {
                if (data.data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your order has been succeed',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    axiosIs.delete(`cart/${_id}`)
                        .then(data => {
                            if (data.data.deletedCount > 0){
                                refetch();
                            }
                    })
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
                                    <th>Action</th>
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
                                            <td className='opacity-80 tracking-wider ded w-5/12'>{item.description}</td>
                                            <td className='flex items-center gap-1'>
                                                <button
                                                    onClick={() => handleDecrease(item._id, item.quantity)}
                                                    disabled={item.quantity === 1}
                                                >
                                                    <FaMinusSquare
                                                        className={`text-2xl cursor-pointer hover:text-blue-400 duration-300 ${item.quantity === 1 && 'text-slate-200 hover:text-slate-200'}`}
                                                    />
                                                </button>
                                                <p className='text-2xl text-slate-700 dark:text-slate-300'>
                                                    {item.quantity}
                                                </p>
                                                <div onClick={() => handleIncrease(item._id, item.price)}>
                                                    <FaPlusCircle
                                                        className='text-2xl cursor-pointer hover:text-blue-400 duration-300'
                                                    />
                                                </div>
                                            </td>
                                            <td className='text-2xl'>$ {item.price * item.quantity}</td>
                                            <td>
                                                <button onClick={() => handleOrderNow(item)} className="btn btn-error text-white">Order Now</button>
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

export default Cart;