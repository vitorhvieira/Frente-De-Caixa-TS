export class Order_Product {
  public readonly id: number;
  public readonly pedido_id: number;
  public produto_id: number;
  public quantidade_produto: number;
  public readonly valor_produto: number;

  constructor(
    props: Omit<Order_Product, "id" | "pedido_id" | "valor_produto">,
    id?: number
  ) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
