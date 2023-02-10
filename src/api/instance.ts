import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

const authRequestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const updatedConfig = { ...config };
  const token = localStorage.getItem('accessToken');

  if (token) {
    updatedConfig.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }

  return updatedConfig;
};

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    throw error.response?.data;
  },
);
