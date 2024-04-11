import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { cliente_id, observacao, pedido_produtos } = request.body;
    await this.createOrderUseCase.execute({
      cliente_id,
      observacao,
      pedido_produtos,
    });
    return response.status(200).send();
  }
}
