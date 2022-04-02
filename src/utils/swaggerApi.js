import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const transformGetData = data =>
  data.map(({ name, phone, id }) => ({ name, phone, id }));

export const registerUserApi = userData => {
  return axios.post('/users/signup', userData).then(({ data }) => ({
    token: data.token,
    name: data.user.name,
    email: data.user.email,
    id: data.user.id,
  }));
};

export const loginUserApi = userData => {
  // axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

  return axios.post('/users/login', userData).then(({ data }) => ({
    token: data.token,
    name: data.user.name,
    email: data.user.email,
    id: data.user.id,
  }));
};

export const getCurUserApi = token => {
  // axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
  axios.defaults.headers.common['Authorization'] = token;

  console.log('getCurUserApi is running...');

  return axios.get('/users/current').then(({ data }) => ({
    name: data.name,
    email: data.email,
    id: data.id,
  }));
};

export const addContactApi = (contact, token) => {
  axios.defaults.headers.common['Authorization'] = token;

  return axios
    .post('/contacts', contact)
    .then(({ data }) => ({ ...contact, id: data.id }))
    .catch(err => err);
};

export const getContactApi = token => {
  axios.defaults.headers.common['Authorization'] = token;

  return axios
    .get('/contacts')
    .then(({ data }) => {
      const newData = transformGetData(data);
      // console.log("getContactApi()... newData is: ", newData);
      return newData;
    })
    .catch(err => err);
};

export const deleteContactApi = (contactId, token) => {
  axios.defaults.headers.common['Authorization'] = token;

  return axios
    .delete(`/contacts/${contactId}`)
    .then(() => contactId)
    .catch(err => err);
};

export const patchContactApi = (contactId, token, contact) => {
  axios.defaults.headers.common['Authorization'] = token;

  return axios
    .patch(`/contacts/${contactId}`, contact)
    .then(() => contactId)
    .catch(err => err);
};
