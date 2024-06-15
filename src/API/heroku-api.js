import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeToken = () => {
    axios.defaults.headers.common['Authorization'] = '';
};

export const signupUser = async (user) => {
    const response = await axios.post('/users/signup', user);
    setToken(response.data.token);
    return response.data;
};

export const loginUser = async (user) => {
    const response = await axios.post('/users/login', user);

    setToken(response.data.token);
    return response.data;
};

export const logOutUser = async () => {
    await axios.post('/users/logout');
    removeToken();
};

export const getCurrentUser = async (token) => {
    setToken(token);
    const response = await axios.get('/users/current');
    return response.data;
};
