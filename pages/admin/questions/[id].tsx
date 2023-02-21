import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';
import { QuestionScreen } from '@/admin/screens/question-screen';

export default function QuestionPage() {
  return (
    <>
      <Head>
        <title>Question</title>
        <meta name="description" content="Question" />
      </Head>
      <MainLayoutAdmin>
        <QuestionScreen />
      </MainLayoutAdmin>
    </>
  );
}
