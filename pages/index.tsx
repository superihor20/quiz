import Head from 'next/head';

import { Login } from '../src/components/screens/login/login';

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenges</title>
        <meta name="description" content="Challenges dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
}
