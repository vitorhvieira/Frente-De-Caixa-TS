import { Order_Product } from "@prisma/client";
import { Order } from "../../../entities/Order";
import { apiError } from "../../../helpers/apiError";
import { IOrderRepository } from "../../../repositories/IOrderRepository";

export class DetailOrderUseCase {
  constructor(private oderRepository: IOrderRepository) {}
  async execute(cliente_id?: number): Promise<Order[] | Order_Product[]> {
    if (cliente_id) {
      const findClient = await this.oderRepository.findClient(cliente_id);
      if (!findClient) {
        throw new apiError(`Cliente com ID ${cliente_id} não encontrado!`, 404);
      }
      await this.oderRepository.detailOrderByID(cliente_id);
    }
    const findOrders = await this.oderRepository.detailOrder();
    return findOrders;
  }
}
