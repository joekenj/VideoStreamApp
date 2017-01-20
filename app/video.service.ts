import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Video } from './video';
//import { VIDEOS } from './mock-videos';

@Injectable()
export class VideoService {
   private videosUrl = 'api/videos';  // URL to web api

  constructor(private http: Http) { }

  getVideos(): Promise<Video[]> {
    return this.http.get(this.videosUrl)
               .toPromise()
               .then(response => response.json().data as Video[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // See the "Take it slow" appendix
  getVideosSlowly(): Promise<Video[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getVideos()), 2000);
    });
  }

  getVideo(id: number): Promise<Video> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Video)
      .catch(this.handleError);
  }
}
