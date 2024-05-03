import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { descricao, valor, categoria_id, quantidade_estoque } = request.body;
    const { file } = request;
    if (file) {
      await this.createProductUseCase.execute(
        {
          descricao,
          valor,
          categoria_id,
          quantidade_estoque,
        },
        file
      );
      return response.status(200).json();
    }

    await this.createProductUseCase.execute({
      descricao,
      valor,
      categoria_id,
      quantidade_estoque,
      produto_img: null,
    });

    return response.status(201).send();
  }
}
