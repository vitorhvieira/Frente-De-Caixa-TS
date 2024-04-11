import { BcryptProvider } from "../../../providers/implementations/BcryptProvider";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
const bcryptProvider = new BcryptProvider();
const prismaUsersRepository = new PrismaUsersRepository();
const updateUserUseCase = new UpdateUserUseCase(
  prismaUsersRepository,
  bcryptProvider
);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController, updateUserUseCase };
