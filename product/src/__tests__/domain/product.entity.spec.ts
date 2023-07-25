import { Product, ProductProps } from "../../domain/product.entity";


describe('testing product entity', () => {
    it("Should create a product with id", () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }

        const product = new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity);

        expect(product.props).toEqual({
            id: product.props.id,
            ...productProps
        })
    });

    it('should change product name', () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }

        const product = new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity);
        product.updateName('Maçã Grauda');
        expect(product.props).toEqual({
            id: product.props.id,
            ...productProps,
            name: "Maçã Grauda"
        });
    });

    it('should not create a product with negative stock', () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: -40
        }

        expect(() => new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity)).toThrowError("Stock can't be negative")
    });

    it('should not create a product with negative price', () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: -1.10,
            stockQuantity: 40
        }

        expect(() => new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity)).toThrowError("Price can't be negative")
    });

    it("should update product description", () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }
        const product = new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity)
        
        product.updateDescription("Uma deliciosa fruta cítrica e vermelha, tamanho graudo");
        expect(product.props).toEqual({
            id: product.props.id,
            ...productProps,
            description:"Uma deliciosa fruta cítrica e vermelha, tamanho graudo"
        });
    });

    it("should update product stock", () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }
        const product = new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity)
        
        product.updateStockQuantity(30);
        expect(product.props).toEqual({
            id: product.props.id,
            ...productProps,
            stockQuantity:30
        });
    });

    it("should update product price", () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }
        const product = new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity)
        
        product.updatePrice(1.20);
        expect(product.props).toEqual({
            id: product.props.id,
            ...productProps,
            price:1.20
        });
    });

    it("should update image url", () => {
        const productProps: ProductProps = {
            name: "Maçã",
            description: "Uma deliciona fruta cítrica e vermelha",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ifrutus.com.br%2Fproduto%2Fmaca-red-argentina-unidade-70942&psig=AOvVaw0ennLhOik-Thl1iD9oXUXs&ust=1690311357247000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDoptKCqIADFQAAAAAdAAAAABAE",
            price: 1.10,
            stockQuantity: 40
        }
        const product = new Product(productProps.name, productProps.description, productProps.imageUrl,
            productProps.price, productProps.stockQuantity)
        
        product.updateImageUrl("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infoescola.com%2Ffrutas%2Fbanana%2F&psig=AOvVaw37RwyAqlLNpfiFhqUuIKRG&ust=1690312909122000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOj8q7aIqIADFQAAAAAdAAAAABAI");
        expect(product.props).toEqual({
            id: product.props.id,
            ...productProps,
            imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infoescola.com%2Ffrutas%2Fbanana%2F&psig=AOvVaw37RwyAqlLNpfiFhqUuIKRG&ust=1690312909122000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOj8q7aIqIADFQAAAAAdAAAAABAI"
        });
    })
});