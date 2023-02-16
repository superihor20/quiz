import Head from 'next/head';

import { MainLayout } from '../src/components/layouts/main-layout';
import { SignUp } from '../src/components/screens/sign-up';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up" />
      </Head>
      <main>
        <MainLayout>
          <SignUp />
        </MainLayout>
      </main>
    </>
  );
}
