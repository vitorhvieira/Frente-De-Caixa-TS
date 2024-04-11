import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
  constructor(private deleteClientUseCase: DeleteClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteClientUseCase.execute(Number(id));
    return response.status(200).send();
  }
}
