import { Question } from '../index.types';

export type MarkCreateInput = {
  userId: number;
  questionId: number;
  mark: number;
};

export type MarkUpdateInput = {
  mark: number;
};

export type Mark = {
  id: number;
  mark: number | null;
  question: Omit<Question, 'category'>;
};

export type Marks = Mark[];
