import { z } from 'zod'

const RegistrationSchema = z.object({
  email: z.string().email("Некорректный email"),
  username: z.string().min(3, "Имя пользователя слишком короткое"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

export const validateRegistration = (data: unknown) => {
  const result = RegistrationSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues.map(issue => ({
        field: issue.path[0],
        message: issue.message,
      })),
    };
  }

  return { success: true, data: result.data };
};