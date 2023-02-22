import * as zod from 'zod';

export const userSchema = zod.object({
  email: zod.string().email().optional(),
  password: zod.string().min(6).optional(),
  fullName: zod.string().optional(),
});
