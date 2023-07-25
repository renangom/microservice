import { Product, ProductProps } from "../../domain/product.entity";
import { ProductInMemoryRepository } from "../../infra/db/product-in-memory-repository";
import { CreateProductUseCase } from "../../application/CreateProductUseCase";


export interface Error {
    name: string;
    message: string;
    stack?: string;
}

describe('should test create product use case', () => {
    it('should create a product', async () => {
        const productInput:ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }
        const productInMemoryRepo = new ProductInMemoryRepository();
        const createProductUseCase = new CreateProductUseCase(productInMemoryRepo);
        const product = await createProductUseCase.execute(productInput);

        expect(product).toEqual({
            id: product.id,
            ...productInput
        });
    });

    it('should not create a product with negative price', async () => {
        const productInput:ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: -1.10,
            stockQuantity: 40
        }
        const productInMemoryRepo = new ProductInMemoryRepository();
        const createProductUseCase = new CreateProductUseCase(productInMemoryRepo);

        try {
            await createProductUseCase.execute(productInput);
            fail("Expected exception to be thrown"); // Força a falha se nenhuma exceção for lançada
        } catch (error) {
            const erro: Error = error as Error
            expect(erro.message).toBe("Price can't be negative"); // Verifica a mensagem da exceção
        }
    });

    it('should not create a product with negative stock quantity', async () => {
        const productInput:ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: -40
        }
        const productInMemoryRepo = new ProductInMemoryRepository();
        const createProductUseCase = new CreateProductUseCase(productInMemoryRepo);

        try {
            await createProductUseCase.execute(productInput);
            fail("Expected exception to be thrown"); // Força a falha se nenhuma exceção for lançada
        } catch (error) {
            const erro: Error = error as Error
            expect(erro.message).toBe("Stock can't be negative"); // Verifica a mensagem da exceção
        }
    });
});