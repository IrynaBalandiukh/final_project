import {axiosService} from './axios.service';
import {urls} from '../constants';

const authService = {
    login: (user) => axiosService.post(urls.login, user),
    registration: (user) => axiosService.post(urls.registration, user)
}

export {authService};