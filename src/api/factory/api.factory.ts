import { AxiosInstance } from 'axios';

export class ApiFactory<TCreateInput, TUpdateInput, T> {
  protected endpoint: string;
  #requestInstance: AxiosInstance;

  constructor(endpoint: string, instance: AxiosInstance) {
    this.endpoint = endpoint;
    this.#requestInstance = instance;
  }

  async create(input: TCreateInput): Promise<T> {
    return this.#requestInstance.post(this.endpoint, input);
  }

  async update(id: number, input: TUpdateInput): Promise<T> {
    return this.#requestInstance.patch(`${this.endpoint}/${id}`, input);
  }

  async getAll(): Promise<T[]> {
    return this.#requestInstance.get(this.endpoint);
  }

  async getById(id: number): Promise<T> {
    return this.#requestInstance.get(`${this.endpoint}/${id}`);
  }

  async delete(id: number): Promise<void> {
    return this.#requestInstance.delete(`${this.endpoint}/${id}`);
  }
}
