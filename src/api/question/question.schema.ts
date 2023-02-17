import { QuestionCategory } from '../index.types';

export type QuestionInput = {
  question: string;
  categoryId: number;
};

export type Question = {
  id: number;
  question: string;
  category: QuestionCategory;
};
