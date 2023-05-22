export class Movie {
    image: string;
    title: string;
    price: number;
    description: string;
    _id?: string;

    constructor(image: string, title: string, price: number, description: string, _id?: string) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.description = description;
        this._id = _id
    }
}