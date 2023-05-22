export class User {
    name: string;
    email: string;
    password: string;
    _id?: string;
    movies?: string[];

    constructor(name: string, email: string, password: string, _id?: string, movies?: string[]) {
        this.name = name;
        this.email = email;
        this.password = password;
        this._id = _id;
        this.movies = movies;
    }
}