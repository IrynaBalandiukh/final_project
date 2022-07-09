import axios from 'axios';
import baseURL from '../constants/urls';

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export {axiosService};