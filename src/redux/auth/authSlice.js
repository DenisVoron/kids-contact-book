import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logInUser, logOut, refreshUser, registerUser } from "./operation";
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const arrFuncCreator = [logInUser, logOut, refreshUser, registerUser];

const authState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
    isLoading: false,
    error: null,
};

const addingTypeToFunctionCreator = (type) => {
    return arrFuncCreator.map(func => func[type]);
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleFulfilledRegisterAndLogIn = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.isLoading = false;
    state.error = null;
};

const handleFulfilledRefresh = (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isLoading = false;
    state.error = null;
}


const handleLogOutFulfilled = (state) => {
    state.user.name = '';
    state.user.email = '';
    state.token = null;
    state.isLoggedIn = false;
    state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoggedIn = false;
    state.isLoading = false;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    extraReducers: builder => builder
        .addCase(registerUser.fulfilled, handleFulfilledRegisterAndLogIn)
        .addCase(logInUser.fulfilled, handleFulfilledRegisterAndLogIn)
        .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
        .addCase(logOut.fulfilled, handleLogOutFulfilled)
        .addMatcher(isAnyOf(...addingTypeToFunctionCreator('pending')), handlePending)
        .addMatcher(isAnyOf(...addingTypeToFunctionCreator('rejected')), handleRejected),
});

const persistConfig = {
    key: 'authRoot',
    storage,
    whitelist: ['token']
};

const authReducer = authSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, authReducer);