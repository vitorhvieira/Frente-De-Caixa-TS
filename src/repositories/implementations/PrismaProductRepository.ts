import { Product } from "../../entities/Product";
import {
  IProductRepository,
  ISaveProduct,
  IUpdateProduct,
} from "../IProductRepository";
import { prisma } from "../../configs/prisma";
import { s3 } from "../../configs/aws-s3";

export class PrismaProductRepository implements IProductRepository {
  async saveImage(props: Express.Multer.File): Promise<string> {
    const file = await s3
      .upload({
        Bucket: process.env.KEY_NAME,
        Key: props.originalname,
        Body: props.buffer,
        ContentType: props.mimetype,
      })
      .promise();

    return file.Location;
  }
  async deleteImage(props: string): Promise<void> {
    await s3
      .deleteObject({
        Bucket: process.env.KEY_NAME,
        Key: props[0].split("/").pop(),
      })
      .promise();
  }
  async detailProducts(): Promise<Product[]> {
    return await prisma.product.findMany({ orderBy: { id: "asc" } });
  }
  async findProductByID(id: number): Promise<void | Product> {
    return await prisma.product.findUnique({ where: { id } });
  }
  async updateProduct({
    id,
    productUpdate,
  }: IUpdateProduct): Promise<void | Product> {
    return await prisma.product.update({
      where: { id },
      data: {
        descricao: productUpdate.descricao || undefined,
        valor: productUpdate.valor || undefined,
        quantidade_estoque: productUpdate.quantidade_estoque || undefined,
        categoria_id: productUpdate.categoria_id || undefined,
        produto_img: productUpdate.produto_img || undefined,
      },
    });
  }
  async deleteProduct(id: number): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
  async saveProduct(props: ISaveProduct): Promise<void> {
    await prisma.product.create({ data: props.dataToSave });
  }
}
