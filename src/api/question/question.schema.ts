import { QuestionCategory } from '../index.types';

export type QuestionInput = {
  question: string;
  categoryId: number;
  helpDescription?: string;
};

export type Question = {
  id: number;
  question: string;
  category: QuestionCategory;
  helpDescription: string | null;
};
