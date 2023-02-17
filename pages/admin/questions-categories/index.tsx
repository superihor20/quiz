import Head from 'next/head';

import { MainLayoutAdmin } from '@/admin/layouts/main-layout-admin';
import { QuestionsCategoriesScreen } from '@/admin/screens/questions-categories-screen';

export default function QuestionsCategoriesPage() {
  return (
    <>
      <Head>
        <title>Questions categories</title>
        <meta name="description" content="Questions categories" />
      </Head>
      <main>
        <MainLayoutAdmin>
          <QuestionsCategoriesScreen />
        </MainLayoutAdmin>
      </main>
    </>
  );
}
