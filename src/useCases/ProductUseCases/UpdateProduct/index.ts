import { PrismaProductRepository } from "../../../repositories/implementations/PrismaProductRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const prismaProductRepository = new PrismaProductRepository()
const updateProductUseCase = new UpdateProductUseCase(prismaProductRepository)
const updateProductController = new UpdateProductController(updateProductUseCase)

export {updateProductUseCase, updateProductController}