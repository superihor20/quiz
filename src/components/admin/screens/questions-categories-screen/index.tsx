import { Table } from 'antd';
import { useQuery } from 'react-query';

import { columns } from './columns';
import { NewCategoryLink } from './questions-categories-screen.styled';

import { questionCategoryApi } from '@/api';
import { adminPages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';

export const QuestionsCategoriesScreens: React.FC = () => {
  const { data, isLoading } = useQuery(
    [QueryKeys.QUESTIONS_CATEGORIES],
    () => questionCategoryApi.getAll(),
    {
      refetchOnMount: false,
    },
  );

  return (
    <>
      <NewCategoryLink href={adminPages.newQuestionCategory}>Create new category</NewCategoryLink>
      <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" />
    </>
  );
};
