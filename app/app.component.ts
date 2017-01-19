import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';



@Component({
  selector: 'my-app',
  template: `
  <h1> Video gallery </h1>
  <h2> My videos </h2>
  <my-video-detail></my-video-detail>
    `
})
export class AppComponent {
  
}