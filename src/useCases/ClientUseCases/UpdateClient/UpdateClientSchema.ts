import { z } from "zod";

export const UpdateClientSchema = z.object({
  params: z.object({
    id: z
      .string()
      .or(z.number())
      .refine(
        (value) => {
          return (
            (typeof value === "string" && Number(value)) ||
            (typeof value === "number" && value > 0)
          );
        },
        { message: "O ID fornecido é inválido!" }
      ),
  }),
  body: z.object({
    nome: z.string().optional(),
    email: z.string().email("O email precisa ser um email valido!").optional(),
    cpf: z.string().optional(),
    cep: z.string().optional(),
    rua: z.string().optional(),
    numero: z.string().optional(),
    bairro: z.string().optional(),
    cidade: z.string().optional(),
    estado: z.string().optional(),
  }),
});
