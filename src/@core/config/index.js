import axios from 'axios';

const baseUrl = 'https://reactnative.dev';
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });
export default instance;