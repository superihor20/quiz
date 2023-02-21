import { capitalize } from './capitalize';

export const getMenuName = (path: string) => {
  const lastPathname = path.split('/').filter(Boolean).at(-1) || 'dashboard';

  return capitalize(lastPathname);
};
