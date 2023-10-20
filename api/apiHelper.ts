import axios from 'axios';

interface AxiosInstance { [key: string]: any }
let api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        "Content-Type": "application/json",
        "Language": "hu"
    }
});

const getToken = () => null
const setToken = (token: string | null) => {}
export const initAxios = (env: any) => {
    api.defaults.baseURL = env.baseUrl;
}

const beforeUrl = '';

export const APIGET = async (url: string) => {
    try {
        api.defaults.headers['X-AUTH-TOKEN'] = `${getToken()}`;
        url = beforeUrl + url;
        const response = await api.get(url);
        if (response.status === 401) {
            setToken(null);
        }
        return response
    } catch (error: any) {
        if (error.response.status === 401) {
            setToken(null);
        }
        return error.response
    }
}

export const APIPOST = async (url: string, data: any) => {
    try {
        if (url !== 'auth/login') {
            api.defaults.headers['X-AUTH-TOKEN'] = `${getToken()}`;
            url = beforeUrl + url;
        } else {
            delete api.defaults.headers['X-AUTH-TOKEN']
        }
        const response = await api.post(url, data);
        if (response.status === 401) {
            setToken(null);
        }
        return response;
    } catch (error: any) {
        if (error.response.status === 401) {
            setToken(null);
        }
        return error.response
    }
}

export const APIPUT = async (url: string, data: any) => {
    try {
        api.defaults.headers['X-AUTH-TOKEN'] = `${getToken()}`;
        url = beforeUrl + url;
        const response = await api.put(url, data);
        if (response.status === 401) {
            setToken(null);
        }
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
            return null;
        }
    } catch (error: any) {
        if (error.response.status === 401) {
            setToken(null);
        }
    }
}

export const APIDELETE = async (url: string) => {
    try {
        api.defaults.headers['X-AUTH-TOKEN'] = `${getToken()}`;
        url = beforeUrl + url;
        const response = await api.delete(url);
        if (response.status === 401) {
            setToken(null);
        }
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
            return null;
        }
    } catch (error: any) {
        if (error.response.status === 401) {
            setToken(null);
        }
    }
}

export const APIPATCH = async (url: string, data: any) => {
    try {
        api.defaults.headers['X-AUTH-TOKEN'] = `${getToken()}`;
        url = beforeUrl + url;
        const response = await api.patch(url, data);
        if (response.status === 401) {
            setToken(null);
        }
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
            return null;
        }
    } catch (error: any) {
        if (error.response.status === 401) {
            setToken(null);
        }
    }
}