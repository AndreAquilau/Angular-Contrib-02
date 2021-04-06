import { VideoService } from './video.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoEditComponent } from './video-edit/video-edit.component';


@NgModule({
  declarations: [
    VideoListComponent,
    VideoEditComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    HttpClientModule,
  ],
  providers:[ VideoService ]
})
export class VideoModule { }
