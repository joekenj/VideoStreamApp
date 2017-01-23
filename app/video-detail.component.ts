import { Component, Input, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoDetailed } from './VideoDetailed';
import { VideoService } from './video.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id, //for component to be able to find template and style urls
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

  //get all videos from video.service
  getVideos(): void {
     this.videoService.getVideos().subscribe(videos => this.videos = videos);
  }

  //upon initialisation call getVideos() method
   ngOnInit(): void {
    this.getVideos();
  }

  //points out selected video, selected trough li element in html
  onSelect(video: Video): void {
    this.selectedVideo = video;
  }

  //navigating to play-video view
   gotoDetail(): void {
    this.router.navigate(['/video', this.selectedVideo.id]);
  }

  //when additional information is clicked, getVideo(id) in video.service
  //returns additional information from selected video
   generatePopUp(video: Video): void {
    this.videoService.getVideo(video.id).subscribe(videoDet => this.videoDet = videoDet);
    let popup = document.getElementById('myPopup' + video.id);
    popup.classList.toggle('show');
  }
}
