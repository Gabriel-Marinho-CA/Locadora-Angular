import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.models';
import { MoviesService } from "../../../services/movies.services";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/users.models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() moviesContent: Movie = new Movie("", "", 0, "");

  userLogged: Boolean = false;
  formAddMoviesToUser!: FormGroup;
  movie_id!: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    if (localStorage.getItem('User Logged')) {
      this.userLogged = true;
    }

    this.formAddMoviesToUser = new FormGroup({
      movieId: new FormControl('')
    })

    this.movie_id = this.moviesContent._id;
  }

  createCart(): void {
    const movieIdCart = this.formAddMoviesToUser.value.movieId;

    window.location.href="/cart/"+movieIdCart;
  }

}