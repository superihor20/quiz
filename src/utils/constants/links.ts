export const baseUrl = process.env.NEXT_PUBLIC_WEB_APP_URL || 'http://localhost:3000';
export const adminBaseUrl = `/admin`;

export const pages = {
  signIn: `/sign-in`,
  signUp: `/sign-up`,
  dashboard: '/dashboard',
  settings: '/settings',
  questions: '/questions',
} as const;

export const adminPages = {
  main: `${adminBaseUrl}`,
  questionsCategories: `${adminBaseUrl}/questions-categories`,
  newQuestionCategory: `${adminBaseUrl}/questions-categories/new`,
  questions: `${adminBaseUrl}/questions`,
  newQuestion: `${adminBaseUrl}/questions/new`,
} as const;
