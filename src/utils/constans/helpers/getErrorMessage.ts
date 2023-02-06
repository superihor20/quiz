import { AxiosError } from 'axios';

export type CustomError = AxiosError<{ message: string; error: string; statusCode: number }>;

export const getErrorMessage = (error: CustomError): string => {
  let message = error.response?.data?.message || 'Something went wrong';

  if (Array.isArray(message)) {
    message = message.join(', ');
  }

  return message;
};
