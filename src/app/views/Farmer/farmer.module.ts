import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerViewComponent } from './view/farmer-view.component';

import { ImgModule, ProgressModule, SpinnerModule, TableModule, UtilitiesModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { HttpClientModule } from '@angular/common/http';
import { VideoStreamingModule } from '../videoStreaming/videoStreaming.module'

@NgModule({
  declarations: [
    FarmerViewComponent,
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,

    ProgressModule,
    SpinnerModule,
    TableModule,
    UtilitiesModule,
    ImgModule,
    ChartjsModule,
    HttpClientModule,
    VideoStreamingModule,
  ]
})
export class FarmerModule { }
