export class Category {
  public readonly id: number;
  public descricao: string;

  constructor(props: Omit<Category, "id">, id?: number) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
