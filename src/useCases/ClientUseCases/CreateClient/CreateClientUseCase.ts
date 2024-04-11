import { Client } from "../../../entities/Client";
import { apiError } from "../../../helpers/apiError";
import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreateClientDTO } from "./CreateClientDTO";

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(data: ICreateClientDTO): Promise<void> {
    const findEmail = await this.clientRepository.findClientBy({
      key: "email",
      value: data.email,
    });

    if (findEmail) {
      throw new apiError(`Email ja esta cadastrado!`, 409);
    }

    const findCpf = await this.clientRepository.findClientBy({
      key: "cpf",
      value: data.cpf,
    });

    if (findCpf) {
      throw new apiError(`Cpf ja esta cadastrado!`, 409);
    }

    const client = new Client(data);
    await this.clientRepository.saveClient(client);
  }
}
