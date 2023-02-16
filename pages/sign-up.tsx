import Head from 'next/head';

import { MainLaoyut } from '../src/components/layouts/main-laoyut';
import { SignUp } from '../src/components/screens/sign-up';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up" />
      </Head>
      <main>
        <MainLaoyut>
          <SignUp />
        </MainLaoyut>
      </main>
    </>
  );
}
