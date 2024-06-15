import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter";

export const selectContacts = state => state.contacts.data;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContact = createSelector([selectFilter, selectContacts], (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
});
