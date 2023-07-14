import axios from 'axios';
import React from 'react';

const useAxios = () => {
    const axiosIs = axios.create({
        baseURL: 'http://localhost:5000/'
        // baseURL: 'https://fav-food-server.vercel.app/'
    })
    return [axiosIs];
};

export default useAxios;