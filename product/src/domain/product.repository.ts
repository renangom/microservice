import { Product } from "./product.entity";



export interface ProductRepositoryInterface {
    insert(product:Product): Promise<Product>;
    findAll():Promise<Product[]>;
    findOne(id: string): Promise<Product | undefined>;
    deleteOne(id: string): Promise<void>;
    update(product: Product, id: string): Promise<Product | undefined>;
}