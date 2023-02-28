import { Typography } from 'antd';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { markApi } from '@/api';
import { Mark, Marks, User } from '@/api/types';
import { QueryKeys } from '@/enums/query-keys';
import { useMessage } from '@/hooks/use-message';
import { QuestionWithMark } from '@/types/question-with-mark';
import { Modal } from '@/ui/modal';

import { QuestionModalContent } from '../question-modal-content';

import { QuestionRightPart, QuestionWrapper } from './question-item.styled';

import type { RadioChangeEvent } from 'antd';

type QuestionItemProps = React.FC<{
  questionWithMark: QuestionWithMark;
}>;

export const QuestionItem: QuestionItemProps = ({ questionWithMark }) => {
  const { success } = useMessage();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>([QueryKeys.ME]) as User;
  const [mark, setMark] = useState(questionWithMark.mark?.mark ?? null);

  const updateMyMarksOnCreateMutation = (newMark: Mark) => {
    queryClient.setQueryData<Marks>([QueryKeys.MY_MARKS], (marks) => {
      const updatedMarks = marks ? [...marks] : [];
      updatedMarks.push(newMark);

      return updatedMarks;
    });
  };

  const updateMyMarksOnUpdateMutation = (updatedMark: Mark) => {
    queryClient.setQueryData<Marks>(
      [QueryKeys.MY_MARKS],
      (marks) =>
        marks?.map((markItem) => (markItem.id === updatedMark.id ? updatedMark : markItem)) || [
          updatedMark,
        ],
    );
  };

  const createMarkMutation = useMutation(markApi.create, {
    onSuccess: (newMark) => {
      success('Your mark has been successfully set');
      updateMyMarksOnCreateMutation(newMark);
    },
  });

  const updateMarkMutation = useMutation(markApi.update, {
    onSuccess: (updatedMark) => {
      success('Your mark has been successfully updated');
      updateMyMarksOnUpdateMutation(updatedMark);
    },
  });

  const handleMarkChange = (e: RadioChangeEvent) => {
    setMark(e.target.value);
  };

  const handleModalSubmit = () => {
    if (typeof mark !== 'number' || mark === questionWithMark.mark?.mark) {
      return;
    }

    if (questionWithMark.mark === null) {
      createMarkMutation.mutate({ userId: user.id, questionId: questionWithMark.id, mark });
    }

    if (questionWithMark.mark) {
      updateMarkMutation.mutate({ mark, id: questionWithMark.mark.id });
    }
  };

  const handleModalClose = () => {
    setMark(questionWithMark.mark?.mark || null);
  };

  return (
    <QuestionWrapper>
      <Typography.Text>{questionWithMark.question}</Typography.Text>
      <QuestionRightPart>
        <Typography.Text>{questionWithMark.mark?.mark ?? 'No mark yet'}</Typography.Text>
        <Modal
          buttonText={questionWithMark?.mark ? 'Change mark' : 'Set mark'}
          title={questionWithMark.question}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        >
          <QuestionModalContent mark={mark} onChange={handleMarkChange} />
        </Modal>
      </QuestionRightPart>
    </QuestionWrapper>
  );
};
