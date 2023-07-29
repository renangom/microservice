import { Product } from "../../domain/product.entity";
import { ProductRepositoryInterface } from "../../domain/product.repository";
import { prismaClient } from "./prismaclient";



interface ProductProps {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    stockQuantity: number;
    updateName: (name: string) => void;
    updateDescription: (description: string) => void;
    updateStockQuantity: (stockQuantity: number) => void;
    // outros campos e métodos
  }

export class ProductPostgresRepository implements ProductRepositoryInterface {
    async insert(product: Product): Promise<Product> {
        const productCreated = await prismaClient.product.create({
            data: {
                description: product.props.description,
                imageUrl: product.props.imageUrl,
                name: product.props.name,
                price: product.props.price,
                stockQuantity: product.props.stockQuantity
            }
        });

        

        return productCreated;
    }
}