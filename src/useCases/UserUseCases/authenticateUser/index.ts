import { BcryptProvider } from "../../../providers/implementations/BcryptProvider";
import { JwtProvider } from "../../../providers/implementations/JwtProvider";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const jwtProvider = new JwtProvider();
const bcryptProvider = new BcryptProvider();
const prismaUsersRepository = new PrismaUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  jwtProvider,
  prismaUsersRepository,
  bcryptProvider
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController };
