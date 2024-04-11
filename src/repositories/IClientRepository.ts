import { Client } from "../entities/Client";
export interface IFindOtherClient {
  valueCpf: string;
  ValueEmail: string;
  clientID: number;
}

export interface IFindClient {
  key: "id" | "email" | "cpf";
  value: string | number;
}

export interface IUpdateClient {
  dataToUpdate: Omit<Partial<Client>, "id">;
  id: number;
}

export interface IClientRepository {
  saveClient(props: Client): Promise<void>;
  updateClient(props: IUpdateClient): Promise<Client | void>;
  deleteClient(id: number): Promise<void>;
  findClientBy(props: IFindClient): Promise<Client | void>;
  findOtherClient(props: IFindOtherClient): Promise<void | Client>;
  detailClients(): Promise<Client[]>;
}
