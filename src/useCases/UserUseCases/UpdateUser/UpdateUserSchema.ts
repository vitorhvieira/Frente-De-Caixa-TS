import { z } from "zod";

export const UpdateUserSchema = z.object({
  body: z
    .object({
      nome: z.string().optional(),
      email: z
        .string()
        .email("O email precisa ser um email valido!")
        .optional(),
      senha: z.string().optional(),
    })
    .optional(),
});
