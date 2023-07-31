import { Product } from "../../domain/product.entity";
import { ProductRepositoryInterface } from "../../domain/product.repository";
import { ProductDTO } from "../../domain/productDTO";
import { prismaClient } from "./prismaclient";



export class ProductPostgresRepository implements ProductRepositoryInterface {
    async insert(product: Product): Promise<ProductDTO> {
        const createdProduct = await prismaClient.product.create({
            data: {
                description: product.description,
                imageUrl: product.imageUrl,
                name: product.name,
                price: product.price,
                stockQuantity: product.stockQuantity
            }
        });

        const newProduct:ProductDTO = { 
            id: createdProduct.id,
            description: createdProduct.description,
            imageUrl: createdProduct.imageUrl,
            name: createdProduct.name,
            price: createdProduct.price,
            stockQuantity: createdProduct.stockQuantity
        }
        return newProduct;
    }

    async findOne(id: string): Promise<ProductDTO | undefined> {
        const productFounded = await prismaClient.product.findUnique({where: {
            id
        }});

        if(!productFounded) {
            throw new Error('Product not found!');
        }

        const newProduct:ProductDTO = { 
            id: productFounded.id,
            description: productFounded.description,
            imageUrl: productFounded.imageUrl,
            name: productFounded.name,
            price: productFounded.price,
            stockQuantity: productFounded.stockQuantity
        }

        return newProduct;
    }

    async findAll(): Promise<ProductDTO[]> {
        const product = await prismaClient.product.findMany();

        return product;
    }

    async deleteOne(id: string): Promise<void> {
        const product = await prismaClient.product.findUnique({
            where: {
                id
            }
        });

        if(!product) {
            throw new Error('Product not found');
        }

        await prismaClient.product.delete({
            where: {id}
        });
    }

    async update(product: Product, id: string): Promise<ProductDTO | undefined> {
        const productFound = await prismaClient.product.findUnique({
            where: {id}
        });

        if(!productFound) {
            throw new Error('Product not found');
        }

        const productUpdated = await prismaClient.product.update({where: {id}, data: product});

        return productUpdated;
    }
}