import { Category } from "@prisma/client";

export interface IUpdateCategory {
  data: Omit<Category, "id">;
  id: number;
}

export interface ICategoryRepository {
  findCategory(): Promise<Category[]>;
  findCategoryByID(id: number): Promise<Category | void>;
  saveCategory(data: Category): Promise<Category>;
  updateCategory(props: Category): Promise<void>;
  deleteCategory(id: number): Promise<void>;
}
