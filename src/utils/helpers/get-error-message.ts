export type CustomError = { message: string; error: string; statusCode: number };

export const getErrorMessage = (error: CustomError): string => {
  let message = error?.message || 'Something went wrong';

  if (Array.isArray(message)) {
    message = message.join(', ');
  }

  return message;
};
