import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthLayout } from '../src/components/layouts/auth-layout';

import '../src/assets/css/global.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{ token: { colorText: '#fff' } }}>
      <QueryClientProvider client={queryClient}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </QueryClientProvider>
    </ConfigProvider>
  );
}
