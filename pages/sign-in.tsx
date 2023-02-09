import Head from 'next/head';

import { MainLaoyut } from '../src/components/layouts/main/main';
import { SignIn } from '../src/components/screens/sign-in/sign-in';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in page" />
      </Head>
      <main>
        <MainLaoyut>
          <SignIn />
        </MainLaoyut>
      </main>
    </>
  );
}
