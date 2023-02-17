import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

import { ActionColumn } from './components/action-column';

import type { Question } from '@/api/types';
import { adminPages } from '@/constants/links';

export const columns: ColumnsType<Question> = [
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'question',
    render: (_, { id, question }) => {
      return <Link href={`${adminPages.questions}/${id}`}>{question}</Link>;
    },
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (category) => {
      return (
        <Link href={`${adminPages.questionsCategories}/${category?.id}`}>{category?.name}</Link>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'id',
    render: (id) => <ActionColumn id={id} />,
  },
];
