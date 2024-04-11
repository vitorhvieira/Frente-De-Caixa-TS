import { PrismaCategoryRepository } from "../../../repositories/implementations/PrismaCategoryRepository";
import { UpdateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

const prismaCategoryRepository = new PrismaCategoryRepository();
const updateCategoryUseCase = new UpdateCategoryUseCase(
  prismaCategoryRepository
);
const updateCategoryController = new UpdateCategoryController(
  updateCategoryUseCase
);

export { updateCategoryUseCase, updateCategoryController };
