import { apiError } from "../../../helpers/apiError";
import { IBcryptProvider } from "../../../providers/IBcryptProvider";
import { IJwtProvider } from "../../../providers/IJwtProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IAuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(
    private jwtProvider: IJwtProvider,
    private usersRepository: IUsersRepository,
    private bcryptProvider: IBcryptProvider
  ) {}

  async execute(data: IAuthenticateUserDTO) {
    const userExists = await this.usersRepository.findBy({
      key: "email",
      value: data.email,
    });
    if (!userExists) {
      throw new apiError("Usuario com e-mail não cadastrado!", 404);
    }

    const checkPass = await this.bcryptProvider.compare(
      data.senha,
      userExists.senha
    );

    if (!checkPass) {
      throw new apiError("Senha Incorreta!", 400);
    }

    const token = await this.jwtProvider.sign({
      userId: userExists.id,
      expiresIn: "8h",
    });

    const { senha: _, ...user } = userExists;

    return { user, Token: token };
  }
}
