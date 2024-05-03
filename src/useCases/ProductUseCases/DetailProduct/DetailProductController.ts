import { Request, Response } from "express";
import { DetailProductUseCase } from "./DetailProductUseCase";

export class DetailProductController {
  constructor(private detailProductUseCase: DetailProductUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const products = await this.detailProductUseCase.execute(Number(id));

    return response.status(200).json(products);
  }
}
