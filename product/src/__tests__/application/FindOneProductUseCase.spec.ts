import { CreateProductUseCase } from "../../application/CreateProductUseCase";
import { ProductProps } from "../../domain/product.entity";
import { ProductInMemoryRepository } from "../../infra/db/product-in-memory-repository";
import {FindOneProductUseCase} from '../../application/FindOneProductUseCase';
import { Error } from "./CreateProductUseCase.spec";


describe("test find one product use case", () => {
    it('should return a message error', () => {
        const productInMemoryRepo = new ProductInMemoryRepository();
        const findOneProductUseCase = new FindOneProductUseCase(productInMemoryRepo);

        try{
            const product = findOneProductUseCase.execute("1");
        }catch(error) {
            const erro:Error = error as Error;
            expect(erro.message).toBe('Product not found!');
        }
    })
    it("should find a product", async () => {
        const productInMemoryRepo = new ProductInMemoryRepository();
        const createProductUseCase = new CreateProductUseCase(productInMemoryRepo);
        const findOneProductUseCase = new FindOneProductUseCase(productInMemoryRepo);
        const product1:ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        };

        const product = await createProductUseCase.execute(product1);
        const productFound = await findOneProductUseCase.execute(product.id);
        expect(product).toEqual(
            {
               
                ...productFound.props
               
            }
        )
    });
})