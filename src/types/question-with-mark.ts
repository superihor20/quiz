import { Mark, QuestionCategory } from '@/api/types';

export type QuestionWithMark = {
  id: number;
  question: string;
  mark: Mark | null;
  category: QuestionCategory;
};

export type QuestionsWithMark = QuestionWithMark[];
