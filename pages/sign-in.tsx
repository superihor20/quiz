import Head from 'next/head';

import { SignIn } from '../src/components/screens/sign-in/sign-in';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Sign in page" />
      </Head>
      <main>
        <SignIn />
      </main>
    </>
  );
}
