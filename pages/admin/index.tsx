import Head from 'next/head';

import { MainLayoutAdmin } from '../../src/components/admin/layouts/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin pannel</title>
        <meta name="description" content="Challenges dashboard" />
      </Head>
      <main>
        <MainLayoutAdmin />
      </main>
    </>
  );
}
