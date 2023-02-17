const dictionary: Record<string, string> = {
  admin: 'Home',
  'questions-categories': 'Questions categories',
  new: 'New',
  questions: 'Questions',
};

export const getBreadcrumbValues = (path: string): string[] => {
  return path
    .substring(1)
    .split('/')
    .map((item) => dictionary[item]);
};
