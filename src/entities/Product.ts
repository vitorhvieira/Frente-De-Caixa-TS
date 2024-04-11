export class Product {
  public readonly id: number;
  public descricao: string;
  public valor: number;
  public categoria_id: number;
  public quantidade_estoque: number;
  public produto_img: string;

  constructor(props: Omit<Product, "id">, id?: number) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
