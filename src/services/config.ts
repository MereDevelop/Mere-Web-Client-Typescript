import axios from 'axios';

import { SERVER_URL } from '@constants/api';
import { FailureResponse } from '@services/crud';
import {
  TokenExpirationErrorCodeType,
  UserTokenErrorCodeType,
} from '@custom/types/error/errorCode';
import { getRefreshToken } from '@utils/token';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  async (response) => {
    const { data, request } = response;
    const originalRequest = request.responseURL;

    // 토큰 체크 후 재발급하는 로직 추가
    if (isUserTokenErrorCode(data.errorCode)) {
      window.location.href = '/';
    }

    if (isTokenExpirationErrorCode(data.errorCode)) {
      const tokenResponse = await reIssueAccessTokenForOwner();

      if (tokenResponse.data) {
        const { accessToken } = tokenResponse.data;
        axiosInstance.defaults.headers.common['Authorization-Access'] =
          accessToken;

        const originalResponse = await axiosInstance(originalRequest);
        return originalResponse;
      }
    }

    return response;
  },
  async (error) => {
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
  },
);

function isUserTokenErrorCode(
  errorCode: string,
): errorCode is UserTokenErrorCodeType {
  if (errorCode === 'FT0000') return true;
  if (errorCode === 'FT0002') return true;
  if (errorCode === 'FT0005') return true;

  return false;
}

function isTokenExpirationErrorCode(
  errorCode: string,
): errorCode is TokenExpirationErrorCodeType {
  if (errorCode === 'FT0001') return true;
  if (errorCode === 'FT0003') return true;
  if (errorCode === 'FT0004') return true;

  return false;
}

export async function reIssueAccessTokenForOwner() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  const response = await axiosInstance({
    method: 'get',
    url: '/owner/update/access-token',
    headers: {
      'Authorization-Refresh': refreshToken,
    },
  });

  return response;
}

export default axiosInstance;
