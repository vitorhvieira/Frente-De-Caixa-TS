import { Request, Response } from "express";
import { DetailClientUseCase } from "./DetailClientUseCase";

export class DetailClientController {
  constructor(private detailClientUseCase: DetailClientUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const detail = await this.detailClientUseCase.execute(Number(id));
    return response.status(200).json(detail);
  }
}
