import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';
import { QuestionsScreen } from '@/admin/screens/questions-screen';

export default function QuestionsPage() {
  return (
    <>
      <Head>
        <title>Questions</title>
        <meta name="description" content="Questions" />
      </Head>
      <main>
        <MainLayoutAdmin>
          <QuestionsScreen />
        </MainLayoutAdmin>
      </main>
    </>
  );
}
