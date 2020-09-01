import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.haruo.dev',
});

export default api;
