import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
<<<<<<< HEAD
import { Movie } from '../models/movie';
=======
import { Response } from 'src/app/models/response';

>>>>>>> c5421c30765a1ce926fbc0623bc6e7977e55d43f

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '04e41cbd8d20d6e838ddc39124a4c467';

<<<<<<< HEAD
  constructor(private http: HttpClient) {}
=======
  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "6cc23517a82af45bd0eaaf70a5e0374e"
  

  constructor(private http: HttpClient) { }
>>>>>>> c5421c30765a1ce926fbc0623bc6e7977e55d43f

  getMovies(option: string, count: number, page: number = 1) {
    return this.http
      .get(
        `${this.baseUrl}/movie/${option}?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(switchMap((resp: any) => of(resp.results.splice(0, count))));
  }

  searchMovies(query: string, page: number = 1) {
    return this.http.get(
      `${this.baseUrl}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`
    );
  }

  getSimilarMovies(id: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
    );
  }

<<<<<<< HEAD
  getCreditsMovie(id: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
=======
  getCreditsMovie(id: number) : Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
>>>>>>> c5421c30765a1ce926fbc0623bc6e7977e55d43f
  }

  getVideosMovie(id: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getMovie(id: number) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
    /*  return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
     */
  }
}
