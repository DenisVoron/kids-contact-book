import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContact, fetchContacts, removeContactById } from './operations';

const contactsInitialState = { data: [], isLoading: false, error: null };

const arrayOfReducerFn = [fetchContacts, createContact, removeContactById];

export const createReducerFnWithType = (type) => {
    return arrayOfReducerFn.map(func => func[type]);
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
};

const fetchContactsFulfilled = (state, { payload }) => {
    state.data = payload;
    state.error = null;
};

const createContactFulfilled = (state, { payload }) => {
    state.data.unshift(payload);
};

const removeContactByIdFulfilled = (state, { payload }) => {
    const indx = state.data.findIndex(contact => contact.id === payload.id);
    state.data.splice(indx, 1);
};

const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
        .addCase(createContact.fulfilled, createContactFulfilled)
        .addCase(removeContactById.fulfilled, removeContactByIdFulfilled)
        .addMatcher(isAnyOf(...createReducerFnWithType('pending')), handlePending)
        .addMatcher(isAnyOf(...createReducerFnWithType('fulfilled')), handleFulfilled)
        .addMatcher(isAnyOf(...createReducerFnWithType('rejected')), handleRejected)
});

export const contactsReducer = contactsSlice.reducer;