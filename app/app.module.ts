import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { VideoDetailComponent } from './video-detail.component';
import { VideoStreamComponent } from './video-stream.component';
import { RouterModule }   from '@angular/router';
import { VideoService } from './video.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
