import { PrismaCategoryRepository } from "../../../repositories/implementations/PrismaCategoryRepository";
import { DetailCategoryController } from "./DetailCategoryController";
import { DetailCategoryUseCases } from "./DetailCategoryUseCase";

const prismaCategoryRepository = new PrismaCategoryRepository();
const detailCategoryUseCase = new DetailCategoryUseCases(
  prismaCategoryRepository
);
const detailCategoryController = new DetailCategoryController(
  detailCategoryUseCase
);

export { detailCategoryUseCase, detailCategoryController };
