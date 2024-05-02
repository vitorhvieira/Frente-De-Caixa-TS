import { Product } from "../../../entities/Product";
import { apiError } from "../../../helpers/apiError";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { IUpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(
    data: IUpdateProductDTO,
    id: number,
    file?: Express.Multer.File
  ): Promise<Product | void> {
    const findProduct = await this.productRepository.findProductByID(id);

    if (!findProduct) {
      throw new apiError(`Produto com id ${id} não encontrado!`, 404);
    }
    if (file) {
      if (findProduct.produto_img !== null) {
        await this.productRepository.deleteImage(findProduct.produto_img);
      }
      return await this.productRepository.updateProduct({
        productUpdate: {
          descricao: data.descricao,
          valor: Number(data.valor),
          categoria_id: Number(data.categoria_id),
          quantidade_estoque: Number(data.quantidade_estoque),
          produto_img: await this.productRepository.saveImage(file),
        },
        id,
      });
    }

    return await this.productRepository.updateProduct({
      productUpdate: {
        descricao: data.descricao,
        valor: Number(data.valor),
        categoria_id: Number(data.categoria_id),
        quantidade_estoque: Number(data.quantidade_estoque),
      },
      id,
    });
  }
}
