import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductDTO } from "./CreateProdutctDTO";

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(data: ICreateProductDTO): Promise<void> {
    return await this.productRepository.saveProduct({ dataToSave: data });
  }
}
