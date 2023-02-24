import { Typography } from 'antd';

import { Button } from '@/form/button';

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
        <Button>Set mark</Button>
      </QuestionRightPart>
    </QuestionWrapper>
  );
};
