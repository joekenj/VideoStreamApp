import { Component, Input, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: [ 'video-detail.component.css' ]
})
export class VideoDetailComponent {
  videos: Video[];
  selectedVideo: Video;
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

   myFunction(video: Video): void {
    var popup = document.getElementById('myPopup' + video.id);
    popup.classList.toggle('show');
}
}
