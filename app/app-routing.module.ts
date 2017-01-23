import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent }   from './video-detail.component';
import { VideoPlayComponent }      from './video-play.component';

const routes: Routes = [
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
  { path: 'videos',  component: VideoDetailComponent },
  { path: 'video/:id', component: VideoPlayComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}