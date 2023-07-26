import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/CreateProductUseCase";
import * as Joi from 'joi'



export class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) {}

    async handle(req:Request, res:Response):Promise<Response<any, Record<string, any>>> {
        const schema = Joi.object({
            name: Joi.string().required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            imageUrl: Joi.string().required(),
            stockQuantity: Joi.number().required()
        });

        const {error, value} = schema.validate(req.body);

        if(error) {
            return res.status(400).json({error: 'Invalid request body'});
        }

        try{
            const product = await this.createProductUseCase.execute(value);
            return res.status(201).json(product);
        }catch(err) {
            return res.status(500).json({error: 'Failed to create product'});
        }
    }
}

interface CreateProductRequest {
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    stockQuantity: number
}