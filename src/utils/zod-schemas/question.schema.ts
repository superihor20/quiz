import * as zod from 'zod';

export const questionSchema = zod.object({
  question: zod.string().min(1),
  categoryId: zod.number().positive(),
});
