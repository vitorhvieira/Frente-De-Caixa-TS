export class Client {
  public readonly id: number;
  public nome: string;
  public email: string;
  public cpf: string;
  public cep?: string;
  public rua?: string;
  public numero?: string;
  public bairro?: string;
  public cidade?: string;
  public estado?: string;

  constructor(props: Omit<Client, "id">, id?: number) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
