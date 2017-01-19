import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { VideoDetailComponent } from './video-detail.component';
import { RouterModule }   from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  {
    path: 'videos',
    component: VideoDetailComponent
  }
])
  ],
  declarations: [
    AppComponent,
    VideoDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
