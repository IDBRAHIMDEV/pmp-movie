import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.css']
})
export class VideosPageComponent {


  videos: Video[] = []
  ngOnInit(): void {
      this.route.parent?.params.subscribe(({id}: any) => {
        this.getVideosByMovie(id)
      })
  }

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  getVideosByMovie(id: number) {
    this.movieService.getVideosMovie(id).subscribe(({results}: any) => {
      this.videos = results
    })
  }

}
