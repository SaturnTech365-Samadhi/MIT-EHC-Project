import { CarouselModule } from '@coreui/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicViewComponent } from './view/public-view.component';



@NgModule({
  declarations: [
    PublicViewComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CarouselModule
  ]
})
export class PublicModule { }
