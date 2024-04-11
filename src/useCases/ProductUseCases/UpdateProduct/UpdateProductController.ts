import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { descricao, valor, categoria_id, quantidade_estoque, produto_img } =
      request.body;
    const { id } = request.params;
    const productUpdate = await this.updateProductUseCase.execute(
      { descricao, valor, categoria_id, quantidade_estoque, produto_img },
      Number(id)
    );

    return response.status(202).json(productUpdate);
  }
}
