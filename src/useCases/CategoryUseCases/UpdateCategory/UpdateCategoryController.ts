import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export class UpdateCategoryController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { descricao } = request.body;
    const updateCategory = await this.updateCategoryUseCase.execute(
      { descricao },
      { id: Number(id) }
    );
    return response.status(200).json(updateCategory);
  }
}
