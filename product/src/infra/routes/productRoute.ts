import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { CreateProductUseCase } from "../../application/CreateProductUseCase";
import { ProductInMemoryRepository } from "../db/product-in-memory-repository";
import { FindAllProductsUseCase } from "../../application/FindAllProductsUseCase";
import { ProductPostgresRepository } from "../db/product-postgres-repository";
import { FindAllProductsController } from "../controllers/findAllProductsController";
import { FindOneProductUseCase } from "../../application/FindOneProductUseCase";
import { FindOneProductController } from "../controllers/FindOneProductController";
import { DeleteOneProductUseCase } from "../../application/DeleteOneProductUseCase";
import { DeleteProductController } from "../controllers/DeleteProductController";
import { UpdateProductUseCase } from "../../application/UpdateProductUseCase";
import { UpdateProductController } from "../controllers/UpdateProductController";



export const productRoute = Router();

const productRepositoryInterface = new ProductPostgresRepository();
const createProductUseCase = new CreateProductUseCase(productRepositoryInterface);
const createProductController = new CreateProductController(createProductUseCase);
const findAllProductsUseCase = new FindAllProductsUseCase(productRepositoryInterface);
const findAllProductsController = new FindAllProductsController(findAllProductsUseCase);
const findOneProductUseCase = new FindOneProductUseCase(productRepositoryInterface);
const findOneProductController = new FindOneProductController(findOneProductUseCase);
const deleteProductUseCase = new DeleteOneProductUseCase(productRepositoryInterface);
const deleteProductController = new DeleteProductController(deleteProductUseCase);
const updateProductUseCase = new UpdateProductUseCase(productRepositoryInterface);
const updateProductController = new UpdateProductController(updateProductUseCase);

productRoute.post('/product', (req, res) => createProductController.handle(req,res));
productRoute.get('/products', (req,res) => findAllProductsController.handle(req,res));
productRoute.get('/product/:id', (req,res) => findOneProductController.handle(req,res));
productRoute.delete('/product/:id', (req,res) => deleteProductController.handle(req,res));
productRoute.put('/product/:id', (req,res) => updateProductController.handle(req,res));