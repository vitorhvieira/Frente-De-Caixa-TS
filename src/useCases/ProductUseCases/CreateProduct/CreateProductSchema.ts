import { z } from "zod";

export const CreateProductSchema = z.object({
  body: z.object({
    descricao: z.string({ required_error: "A descrição é obrigatoria!" }),
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
      ),
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
      ),
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
        { message: "A quantidade fornecida é inválida!" }
      ),
    produto_img: z
      .object({
        originalname: z.string(),
        buffer: z.string(),
        mimetype: z.string(),
      })
      .optional(),
  }),
});
