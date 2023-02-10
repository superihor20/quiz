import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useLocalStorage } from '../../hooks/use-local-storage';
import { ComponentWithChildren } from '../../types/component-with-children';
import { baseUrl, pages } from '../../utils/constans/links';
import { localStorageKeys } from '../../utils/enums/local-storage-keys';

const publicRoutes = new Set<string>([pages.signIn, pages.signUp]);

const checkRouteAvailability = (url: string, accessToken: string | null | undefined) => {
  return !accessToken && !publicRoutes.has(url);
};

export const AuthLayout: ComponentWithChildren = ({ children }) => {
  const router = useRouter();
  const [isServer, setIsServer] = useState(true);
  const [accessToken] = useLocalStorage<string | null | undefined>(localStorageKeys.ACCESS_TOKEN);

  useEffect(() => {
    setIsServer(false);
  }, []);

  useEffect(() => {
    if (checkRouteAvailability(`${baseUrl}${router.pathname}`, accessToken)) {
      router.push('/sign-in');
    }
  }, [accessToken]);

  if (isServer || checkRouteAvailability(`${baseUrl}${router.pathname}`, accessToken)) {
    return null;
  }

  return <>{children}</>;
};