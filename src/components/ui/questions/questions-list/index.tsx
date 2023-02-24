import { QuestionItem } from '../question-item';

import { QuestionsWrapper } from './questions-list.styled';

type QuestionsListProps = React.FC<{
  questions: {
    id: number;
    question: string;
    mark: null | number;
  }[];
}>;

export const QuestionsList: QuestionsListProps = ({ questions }) => {
  return (
    <QuestionsWrapper>
      {questions.map((question) => (
        <QuestionItem question={question} key={question.id} />
      ))}
    </QuestionsWrapper>
  );
};
