import axios from 'axios';

const reqAPI = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: import.meta.env.VITE_BASE_URL,
  'Access-Control-Allow-Origin': '*',
});

export default reqAPI;
