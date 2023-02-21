import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { SignUp } from '@/screens/sign-up';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up" />
      </Head>
      <MainLayout>
        <SignUp />
      </MainLayout>
    </>
  );
}
