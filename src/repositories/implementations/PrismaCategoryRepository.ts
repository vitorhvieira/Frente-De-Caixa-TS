import { ICategoryRepository } from "../ICategoryRepository";
import { prisma } from "../../configs/prisma";

export class PrismaCategoryRepository implements ICategoryRepository {
  async findCategory(): Promise<{ id: number; descricao: string }[]> {
    const category = await prisma.category.findMany({ orderBy: { id: "asc" } });
    return category;
  }
  async findCategoryByID(
    id: number
  ): Promise<{ id: number; descricao: string } | void> {
    const category = await prisma.category.findFirst({ where: { id } });
    return category;
  }
  async saveCategory({
    descricao,
  }: {
    id: number;
    descricao: string;
  }): Promise<{ id: number; descricao: string }> {
    await prisma.category.create({ data: { descricao } });
    const categoryReturn = await prisma.category.findFirst({
      where: { descricao },
    });
    return categoryReturn;
  }

  async updateCategory({
    id,
    descricao,
  }: {
    id: number;
    descricao: string;
  }): Promise<void> {
    await prisma.category.update({ where: { id }, data: { descricao } });
  }
  async deleteCategory(id: number): Promise<void> {
    await prisma.category.delete({ where: { id } });
  }
}
