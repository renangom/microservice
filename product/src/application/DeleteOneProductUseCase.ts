import { ProductRepositoryInterface } from "../domain/product.repository";




export class DeleteOneProductUseCase { 
    constructor(private productRepo: ProductRepositoryInterface) {}

    async execute(id: string): Promise<void> {
        const product = await this.productRepo.findOne(id);
        await this.productRepo.deleteOne(id);
    }
}