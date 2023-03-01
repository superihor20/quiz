import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { localStorageKeys } from '@/enums/local-storage-keys';
import { getErrorMessage } from '@/helpers/get-error-message';
import { CustomError } from '@/types/custom-error';
import { UserLocalStorage } from '@/types/user-local-storage';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

const authRequestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const updatedConfig = { ...config };
  const userStorage = localStorage.getItem(localStorageKeys.USER);

  if (!userStorage) {
    return updatedConfig;
  }

  const parsedUserStorage: UserLocalStorage = JSON.parse(userStorage);

  if (parsedUserStorage.state.accessToken) {
    updatedConfig.headers.Authorization = `Bearer ${parsedUserStorage.state.accessToken}`;
  }

  return updatedConfig;
};

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    throw getErrorMessage(error.response?.data as CustomError);
  },
);
