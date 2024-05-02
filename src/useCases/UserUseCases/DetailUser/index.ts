import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { DetailUserUseCase } from "./DetailUserUseCase";
import { DetailUserController } from "./DetailUserController";

const prismaUsersRepository = new PrismaUsersRepository();
const detailUserUseCase = new DetailUserUseCase(prismaUsersRepository);
const detailUserController = new DetailUserController(detailUserUseCase);

export { detailUserUseCase, detailUserController };
