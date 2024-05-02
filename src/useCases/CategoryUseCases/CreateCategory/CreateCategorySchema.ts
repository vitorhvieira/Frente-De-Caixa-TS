import { z } from "zod";

export const CreateCategorySchema = z.object({
  body: z.object({
    descricao: z.string({ required_error: "A descricao é obrigatoria!" }),
  }),
});
