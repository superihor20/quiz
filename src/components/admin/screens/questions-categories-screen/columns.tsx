import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

import { ActionColumn } from './components/action-column';

import type { QuestionCategory } from '@/api/types';
import { adminPages } from '@/constants/links';

export const columns: ColumnsType<QuestionCategory> = [
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
    render: (id) => <ActionColumn id={id} />,
  },
];
