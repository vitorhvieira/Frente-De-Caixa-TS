import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteCategoryUseCase.execute(Number(id));
    return response.status(200).json();
  }
}
