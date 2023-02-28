import { QuestionsWithMark } from '@/types/question-with-mark';

import { QuestionItem } from '../question-item';

import { QuestionsWrapper } from './questions-list.styled';

type QuestionsListProps = React.FC<{
  questionsWithMarks: QuestionsWithMark;
}>;

export const QuestionsList: QuestionsListProps = ({ questionsWithMarks }) => {
  return (
    <QuestionsWrapper>
      {questionsWithMarks.map((questionWithMark) => (
        <QuestionItem questionWithMark={questionWithMark} key={questionWithMark.id} />
      ))}
    </QuestionsWrapper>
  );
};
