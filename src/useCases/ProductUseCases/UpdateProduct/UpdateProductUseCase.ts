import { Product } from "../../../entities/Product";
import { apiError } from "../../../helpers/apiError";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { IUpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(data: IUpdateProductDTO, id: number): Promise<Product | void> {
    const findProduct = await this.productRepository.findProductByID(id);

    if (!findProduct) {
      throw new apiError(`Produto com id ${id} não encontrado!`, 404);
    }
    await this.productRepository.updateProduct({
      productUpdate: data,
      id,
    });
    const returnProduct = await this.productRepository.findProductByID(id);
    return returnProduct;
  }
}
