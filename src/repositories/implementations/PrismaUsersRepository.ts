import { User } from "../../entities/User";
import {
  IFindBy,
  IFindOther,
  IUserUpdate,
  IUsersRepository,
} from "../IUsersRepository";
import { prisma } from "../../configs/prisma";

export class PrismaUsersRepository implements IUsersRepository {
  async findBy({ key, value }: IFindBy): Promise<User | void> {
    const user = await prisma.user.findFirst({ where: { [key]: value } });
    return user;
  }
  async findOther({ userID, email }: IFindOther): Promise<User | void> {
    const user = await prisma.user.findFirst({
      where: {
        email,
        NOT: { id: userID },
      },
    });

    return user;
  }

  async update(props: IUserUpdate): Promise<void> {
    await prisma.user.update({
      where: { id: props.id },
      data: {
        email: props.userUpdate.email || undefined,
        senha: props.userUpdate.senha || undefined,
        nome: props.userUpdate.nome || undefined,
      },
    });
  }
  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        nome: user.nome,
        email: user.email,
        senha: user.senha,
      },
    });
  }
}
