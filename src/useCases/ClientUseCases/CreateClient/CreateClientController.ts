import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
      request.body;
    await this.createClientUseCase.execute({
      nome,
      email,
      cpf,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    });

    return response.status(201).send();
  }
}
