import { UserPageLayout } from '@/layouts/user-pages-layout';
import { Collapse } from '@/ui/collapse';
import { Progress } from '@/ui/progress';

import { QuestionsScreenWrapper } from './questions.styled';

const r = [
  {
    categoryName: 'JavaScript',
    questions: [{ question: 'Closure?', point: 7 }],
  },
  {
    categoryName: 'TypeScript',
    questions: [{ question: 'Closure in TS?', point: 7 }],
  },
];

export const QuestionsScreen = () => {
  return (
    <UserPageLayout title="Questions">
      <QuestionsScreenWrapper>
        {r.map((r1) => (
          <Collapse
            title={r1.categoryName}
            key={r1.categoryName}
            headerAdditionalContent={<Progress percent={59} />}
          >
            {r1.questions.map((q) => (
              <p key={q.question}>{q.question}</p>
            ))}
          </Collapse>
        ))}
      </QuestionsScreenWrapper>
    </UserPageLayout>
  );
};
