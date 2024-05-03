import { Order_Product } from "@prisma/client";
import { prisma } from "../../configs/prisma";
import { Order } from "../../entities/Order";
import { Product } from "../../entities/Product";
import { apiError } from "../../helpers/apiError";
import { IOrderRepository, IPickOrder, ISaveOrder } from "../IOrderRepository";

export class PrismaOrderRepository implements IOrderRepository {
  async findClient(id: number): Promise<boolean> {
    const client = await prisma.client.findUnique({ where: { id } });
    if (!client) {
      return false;
    }
    return true;
  }
  async detailOrder(): Promise<Order_Product[]> {
    const orders = prisma.order_Product.findMany({ orderBy: { id: "asc" } });
    return orders;
  }
  async findProduct(id: number): Promise<Product> {
    const find = await prisma.product.findUnique({ where: { id } });
    if (!find) {
      throw new apiError(`Produto com id ${id} não encontrado`, 404);
    }
    return find;
  }
  async checkStock(props: IPickOrder): Promise<boolean> {
    const check = await prisma.product.findUnique({
      where: { id: props.product_id },
    });
    if (props.quantity_product > check.quantidade_estoque) {
      throw new apiError(`Quantidade de produto não disponivel`, 406);
    }
    return true;
  }
  async updateQuantity(props: IPickOrder): Promise<void> {
    const product = await this.findProduct(props.product_id);
    await this.checkStock(props);
    const quantity = product.quantidade_estoque - props.quantity_product;
    await prisma.product.update({
      where: { id: props.product_id },
      data: { quantidade_estoque: quantity },
    });
  }
  async saveOrder(props: ISaveOrder): Promise<void> {
    let sum = 0;
    const order = await prisma.order.create({
      data: {
        cliente_id: props.dataToSave.cliente_id,
        observacao: props.dataToSave.observacao,
        valor_total: 0,
      },
    });
    for (const products of props.dataToSave.pedido_produtos) {
      const product = await this.findProduct(products.produto_id);
      await this.updateQuantity({
        product_id: product.id,
        quantity_product: products.quantidade_produto,
      });

      const totalSum = product.valor * products.quantidade_produto;
      sum += totalSum;
      await prisma.order_Product.create({
        data: {
          pedido_id: order.id,
          produto_id: product.id,
          quantidade_produto: products.quantidade_produto,
          valor_produto: product.valor,
        },
      });
    }

    await prisma.order.update({
      where: { id: order.id },
      data: { valor_total: sum },
    });
  }
  async detailOrderByID(cliente_id: number): Promise<Order[] | void> {
    const order = await prisma.order.findMany({
      where: { cliente_id },
      include: { pedido_produtos: true },
    });
    if (order.length == 0) {
      throw new apiError("Nenhum pedido cadastrado", 404);
    }
    return order;
  }
}
