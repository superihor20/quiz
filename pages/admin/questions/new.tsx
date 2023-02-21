import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';
import { QuestionScreen } from '@/admin/screens/question-screen';

export default function NewQuestionPage() {
  return (
    <>
      <Head>
        <title>New question</title>
        <meta name="description" content="New question" />
      </Head>
      <MainLayoutAdmin>
        <QuestionScreen />
      </MainLayoutAdmin>
    </>
  );
}
