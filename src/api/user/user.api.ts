import { AxiosInstance } from 'axios';

import { userEndpoints } from '@/constants/endpoints';

import { axios } from '../instance';

import { User, UserInput } from './user.schema';

class UserApi {
  #requestInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.#requestInstance = axiosInstance;
  }

  me = async (): Promise<User> => {
    return this.#requestInstance.get(`${userEndpoints.main}${userEndpoints.me}`);
  };

  update = async (id: number, input: UserInput): Promise<User> => {
    return this.#requestInstance.patch(`${userEndpoints.main}/${id}`, input);
  };
}

export const userApi = new UserApi(axios);
