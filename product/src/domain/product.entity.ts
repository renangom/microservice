import crypto from 'crypto';


export type ProductProps = {
    id?: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    stockQuantity: number;
}


export class Product {
    public props: Required<ProductProps>;
    
    constructor( name: string, description: string,
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

    updateName(name: string):void {
        this.name = name;
    }

    updateDescription(description: string): void {
        this.description = description;
    }

    updateStockQuantity(stockQuantity:number): void {
        this.stockQuantity = stockQuantity;
    }

    updatePrice(price: number): void {
        this.price = price;
    }

    updateImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

    private get name() {
        return this.props.name;
    }

    private set name(name: string) {
        this.props.name = name;
    }

    private get description() {
        return this.props.description; 
    }

    private set description(description: string) {
        this.props.description = description;
    }

    private get imageUrl() {
        return this.props.imageUrl;
    }

    private set imageUrl(imageUrl: string) {
        this.props.imageUrl = imageUrl;
    }

    private get price() {
        return this.props.price;
    }

    private set price(price: number) {
        this.props.price = price;
    }

    private get stockQuantity() {
        return this.props.stockQuantity;
    }

    private set stockQuantity(stockQuantity: number) {
        this.props.stockQuantity = stockQuantity;
    }

}