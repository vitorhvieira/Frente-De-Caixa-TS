import { Order_Product } from "@prisma/client";
import { Order } from "../entities/Order";
import { Product } from "../entities/Product";

export interface ISaveOrder {
  dataToSave: Omit<Order, "id" | "valor_total">;
}

export interface IPickOrder {
  product_id: number;
  quantity_product: number;
}

export interface IOrderRepository {
  findProduct(id: number): Promise<Product>;
  checkStock(props: IPickOrder): Promise<boolean>;
  updateQuantity(props: IPickOrder): Promise<void>;
  saveOrder(props: ISaveOrder): Promise<void>;
  detailOrderByID(pedido_id: number): Promise<Order[] | void>;
  deitalOrder(): Promise<Order_Product[]>;
}
