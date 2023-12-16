import axios from 'axios';
import Cookies from 'js-cookie';

import { SERVER_URL } from '@constants/api';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Authorization-Access': Cookies.get('accesstoken'),
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
