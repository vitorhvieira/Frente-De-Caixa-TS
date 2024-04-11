import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICategoryDTO } from "./CreateCategoryDTO";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  async execute(data: ICategoryDTO): Promise<Category> {
    return await this.categoryRepository.saveCategory(new Category(data));
  }
}
