import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
})

// const getToken = () => {
//   const token = localStorage.getItem('jwt');
//   api.defaults.headers.common.authorization = `Bearer ${token}`;
// }

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  const { user, token } = resp.data;
  storeToken(token);
  return user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData });
  const token = resp.data.token;
  storeToken(token);
  return resp.data
}

export const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}

////// races //////

export const fetchRaces = async () => {
  const resp = await api.get('/races');
  return resp.data;
}

export const fetchNewRaces = async () => {
  const resp = await api.get('/newest5');
  return resp.data;
}

export const createRace = async (data) => {
  const resp = await api.post('/races', { race: data });
  return resp.data;
}

export const oneRace = async (id) => {
  const resp = await api.get(`/races/${id}`);
  return resp.data;
}

export const deleteRace = async (id) => {
  const resp = await api.delete(`/races/${id}`);
  return resp.data;
}

export const updateRace = async (id, data) => {
  const resp = await api.put(`/races/${id}`, { race: data });
  return resp.data;
}

////// notes //////

export const fetchNotes = async (race_id) => {
  const resp = await api.get(`/races/${race_id}/notes`);
  return resp.data;
}

export const createNote = async (race_id, data) => {
  const resp = await api.post(`/races/${race_id}/notes`, { note: data });
  return resp.data;
}

export const oneNote = async (race_id, id) => {
  const resp = await api.get(`/races/${race_id}/notes/${id}`);
  return resp.data;
}

export const updateNote = async (race_id, id, data) => {
  const resp = await api.put(`/races/${race_id}/notes/${id}`, { note: data });
  return resp.data;
}

export const deleteNote = async (race_id, id) => {
  const resp = await api.delete(`/races/${race_id}/notes/${id}`);
  return resp.data;
}