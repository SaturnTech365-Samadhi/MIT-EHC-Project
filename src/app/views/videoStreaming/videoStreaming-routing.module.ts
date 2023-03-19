import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoStreamingComponent } from './videoStreaming.component';

const routes: Routes = [
  {
    path: '', 
    component: VideoStreamingComponent,
    data: {
      title: $localize`VideoStreaming`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoStreamingRoutingModule {}
