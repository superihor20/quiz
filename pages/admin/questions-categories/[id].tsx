import Head from 'next/head';

import { MainLayoutAdmin } from '../../../src/components/admin/layouts/main';
import { QuestionCategory } from '../../../src/components/admin/screens/questionCategory/questionCategory';

export default function QuestionsCategoriesPage() {
  return (
    <>
      <Head>
        <title>Question category</title>
        <meta name="description" content="Challenges dashboard" />
      </Head>
      <main>
        <MainLayoutAdmin>
          <QuestionCategory />
        </MainLayoutAdmin>
      </main>
    </>
  );
}
