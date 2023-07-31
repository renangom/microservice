import { Request, Response } from "express";
import { UpdateProductUseCase } from "../../application/UpdateProductUseCase";





export class UpdateProductController {
    constructor(private updateProductUseCase: UpdateProductUseCase) {}


    async handle(req:Request, res:Response): Promise<any> {
        try{
            const id = req.params.id;
            const product = req.body;

            const productUpdated = await this.updateProductUseCase.execute(product, id);

            res.status(200).json(productUpdated);
        }catch(err){    
            res.status(400).json({error: err});
        }
    }
}