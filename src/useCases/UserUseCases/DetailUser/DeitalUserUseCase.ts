import { User } from "../../../entities/User";
import { apiError } from "../../../helpers/apiError";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class DetailUserUseCase {
  constructor(private userRepository: IUsersRepository) {}
  async execute(user_id: number): Promise<Omit<User, "senha">> {
    const user = await this.userRepository.findBy({
      key: "id",
      value: user_id,
    });

    if (!user) {
      throw new apiError("Usuario não encontro", 400);
    }
    const { senha: _, ...returnUser } = user;
    return returnUser;
  }
}
