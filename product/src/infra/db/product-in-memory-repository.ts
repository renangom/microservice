import { Product } from "../../domain/product.entity";
import { ProductRepositoryInterface } from "../../domain/product.repository";
import { ProductDTO } from "../../domain/productDTO";



export class ProductInMemoryRepository implements ProductRepositoryInterface {
    products: Product[] = [];

    async insert(product: Product): Promise<Product> {
        this.products.push(product);

        return product;
    }

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async findOne(id: string): Promise<Product | undefined> {
        const product = this.products.find(product => product.id === id);
        if(product) {
            return product;
        }
    }

    async deleteOne(id: string): Promise<void> {
        this.products = this.products.filter(product => product.id !== id);
    }

    async update(product: Product, id: string): Promise<ProductDTO | undefined> {
        const productIndex = this.products.findIndex(productArr => productArr.id === id);

        if(!productIndex) {
            throw new Error('Product not found');
        }

        this.products[productIndex] = {
            id: id,
            name: product.name,
            description: product.description,
            imageUrl: product.imageUrl,
            price: product.price,
            stockQuantity: product.stockQuantity
        }

        const productFound = this.products.find(productArr => productArr.id === id);

        return productFound;
    }
}