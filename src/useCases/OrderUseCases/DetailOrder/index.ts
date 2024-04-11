import { PrismaOrderRepository } from "../../../repositories/implementations/PrismaOrderRepository";
import { DetailOrderController } from "./DetailOrderController";
import { DetailOrderUseCase } from "./DetailOrderUseCase";

const prismaOrderRepository = new PrismaOrderRepository()
const detailOrderUseCase = new DetailOrderUseCase(prismaOrderRepository)
const detailOrderController = new DetailOrderController(detailOrderUseCase)

export {detailOrderUseCase, detailOrderController}