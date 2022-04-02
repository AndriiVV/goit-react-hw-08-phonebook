import {
  addContactApi,
  deleteContactApi,
  getContactApi,
  // patchContactApi,
} from '../../utils/swaggerApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await addContactApi(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'phonebook/getContacts',
  async (_, thunkApi) => {
    // console.log("thunkApi :>> ", thunkApi);
    try {
      const contacts = await getContactApi();
      // console.log("getContacts()... contacts: ", contacts);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (id, thunkApi) => {
    try {
      await deleteContactApi(id);
      // console.log("deleteContact(id)... id: ", id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
