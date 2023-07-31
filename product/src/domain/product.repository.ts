import { Product } from "./product.entity";
import { ProductDTO } from "./productDTO";



export interface ProductRepositoryInterface {
    insert(product:Product): Promise<ProductDTO>;
    findAll():Promise<ProductDTO[]>;
    findOne(id: string): Promise<ProductDTO | undefined>;
    deleteOne(id: string): Promise<void>;
    update(product: Product, id: string): Promise<ProductDTO | undefined>;
}