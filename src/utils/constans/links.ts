export const baseUrl = process.env.NEXT_PUBLIC_WEB_APP_URL;

export const pages = {
  signIn: `${baseUrl}/sign-in`,
  signUp: `${baseUrl}/sign-up`,
} as const;
