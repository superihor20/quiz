import Head from 'next/head';

import { ComponentWithChildren } from '../../../types/component-with-children';

import { MainLayoutStyled } from './main-layout.styled';

export const MainLayout: ComponentWithChildren = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayoutStyled>{children}</MainLayoutStyled>
    </>
  );
};
