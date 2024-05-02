import { z } from "zod";

export const CreateClientSchema = z.object({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatorio!" }),
    email: z
      .string({ required_error: "O email é obrigatorio!" })
      .email("O email precisa ser um email valido!"),
    cpf: z.string({ required_error: "O cpf é obrigatorio!" }),
    cep: z.string().optional(),
    rua: z.string().optional(),
    numero: z.string().optional(),
    bairro: z.string().optional(),
    cidade: z.string().optional(),
    estado: z.string().optional(),
  }),
});
