import Link from 'next/link';

import type { Question, QuestionCategory } from '@/api/types';
import { adminPages } from '@/constants/links';

import { ActionColumn } from './components/action-column';

import type { ColumnsType } from 'antd/es/table';

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
    render: (category: QuestionCategory) => {
      return <Link href={`${adminPages.questionsCategories}/${category.id}`}>{category.name}</Link>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'id',
    render: (id) => <ActionColumn id={id} />,
  },
];
