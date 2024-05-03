import { Request, Response } from "express";
import { DetailOrderUseCase } from "./DetailOrderUseCase";

export class DetailOrderController {
  constructor(private detailOrderUseCase: DetailOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cliente_id } = request.query;
    const detailOrder = await this.detailOrderUseCase.execute(Number(cliente_id));

    return response.status(200).json(detailOrder);
  }
}
