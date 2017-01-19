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
  <p> {{video.id}} </p>
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
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(video => this.video = video);
  }

  goBack(): void {
    this.location.back();
  }

}