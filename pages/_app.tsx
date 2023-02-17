import { ConfigProvider, theme } from 'antd';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthLayout } from '@/layouts/auth-layout';

import '../src/assets/css/global.css';

const queryClient = new QueryClient();
const { darkAlgorithm } = theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <QueryClientProvider client={queryClient}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </QueryClientProvider>
    </ConfigProvider>
  );
}
