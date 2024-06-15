import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getAllContacts } from "API/contacts-api";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        return await getAllContacts();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const createContact = createAsyncThunk('contacts/createContact', async (newContact, thunkAPI) => {
    try {
        return await addContact(newContact);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const removeContactById = createAsyncThunk('contacts/removeContact', async (id, thunkAPI) => {
    try {
        const contact = await deleteContact(id);
        return contact;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})