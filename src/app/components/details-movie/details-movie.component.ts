import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css'],
})
export class DetailsMovieComponent implements OnInit {
  constructor(
    private movieservice: MovieService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params: any) =>
      this.retreiveMovies(params.id)
    );
  }
  /*   onemovie: Movie = {
    id: 0,
    originalTitle: '',
    overview: '',
    backdropPath: '',
    popularity: '',
    voteCount: 0,
    originalLanguage: '',
  }; */
  onemovie: Movie | null = null;
  retreiveMovies(id: number) {
    console.log('hoda');
    this.movieservice
      .getMovie(id)
      .subscribe((movie) => (this.onemovie = movie));
  }
}
