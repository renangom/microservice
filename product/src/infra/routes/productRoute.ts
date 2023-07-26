import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { CreateProductUseCase } from "../../application/CreateProductUseCase";
import { ProductInMemoryRepository } from "../db/product-in-memory-repository";



export const productRoute = Router();

const productRepositoryInterface = new ProductInMemoryRepository();
const createProductUseCase = new CreateProductUseCase(productRepositoryInterface);
const createProductController = new CreateProductController(createProductUseCase);

productRoute.post('/product', (req, res) => createProductController.handle(req,res));