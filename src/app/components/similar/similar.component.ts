import { Component, Input } from '@angular/core';
import { SimilarModel, SimilarResponse } from 'src/app/models/similarModel';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent {

  id : number = 200;
  similarResponse: SimilarResponse | null = null;
  similarMovies : SimilarModel[] | undefined = [];

  constructor(private movieService: MovieService){

  }

  ngOnInit(){


    this.movieService.getSimilarMovies(200).subscribe((response:SimilarResponse) => 
    {

      this.similarMovies = response.results;
      console.log(this.similarMovies);
    });
  }

}
