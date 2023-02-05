import Head from 'next/head';

import { SignUp } from '../src/components/screens/sign-up/sign-up';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up page" />
      </Head>
      <main>
        <SignUp />
      </main>
    </>
  );
}
