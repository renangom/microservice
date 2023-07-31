import { Product } from "../domain/product.entity";
import { ProductRepositoryInterface } from "../domain/product.repository";
import { ProductDTO } from "../domain/productDTO";





export class FindOneProductUseCase {
    constructor(private productRepo: ProductRepositoryInterface) {}

    async execute(id: string): Promise<ProductDTO | undefined> {
        const product = this.productRepo.findOne(id);

        if(!product) {
            throw new Error('Product not found');
        }

        return product;
    }
}