import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import phonebook from './phonebook/phonebookSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebook,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
