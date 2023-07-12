import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

const Nav = () => {
    const [axiosIs] = useAxios()
    const { data: check = [] } = useQuery({
        queryKey: ['check'],
        queryFn: async () => {
            const res = await axiosIs.get('users');
            return res.data;
        }
    })
    console.log(check);

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <div>
            this is nav
        </div>
    );
};

export default Nav;