/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from 'axios';

type HttpRequest = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  body?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<R>;
}

export class AxiosHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    try {
      const axiosResponse: AxiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
      });
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse?.data,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.error?.message);
      }
    }
  }
}
