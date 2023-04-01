import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerViewComponent } from './view/farmer-view.component';

import { AvatarModule, ButtonGroupModule, ButtonModule, CardModule, FormModule, GridModule, ImgModule, ModalModule, NavModule, ProgressModule, SpinnerModule, TableModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { HttpClientModule } from '@angular/common/http';
import { VideoStreamingModule } from '../videoStreaming/videoStreaming.module'
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    NavModule, 
    TabsModule,
    ButtonModule,
    CardModule,
    IconModule,
    GridModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    HttpClientModule,
    ModalModule,
    FormsModule
    
  ]
})
export class FarmerModule { }
