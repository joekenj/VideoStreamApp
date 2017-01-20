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
  <h1> Video is streamed here </h1>
  <div *ngIf="video">
    <p> {{video.id}} </p>
    <p> {{video.name}} </p>
    <p> {{video.description}} </p>
    <p> {{video.videoUrl}} </p>
    <video id="example_video_1" class="video-js vjs-default-skin vjs-big-play-centered"
  controls preload="auto" width="640" height="264"
  poster="{{video.imageUrl}}"
  data-setup='{"example_option":true}'>
 <source src="{{video.videoUrl}}" type="video/mp4" />
 <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
</video>
  </div>
     `
})

export class VideoStreamComponent implements OnInit{
  video: Video;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
      console.log(this.video);
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(video => this.video = video);
  }

  goBack(): void {
    this.location.back();
  }

}