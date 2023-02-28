import { Typography } from 'antd';

import { Modal } from '@/ui/modal';

import { QuestionModalContent } from '../question-modal-content';

import { QuestionRightPart, QuestionWrapper } from './question-item.styled';

type QuestionItemProps = React.FC<{
  question: {
    id: number;
    question: string;
    mark: null | number;
  };
}>;

export const QuestionItem: QuestionItemProps = ({ question: { id, question, mark } }) => {
  console.log(id);

  return (
    <QuestionWrapper>
      <Typography.Text>{question}</Typography.Text>
      <QuestionRightPart>
        <Typography.Text>{mark ?? 'No mark yet'}</Typography.Text>
        <Modal buttonText={mark ? 'Change mark' : 'Set mark'} title={question}>
          <QuestionModalContent />
        </Modal>
      </QuestionRightPart>
    </QuestionWrapper>
  );
};
