import { Request, Response } from "express";
import { FindOneProductUseCase } from "../../application/FindOneProductUseCase";
import { prismaClient } from "../db/prismaclient";




export class FindOneProductController {
    constructor(private findOneProductUseCase:FindOneProductUseCase) {}

    async handle(req: Request, res: Response): Promise<any> {
        try{
            const id = req.params.id;
            const product = await this.findOneProductUseCase.execute(id);

            return res.status(200).json(product);
        }catch(err) {
            res.status(500).json({error: err});
        }
    }
}