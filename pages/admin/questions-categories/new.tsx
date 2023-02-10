import Head from 'next/head';

import { MainLayoutAdmin } from '../../../src/components/admin/layouts/mainLayoutAdmin';
import { QuestionCategory } from '../../../src/components/admin/screens/questionCategory/questionCategoryScreen';

export default function QuestionsCategoriesPage() {
  return (
    <>
      <Head>
        <title>New question category</title>
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
