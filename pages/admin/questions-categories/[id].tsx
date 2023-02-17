import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';
import { QuestionCategoryScreen } from '@/admin/screens/question-category-screen';

export default function QuestionCategoryPage() {
  return (
    <>
      <Head>
        <title>Question category</title>
        <meta name="description" content="Question category" />
      </Head>
      <main>
        <MainLayoutAdmin>
          <QuestionCategoryScreen />
        </MainLayoutAdmin>
      </main>
    </>
  );
}
