import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { descricao, valor, categoria_id, quantidade_estoque } = request.body;
    const { id } = request.params;
    const { file } = request;
    if (file) {
      const productUpdate = await this.updateProductUseCase.execute(
        { descricao, valor, categoria_id, quantidade_estoque },
        Number(id),
        file
      );

      return response.status(202).json(productUpdate);
    }
    const productUpdate = await this.updateProductUseCase.execute(
      { descricao, valor, categoria_id, quantidade_estoque },
      Number(id)
    );

    return response.status(202).json(productUpdate);
  }
}
