import { Client } from "../../../entities/Client";
import { apiError } from "../../../helpers/apiError";
import { IClientRepository } from "../../../repositories/IClientRepository";

export class DetailClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(id?: number): Promise<Client | Client[]> {
    if (id) {
      const findClientByID = await this.clientRepository.findClientBy({
        key: "id",
        value: id,
      });
      if (!findClientByID) {
        throw new apiError(`Client com id ${id} não encontrado!`, 404);
      }
      return findClientByID;
    }

    const findClients = await this.clientRepository.detailClients();
    return findClients;
  }
}
