import axios from 'axios';
import { API } from './constants';

export const fetchUsers = async () => {
  const response = await axios.get(`${API}/users`);

  return await response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post(`${API}/users`, data);

  return await response.data;
};