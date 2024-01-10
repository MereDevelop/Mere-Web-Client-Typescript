import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { SERVER_URL } from '@constants/api';
import { FailureResponse } from '@custom/types/common/Response';
import {
  isTokenExpirationErrorCode,
  isUserTokenErrorCode,
} from '@utils/checker/token';

import { isSuccessResponse } from '@utils/checker/common';
import { getAccessToken, setAccessToken } from '@store/auth-store';
import { reIssueAccessToken } from './auth/token';

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onError);

function onRequest(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  const { method, url } = config;
  console.log(`🛫 [Request - ${method}] ${url}`);

  const accessToken = getAccessToken();
  axiosInstance.defaults.headers.common['Authorization-Access'] = accessToken;

  return config;
}

async function onResponse(response: AxiosResponse): Promise<AxiosResponse> {
  const { data, request } = response;
  const originalRequest = request.responseURL;

  if (isUserTokenErrorCode(data.errorCode)) {
    window.location.href = '/';
  }

  if (isTokenExpirationErrorCode(data.errorCode)) {
    const response = await reIssueAccessToken();

    if (isSuccessResponse(response)) {
      setAccessToken(response.data.accessToken);

      const originalResponse = await axiosInstance(originalRequest);
      return originalResponse;
    }
  }

  return response;
}

function onError(error: any) {
  if (error.errorCode === 'XX0000') {
    return error;
  }

  const { data } = error.response;
  const { errorCode, errorMessage } = data;

  const customError: FailureResponse = {
    isSuccess: false,
    errorCode,
    errorMessage,
  };

  return Promise.reject(customError);
}
