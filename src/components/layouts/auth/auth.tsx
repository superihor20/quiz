import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { ComponentWithChildren } from '../../../types/component-with-children';
import { baseUrl, pages } from '../../../utils/constans/links';
import { localStorageKeys } from '../../../utils/enums/local-storage-keys';

const noRedirects = new Set<string>([pages.signIn, pages.signUp]);

export const AuthLayout: ComponentWithChildren = ({ children }) => {
  const router = useRouter();
  const [accessToken, , isLoading] = useLocalStorage(localStorageKeys.ACCESS_TOKEN);

  useEffect(() => {
    if (!isLoading && !accessToken && !noRedirects.has(`${baseUrl}/${router.pathname}`)) {
      router.push('/sign-in');
    }
  }, [isLoading, accessToken]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};
