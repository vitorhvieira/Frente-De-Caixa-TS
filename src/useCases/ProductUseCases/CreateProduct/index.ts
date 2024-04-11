import { PrismaProductRepository } from "../../../repositories/implementations/PrismaProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCases";

const prismaProductRepository = new PrismaProductRepository();
const createProductUseCase = new CreateProductUseCase(prismaProductRepository);
const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductUseCase, createProductController };
