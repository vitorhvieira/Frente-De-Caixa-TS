import { z } from "zod";

export const CreateUserSchema = z.object({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatorio!" }),
    email: z
      .string({ required_error: "O email é obrigatorio!" })
      .email("O email precisa ser um email valido!"),
    senha: z.string({ required_error: "A senha é obrigatoria!" }),
  }),
});
