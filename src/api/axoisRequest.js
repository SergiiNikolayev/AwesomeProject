import instance from './axiosConfig';

export const loginUser = ({ username, password }) => {
  return instance.post('/api/login', { username, password });
};

export const registerUser = ({ email, password }) => {
  return instance.post('/api/register', { email, password });
};

export const loadUsers = () => {
  return instance.get('/api/users?page=2');
};