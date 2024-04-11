import { PrismaCategoryRepository } from "../../../repositories/implementations/PrismaCategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryUseCaseController } from "./CreateCategoryUseCaseController";
const prismaRepository = new PrismaCategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(prismaRepository);
const createCategoryUseCaseController = new CreateCategoryUseCaseController(
  createCategoryUseCase
);

export { createCategoryUseCase, createCategoryUseCaseController };
