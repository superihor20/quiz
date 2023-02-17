import { AxiosInstance } from 'axios';

import { axios } from '../instance';

import { AuthResponse, UserCredentials } from './auth.schemas';

import { authEnpoints } from '@/constants/endpoints';

class AuthApi {
  #requestInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.#requestInstance = axiosInstance;
  }

  signIn = async (userCredentials: UserCredentials): Promise<AuthResponse> => {
    return this.#requestInstance.post(authEnpoints.signIn, userCredentials);
  };

  signUp = async (userCredentials: UserCredentials): Promise<AuthResponse> => {
    return this.#requestInstance.post(authEnpoints.signUp, userCredentials);
  };
}

export const authApi = new AuthApi(axios);
