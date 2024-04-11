import { BcryptProvider } from "../../../providers/implementations/BcryptProvider";
import { MailtrapMailProvider } from "../../../providers/implementations/MailtrapMailProvider";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaUsersRepository = new PrismaUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();
const bcryptProvider = new BcryptProvider();

const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository,
  mailtrapMailProvider,
  bcryptProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
