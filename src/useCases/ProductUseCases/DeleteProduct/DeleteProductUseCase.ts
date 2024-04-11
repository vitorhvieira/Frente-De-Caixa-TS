import { apiError } from "../../../helpers/apiError";
import { IProductRepository } from "../../../repositories/IProductRepository";

export class DeleteProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(id: number): Promise<void> {
    const findProduct = await this.productRepository.findProductByID(id);

    if (!findProduct) {
      throw new apiError(`Produto com id ${id} não encontrado.`, 404);
    }

    await this.productRepository.deleteProduct(id);
  }
}
