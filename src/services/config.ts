import axios from 'axios';

import { SERVER_URL } from '@constants/api';
import { CustomError } from '@custom/types/response';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    // 토큰 체크 후 재발급하는 로직 추가

    return response;
  },
  async (error) => {
    const { status, data } = error.response;
    const { errorCode, errorMessage } = data;

    const customError: CustomError = {
      success: false,
      errorCode,
      errorMessage,
      status,
    };

    return Promise.reject(customError);
  },
);

export default axiosInstance;
