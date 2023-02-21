import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { DashboardScreen } from '@/screens/dashboard';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <main>
        <MainLayout>
          <DashboardScreen />
        </MainLayout>
      </main>
    </>
  );
}
