import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { SignIn } from '@/screens/sign-in';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in" />
      </Head>
      <main>
        <MainLayout>
          <SignIn />
        </MainLayout>
      </main>
    </>
  );
}
