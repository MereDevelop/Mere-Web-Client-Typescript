import { AxiosRequestConfig } from 'axios';

import {
  FailureResponse,
  SuccessResponse,
} from '@custom/types/common/Response';
import { axiosInstance } from './config';

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
    const response = await axiosInstance
      .get<T>(url, config)
      .then(
        (resData): SuccessResponse<T> => ({
          isSuccess: true,
          data: resData.data,
        }),
      )
      .catch((error): FailureResponse => error);

    return response;
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
    const response = await axiosInstance
      .post<T>(url, data, config)
      .then(
        (resData): SuccessResponse<T> => ({
          isSuccess: true,
          data: resData.data,
        }),
      )
      .catch((error): FailureResponse => error);

    return response;
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
    const response = await axiosInstance
      .put<T>(url, data, config)
      .then(
        (resData): SuccessResponse<T> => ({
          isSuccess: true,
          data: resData.data,
        }),
      )
      .catch((error): FailureResponse => error);

    return response;
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
    const response = await axiosInstance
      .delete<T>(url, config)
      .then(
        (resData): SuccessResponse<T> => ({
          isSuccess: true,
          data: resData.data,
        }),
      )
      .catch((error): FailureResponse => error);

    return response;
  },
};

export default client;
