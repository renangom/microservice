import { Product } from "../domain/product.entity";
import { ProductRepositoryInterface } from "../domain/product.repository";




export class CreateProductUseCase {
    constructor(private productRepo:ProductRepositoryInterface) {}

    async execute(input: CreateProductInput): Promise<CreateProductOutput> {
        const product = new Product(input.name, input.description, input.imageUrl, input.price,
            input.stockQuantity);

        this.productRepo.insert(product);

        return product.toJson();
    }
} 

type CreateProductInput = {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stockQuantity: number;
}

type CreateProductOutput = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stockQuantity: number;
}