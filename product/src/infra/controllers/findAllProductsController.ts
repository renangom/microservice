import { Request, Response } from "express";
import { FindAllProductsUseCase } from "../../application/FindAllProductsUseCase";
import { ProductDTO } from "../../domain/productDTO";
import { prismaClient } from "../db/prismaclient";



export class FindAllProductsController {
    constructor(private findAllProductsUseCase: FindAllProductsUseCase) {}

    async handle(req:Request, res:Response): Promise<any> {
        
        try{
            const products = await this.findAllProductsUseCase.execute();

            if(products.length === 0) {
                res.status(400).json({error: "Products not found"});
            }

            res.status(200).json(products);
        }catch(err) {
            res.status(500).json({error: err});
        }
    }
}