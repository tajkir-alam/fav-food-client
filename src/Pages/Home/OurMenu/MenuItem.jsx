import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import { CartLengthContext } from '../../../providers/CartLengthProvider';
import useCart from '../../../hooks/useCart';

const MenuItem = ({ item }) => {
    const [active, setActive] = useState(false);
    const { cartLength, setCartLength } = useContext(CartLengthContext)
    const { _id, name, image, description, price } = item;
    const [axiosIs] = useAxios();
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        setActive(true)
        setCartLength(cartLength + 1)

        const cart = {
            itemId: _id,
            name,
            image,
            description,
            price,
            quantity: 1
        }

        axiosIs.post('cart', cart)
            .then(data => {
                if (data.data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your item has been added',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                        <img src={image} alt="Germany Food" />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">Germany Fav Food</div>
                </div>
            </td>
            <td className='opacity-80 tracking-wider w-6/12'>{description}</td>
            <td className='text-lg'>$ {price}</td>
            <td>
                <button onClick={handleAddToCart} disabled={active} className="btn btn-error text-white">Add To Cart</button>
            </td>
        </tr>
    );
};

export default MenuItem;