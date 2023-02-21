import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { SettingsScreen } from '@/screens/settings';

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Settings" />
      </Head>
      <MainLayout>
        <SettingsScreen />
      </MainLayout>
    </>
  );
}
