import { z } from "zod";
export const DetailProductSchema = z.object({
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
      )
      .optional(),
  }),
});
