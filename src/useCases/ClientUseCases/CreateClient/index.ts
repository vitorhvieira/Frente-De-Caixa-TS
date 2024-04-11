import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";
import { CreateClientController } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";

const prismaClientRepository = new PrismaClientRepository()
const createClientUseCase = new CreateClientUseCase(prismaClientRepository)
const createClientController = new CreateClientController(createClientUseCase)

export {createClientUseCase, createClientController}