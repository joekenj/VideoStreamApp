import { Component, Input, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'my-video-detail',
  template: `
  <ul class='videos'>
  <li *ngFor="let video of videos">
    <a href="#!/video/{{video.id}}" class="thumb">
			  <img src="{{video.imageUrl}}" alt="{{video.name}}" />
			</a>
			<a href="#!/video/{{video.id}}">{{video.name}}</a>
			<p>{{video.description}}</p>
    </li>
    </ul>
    `,
  styles: [`
  body {
  padding-top: 20px;
}

.videos {
  list-style: none;
}

.videos li {
  clear: both;
  height: 115px;
  padding-top: 15px;
  border-style: groove;
}

.thumb {
  float: left;
  height: 100px;
  margin: -0.5em 1em 1.5em 0;
  padding-bottom: 1em;
  width: 100px;
}
.thumb img {
  width: 100px;
  margin-left: 10px;
}
  `],
  providers: [VideoService]
})
export class VideoDetailComponent {
  videos: Video[];
  constructor(private videoService: VideoService) { }

  getVideos(): void {
     this.videoService.getVideos().then(videos => this.videos = videos);
  }

   ngOnInit(): void {
    this.getVideos();
  }
}
