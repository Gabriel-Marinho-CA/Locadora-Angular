import { Injectable } from "@angular/core";
// import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "src/app/models/movies.models";
import { User } from "src/app/models/users.models";

@Injectable() 
export class MoviesService {
    constructor(private http: HttpClient) { };

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>("http://localhost:4200/api/movies")
    }

    addMovieToUser(userUpdateWithMovie: any): Observable<User> {
        return this.http.patch<User>(`http://localhost:4200/api/cart/${userUpdateWithMovie.idUser}`, userUpdateWithMovie, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
    }
    createCartWithMovie(idMovieCart: String): Observable<string> {
        return this.http.get<string>(`http://localhost:4200/api/cart/${idMovieCart}`);
    }

} 