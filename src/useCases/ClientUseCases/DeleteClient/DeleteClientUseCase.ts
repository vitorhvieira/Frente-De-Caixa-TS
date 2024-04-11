import { apiError } from "../../../helpers/apiError";
import { IClientRepository } from "../../../repositories/IClientRepository";

export class DeleteClientUseCase {
  constructor(private clientRepository: IClientRepository) {}
  async execute(id: number): Promise<void> {
    const findClientByID = await this.clientRepository.findClientBy({
      key: "id",
      value: id,
    });

    if (!findClientByID) {
      throw new apiError(`Client com id ${id} não encontrado!`, 404);
    }

    await this.clientRepository.deleteClient(id);
  }
}
