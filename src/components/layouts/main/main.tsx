import Head from 'next/head';

import { ComponentWithChildren } from '../../../types/component-with-children';

export const MainLaoyut: ComponentWithChildren = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-100 min-h-screen p-8">{children}</div>
    </>
  );
};
