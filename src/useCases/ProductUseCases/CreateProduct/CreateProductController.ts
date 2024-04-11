import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCases";

export class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase){

    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {descricao, valor, categoria_id, quantidade_estoque, produto_img} = request.body
        await this.createProductUseCase.execute({descricao, valor, categoria_id, quantidade_estoque, produto_img})

        return response.status(200).json()
    }
}