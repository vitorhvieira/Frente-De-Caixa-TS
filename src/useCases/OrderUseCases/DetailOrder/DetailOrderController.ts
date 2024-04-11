import { Request, Response } from "express";
import { DetailOrderUseCase } from "./DetailOrderUseCase";

export class DetailOrderController {
  constructor(private detailOrderUseCase: DetailOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const detailOrder = await this.detailOrderUseCase.execute(Number(id));

    return response.status(200).json(detailOrder);
  }
}
