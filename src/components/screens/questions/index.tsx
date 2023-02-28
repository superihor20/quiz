import { useQuery } from 'react-query';
import { markApi } from 'src/api/mark/mark.api';

import { questionApi } from '@/api';
import { Mark } from '@/api/types';
import { QueryKeys } from '@/enums/query-keys';
import { groupByNestedKey } from '@/helpers/group-by-nested-key';
import { UserPageLayout } from '@/layouts/user-pages-layout';
import { QuestionsWithMark, QuestionWithMark } from '@/types/question-with-mark';
import { Collapse } from '@/ui/collapse';
import { Progress } from '@/ui/progress';
import { QuestionsList } from '@/ui/questions/questions-list';

import { QuestionsScreenWrapper } from './questions.styled';

export const QuestionsScreen = () => {
  const { data: questions = [] } = useQuery([QueryKeys.QUESTIONS], questionApi.getAll);
  const { data: marks = [] } = useQuery([QueryKeys.MY_MARKS], markApi.my);
  const dictionaryOfMarks = marks.reduce((dictionary, curr) => {
    dictionary[curr.question.id] = curr;

    return dictionary;
  }, {} as Record<number, Mark>);
  const normalizedQuestions: QuestionsWithMark = questions.map((question) => {
    const normalizedQuestion: QuestionWithMark = {
      id: question.id,
      question: question.question,
      category: question.category,
      mark: dictionaryOfMarks[question.id] ?? null,
    };

    return normalizedQuestion;
  });
  const groupedQuestions = groupByNestedKey(normalizedQuestions, 'category.name');

  return (
    <UserPageLayout title="Questions">
      <QuestionsScreenWrapper>
        {Object.entries(groupedQuestions).map(([categroryName, questions]) => (
          <Collapse
            title={categroryName}
            key={categroryName}
            headerAdditionalContent={<Progress percent={questions.length} />}
          >
            <QuestionsList questionsWithMarks={questions} />
          </Collapse>
        ))}
      </QuestionsScreenWrapper>
    </UserPageLayout>
  );
};
