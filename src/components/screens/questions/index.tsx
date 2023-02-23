import { useQuery } from 'react-query';

import { questionApi } from '@/api';
import { QueryKeys } from '@/enums/query-keys';
import { groupByNestedKey } from '@/helpers/group-by-nested-key';
import { UserPageLayout } from '@/layouts/user-pages-layout';
import { Collapse } from '@/ui/collapse';
import { Progress } from '@/ui/progress';

import { QuestionsScreenWrapper } from './questions.styled';

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
            {questions.map((question) => (
              <p key={question.id}>{question.question}</p>
            ))}
          </Collapse>
        ))}
      </QuestionsScreenWrapper>
    </UserPageLayout>
  );
};
