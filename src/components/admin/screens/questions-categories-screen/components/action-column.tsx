import { useQueryClient } from 'react-query';

import { questionCategoryApi } from '../../../../../api/question-category/question-category.api';
import { QueryKeys } from '../../../../../utils/enums/query-keys';
import { PopConfirm } from '../../../../ui/pop-confirm';

type ActionColumnProps = {
  id: number;
};

export const ActionColumn: React.FC<ActionColumnProps> = ({ id }) => {
  const queryClient = useQueryClient();

  const refetchAllCategories = () => {
    queryClient.invalidateQueries([QueryKeys.QUESTIONS_CATEGORIES]);
  };

  return (
    <PopConfirm<number>
      title="Delete question category"
      description="Are you sure?"
      mutationParam={id}
      mutationQuery={questionCategoryApi.delete}
      onOk={refetchAllCategories}
    >
      Delete
    </PopConfirm>
  );
};
