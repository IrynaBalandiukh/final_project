const baseURL = process.env.REACT_APP_API;

const urls = {
    registration: '/auth/signup',
    login: '/auth/signin',
    users: '/users',
    companies: '/companies',
}

export default baseURL;
export {urls};