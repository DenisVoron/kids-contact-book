import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, logOutUser, loginUser, signupUser } from "API/heroku-api";

export const registerUser = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await signupUser(credentials);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const logInUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await loginUser(credentials);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
    try {
        await logOutUser();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    };

    try {
        const response = await getCurrentUser(persistedToken);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});