import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Video } from './video';
import { VideoDetailed } from './VideoDetailed';
//import { VIDEOS } from './mock-videos';

@Injectable()
export class VideoService {
   private videosUrl = 'app/videos.json';  // URL to web api

  constructor(private http: Http) { }

  getVideos(){
   return this.http.get('http://127.0.0.1:8081/process_get')
    .map((res:Response) => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getVideo(id: number) {
   return this.http.get('http://127.0.0.1:8081/video/'+id)
    .map((res:Response) => res.json());
  }
  
    getVideoOriginal(id: number): Promise<Video> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Video)
      .catch(this.handleError);
  }
}
