import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Video } from './video';
import { VideoDetailed } from './VideoDetailed';
import { VideoService } from './video.service';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
  selector: 'play-video',
  templateUrl: 'video-play.component.html',
     styles: [`#video-pl {
       width: 500px;
       height: 270px;
     }`]
})

export class VideoPlayComponent implements OnInit{
  videoDet: VideoDetailed;
  video: Video;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(videoDet => this.videoDet = videoDet);

    this.route.params
      .switchMap((params: Params) => this.videoService.getVideoOriginal(+params['id']))
      .subscribe(video => this.video = video);
  }
}