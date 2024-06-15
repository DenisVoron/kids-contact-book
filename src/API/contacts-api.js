import axios from 'axios';

// axios.defaults.baseURL = 'https://637d094a16c1b892ebc62efc.mockapi.io';
// const instance = axios.create({
//     baseURL: 'https://637d094a16c1b892ebc62efc.mockapi.io'
// });

export const getAllContacts = async () => {
    const response = await axios.get('/contacts');
    return response.data;
};

export const addContact = async (newContact) => {
    const response = await axios.post('/contacts', newContact);
    return response.data;
};

export const deleteContact = async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
};