import { z } from "zod";

export const CreateOrderSchema = z.object({
  body: z.object({
    cliente_id: z
      .string()
      .or(z.number())
      .refine(
        (value) => {
          return (
            (typeof value === "string" && Number(value)) ||
            (typeof value === "number" && value > 0)
          );
        },
        { message: "O id fornecido é inválido!" }
      ),
    observacao: z.string({ required_error: "A observação é obrigatoria!" }),
    pedido_produtos: z
      .array(
        z.object({
          produto_id: z
            .string()
            .or(z.number())
            .refine(
              (value) => {
                return (
                  (typeof value === "string" && Number(value)) ||
                  (typeof value === "number" && value > 0)
                );
              },
              { message: "O id do produto fornecido é inválido!" }
            ),
          quantidade_produto: z
            .string()
            .or(z.number())
            .refine(
              (value) => {
                return (
                  (typeof value === "string" && Number(value)) ||
                  (typeof value === "number" && value > 0)
                );
              },
              { message: "A quantidade do produto fornecida é inválida!" }
            ),
        })
      )
      .nonempty({ message: "É preciso informar pelo menos um pedido!" }),
  }),
});
