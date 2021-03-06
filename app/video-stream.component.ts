import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Video } from './video';
import { VideoService } from './video.service';

@Component({
    moduleId: module.id,
  selector: 'stream-video',
  template: `
  <h2> Video player </h2>
  <div *ngIf="video">
    <video id="video-pl" class="video-js vjs-default-skin vjs-big-play-centered"
  controls preload="auto" width="640" height="264"
  poster="{{video.imageUrl}}"
  data-setup='{"example_option":true}'>
 <source src="{{video.videoUrl}}" type="video/mp4" />
 <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
</video>
<br/>
     <p> Video name: {{video.name}} </p>
     <p> Video description: {{video.description}} </p>
     <br/>
<a   [routerLink]="['/videos']" class="thumb"> <button>All videos</button> </a>
<a  *ngIf="video.id<5" [routerLink]="['/video', video.id+1]" class="thumb"> <button>Next video</button> </a>
<a  *ngIf="video.id>1" [routerLink]="['/video', video.id-1]" class="thumb"> <button>Previous video</button> </a>
  </div>
     `,
     styles: [`#video-pl {
       width: 500px;
       height: 270px;
     }`]
})

export class VideoStreamComponent implements OnInit{
  video: Video;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(video => this.video = video);
  }
}