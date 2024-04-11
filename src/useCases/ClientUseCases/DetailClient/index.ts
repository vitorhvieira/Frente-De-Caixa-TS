import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";
import { DetailClientController } from "./DetailClientController";
import { DetailClientUseCase } from "./DetailClientUseCase";

const prismaClientRepository = new PrismaClientRepository();
const detailClientUseCase = new DetailClientUseCase(prismaClientRepository);
const detailClientController = new DetailClientController(detailClientUseCase);

export { detailClientUseCase, detailClientController };
