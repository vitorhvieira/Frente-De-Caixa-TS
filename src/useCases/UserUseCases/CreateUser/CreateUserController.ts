import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body;

    await this.createUserUseCase.execute({
      nome,
      email,
      senha,
    });
    return response.status(201).send();
  }
}
