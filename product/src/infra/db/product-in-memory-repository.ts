import { Product } from "../../domain/product.entity";
import { ProductRepositoryInterface } from "../../domain/product.repository";



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
        const product = this.products.find(product => product.props.id === id);
        if(product) {
            return product;
        }
    }

    async deleteOne(id: string): Promise<void> {
        this.products = this.products.filter(product => product.props.id !== id);
    }

    async update(product: Product, id: string): Promise<Product | undefined> {
        const productIndex = this.products.findIndex(productArr => productArr.props.id === id);

        if(!productIndex) {
            throw new Error('Product not found');
        }

        this.products[productIndex].props = {
            id,
            name: product.props.name,
            description: product.props.description,
            imageUrl: product.props.imageUrl,
            price: product.props.price,
            stockQuantity: product.props.stockQuantity
        }

        const productFound = this.products.find(productArr => productArr.props.id === id);

        return productFound;
    }
}