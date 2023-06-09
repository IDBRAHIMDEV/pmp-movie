import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {

  constructor(private senitizer: DomSanitizer) {}

  safeUrl(key: string) {
    return this.senitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }

  @Input() key: string = ""
  @Input() title: string = ""
}
