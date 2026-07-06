import z from 'zod';

export const loginFormSchema = z.object({
  email: z.email('Email Is Required').min(3, 'Email Must be Greater Than 3 Letter '),
  password: z.string('Password Is Required').min(8, 'Password Must be Greater Than 8 Letter').max(100, 'Password Must be Less Than 100 Letter')
});
export type FormData = z.infer<typeof loginFormSchema>;
