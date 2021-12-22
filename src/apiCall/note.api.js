import axios from 'axios';

export const fetchAllNotes = async (userId) => {
    const request = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/notes?id=${userId}`);
    return request.data;
};

export const addNewNote = async (data) => {
    const request = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/notes`, data);
    return request.data;
};

export const deleteNote = async (noteId) => {
    const request = await axios.delete(`${process.env.REACT_APP_API_SERVER_URL}/notes/${noteId}`);
    return request.data;
};