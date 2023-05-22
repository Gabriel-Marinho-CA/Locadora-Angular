import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.models';
import { MoviesService } from "../../services/movies.services";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private moviesService: MoviesService) { }

  moviesCart: Movie = new Movie("", "", 0, "");
  public quantityValue = 1;
  totalSingleMovie!: number;
  movie_id!: any;
  formAddMoviesToUser!: FormGroup;

  public increment(): void {
    this.quantityValue++;
  }
  public decrement(): void {
    if (this.quantityValue > 1) {
      this.quantityValue--;
    } else {
      this.quantityValue = 1;
    }
  }

  ngOnInit(): void {

    const cartId = window.location.pathname.replace("/cart/", "");


    this.formAddMoviesToUser = new FormGroup({
      movieId: new FormControl('')
    })

    this.moviesService.createCartWithMovie(cartId).subscribe(
      (successData: any) => {
        this.moviesCart = successData;
        this.totalSingleMovie = successData.price;
        this.movie_id = successData._id;
      },
      errData => console.log(errData),
    );
  }

  buyMovie(): void {

    const userLoggedId: any = localStorage.getItem('User Logged')?.split(',')[1];
    const movieToAppend: string = this.formAddMoviesToUser.value.movieId;

    const userUpdateWithMovie = {
      userLoggedId,
      movieToAppend
    }

    this.moviesService.addMovieToUser(userUpdateWithMovie).subscribe(
      successData => {
        setTimeout(() => {
          alert("Obrigado pela compra :) \nO filme já foi adicionado a lista no seu perfil");
          window.location.href = "/"
        }, 1000)
      },
      errData => console.log(errData),
    );

  }

  removeMovieToCart(): void {
    window.location.href = "/"
  }

}
