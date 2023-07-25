import { Product } from "../domain/product.entity";
import { ProductRepositoryInterface } from "../domain/product.repository";




export class FindAllProductsUseCase {
    constructor(private productRepo:ProductRepositoryInterface) {}


    async execute():Promise<Product[]> {
        const products = await this.productRepo.findAll();

        return products;
    }
}