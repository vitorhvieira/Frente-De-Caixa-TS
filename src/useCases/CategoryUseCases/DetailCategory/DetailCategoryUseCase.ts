import { Category } from "@prisma/client";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { apiError } from "../../../helpers/apiError";

export class DetailCategoryUseCases {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id?: number): Promise<Category | Category[]> {
    if (id) {
      const categoyByID = await this.categoryRepository.findCategoryByID(id);

      if (!categoyByID) {
        throw new apiError(`Categoria com id ${id} não encontrada`, 404);
      }

      return categoyByID;
    }

    return await this.categoryRepository.findCategory();
  }
}
