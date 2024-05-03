import { Product } from "../../entities/Product";
import {
  IProductRepository,
  ISaveProduct,
  IUpdateProduct,
} from "../IProductRepository";
import { prisma } from "../../configs/prisma";
import { s3 } from "../../configs/aws-s3";
import { apiError } from "../../helpers/apiError";

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
    const verifyOrder = await prisma.order_Product.findFirst({
      where: { produto_id: id },
    });

    if (verifyOrder) {
      throw new apiError(
        `O produto ao qual deseja deletar esta vinculado ao pedido_produtos com ID ${verifyOrder.id}!`,
        406
      );
    }
    const findImage = await prisma.product.findUnique({ where: { id } });
    await this.deleteImage(findImage.produto_img);
    await prisma.product.delete({ where: { id } });
  }
  async saveProduct(props: ISaveProduct): Promise<void> {
    await prisma.product.create({ data: props.dataToSave });
  }
}
