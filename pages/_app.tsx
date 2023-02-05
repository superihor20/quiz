import type { AppProps } from 'next/app';

import { MainLaoyut } from '../src/components/layouts/main/main';

import '../src/assets/scss/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLaoyut>
      <Component {...pageProps} />
    </MainLaoyut>
  );
}
