import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   getCurUserApi,
// loginUserApi,
//   refreshTokenApi,
//   registerUserApi,
// } from '../../utils/firebaseApi';
import {
  registerUserApi,
  loginUserApi,
  getCurUserApi,
} from '../../utils/swaggerApi';
// import { errorHandler } from '../error/errorHandler';
// import { logOut, setToken } from './authSlice';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      console.log('registerUser is running... userData is: ', userData);
      const data = await registerUserApi(userData);
      console.log('registerUser is finishing... Data is: ', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  'auth/curUser',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().auth;
    try {
      console.log('getCurUser is running...');
      const data = await getCurUserApi(token);
      return data;
    } catch (error) {
      // setTimeout(() => {
      //   thunkApi.dispatch(errorHandler({ error, cb: getCurUser }));
      // }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
