import * as zod from 'zod';

export const questionCategorySchema = zod.object({
  name: zod.string().min(1),
});
