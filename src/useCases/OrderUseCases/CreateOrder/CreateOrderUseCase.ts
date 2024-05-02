import { Order } from "../../../entities/Order";
import { Order_Product } from "../../../entities/Order_Product";
import { apiError } from "../../../helpers/apiError";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreateOrderDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}
  async execute(props: ICreateOrderDTO): Promise<void> {
    const client = await this.orderRepository.findClient(
      Number(props.cliente_id)
    );
    if (!client) {
      throw new apiError(
        `Cliente com id ${props.cliente_id} não encontrado!`,
        404
      );
    }
    const order_product = props.pedido_produtos.map(async (produto) => {
      await this.orderRepository.findProduct(produto.produto_id);

      return new Order_Product({
        produto_id: Number(produto.produto_id),
        quantidade_produto: Number(produto.quantidade_produto),
      });
    });

    const order_productPromise = await Promise.all(order_product);

    const order = new Order({
      cliente_id: Number(props.cliente_id),
      observacao: props.observacao,
      pedido_produtos: order_productPromise,
    });

    await this.orderRepository.saveOrder({
      dataToSave: order,
    });
  }
}
