import { Component, Input, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoDetailed } from './VideoDetailed';
import { VideoService } from './video.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: [ 'video-detail.component.css' ]
})
export class VideoDetailComponent {
  videos: Video[];
  selectedVideo: Video;
  videoDet: VideoDetailed;

  constructor(
    private router: Router,
    private videoService: VideoService) { }

  getVideos(): void {
     this.videoService.getVideos().subscribe(videos => this.videos = videos);
  }

   ngOnInit(): void {
    this.getVideos();
  }

  onSelect(video: Video): void {
    this.selectedVideo = video;
  }

   gotoDetail(): void {
    this.router.navigate(['/video', this.selectedVideo.id]);
  }

   generatePopUp(video: Video): void {
   this.videoService.getVideo(video.id).subscribe(videoDet => this.videoDet = videoDet);
    var popup = document.getElementById('myPopup' + video.id);
    popup.classList.toggle('show');
  }

}
