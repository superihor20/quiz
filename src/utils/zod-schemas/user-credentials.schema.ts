import * as zod from 'zod';

export const userCredentialsSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});
