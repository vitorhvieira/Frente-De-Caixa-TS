import { PrismaCategoryRepository } from "../../../repositories/implementations/PrismaCategoryRepository";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

const prismaCategoryRepository = new PrismaCategoryRepository();
const deleteCategoryUseCase = new DeleteCategoryUseCase(
  prismaCategoryRepository
);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
);

export { deleteCategoryUseCase, deleteCategoryController };
