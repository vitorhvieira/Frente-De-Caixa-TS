import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class DetailUserUseCase {
  constructor(private userRepository: IUsersRepository) {}
  async execute(user_id: number): Promise<Omit<User, "senha">> {
    return await this.userRepository.findBy({
      key: "id",
      value: user_id,
    });
  }
}
