import { Table } from 'antd';
import { useQuery } from 'react-query';

import { questionCategoryApi } from '../../../../api/question-category/question-category.api';
import { QueryKeys } from '../../../../utils/enums/query-keys';

import { columns } from './columns';

export const QuestionsCategoriesScreens: React.FC = () => {
  const { data, isLoading } = useQuery([QueryKeys.QUESTIONS_CATEGORIES], () =>
    questionCategoryApi.getAll(),
  );

  return <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" />;
};
