import { Request, Response, response } from "express";
import { DetailCategoryUseCases } from "./DetailCategoryUseCase";

export class DetailCategoryController {
  constructor(private detailCategoryUseCase: DetailCategoryUseCases) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const category = await this.detailCategoryUseCase.execute(Number(id));
    return response.status(200).json(category);
  }
}
