import axios from 'axios';

export const registerUserApi = userData => {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

  return axios.post('/users/signup', userData).then(({ data }) => ({
    token: data.token,
    name: data.user.name,
    email: data.user.email,
    id: data.user.id,
  }));
};

export const loginUserApi = userData => {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

  return axios.post('/users/login', userData).then(({ data }) => ({
    token: data.token,
    name: data.user.name,
    email: data.user.email,
    id: data.user.id,
  }));
};

export const getCurUserApi = token => {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
  axios.defaults.headers.common['Authorization'] = token;

  console.log('getCurUserApi is running...');

  return axios.get('/users/current').then(({ data }) => ({
    name: data.name,
    email: data.email,
    id: data.id,
  }));
};
