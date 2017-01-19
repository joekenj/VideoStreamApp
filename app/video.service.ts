import { Injectable } from '@angular/core';

import { Video } from './video';
import { VIDEOS } from './mock-videos';

@Injectable()
export class VideoService {
   getVideos(): Promise<Video[]> {
    return Promise.resolve(VIDEOS);
  }

  // See the "Take it slow" appendix
  getVideosSlowly(): Promise<Video[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getVideos()), 2000);
    });
  }

  getVideo(id: number): Promise<Video> {
    return this.getVideos()
               .then(videos => videos.find(video => video.id === id));
  }
}
