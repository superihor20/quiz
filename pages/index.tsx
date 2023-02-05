import Head from 'next/head';

import { SignUp } from '../src/components/screens/sign-up/sign-up';

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenges</title>
        <meta name="description" content="Challenges dashboard" />
      </Head>
      <main>
        <SignUp />
      </main>
    </>
  );
}
