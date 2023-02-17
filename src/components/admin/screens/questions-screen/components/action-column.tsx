import { useQueryClient } from 'react-query';

import { questionApi } from '@/api';
import { QueryKeys } from '@/enums/query-keys';
import { useMessage } from '@/hooks/use-message';
import { PopConfirm } from '@/ui/pop-confirm';

type ActionColumnProps = {
  id: number;
};

export const ActionColumn: React.FC<ActionColumnProps> = ({ id }) => {
  const queryClient = useQueryClient();
  const { success } = useMessage();

  const refetchAllCategories = () => {
    queryClient.invalidateQueries([QueryKeys.QUESTIONS]);
  };

  const handleOk = () => {
    refetchAllCategories();
    success('Question successfully deleted');
  };

  return (
    <PopConfirm<number>
      title="Delete question"
      description="Are you sure?"
      mutationParam={id}
      mutationQuery={questionApi.delete}
      onOk={handleOk}
    >
      Delete
    </PopConfirm>
  );
};
