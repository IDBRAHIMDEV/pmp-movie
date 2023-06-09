import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    /* this.movieService.getMovies.subscribe((response: any) => {
      this.movies = response;
    });*/
    this.getPopularMovies();
    console.log(this.popularMovies);
  }

  popularMovies: Movie[] = [];

  getPopularMovies(page: number = 30) {
    this.movieService.getMovies('popular', page).subscribe((data: any) => {
      console.log(data);
      this.popularMovies = data;
      // console.log('popular', results)
    });
  }
}
