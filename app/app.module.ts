import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { VideoDetailComponent } from './video-detail.component';
import { VideoStreamComponent } from './video-stream.component';
import { RouterModule }   from '@angular/router';
import { VideoService } from './video.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  {
    path: 'videos',
    component: VideoDetailComponent
  },
  {
  path: 'video/:id',
  component: VideoStreamComponent
},
{
  path: '',
  redirectTo: '/videos',
  pathMatch: 'full'
}

])
  ],
  declarations: [
    AppComponent,
    VideoDetailComponent,
    VideoStreamComponent
  ],
  providers: [ VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
