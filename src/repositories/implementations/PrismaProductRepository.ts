import { Product } from "../../entities/Product";
import {
  IProductRepository,
  ISaveProduct,
  IUpdateProduct,
} from "../IProductRepository";
import { prisma } from "../../configs/prisma";

export class PrismaProductRepository implements IProductRepository {
  async detailProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
    return products;
  }
  async findProductByID(id: number): Promise<void | Product> {
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  }
  async updateProduct({
    id,
    productUpdate,
  }: IUpdateProduct): Promise<void | Product> {
    const product = await prisma.product.update({
      where: { id },
      data: productUpdate,
    });
    return product;
  }
  async deleteProduct(id: number): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
  async saveProduct(props: ISaveProduct): Promise<void> {
    await prisma.product.create({
      data: {
        descricao: props.dataToSave.descricao,
        valor: props.dataToSave.valor,
        categoria_id: props.dataToSave.categoria_id,
        quantidade_estoque: props.dataToSave.quantidade_estoque,
        produto_img: props.dataToSave.produto_img,
      },
    });
  }
}
