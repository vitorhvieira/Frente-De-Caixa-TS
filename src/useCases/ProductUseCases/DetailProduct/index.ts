import { PrismaProductRepository } from "../../../repositories/implementations/PrismaProductRepository";
import { DetailProductController } from "./DetailProductController";
import { DetailProductUseCase } from "./DetailProductUseCase";

const prismaProductRepository = new PrismaProductRepository();
const detailProductUseCase = new DetailProductUseCase(prismaProductRepository);
const detailProductController = new DetailProductController(
  detailProductUseCase
);

export { detailProductUseCase, detailProductController };
