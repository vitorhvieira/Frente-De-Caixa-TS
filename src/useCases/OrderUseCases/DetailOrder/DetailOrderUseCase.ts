import { Order_Product } from "@prisma/client";
import { Order } from "../../../entities/Order";
import { apiError } from "../../../helpers/apiError";
import { IOrderRepository } from "../../../repositories/IOrderRepository";

export class DetailOrderUseCase {
  constructor(private oderRepository: IOrderRepository) {}
  async execute(id?: number): Promise<Order[] | Order_Product[]> {
    if (id) {
      const findOrderByID = await this.oderRepository.detailOrderByID(id);

      if (!findOrderByID) {
        throw new apiError(`Nenhum pedido com ${id} encontrado!`, 404);
      }
      return findOrderByID;
    }
    const findOrders = await this.oderRepository.detailOrder();
    return findOrders;
  }
}
