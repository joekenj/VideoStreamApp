import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Video } from './video';
import { VideoDetailed } from './VideoDetailed';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  //get all videos from remote server
  getVideos(){
   return this.http.get('http://127.0.0.1:8081/get_videos')
    .map((res:Response) => res.json());
  }

  //get additional information about video
  getVideo(id: number) {
   return this.http.get('http://127.0.0.1:8081/video/'+id)
    .map((res:Response) => res.json());
  }

  //Here is the code that finds basic information about the 
  //video in play-video view. This uses promise and web api
  //as I had slight trouble finding better solution
  private videosUrl = 'app/videos.json';  // URL to web api
  
  getVideoOriginal(id: number): Promise<Video> {
    const url = `${this.videosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Video)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
