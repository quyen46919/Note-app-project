import axios from 'axios';

export const login = async (data) => {
    const request = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/auth/login`, data);
    return request.data;
};

export const logout = async (refreshToken) => {
    const request = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/auth/logout`, refreshToken);
    return request.data;
};

export const register = async (data) => {
    const request = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/auth/register`, data);
    return request.data;
};