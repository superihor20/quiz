import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useMessage } from '@/hooks/use-message';
import { ComponentWithChildren } from '@/types/component-with-children';

export const QueryLayout: ComponentWithChildren = ({ children }) => {
  const { error } = useMessage();

  const showError = (message: unknown) => {
    error(message as string);
  };

  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchInterval: false,
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          refetchOnMount: false,
          onError: showError,
        },
        mutations: {
          onError: showError,
        },
      },
    }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
