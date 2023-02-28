import { QuestionsWithMark } from '@/types/question-with-mark';

export const getPercentOfGavedMarks = (questions: QuestionsWithMark) => {
  return +(
    (questions.filter((question) => question.mark !== null).length / questions.length) *
    100
  ).toFixed(2);
};
