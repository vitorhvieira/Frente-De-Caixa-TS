import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";
import { UpdateClientController } from "./UpdateClientController";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

const prismaClientRepository = new PrismaClientRepository();
const updateClientUseCase = new UpdateClientUseCase(prismaClientRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientUseCase, updateClientController };
