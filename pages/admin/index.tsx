import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin pannel</title>
        <meta name="description" content="Admin pannel" />
      </Head>
      <MainLayoutAdmin />
    </>
  );
}
