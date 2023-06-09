import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "229f6597d21a22dd691c3953ad23357c"
  

  constructor(private http: HttpClient) { }

  getMovies(option: string, count: number, page: number = 1) {
    return this.http.get(`${this.baseUrl}/movie/${option}?page=${page}&api_key=${this.apiKey}`)
               .pipe(switchMap((resp: any) => of(resp.results.splice(0, count))))
  }

  searchMovies(query: string, page: number = 1) {
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`)
  }


  getSimilarMovies(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
  }

  getCreditsMovie(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
  }

  getVideosMovie(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
  }

  getMovie(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

 

}
