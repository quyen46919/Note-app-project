import axios from 'axios';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
let authTokens = localStorage.getItem('nottable-user-tokens') ? JSON.parse(localStorage.getItem('nottable-user-tokens')) : {};

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER_URL,
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authTokens.access}`
    }
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    if (!authTokens) {
        authTokens = localStorage.getItem('nottable-user-tokens') ? JSON.parse(localStorage.getItem('nottable-user-tokens')) : {};
        config.headers.Authorization = `Bearer ${authTokens.access}`;
    }

    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
// Handle errors
    throw error;
});
export default axiosClient;