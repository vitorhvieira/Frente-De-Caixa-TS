import { Order } from "../../../entities/Order";
import { Order_Product } from "../../../entities/Order_Product";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreateOrderDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}
  async execute(props: ICreateOrderDTO): Promise<void> {
    const order_product = props.pedido_produtos.map((produto) => {
      return new Order_Product({
        produto_id: produto.produto_id,
        quantidade_produto: produto.quantidade_produto,
      });
    });

    const order = new Order({
      cliente_id: props.cliente_id,
      observacao: props.observacao,
      pedido_produtos: order_product,
    });

    await this.orderRepository.saveOrder({
      dataToSave: order,
    });
  }
}
