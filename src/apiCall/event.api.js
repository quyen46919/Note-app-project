import axios from 'axios';

export const fetchAllEvents = async (userId) => {
    const request = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/events?id=${userId}`);
    return request.data;
};

export const addNewEvent = async (data) => {
    const request = await axios.post(`${process.env.REACT_APP_API_SERVER_URL}/events`, data);
    return request.data;
};

export const deleteEvent = async (noteId) => {
    const request = await axios.delete(`${process.env.REACT_APP_API_SERVER_URL}/events/${noteId}`);
    return request.data;
};