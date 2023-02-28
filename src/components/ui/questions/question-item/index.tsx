import { Typography } from 'antd';

import { QuestionWithMark } from '@/types/question-with-mark';
import { Modal } from '@/ui/modal';

import { QuestionModalContent } from '../question-modal-content';

import { QuestionRightPart, QuestionWrapper } from './question-item.styled';

type QuestionItemProps = React.FC<{
  questionWithMark: QuestionWithMark;
}>;

export const QuestionItem: QuestionItemProps = ({ questionWithMark }) => {
  return (
    <QuestionWrapper>
      <Typography.Text>{questionWithMark.question}</Typography.Text>
      <QuestionRightPart>
        <Typography.Text>{questionWithMark.mark?.mark ?? 'No mark yet'}</Typography.Text>
        <Modal
          buttonText={questionWithMark?.mark ? 'Change mark' : 'Set mark'}
          title={questionWithMark.question}
        >
          <QuestionModalContent question={questionWithMark} />
        </Modal>
      </QuestionRightPart>
    </QuestionWrapper>
  );
};
