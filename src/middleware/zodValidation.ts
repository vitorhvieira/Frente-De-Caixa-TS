import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validationRequest =
  (validation: AnyZodObject) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await validation.parseAsync({
        body: request.body,
        query: request.query,
        params: request.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return response.status(400).send({ message: error.issues[0].message });
      }
      return response.status(500).send("Internal Server Error");
    }
  };
