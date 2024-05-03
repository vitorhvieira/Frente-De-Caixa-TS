import { User } from "../../../entities/User";
import { apiError } from "../../../helpers/apiError";
import { IBcryptProvider } from "../../../providers/IBcryptProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private bcryptProvider: IBcryptProvider
  ) {}
  async execute(data: IUpdateUserDTO, user: Partial<User>): Promise<void> {
    const userAlready = await this.userRepository.findOther({
      userID: user.id,
      email: data.email,
    });

    if (userAlready) {
      throw new apiError(
        "O e-mail informado já está sendo utilizado por outro usuário",
        409
      );
    }

    let hashPass = await this.bcryptProvider.hash(data.senha);
    data.senha = hashPass;

    await this.userRepository.update({
      userUpdate: data,
      id: user.id,
    });
  }
}
