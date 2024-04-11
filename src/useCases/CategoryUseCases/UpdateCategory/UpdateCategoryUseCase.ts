import { Category } from "@prisma/client";
import { PrismaCategoryRepository } from "../../../repositories/implementations/PrismaCategoryRepository";
import { ICategoryDTO } from "../CreateCategory/CreateCategoryDTO";
import { apiError } from "../../../helpers/apiError";

export class UpdateCategoryUseCase {
  constructor(private prismaCategoryRepository: PrismaCategoryRepository) {}
  async execute(
    data: ICategoryDTO,
    category: Partial<Category>
  ): Promise<Category | void> {
    const findCategory = await this.prismaCategoryRepository.findCategoryByID(
      category.id
    );

    if (!findCategory) {
      throw new apiError(`Categoria com id ${category.id} não encontrada`, 404);
    }
    await this.prismaCategoryRepository.updateCategory({
      id: category.id,
      descricao: data.descricao,
    });
    const categoryReturn = await this.prismaCategoryRepository.findCategoryByID(
      category.id
    );
    return categoryReturn;
  }
}
