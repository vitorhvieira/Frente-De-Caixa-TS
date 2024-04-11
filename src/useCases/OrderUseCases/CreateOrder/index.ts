import { PrismaOrderRepository } from "../../../repositories/implementations/PrismaOrderRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const prismaOrderRepository = new PrismaOrderRepository();
const createOrderUseCase = new CreateOrderUseCase(prismaOrderRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderUseCase, createOrderController };
