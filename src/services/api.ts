import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

export const register = (userData: { name: string; email: string; password: string }) =>
  api.post('/register', userData);

export const login = (credentials: { email: string; password: string }) =>
  api.post('/login', credentials);

export const getProfile = () => api.get('/profile');

export const updateProfile = (profileData: { name: string; age: number; weight: number; height: number }) =>
  api.put('/profile', profileData);

export default api;