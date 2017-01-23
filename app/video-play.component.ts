import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from './video';
import { VideoDetailed } from './VideoDetailed';
import { VideoService } from './video.service';

@Component({
  moduleId: module.id, //for component to be able to find template and style urls
  selector: 'play-video',
  templateUrl: 'video-play.component.html',
  styleUrls: [ 'video-play.component.css' ]
})

export class VideoPlayComponent implements OnInit{
  videoDet: VideoDetailed;
  video: Video;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //upon initialisation get details about the video from video.service
  //and retrive basic information about the video with id
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.videoService.getVideo(+params['id']))
      .subscribe(videoDet => this.videoDet = videoDet);

    this.route.params
      .switchMap((params: Params) => this.videoService.getVideoOriginal(+params['id']))
      .subscribe(video => this.video = video);
  }
}