import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import apiConfig from "./api.config";

const api = () => {
    const instanceApi = axios.create({
        baseURL: apiConfig.BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    })
    
    instanceApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        return config;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    })
    
    instanceApi.interceptors.response.use((response: AxiosResponse) => {
        return response;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    })
    
    return instanceApi;
}

export default api;