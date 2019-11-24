import { Component, OnInit } from '@angular/core';

import { TMDBApiService } from '../tmdbapi.service';
import { promise } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [TMDBApiService]
})
export class MoviesComponent implements OnInit {

  public movies: [];
  public imgURL = 'https://image.tmdb.org/t/p/w200/';

  constructor(
    private _tmdbApiService: TMDBApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this._tmdbApiService.getPopularMovies().then(data => this.movies = data.results)
    console.log('this.movies', this.movies);
    setTimeout(() => {
      console.log('this.movies', this.movies);
    }, 4000);
  }

  goMovie(id: string) {
    console.log(id);
    this.router.navigate(['/movie', id]);
  }
}
