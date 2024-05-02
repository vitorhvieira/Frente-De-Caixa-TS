import { z } from "zod";

export const UpdateProductSchema = z.object({
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
    descricao: z
      .string({ required_error: "A descrição é obrigatoria!" })
      .optional(),
    valor: z
      .string()
      .or(z.number())
      .refine(
        (value) => {
          return (
            (typeof value === "string" && Number(value)) ||
            (typeof value === "number" && value > 0)
          );
        },
        { message: "O valor fornecido é inválido!" }
      )
      .optional(),
    categoria_id: z
      .string()
      .or(z.number())
      .refine(
        (value) => {
          return (
            (typeof value === "string" && Number(value)) ||
            (typeof value === "number" && value > 0)
          );
        },
        { message: "A categoria fornecida é inválida!" }
      )
      .optional(),
    quantidade_estoque: z
      .string()
      .or(z.number())
      .refine(
        (value) => {
          return (
            (typeof value === "string" && Number(value)) ||
            (typeof value === "number" && value > 0)
          );
        },
        { message: "A quantidade fornecidoa é inválida!" }
      )
      .optional(),
    produto_img: z.string().optional(),
  }),
});
