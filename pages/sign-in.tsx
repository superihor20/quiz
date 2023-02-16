import Head from 'next/head';

import { MainLaoyut } from '../src/components/layouts/main-laoyut';
import { SignIn } from '../src/components/screens/sign-in';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in" />
      </Head>
      <main>
        <MainLaoyut>
          <SignIn />
        </MainLaoyut>
      </main>
    </>
  );
}
