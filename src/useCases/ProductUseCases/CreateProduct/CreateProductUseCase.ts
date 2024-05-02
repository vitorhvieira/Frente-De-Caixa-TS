import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(
    data: ICreateProductDTO,
    file?: Express.Multer.File
  ): Promise<void> {
    if (file) {
      data.produto_img = await this.productRepository.saveImage(file);
    }

    const product = new Product({
      descricao: data.descricao,
      valor: Number(data.valor),
      quantidade_estoque: Number(data.quantidade_estoque),
      categoria_id: Number(data.categoria_id),
      produto_img: data.produto_img,
    });

    return await this.productRepository.saveProduct({
      dataToSave: product,
    });
  }
}
