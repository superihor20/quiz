export const baseUrl = process.env.NEXT_PUBLIC_WEB_APP_URL || 'http://localhost:3000';
export const adminBaseUrl = `${baseUrl}/admin`;

export const pages = {
  signIn: `${baseUrl}/sign-in`,
  signUp: `${baseUrl}/sign-up`,
} as const;

export const adminPages = {
  main: `${adminBaseUrl}`,
  questionsCategories: `${adminBaseUrl}/questions-categories`,
} as const;
