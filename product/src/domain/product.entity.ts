import crypto from 'crypto';


export class Product {
    private _id: string;
    private _name: string;
    private _description: string;
    private _imageUrl: string;
    private _price: number;
    private _stockQuantity: number;

    constructor(
        name: string,
        description: string,
        imageUrl: string,
        price: number,
        stockQuantity: number,
        productId?: string
    ) {
        if (stockQuantity < 0) {
            throw new Error("Stock can't be negative");
        }

        if (price < 0) {
            throw new Error("Price can't be negative");
        }

        this._id = productId || crypto.randomUUID();
        this._description = description;
        this._name = name;
        this._imageUrl = imageUrl;
        this._price = price;
        this._stockQuantity = stockQuantity;
    }

    updateName(name: string): void {
        this._name = name;
    }

    updateDescription(description: string): void {
        this._description = description;
    }

    updateStockQuantity(stockQuantity: number): void {
        this._stockQuantity = stockQuantity;
    }

    updatePrice(price: number): void {
        this._price = price;
    }

    updateImageUrl(imageUrl: string): void {
        this._imageUrl = imageUrl;
    }

    toJson() {
        return {
            id: this._id,
            description: this._description,
            name: this._name,
            imageUrl: this._imageUrl,
            price: this._price,
            stockQuantity: this._stockQuantity
        }
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get description() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get imageUrl() {
        return this._imageUrl;
    }

    public set imageUrl(imageUrl: string) {
        this._imageUrl = imageUrl;
    }

    public get price() {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get stockQuantity() {
        return this._stockQuantity;
    }

    public set stockQuantity(stockQuantity: number) {
        this._stockQuantity = stockQuantity;
    }

    public get id() {
        return this._id;
    }
}
