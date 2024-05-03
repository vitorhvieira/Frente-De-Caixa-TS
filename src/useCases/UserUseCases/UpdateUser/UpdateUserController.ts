import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body;
    const { id } = request.user;
    await this.updateUserUseCase.execute({ nome, email, senha }, { id });
    return response.status(204).send();
  }
}
