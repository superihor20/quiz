import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { questionCategoryApi } from '../../../api/question-category/question-category.api';
import { QuestionCategory } from '../../../api/question-category/question-category.schema';
import { adminPages } from '../../../utils/constans/links';
import { QueryKeys } from '../../../utils/enums/query-keys';

const columns: ColumnsType<QuestionCategory> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'id',
    render: (_, questionCategory) => {
      return (
        <Link href={`${adminPages.questionsCategories}/${questionCategory.id}`}>
          {questionCategory.name}
        </Link>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

export const QuestionsCategoriesScreens: React.FC = () => {
  const { data, isLoading } = useQuery([QueryKeys.QUESTIONS_CATEGORIES], () =>
    questionCategoryApi.getAll(),
  );

  return <Table columns={columns} dataSource={data} loading={isLoading} />;
};
