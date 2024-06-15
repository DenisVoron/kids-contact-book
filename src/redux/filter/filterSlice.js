import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filterValue: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, { payload }) {
            state.filterValue = payload;
        }
    }
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;