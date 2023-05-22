import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../../../services/users.services";

@Component({
  selector: 'app-movie-card-user-component',
  templateUrl: './movie-card-component.component.html',
  styleUrls: ['./movie-card-component.component.scss']
})
export class MovieCardUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  formDeleteMovie!: FormGroup;
  movie_id!: any;
  @Input() moviesContent: any;


  ngOnInit(): void {
    this.formDeleteMovie = new FormGroup({
      movieId: new FormControl('')
    })
    this.movie_id = this.moviesContent._id;
  }
  onSubmit(): void {
    const userLoggedId: any = localStorage.getItem('User Logged')?.split(',')[1];
    const movieToRemove: any = this.formDeleteMovie.value.movieId;

    const userUpdateWithMovie = {
      userLoggedId,
      movieToRemove
    }

    this.userService.deleteMovieInUserProfile(userUpdateWithMovie).subscribe(
      (successData) => {
        alert("Filme removido da sua lista")
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      },
      (errData) => console.log(errData)
    )
  }

}
