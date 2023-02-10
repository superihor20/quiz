export type CreateQuestionCategoryInput = {
  name: string;
};

export type UpdateQuestionCategoryInput = {
  name?: string;
};

export type QuestionCategory = {
  id: number;
  name: string;
};
