import axios from 'axios';
import { API_SERVER_URL } from 'utils/constant';

export const login = async (data) => {
    const request = await axios.post(`${API_SERVER_URL}/auth/login`, data);
    return request.data;
};

export const logout = async (refreshToken) => {
    const request = await axios.post(`${API_SERVER_URL}/auth/logout`, refreshToken);
    return request.data;
};

export const register = async (data) => {
    const request = await axios.post(`${API_SERVER_URL}/auth/register`, data);
    return request.data;
};