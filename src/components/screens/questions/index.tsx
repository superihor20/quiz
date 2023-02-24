import { useQuery } from 'react-query';

import { questionApi } from '@/api';
import { QueryKeys } from '@/enums/query-keys';
import { groupByNestedKey } from '@/helpers/group-by-nested-key';
import { UserPageLayout } from '@/layouts/user-pages-layout';
import { Collapse } from '@/ui/collapse';
import { Progress } from '@/ui/progress';
import { QuestionsList } from '@/ui/questions/questions-list';

import { QuestionsScreenWrapper } from './questions.styled';

const q = [
  {
    id: 1,
    question: 'Closure?',
    mark: 7,
  },
  {
    id: 2,
    question: 'Scope?',
    mark: 7,
  },
  {
    id: 3,
    question: 'Var?',
    mark: null,
  },
];

export const QuestionsScreen = () => {
  const { data: questions = [] } = useQuery([QueryKeys.QUESTIONS], questionApi.getAll);
  const groupedQuestions = groupByNestedKey(questions, 'category.name');

  return (
    <UserPageLayout title="Questions">
      <QuestionsScreenWrapper>
        {Object.entries(groupedQuestions).map(([categroryName, questions]) => (
          <Collapse
            title={categroryName}
            key={categroryName}
            headerAdditionalContent={<Progress percent={questions.length} />}
          >
            <QuestionsList questions={q} />
          </Collapse>
        ))}
      </QuestionsScreenWrapper>
    </UserPageLayout>
  );
};
