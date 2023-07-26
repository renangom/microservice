import { Product } from "../domain/product.entity";
import { ProductRepositoryInterface } from "../domain/product.repository";





export class UpdateProductUseCase {
    constructor (private productRepo:ProductRepositoryInterface) {}

    async execute(product: Product, id: string): Promise<Product | undefined> {
        const productFound = await this.productRepo.findOne(id);
        if(!productFound) {
            throw new Error('Product not found');
        }

        const productUpdated = await this.productRepo.update(product, id);

        return productUpdated;
    }
}