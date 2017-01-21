import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { VideoDetailComponent } from './video-detail.component';
import { VideoPlayComponent } from './video-play.component';
import { RouterModule }   from '@angular/router';
import { VideoService } from './video.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    RouterModule.forRoot([
  {
    path: 'videos',
    component: VideoDetailComponent
  },
  {
  path: 'video/:id',
  component: VideoPlayComponent
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
    VideoPlayComponent
  ],
  providers: [ VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
