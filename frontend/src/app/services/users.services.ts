import { Injectable, OnInit } from "@angular/core";
// import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/users.models";


@Injectable()
export class UserService {

    private header = {
        "Content-Type": "application/json",
        Accept: "application/json",
    }

    constructor(private http: HttpClient) { };

    addUser(user: User): Observable<User> {
        const reqBody = JSON.stringify(user);
        return this.http.post<User>("http://localhost:4200/api/signup", reqBody,
            {
                headers: this.header
            }
        )

    }
    getUser(user: User): Observable<User> {
        const reqBody = JSON.stringify(user);
        return this.http.post<User>("http://localhost:4200/api/login", reqBody,
            {
                headers: this.header
            }
        )
    }
    getUserProfile(id: String): Observable<String> {
        return this.http.get<String>(`http://localhost:4200/api/profile/${id}`)
    }

    deleteMovieInUserProfile(userUpdateWithMovie: any): Observable<String> {
        return this.http.patch<String>(`http://localhost:4200/api/profile/${userUpdateWithMovie.userLoggedId}`, userUpdateWithMovie, {
            headers: this.header
        })
    }

} 