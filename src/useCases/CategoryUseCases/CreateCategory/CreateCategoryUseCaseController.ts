import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryUseCaseController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { descricao } = request.body;
    const category = await this.createCategoryUseCase.execute({ descricao });
    return response.status(201).json(category);
  }
}
