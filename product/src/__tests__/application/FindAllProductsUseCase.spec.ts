import { CreateProductUseCase } from "../../application/CreateProductUseCase";
import { FindAllProductsUseCase } from "../../application/FindAllProductsUseCase";
import { ProductInMemoryRepository } from "../../infra/db/product-in-memory-repository";
import { Error } from "./CreateProductUseCase.spec";

describe("Test find all products use case", () => {
    const productInMemoryRepo = new ProductInMemoryRepository();
    const createProductUseCase = new CreateProductUseCase(productInMemoryRepo);
    const findAllProductsUseCase = new FindAllProductsUseCase(productInMemoryRepo);
    const product1 = {
        name: "Maçã",
        description: "Uma deliciona fruta cítrica e vermelha",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
        price: 1.10,
        stockQuantity: 40
    };

    const product2 = {
        name: "Banana",
        description: "Uma deliciona fruta cítrica e vermelha",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
        price: 1.10,
        stockQuantity: 40
    }

    it('should return a message error for findAllProductsUseCase method', async () => {
        try{
            const products = await findAllProductsUseCase.execute();
        } catch(error) {
            const erro: Error = error as Error;
            expect(erro.message).toBe('Products not found!');
        }
    });
    it("should list all product", async () => {
        const produto1 =   await createProductUseCase.execute(product1);
        const produto2 =   await createProductUseCase.execute(product2);
        const products = await findAllProductsUseCase.execute();

        expect(products).toEqual([
            {
                
                    _id: produto1.id,
                    _description: JSON.parse(JSON.stringify(produto1.description)),
                    _imageUrl: JSON.parse(JSON.stringify(produto1.imageUrl)),
                    _name: JSON.parse(JSON.stringify(produto1.name)),
                    _price: JSON.parse(JSON.stringify(produto1.price)),
                    _stockQuantity: JSON.parse(JSON.stringify(produto1.stockQuantity))
                
            },
            {
                
                    _id: produto2.id,
                    _description: JSON.parse(JSON.stringify(produto2.description)),
                    _imageUrl: JSON.parse(JSON.stringify(produto2.imageUrl)),
                    _name: JSON.parse(JSON.stringify(produto2.name)),
                    _price: JSON.parse(JSON.stringify(produto2.price)),
                    _stockQuantity: JSON.parse(JSON.stringify(produto2.stockQuantity))
                
            }
        ]);
    });

})