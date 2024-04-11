import { Order_Product } from "./Order_Product";

export class Order {
  public readonly id: number;
  public cliente_id: number;
  public observacao: string;
  public readonly valor_total: number;
  public pedido_produtos: Order_Product[];

  constructor(props: Omit<Order, "id" | "valor_total">, id?: number) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
