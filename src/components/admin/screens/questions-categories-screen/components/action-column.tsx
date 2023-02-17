import { useQueryClient } from 'react-query';

import { questionCategoryApi } from '@/api';
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
    queryClient.invalidateQueries([QueryKeys.QUESTIONS_CATEGORIES]);
  };

  const handleOk = () => {
    refetchAllCategories();
    success('Question category successfully deleted');
  };

  return (
    <PopConfirm<number>
      title="Delete question category"
      description="Are you sure?"
      mutationParam={id}
      mutationQuery={questionCategoryApi.delete}
      onOk={handleOk}
    >
      Delete
    </PopConfirm>
  );
};
