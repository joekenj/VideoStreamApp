import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';



@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1> Video gallery </h1>
   <router-outlet></router-outlet>
    `
})
export class AppComponent {
  
}