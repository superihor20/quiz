import { CustomError } from '@/types/custom-error';

export const getErrorMessage = (error: CustomError): string => {
  let message = error?.message || 'Something went wrong';

  if (Array.isArray(message)) {
    message = message.join(', ');
  }

  return message;
};
