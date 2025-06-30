import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api/auth',
});


export const registerUser = (userData) => API.post('/register', userData);
export const loginUser = (userData) => API.post('/login', userData);
export const forgotPassword = (email) => API.post('/forgot-password', { email });
export const resetPassword = (token, newPassword) => API.post(`/reset-password/${token}`, { password: newPassword });


export default API;
