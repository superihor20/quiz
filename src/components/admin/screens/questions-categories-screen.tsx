import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { questionCategoryApi } from '../../../api/question-category/question-category.api';
import { QuestionCategory } from '../../../api/question-category/question-category.schema';
import { adminPages } from '../../../utils/constans/links';
import { QueryKeys } from '../../../utils/enums/query-keys';
import { PopConfirm } from '../../ui/pop-confirm';

const columns: ColumnsType<QuestionCategory> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, { id, name }) => {
      return <Link href={`${adminPages.questionsCategories}/${id}`}>{name}</Link>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'id',
    render: (id) => (
      <PopConfirm<number>
        title="Delete question category"
        description="Are you sure?"
        mutationParam={id}
        mutationQuery={questionCategoryApi.delete}
      >
        Delete
      </PopConfirm>
    ),
  },
];

export const QuestionsCategoriesScreens: React.FC = () => {
  const { data, isLoading } = useQuery([QueryKeys.QUESTIONS_CATEGORIES], () =>
    questionCategoryApi.getAll(),
  );

  return <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" />;
};
