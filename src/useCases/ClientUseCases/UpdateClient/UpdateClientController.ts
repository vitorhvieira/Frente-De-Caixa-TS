import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
      request.body;
    const { id } = request.params;
    const update = await this.updateClientUseCase.execute(
      { nome, email, cpf, cep, rua, numero, bairro, cidade, estado },
      Number(id)
    );

    return response.status(200).json(update);
  }
}
