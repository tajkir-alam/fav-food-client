import React from 'react';

const MenuItem = ({item}) => {
    console.log(item);
    return (
        <tr>
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
            <td className='opacity-80 tracking-wider'>{item.description}</td>
            <td>{item.price}</td>
            <td>
                <button className="btn btn-error text-white">Add To Cart</button>
            </td>
        </tr>
    );
};

export default MenuItem;