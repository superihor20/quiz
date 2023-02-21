import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';
import { QuestionCategoryScreen } from '@/admin/screens/question-category-screen';

export default function NewQuestionCategoryPage() {
  return (
    <>
      <Head>
        <title>New question category</title>
        <meta name="description" content="New question category" />
      </Head>
      <MainLayoutAdmin>
        <QuestionCategoryScreen />
      </MainLayoutAdmin>
    </>
  );
}
