import { prisma } from "../../configs/prisma";
import { Client } from "../../entities/Client";
import {
  IClientRepository,
  IFindClient,
  IFindOtherClient,
  IUpdateClient,
} from "../IClientRepository";

export class PrismaClientRepository implements IClientRepository {
  async findOtherClient(props: IFindOtherClient): Promise<void | Client> {
    const found = await prisma.client.findFirst({
      where: {
        AND: [
          { OR: [{ email: props.ValueEmail }, { cpf: props.valueCpf }] },
          { NOT: { id: props.clientID } },
        ],
      },
    });
    return found;
  }
  async saveClient(props: Client): Promise<void> {
    await prisma.client.create({
      data: props,
    });
  }
  async updateClient(props: IUpdateClient): Promise<void | Client> {
    const client = await prisma.client.update({
      where: { id: props.id },
      data: props.dataToUpdate,
    });
    return client;
  }
  async deleteClient(id: number): Promise<void> {
    await prisma.client.delete({ where: { id } });
  }
  async findClientBy(props: IFindClient): Promise<void | Client> {
    const client = await prisma.client.findFirst({
      where: { [props.key]: props.value },
    });
    return client;
  }
  async detailClients(): Promise<Client[]> {
    const clients = await prisma.client.findMany({ orderBy: { id: "asc" } });
    return clients;
  }
}
