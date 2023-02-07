import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { ComponentWithChildren } from '../../../types/component-with-children';
import { baseUrl, pages } from '../../../utils/constans/links';
import { localStorageKeys } from '../../../utils/enums/local-storage-keys';

const noRedirects = new Set<string>([pages.signIn, pages.signUp]);

const checkForRedirect = (url: string, accessToken?: string | null | undefined) => {
  return !accessToken && !noRedirects.has(url);
};

export const AuthLayout: ComponentWithChildren = ({ children }) => {
  const router = useRouter();
  const [isServer, setIsServer] = useState(true);
  const [accessToken] = useLocalStorage<string | null | undefined>(localStorageKeys.ACCESS_TOKEN);

  useEffect(() => {
    if (checkForRedirect(`${baseUrl}${router.pathname}`, accessToken)) {
      router.push('/sign-in');
    }
  }, [accessToken]);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) {
    return null;
  }

  if (checkForRedirect(`${baseUrl}${router.pathname}`, accessToken)) {
    return null;
  }

  return <>{children}</>;
};
