import { Table } from 'antd';
import { useQuery } from 'react-query';

import { columns } from './columns';

import { questionCategoryApi } from '@/api';
import { adminPages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';
import { NewLink } from '@/ui/gradient-link/gradient-link.styled';

export const QuestionsCategoriesScreen: React.FC = () => {
  const { data, isLoading } = useQuery([QueryKeys.QUESTIONS_CATEGORIES], () =>
    questionCategoryApi.getAll(),
  );

  return (
    <>
      <NewLink href={adminPages.newQuestionCategory}>Create new category</NewLink>
      <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" />
    </>
  );
};
