import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";
import { UpdateClientController } from "./UpdateClientController";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

const prismaClientRepository = new PrismaClientRepository();
const updateClienteUseCase = new UpdateClientUseCase(prismaClientRepository);
const updateClientController = new UpdateClientController(updateClienteUseCase);

export { updateClienteUseCase, updateClientController };
