import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerViewComponent } from './view/farmer-view.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FarmerViewComponent,
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    HttpClientModule
  ]
})
export class FarmerModule { }
