import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.token;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  return resp.data;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/users/verify');
    return resp.data;
  }
  return false;
}

export const fetchRaces = async () => {
  const resp = await api.get('/races');
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

export const fetchNotes = async (race_id) => {
  const resp = await api.get(`/races/${race_id}/notes`);
  return resp.data;
 }

 export const createNote = async (race_id, data) => {
  const resp = await api.post(`/races/${race_id}/notes`, { note: data });
  return resp.data;
 }
