import { useQuery } from 'react-query';

import { markApi, questionApi } from '@/api';
import { Mark } from '@/api/types';
import { QueryKeys } from '@/enums/query-keys';
import { getPercentOfGavedMarks } from '@/helpers/get-percent-of-gaved-marks';
import { groupByNestedKey } from '@/helpers/group-by-nested-key';
import { UserPageLayout } from '@/layouts/user-pages-layout';
import { QuestionsWithMark } from '@/types/question-with-mark';
import { Collapse } from '@/ui/collapse';
import { Progress } from '@/ui/progress';
import { QuestionsList } from '@/ui/questions/questions-list';

import { QuestionsScreenWrapper } from './questions.styled';

export const QuestionsScreen = () => {
  const { data: questions = [], isLoading: isLoadingQuestions } = useQuery(
    [QueryKeys.QUESTIONS],
    questionApi.getAll,
  );
  const { data: marks = [], isLoading: isLoadingMarks } = useQuery(
    [QueryKeys.MY_MARKS],
    markApi.my,
  );

  const dictionaryOfMarks = marks.reduce((dictionary, curr) => {
    dictionary[curr.question.id] = curr;

    return dictionary;
  }, {} as Record<number, Mark>);
  const normalizedQuestions: QuestionsWithMark = questions.map((question) => ({
    ...question,
    mark: dictionaryOfMarks[question.id] ?? null,
  }));
  const groupedQuestions = groupByNestedKey(normalizedQuestions, 'category.name');

  return (
    <UserPageLayout title="Questions">
      <QuestionsScreenWrapper>
        {!isLoadingQuestions &&
          !isLoadingMarks &&
          Object.entries(groupedQuestions).map(([categroryName, questions]) => (
            <Collapse
              title={categroryName}
              key={categroryName}
              headerAdditionalContent={<Progress percent={getPercentOfGavedMarks(questions)} />}
            >
              <QuestionsList questionsWithMarks={questions} />
            </Collapse>
          ))}
      </QuestionsScreenWrapper>
    </UserPageLayout>
  );
};
