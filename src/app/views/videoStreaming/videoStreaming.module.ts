// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideoStreamingComponent } from './videoStreaming.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { VideoStreamingRoutingModule } from './videoStreaming-routing.module';

@NgModule({
  declarations: [VideoStreamingComponent],
  imports: [
    // BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VideoStreamingRoutingModule
    // VideoStreamingComponent
  ],
  providers: [],
//   bootstrap: [videoStreamingComponent],
})
export class VideoStreamingModule {}