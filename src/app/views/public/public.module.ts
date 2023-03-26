import { CarouselModule } from '@coreui/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicViewComponent } from './view/public-view.component';
import { NavbarModule } from '@coreui/angular';



@NgModule({
  declarations: [
    PublicViewComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CarouselModule,
    NavbarModule
  ]
})
export class PublicModule { }
