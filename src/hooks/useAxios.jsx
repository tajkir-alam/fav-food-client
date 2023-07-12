import axios from 'axios';
import React from 'react';

const useAxios = () => {
    const axiosIs = axios.create({
        baseURL: 'http://localhost:5000/'
    })
    return [axiosIs];
};

export default useAxios;