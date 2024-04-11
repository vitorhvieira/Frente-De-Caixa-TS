import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from "express";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, senha } = request.body;

    const userAuth = await this.authenticateUserUseCase.execute({
      email,
      senha,
    });
    return response.status(200).json(userAuth);
  }
}
