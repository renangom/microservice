import { Product } from "../domain/product.entity";
import { ProductRepositoryInterface } from "../domain/product.repository";
import { ProductDTO } from "../domain/productDTO";




export class FindAllProductsUseCase {
    constructor(private productRepo:ProductRepositoryInterface) {}


    async execute():Promise<ProductDTO[]> {
        const products = await this.productRepo.findAll();

        return products;
    }
}