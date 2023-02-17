import { ConfigProvider, theme } from 'antd';

import { AuthLayout } from '@/layouts/auth-layout';
import { QueryLayout } from '@/layouts/query-layout';

import type { AppProps } from 'next/app';

import '../src/assets/css/global.css';

const { darkAlgorithm } = theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <QueryLayout>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </QueryLayout>
    </ConfigProvider>
  );
}
