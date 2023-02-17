import { Table } from 'antd';
import { useQuery } from 'react-query';

import { QueryKeys } from '../../../../utils/enums/query-keys';

import { columns } from './columns';
import { NewCategoryLink } from './questions-categories-screen.styled';

import { questionCategoryApi } from '@/api';
import { adminPages } from '@/constants/links';

export const QuestionsCategoriesScreens: React.FC = () => {
  const { data, isLoading } = useQuery([QueryKeys.QUESTIONS_CATEGORIES], () =>
    questionCategoryApi.getAll(),
  );

  return (
    <>
      <NewCategoryLink href={adminPages.newQuestionCategory}>Create new category</NewCategoryLink>
      <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" />
    </>
  );
};
