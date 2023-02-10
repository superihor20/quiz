import { enableMapSet } from 'immer';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthLayout } from '../src/components/layouts/auth-layout';

import '../src/assets/scss/global.scss';

enableMapSet();

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </QueryClientProvider>
  );
}
