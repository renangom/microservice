import { Request, Response } from "express";
import { DeleteOneProductUseCase } from "../../application/DeleteOneProductUseCase";




export class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteOneProductUseCase) {}

    async handle(req:Request, res:Response): Promise<any> {
        try{
            const id = req.params.id;
            await this.deleteProductUseCase.execute(id);
        }catch(err) {
            res.status(400).json({erro: err});
        }
    }
}