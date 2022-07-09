import {axiosService} from './axios.service';
import {urls} from '../constants';

const companiesService = {
    getAll: () => axiosService.get(urls.companies),
    getById: (id) => axiosService.get(`${urls.companies}/${id}`),
    getByUserId: (userId) => axiosService.get(`${urls.companies}/user/${userId}`),
    create: (company) => axiosService.post(urls.companies, company),
    updateById: (id, company) => axiosService.put(`${urls.companies}/${id}`, company),
    deleteById: (id) => axiosService.delete(`${urls.companies}/${id}`),
}

export {companiesService};