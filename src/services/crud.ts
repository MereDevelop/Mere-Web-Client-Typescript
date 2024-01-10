import { AxiosRequestConfig } from 'axios';

import axiosInstance from './config';

/**
 * API 요청 성공 타입
 * isSuccess: true
 * data: T
 */
export interface SuccessResponse<T> {
  isSuccess: boolean;
  data: T;
}

/**
 * API 요청 실패 타입
 * isSuccess: false
 * errorCode: 커스텀 에러 코드
 * errorMessage: 커스텀 에러 메시지
 * status: 상태 코드
 */
export interface FailureResponse {
  isSuccess: boolean;
  errorCode: string;
  errorMessage: string;
}

type Response<T> = SuccessResponse<T> | FailureResponse;

const client = {
  /**
   * GET 요청
   * @param url Request URI
   * @param config Request Config (Headers, ...)
   * @returns SuccessResponse<T> | FailureResponse
   */
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<Response<T>> => {
    try {
      const response = await axiosInstance.get<T>(url, config);

      return {
        isSuccess: true,
        data: response.data,
      };
    } catch (error: any) {
      return error;
    }
  },

  /**
   * POST 요청
   * @param url Request URI
   * @param data Request Data
   * @param config Request Config (Headers, ...)
   * @returns SuccessResponse<T> | FailureResponse
   */
  post: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<Response<T>> => {
    try {
      const response = await axiosInstance.post<T>(url, data, config);

      return {
        isSuccess: true,
        data: response.data,
      };
    } catch (error: any) {
      return error;
    }
  },

  /**
   * PUT 요청
   * @param url Request URI
   * @param data Request Data
   * @param config Request Config (Headers, ...)
   * @returns SuccessResponse<T> | FailureResponse
   */
  put: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<Response<T>> => {
    try {
      const response = await axiosInstance.put<T>(url, data, config);

      return {
        isSuccess: true,
        data: response.data,
      };
    } catch (error: any) {
      return error;
    }
  },

  /**
   * DELETE 요청
   * @param url REQUEST URI
   * @param config Request Config (Headers, ...)
   * @returns SuccessResponse<T> | FailureResponse
   */
  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<Response<T>> => {
    try {
      const response = await axiosInstance.delete<T>(url, config);

      return {
        isSuccess: true,
        data: response.data,
      };
    } catch (error: any) {
      return error;
    }
  },
};

export default client;
