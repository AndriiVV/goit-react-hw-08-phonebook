import { createSlice } from '@reduxjs/toolkit';
import { getCurUser, loginUser, registerUser } from './authOperations';

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string'
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const initialState = {
  user: {
    name: '',
    email: '',
    // id: null,
  },
  token: getFromLS('token'),
  // refreshToken: getFromLS('refreshToken'),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.token = payload;
    },
    logOut(state) {
      state.user = {
        name: '',
        email: '',
        // id: null,
      };
      state.token = null;
      state.isLoading = false;
      state.error = null;
      localStorage.setItem('token', JSON.stringify(null));
    },
  },
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      // localStorage.setItem('refreshToken', payload.refreshToken);
      state.isLoading = false;
      state.user.name = payload.name;
      state.user.email = payload.email;
      // state.user.id = payload.id;
      state.token = payload.token;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.isLoading = false;
      state.user.name = payload.name;
      state.user.email = payload.email;
      // state.user.id = payload.id;
      state.token = payload.token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user.name = payload.name;
      state.user.email = payload.email;
      // state.user.id = payload.id;
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;
