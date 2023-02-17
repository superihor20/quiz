import { AxiosInstance } from 'axios';

export class ApiFactory<TCreateInput, TUpdateInput, T> {
  protected endpoint: string;
  #requestInstance: AxiosInstance;

  constructor(endpoint: string, instance: AxiosInstance) {
    this.endpoint = endpoint;
    this.#requestInstance = instance;
  }

  create = async (input: TCreateInput): Promise<T> => {
    return this.#requestInstance.post(this.endpoint, input);
  };

  update = async (id: number, input: TUpdateInput): Promise<T> => {
    return this.#requestInstance.patch(`${this.endpoint}/${id}`, input);
  };

  getAll = async (): Promise<T[]> => {
    return this.#requestInstance.get(this.endpoint);
  };

  getById = async (id: number): Promise<T> => {
    return this.#requestInstance.get(`${this.endpoint}/${id}`);
  };

  delete = async (id: number): Promise<void> => {
    return this.#requestInstance.delete(`${this.endpoint}/${id}`);
  };
}
