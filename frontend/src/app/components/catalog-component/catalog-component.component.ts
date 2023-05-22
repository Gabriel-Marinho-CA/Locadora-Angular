import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.models';
import { MoviesService } from '../../services/movies.services';

@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.scss'],
})
export class CatalogComponent implements OnInit {
  listMovies: Movie[] = [];

  constructor(private MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.MoviesService.getMovies()
      .subscribe(
        (successData: any) => {
          this.listMovies = successData.data;
        },
        errData => console.log(errData)
      )
  }
}

