import axios from 'axios';
import {SERVER_URI} from "../config";

const instance = axios.create({
    baseURL: `${SERVER_URI}`,
    responseType: 'json'
});

// Set the AUTH token for any request
instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    Promise.reject(error)
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const originalRequest = error.config;

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.request.response.code === 401 && error.request.response.message === "Expired JWT Token"  && !originalRequest._retry) {
        originalRequest._retry = true;

        return axios.post(`${SERVER_URI}/api/token/refresh`, {
            refresh_token: localStorage.getItem('refresh_token')
        })
            .then(res => {
                if (res.status === 200) {
                    // 1) put token to LocalStorage
                    window.localStorage.setItem('token', res.data.token);
                    window.localStorage.setItem('refresh_token', res.data.refresh_token);

                    // 2) Change Authorization header
                    //instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;

                    // 3) return originalRequest object with Axios.
                    return instance(originalRequest);
                }
            })
    }
    return Promise.reject(error);
});

export default instance;