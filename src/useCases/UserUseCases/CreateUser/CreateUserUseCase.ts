import { User } from "../../../entities/User";
import { apiError } from "../../../helpers/apiError";
import { IBcryptProvider } from "../../../providers/IBcryptProvider";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
    private bcryptProvider: IBcryptProvider
  ) {}
  async execute(data: ICreateUserDTO): Promise<void> {
    const userEmailAlreadyExists = await this.usersRepository.findBy({
      key: "email",
      value: data.email,
    });

    if (userEmailAlreadyExists) {
      throw new apiError("O e-mail informado já está sendo utilizado por outro usuário.", 409);
    }

    const hashPass = await this.bcryptProvider.hash(data.senha);
    const user = new User({
      ...data,
      senha: hashPass,
    });

    await this.usersRepository.save(user);

    this.mailProvider.sendEmail({
      to: {
        email: data.email,
        name: data.nome,
      },
      from: {
        email: "cadastro@frentepdv.com",
        name: "Frente de Caixa PDV",
      },
      subject: "Seja Bem vindo a Frente de Caixa PDV",
      body: "<p>Voce esta cadastrando em nossa plataforma!</p>",
    });
  }
}
