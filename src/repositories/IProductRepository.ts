import { Product } from "../entities/Product";

export interface ISaveProduct {
  dataToSave: Omit<Product, "id">;
}

export interface IUpdateProduct {
  productUpdate: Omit<Partial<Product>, "id">;
  id: number;
}

export interface IProductRepository {
  findProductByID(id: number): Promise<Product | void>;
  detailProducts(): Promise<Product[]>
  updateProduct(props: IUpdateProduct): Promise<Product | void>;
  deleteProduct(id: number): Promise<void>;
  saveProduct(props: ISaveProduct): Promise<void>;
}
