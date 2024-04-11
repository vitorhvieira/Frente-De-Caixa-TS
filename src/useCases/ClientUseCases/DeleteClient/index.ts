import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";
import { DeleteClientController } from "./DeleteClientController";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

const prismaClientRepository = new PrismaClientRepository();
const deleteClientUseCase = new DeleteClientUseCase(prismaClientRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientUseCase, deleteClientController };
