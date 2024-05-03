import { NextFunction, Request, Response } from "express";
import { apiError } from "../helpers/apiError";

export const handleError = async (
  error: Error & Partial<apiError>,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = error.statuscode ?? 500;
  const message = error.statuscode
    ? error.message
    : "Erro interno do servidor.";
  return response.status(statusCode).json({ message });
};
