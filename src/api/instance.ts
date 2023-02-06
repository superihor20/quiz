import Axios, { AxiosError } from 'axios';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    throw error.response?.data;
  },
);
