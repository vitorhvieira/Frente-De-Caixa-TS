import { Product } from "../entities/Product";

export interface ISaveProduct {
  dataToSave: Omit<Product, "id">;
}

export interface IUpdateProduct {
  productUpdate: Omit<Partial<Product>, "id">;
  id: number;
}

export interface IProductRepository {
  saveImage(props: Express.Multer.File): Promise<string>;
  deleteImage(props: string): Promise<void>;
  findProductByID(id: number): Promise<Product | void>;
  detailProducts(): Promise<Partial<Product[]>>;
  updateProduct(props: IUpdateProduct): Promise<Product | void>;
  deleteProduct(id: number): Promise<void>;
  saveProduct(props: ISaveProduct): Promise<void>;
}
