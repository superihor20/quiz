export const authEndpoints = {
  signIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
} as const;

export const questionsCategoriesEndpoint = '/question-category';

export const questionEndpoint = '/question';

export const userEndpoints = {
  main: '/user',
  me: '/me',
} as const;
