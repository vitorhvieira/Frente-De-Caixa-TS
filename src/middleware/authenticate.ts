import { NextFunction, Request, Response } from "express";
import { JwtProvider } from "../providers/implementations/JwtProvider";
import { apiError } from "../helpers/apiError";

export const authenticate = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;
  if (!authorization || !authorization.includes("Bearer")) {
    throw new apiError("Formado de token invalido!", 401);
  }

  const token = authorization.split(" ")[1];
  const jwt = new JwtProvider();
  try {
    const userData = await jwt.verify(token);

    request.user = { id: userData.id };

    next();
  } catch (e) {
    throw new apiError("Token Expirado", 400);
  }
};
