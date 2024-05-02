import { z } from "zod";

export const AuthenticateUserSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "O email é obrigatorio!" })
      .email("O email precisa ser um email valido!"),
    senha: z.string({ required_error: "A senha é obrigatoria!" }),
  }),
});
