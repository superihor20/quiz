import { AxiosInstance } from 'axios';

import { markEndpoints } from '@/constants/endpoints';

import { axios } from '../instance';

import { Mark, MarkCreateInput, Marks, MarkUpdateInput } from './mark.schema';

class MarkApi {
  #requestInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.#requestInstance = axiosInstance;
  }

  create = async (input: MarkCreateInput): Promise<Mark> => {
    return this.#requestInstance.post(markEndpoints.main, input);
  };

  update = async (input: MarkUpdateInput): Promise<Mark> => {
    return this.#requestInstance.patch(markEndpoints.main, input);
  };

  my = async (): Promise<Marks> => {
    return this.#requestInstance.get(`${markEndpoints.main}${markEndpoints.my}`);
  };
}

export const markApi = new MarkApi(axios);
