import { Product } from "@prisma/client";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { apiError } from "../../../helpers/apiError";

export class DetailProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(id?: number): Promise<Product | Product[]> {
    if (id) {
      const findByID = await this.productRepository.findProductByID(id);
      if (!findByID) {
        throw new apiError(`Produto com id ${id} não encontado.`, 404);
      }
      return findByID;
    }

    return await this.productRepository.detailProducts();
  }
}
