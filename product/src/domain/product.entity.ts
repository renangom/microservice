import crypto from 'crypto';


export type ProductProps = {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    stockQuantity: number;
}


export class Product {
    public props: Required<ProductProps>;
    
    private constructor( name: string, description: string,
         imageUrl: string,  price: number,  stockQuantity: number, productId?:string) {
            if(stockQuantity < 0) {
                throw new Error("Stock can't be negative");
            }

            if(price < 0) {
                throw new Error("Price can't be negative");
            }

            this.props = {
                id : productId || crypto.randomUUID(),
                description,
                name,
                imageUrl,
                price,
                stockQuantity
            }
    }

    get name() {
        return this.props.name;
    }

    set name(name: string) {
        this.props.name
    }
}