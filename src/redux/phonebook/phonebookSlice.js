import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, deleteContact } from './phonebookOperations';

const initialPhonebook = () => getContacts();

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: initialPhonebook,
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeSelect(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
  extraReducers: {
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeSelect } = phonebookSlice.actions;
export default phonebookSlice.reducer;
