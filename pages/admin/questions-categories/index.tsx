import Head from 'next/head';

import { MainLayoutAdmin } from '../../../src/components/admin/layouts/main-layout-admin';
import { QuestionsCategoriesScreens } from '../../../src/components/admin/screens/questions-categories-screen';

export default function QuestionsCategoriesPage() {
  return (
    <>
      <Head>
        <title>Questions categories</title>
        <meta name="description" content="Challenges dashboard" />
      </Head>
      <main>
        <MainLayoutAdmin>
          <QuestionsCategoriesScreens />
        </MainLayoutAdmin>
      </main>
    </>
  );
}
