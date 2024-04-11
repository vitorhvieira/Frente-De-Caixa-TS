export class User {
  public readonly id: number;
  public nome: string;
  public email: string;
  public senha: string;

  constructor(props: Omit<User, "id">, id?: number) {
    Object.assign(this, props);

    if (id) {
      this.id = id;
    }
  }
}
