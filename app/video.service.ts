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
}
