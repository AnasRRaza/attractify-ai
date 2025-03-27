import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { COMMON_ERROR } from '@/constants/common';
import { BASE_URL } from '@/constants/url';
import { getAuthToken } from '@/utils/common';

interface IAPIResponse<T> {
  status: boolean;
  message: string;
  data: T | null;
  error?: string;
}

export const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});

export class API {
  private static handleResponse<RES>(
    response: AxiosResponse<any>
  ): IAPIResponse<RES> {
    return {
      data: response?.data?.data ?? null,
      status: response?.data?.status ?? false,
      message: response?.data?.message ?? '',
    };
  }

  private static handleError<RES>(error: any): IAPIResponse<RES> {
    return {
      data: null,
      status: false,
      message: error?.response?.data?.message || COMMON_ERROR,
    };
  }

  private static getHeaders(): Record<string, string> {
    const authToken = getAuthToken();
    return {
      'Content-Type': 'application/json',
      Authorization: authToken,
    };
  }

  static async Post<REQ, RES>(
    url: string,
    payload: REQ,
    config?: AxiosRequestConfig
  ): Promise<IAPIResponse<RES>> {
    try {
      const headers = this.getHeaders();
      const response = await axiosInstance.post<RES>(url, payload, {
        headers,
        ...config,
      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async Get<RES>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IAPIResponse<RES>> {
    try {
      const headers = this.getHeaders();
      const response = await axiosInstance.get<RES>(url, {
        headers,
        ...config,
      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async Put<REQ, RES>(
    url: string,
    payload?: REQ,
    config?: AxiosRequestConfig
  ): Promise<IAPIResponse<RES>> {
    try {
      const headers = this.getHeaders();
      const response = await axiosInstance.put<RES>(url, payload, {
        headers,
        ...config,
      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async Patch<REQ, RES>(
    url: string,
    payload?: REQ,
    config?: AxiosRequestConfig
  ): Promise<IAPIResponse<RES>> {
    try {
      const headers = this.getHeaders();
      const response = await axiosInstance.patch<RES>(url, payload, {
        headers,
        ...config,
      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async Delete<REQ, RES>(
    url: string,
    data?: REQ
  ): Promise<IAPIResponse<RES>> {
    try {
      const response = await axiosInstance.delete<RES>(url, { data });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }
}
