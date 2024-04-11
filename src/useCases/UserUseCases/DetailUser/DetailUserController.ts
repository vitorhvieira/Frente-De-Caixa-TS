import { Request, Response } from "express";
import { DetailUserUseCase } from "./DeitalUserUseCase";

export class DetailUserController {
  constructor(private detailUserUseCase: DetailUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const user = await this.detailUserUseCase.execute(id);
    return response.status(200).json(user);
  }
}
