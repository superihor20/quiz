import { Table } from 'antd';
import { useQuery } from 'react-query';

import { columns } from './columns';

import { questionApi } from '@/api';
import { adminPages } from '@/constants/links';
import { QueryKeys } from '@/enums/query-keys';
import { NewLink } from '@/ui/gradient-link/gradient-link.styled';

export const QuestionsScreen: React.FC = () => {
  const { data, isLoading } = useQuery([QueryKeys.QUESTIONS], () => questionApi.getAll());

  return (
    <>
      <NewLink href={adminPages.newQuestion}>Create new question</NewLink>
      <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" />
    </>
  );
};
