import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { userApi } from '@/api';
import { pages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';
import { getMultipleStoreFields } from '@/stores/selector';
import { userStore } from '@/stores/user/user.store';
import { ComponentWithChildren } from '@/types/component-with-children';

const publicRoutes = new Set<string>([pages.signIn, pages.signUp]);

const checkRouteAvailability = (url: string, accessToken: string | null | undefined) => {
  return !accessToken && !publicRoutes.has(url);
};

export const AuthLayout: ComponentWithChildren = ({ children }) => {
  const router = useRouter();
  const [isServer, setIsServer] = useState(true);
  const { accessToken, setUser, setAccessToken } = userStore(
    getMultipleStoreFields(['accessToken', 'setAccessToken', 'setUser']),
  );

  const { isLoading } = useQuery([QueryKeys.ME], userApi.me, {
    retry: false,
    enabled: !!accessToken,
    onSuccess: (user) => {
      setUser(user);
    },
    onError: () => {
      setAccessToken(null);
      setUser(null);
      router.push(pages.signIn);
    },
  });

  useEffect(() => {
    setIsServer(false);
  }, []);

  useEffect(() => {
    if (checkRouteAvailability(`${router.pathname}`, accessToken)) {
      router.push(pages.signIn);
    }
  }, [accessToken]);

  if (isLoading || isServer || checkRouteAvailability(`${router.pathname}`, accessToken)) {
    return null;
  }

  return <>{children}</>;
};
