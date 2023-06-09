import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Response } from 'src/app/models/response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors : Actor[] | null = null;
  baseImageUrl = "https://image.tmdb.org/t/p/w300"

  constructor(private movieService: MovieService,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      this.getActors(params.id);
    })

    
  }

getActors(id : number){
   this.movieService.getCreditsMovie(id).subscribe((response)=> {
    this.actors = response.cast;
  })
}


resolveImage(avatar: string) {
  if(avatar) {
    return `${this.baseImageUrl}${avatar}`
  }
  return ''
}

}
