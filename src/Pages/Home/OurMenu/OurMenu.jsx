import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import MenuItem from './MenuItem';
import Spinner from '../../../Components/spinner';

const OurMenu = () => {

    const [axiosIs] = useAxios();

    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosIs.get('menu');
            return res.data;
        }
    })

    return (
        <div className='custom-container mt-16'>
            <SectionTitle
                title={'Our Menu'}
                subTitle={'Choose the most delicious food and order easily on Fav Food'}
            />

            {isLoading ?
                <Spinner />
                :
                <div className="overflow-x-auto rounded-xl shadow-xl dark:shadow-white dark:shadow">
                    <table className="table bg-slate-100/50 dark:bg-transparent">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default OurMenu;