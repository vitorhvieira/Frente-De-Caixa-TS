import { PrismaProductRepository } from "../../../repositories/implementations/PrismaProductRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const prismaRepository = new PrismaProductRepository();
const deleteProductUseCase = new DeleteProductUseCase(prismaRepository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductUseCase, deleteProductController };
