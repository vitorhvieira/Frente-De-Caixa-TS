import { Client } from "../../../entities/Client";
import { apiError } from "../../../helpers/apiError";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { IUpdateClientDTO } from "./UpdateClientDTO";

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(data: IUpdateClientDTO, id: number): Promise<Client | void> {
    const findClientByID = await this.clientRepository.findClientBy({
      key: "id",
      value: id,
    });
    if (!findClientByID) {
      throw new apiError(`Client com id ${id} não encontrado!`, 404);
    }

    const findOtherClient = await this.clientRepository.findOtherClient({
      ValueEmail: data.email,
      valueCpf: data.cpf,
      clientID: id,
    });

    if (findOtherClient) {
      throw new apiError(`Client com email ou cpf cadastrado!`, 404);
    }
    await this.clientRepository.updateClient({
      id,
      dataToUpdate: data,
    });
    const clientReturn = await this.clientRepository.findClientBy({
      key: "id",
      value: id,
    });
    return clientReturn;
  }
}
