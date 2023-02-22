import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { QuestionsScreen } from '@/screens/questions';

export default function QuestionsPage() {
  return (
    <>
      <Head>
        <title>Questions</title>
        <meta name="description" content="Questions" />
      </Head>
      <MainLayout>
        <QuestionsScreen />
      </MainLayout>
    </>
  );
}
