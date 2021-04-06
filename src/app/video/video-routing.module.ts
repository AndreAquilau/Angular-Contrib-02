import { VideoEditComponent } from './video-edit/video-edit.component';
import { VideoListComponent } from './video-list/video-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'detail//:name',
    component: VideoEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
