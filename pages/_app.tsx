import { enableMapSet } from 'immer';
import type { AppProps } from 'next/app';

import { AuthLayout } from '../src/components/layouts/auth/auth';

import '../src/assets/scss/global.scss';

enableMapSet();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthLayout>
      <Component {...pageProps} />
    </AuthLayout>
  );
}
