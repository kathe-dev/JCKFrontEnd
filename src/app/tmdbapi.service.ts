import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TMDBApiService {

  private baseURL = 'https://api.themoviedb.org/3';
  private apiKey = '10f0d436dc09689ac04c3027a3d37a37';
  private language = 'es-US';

  constructor( private _http: HttpClient) { }

  getFromTMDB(search: string): Promise<any> {
    let url = `${this.baseURL}/${search}?api_key=${this.apiKey}&language=${this.language}`;
    console.log('url', url);
    return this._http.get(url).toPromise();
  }

  getPopularMovies(): Promise<any> {
    return this.getFromTMDB('movie/popular');
  }

  getMovieDetails( id: string ): Promise<any> {
    return this.getFromTMDB(`movie/${id}`);
  }

  getMovieCredits( id: string ): Promise<any> {
    return this.getFromTMDB(`movie/${id}/credits`);
  }

  getMovieSimilar( id: string ): Promise<any> {
    return  this.getFromTMDB(`movie/${id}/similar`);
  }

  getPeoplePopular(): Promise<any> {
    return this.getFromTMDB(`person/popular`);
  }

  getDetailPeople( id: string ): Promise<any> {
    return this.getFromTMDB(`person/${id}`);
  }

  getMovieGenres(): Promise<any> {
    return this.getFromTMDB(`genre/movie/list?api_key=${this.apiKey}&language=en-US`);
  }
}
