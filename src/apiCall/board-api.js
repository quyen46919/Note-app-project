import axios from 'axios';
import { API_SERVER_URL } from 'utils/constant';
import axiosClient from './axiosClient';

export const fetchAllBoardsádsadsa = async () => {
    const request = await axios.get(`${API_SERVER_URL}/boards`);
    return request.data;
};

export const fetchAllBoard = async (id) => {
    return axiosClient.get(`/boards?id=${id}`);
};

export const fetchBoarDetail = async (id) => {
    const request = await axios.get(`${API_SERVER_URL}/boards/${id}`);
    return request.data;
};

export const addNewBoard = async (data) => {
    const request = await axios.post(`${API_SERVER_URL}/boards`, data);
    return request.data;
};

export const updateBoard = async (id, data) => {
    const request = await axios.patch(`${API_SERVER_URL}/boards/${id}`, data);
    return request.data;
};

export const addNewColumn = async (data) => {
    const request = await axios.post(`${API_SERVER_URL}/columns`, data);
    return request.data;
};

export const updateColumn = async (id, data) => {
    const request = await axios.patch(`${API_SERVER_URL}/columns/${id}`, data);
    return request.data;
};

export const deleteColumn = async (id) => {
    const request = await axios.delete(`${API_SERVER_URL}/columns/${id}`);
    return request.data;
};

export const addNewCard = async (data) => {
    const request = await axios.post(`${API_SERVER_URL}/cards`, data);
    return request.data;
};

export const updateCard = async (id, data) => {
    const request = await axios.patch(`${API_SERVER_URL}/cards/${id}`, data);
    return request.data;
};

export const deleteCard = async (id) => {
    const request = await axios.delete(`${API_SERVER_URL}/cards/${id}`);
    return request.data;
};