const dictionary: Record<string, string> = {
  admin: 'Home',
};

export const getBreadcrumbValues = (path: string): string[] => {
  return path
    .substring(1)
    .split('/')
    .map((item) => dictionary[item]);
};
