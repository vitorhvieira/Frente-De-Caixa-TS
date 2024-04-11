import { apiError } from "../../../helpers/apiError";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  async execute(id: number): Promise<void> {
    const findCategory = await this.categoryRepository.findCategoryByID(id);

    if (!findCategory) {
      throw new apiError(`Categoria com id ${id} não encontrada`, 404);
    }

    await this.categoryRepository.deleteCategory(id);
  }
}
